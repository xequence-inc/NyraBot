import { Client, GatewayIntentBits } from 'discord.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Guild from '../models/Guild';

dotenv.config();

console.log('🤖 Bot Service Starting...');

mongoose.connect(process.env.MONGO_URI || '')
  .then(() => console.log('✅ Connected to MongoDB (Bot)'))
  .catch(err => console.error('❌ MongoDB Error:', err));

import { registerCommands, setupCommandHandlers } from './commands';

export const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent
  ]
});

let botGuildIds: string[] = [];

client.once('clientReady', async () => {
  console.log(`✅ Logged in as ${client.user?.tag}`);
  console.log(`📊 Connected to ${client.guilds.cache.size} guilds`);
  botGuildIds = [...client.guilds.cache.keys()];
  registerCommands(client);
  
  // Sync guilds to DB
  for (const guild of client.guilds.cache.values()) {
    try {
      await Guild.findOneAndUpdate(
        { guildId: guild.id },
        { 
          $setOnInsert: { 
            name: guild.name,
            ownerId: guild.ownerId,
            joinedAt: new Date()
          } 
        },
        { upsert: true, new: true }
      );
    } catch (err) {
      console.error(`Failed to sync guild ${guild.name}:`, err);
    }
  }
});

client.on('guildCreate', async (guild) => {
  console.log(`➕ Joined guild: ${guild.name} (${guild.id})`);
  botGuildIds = [...client.guilds.cache.keys()];
  
  // Create DB entry
  try {
    await Guild.create({
      guildId: guild.id,
      name: guild.name,
      ownerId: guild.ownerId,
    });
    console.log(`📝 Created DB entry for ${guild.name}`);
  } catch (err) {
    console.error('Failed to create guild DB entry:', err);
  }
});

client.on('guildDelete', async (guild) => {
  console.log(`➖ Left guild: ${guild.name} (${guild.id})`);
  botGuildIds = [...client.guilds.cache.keys()];
  // Optional: Mark as inactive instead of delete
});

setupCommandHandlers(client);

client.login(process.env.DISCORD_TOKEN).catch(e => {
  console.error('❌ Login Failed:', e);
});

export function getBotGuildIds(): string[] {
  return botGuildIds;
}
