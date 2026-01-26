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
  
  return NextResponse.json({
    prefix: guild.settings?.prefix || '!',
    language: guild.settings?.language || 'en',
    timezone: guild.settings?.timezone || 'UTC',
    branding: guild.settings?.branding || {}
  });
}

export async function PUT(request: NextRequest, { params }: { params: { guildId: string } }) {
  await connectDB();
  const body = await request.json();
  
  const guild = await Guild.findOneAndUpdate(
    { guildId: params.guildId },
    { 
        $set: { 
            'settings.branding.accentColor': body.branding?.accentColor,
            'settings.branding.footerText': body.branding?.footerText,
            'settings.branding.footerIcon': body.branding?.footerIcon,
            // Keep existing ones if passed, or separate logic? 
            // The settings page sends 'prefix' etc. Branding page might send just branding.
            // Better to use $set with what is provided.
            ...(body.prefix && { 'settings.prefix': body.prefix }),
            ...(body.language && { 'settings.language': body.language }),
            ...(body.timezone && { 'settings.timezone': body.timezone }),
        }
    },
    { new: true, upsert: true }
  );
  
  return NextResponse.json({ success: true, settings: guild.settings });
}
