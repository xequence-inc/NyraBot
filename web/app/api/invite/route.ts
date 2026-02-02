import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const guildId = searchParams.get('guild_id');
    const clientId = process.env.DISCORD_CLIENT_ID;

    // Use default URL if NEXTAUTH_URL is not set
    const redirectUri = process.env.NEXTAUTH_URL ? `${process.env.NEXTAUTH_URL}/api/auth/callback/discord` : 'http://localhost:3000/api/auth/callback/discord';

    if (!clientId) {
        return NextResponse.json({ error: "Missing Client ID configuration" }, { status: 500 });
    }

    const url = `https://discord.com/oauth2/authorize?client_id=${clientId}&permissions=8&scope=bot%20applications.commands&guild_id=${guildId || ''}&disable_guild_select=true&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}`;

    return NextResponse.redirect(url);
}
