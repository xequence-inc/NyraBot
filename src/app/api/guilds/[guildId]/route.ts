import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Guild from '@/models/Guild';
import Case from '@/models/Case';
import Ticket from '@/models/Ticket';
import Appeal from '@/models/Appeal';

// Helper to ensure connection
const connectDB = async () => {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGO_URI || '');
    }
};

export async function GET(request: NextRequest, { params }: { params: { guildId: string } }) {
  const guildId = params.guildId;
  await connectDB();

  try {
    // 1. Guild Info from DB + Discord (for member count/icon updates if needed)
    // For speed, rely on DB primarily, but maybe refresh from Discord if stale?
    // Let's just fetch from DB and assume bot syncs it.
    // Actually, we need member count which changes often.
    // Fetch from Discord API for real-time member count/icon
    const botToken = process.env.DISCORD_TOKEN;
    let discordData: any = {};
    
    if (botToken) {
        try {
            const res = await fetch(`https://discord.com/api/v10/guilds/${guildId}?with_counts=true`, {
                headers: { Authorization: `Bot ${botToken}` },
                next: { revalidate: 60 }
            });
            if (res.ok) discordData = await res.json();
        } catch (e) { console.error('Discord API err', e); }
    }

    // 2. DB Data
    const guildDocs = await Guild.findOne({ guildId });
    
    // 3. Stats
    const caseCount = await Case.countDocuments({ guildId });
    const ticketCount = await Ticket.countDocuments({ guildId, status: 'OPEN' });
    const appealCount = await Appeal.countDocuments({ guildId, status: 'PENDING' });

    // Combine
    const guild = {
        name: discordData.name || guildDocs?.name || 'Unknown Server',
        icon: discordData.icon || null,
        memberCount: discordData.approximate_member_count || 0,
        region: 'Auto', // Discord deprecated regions in API mostly
        isPremium: guildDocs?.premium || false,
        premiumEndsAt: guildDocs?.premiumEndsAt,
    };

    return NextResponse.json({ 
        guild, 
        stats: {
            totalCases: caseCount,
            openTickets: ticketCount,
            pendingAppeals: appealCount
        }
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
