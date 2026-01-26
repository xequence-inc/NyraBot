import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Guild from '@/models/Guild';

const connectDB = async () => {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGO_URI || '');
    }
};

export async function GET(request: NextRequest, { params }: { params: { guildId: string } }) {
  await connectDB();
  const guild = await Guild.findOne({ guildId: params.guildId });
  if (!guild) return NextResponse.json({});
  
  return NextResponse.json(guild.settings?.systemMessages || {});
}

export async function PUT(request: NextRequest, { params }: { params: { guildId: string } }) {
  await connectDB();
  const body = await request.json(); // { type: 'welcome', data: { enabled, channelId, message } }
  
  if (!body.type || !body.data) return NextResponse.json({ error: 'Missing type or data' }, { status: 400 });

  const path = `settings.systemMessages.${body.type}`;
  
  const guild = await Guild.findOneAndUpdate(
    { guildId: params.guildId },
    { $set: { [path]: body.data } },
    { new: true, upsert: true }
  );
  
  return NextResponse.json({ success: true, responses: guild.settings?.systemMessages });
}
