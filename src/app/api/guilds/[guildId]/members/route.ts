import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { guildId: string } }) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');
  
  if (!query) {
    return NextResponse.json([]);
  }

  const botToken = process.env.DISCORD_TOKEN;
  if (!botToken) return NextResponse.json({ error: 'Bot token missing' }, { status: 500 });

  try {
    const res = await fetch(`https://discord.com/api/v10/guilds/${params.guildId}/members/search?query=${encodeURIComponent(query)}&limit=20`, {
      headers: {
        Authorization: `Bot ${botToken}`,
      }
    });

    if (!res.ok) {
       console.error('Discord API Error:', await res.text());
       return NextResponse.json({ error: 'Failed to fetch members' }, { status: res.status });
    }

    const members = await res.json();
    
    // Map to cleaner format if needed, or return as is.
    // Dashboard likely expects: { id, username, discriminator, avatar, nickname }
    const mapped = members.map((m: any) => ({
        id: m.user.id,
        username: m.user.username,
        discriminator: m.user.discriminator,
        avatar: m.user.avatar,
        nickname: m.nick || null,
        roles: m.roles
    }));

    return NextResponse.json(mapped);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
