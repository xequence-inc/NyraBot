import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getBotGuilds } from '@/lib/discord';

export async function GET(request: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get('discord_token')?.value;

  if (!token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  try {
    // Fetch user's guilds from Discord
    const guildsRes = await fetch('https://discord.com/api/users/@me/guilds', {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!guildsRes.ok) {
      return NextResponse.json({ error: 'Failed to fetch guilds' }, { status: 500 });
    }

    const allGuilds = await guildsRes.json();

    // Filter to guilds where user has MANAGE_GUILD permission (0x20)
    const manageableGuilds = allGuilds.filter((g: any) => (parseInt(g.permissions) & 0x20) === 0x20);

    // Fetch bot's guilds directly (no self-fetch loop)
    const botGuildIds = await getBotGuilds();

    // Map guilds with hasBot flag
    const guilds = manageableGuilds.map((g: any) => ({
      id: g.id,
      name: g.name,
      icon: g.icon,
      hasBot: botGuildIds.includes(g.id),
    }));

    return NextResponse.json({ guilds });

  } catch (error) {
    console.error('Error fetching guilds:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
