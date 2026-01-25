import { Client, GatewayIntentBits } from 'discord.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

console.log('🤖 Bot Service Starting...');

// DB Connection
mongoose.connect(process.env.MONGO_URI || '')
    .then(() => console.log('✅ Connected to MongoDB (Bot)'))
    .catch(err => console.error('❌ MongoDB Error:', err));

import { registerCommands, setupCommandHandlers } from './commands';

// ... (DB connection)

export const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log(`✅ Logged in as ${client.user?.tag}`);
    registerCommands(client);
});

setupCommandHandlers(client);

client.login(process.env.DISCORD_TOKEN).catch(e => {
    console.error('❌ Login Failed:', e);
});
