export async function getBotGuilds(): Promise<string[]> {
  const botToken = process.env.DISCORD_TOKEN;
  
  if (!botToken) {
    return [];
  }

  try {
    const res = await fetch('https://discord.com/api/v10/users/@me/guilds', {
      headers: {
        Authorization: `Bot ${botToken}`,
      },
      next: { revalidate: 60 } // Cache for 60 seconds
    });

    if (!res.ok) {
      console.error('Failed to fetch bot guilds from Discord:', await res.text());
      return [];
    }

    const guilds = await res.json();
    return guilds.map((g: any) => g.id);
  } catch (error) {
    console.error('Error fetching bot guilds:', error);
    return [];
  }
}
