import { NextRequest, NextResponse } from 'next/server';
import { getBotGuilds } from '@/lib/discord';

export async function GET(request: NextRequest) {
  const guildIds = await getBotGuilds();
  return NextResponse.json({ guilds: guildIds });
}
