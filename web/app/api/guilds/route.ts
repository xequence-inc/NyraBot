import { NextResponse } from 'next/server';
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

const DISCORD_API = "https://discord.com/api/v10";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.accessToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // 1. Fetch User Guilds
    const userGuildsRes = await fetch(`${DISCORD_API}/users/@me/guilds`, {
      headers: { Authorization: `Bearer ${session.accessToken}` },
    });

    if (!userGuildsRes.ok) throw new Error("Failed to fetch user guilds");
    const userGuilds = await userGuildsRes.json();

    // 2. Fetch Bot Guilds
    // Note: We use the Bot Token here.
    const botGuildsRes = await fetch(`${DISCORD_API}/users/@me/guilds`, {
      headers: { Authorization: `Bot ${process.env.BOT_TOKEN}` },
    });

    if (!botGuildsRes.ok) throw new Error("Failed to fetch bot guilds");
    const botGuilds = await botGuildsRes.json();

    // 3. Create a Set of Bot Guild IDs for fast lookup
    const botGuildIds = new Set(botGuilds.map((g: any) => g.id));

    // 4. Filter and Map User Guilds
    const guilds = userGuilds
      .filter((guild: any) => (BigInt(guild.permissions) & BigInt(0x20)) === BigInt(0x20)) // Check MANAGE_GUILD (0x20)
      .map((guild: any) => ({
        id: guild.id,
        name: guild.name,
        icon: guild.icon,
        inGuild: botGuildIds.has(guild.id),
      }));

    return NextResponse.json(guilds);

  } catch (error) {
    console.error("Guild Fetch Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
