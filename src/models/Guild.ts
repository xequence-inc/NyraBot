import mongoose from 'mongoose';

const GuildSchema = new mongoose.Schema({
  guildId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  ownerId: { type: String },
  joinedAt: { type: Date, default: Date.now },
  premium: { type: Boolean, default: false },
  premiumEndsAt: { type: Date },
  settings: {
    prefix: { type: String, default: '!' },
    language: { type: String, default: 'en' },
    timezone: { type: String, default: 'UTC' },
    branding: {
        accentColor: { type: String, default: '#5865f2' },
        footerText: { type: String, default: '' },
        footerIcon: { type: String, default: '' },
    },
    systemMessages: {
        welcome: { enabled: { type: Boolean, default: false }, channelId: String, message: Object },
        goodbye: { enabled: { type: Boolean, default: false }, channelId: String, message: Object },
        boost: { enabled: { type: Boolean, default: false }, channelId: String, message: Object },
        ban: { enabled: { type: Boolean, default: false }, message: Object },
    }
  },
  modules: {
    moderation: { type: Boolean, default: true },
    tickets: { type: Boolean, default: false },
    economy: { type: Boolean, default: false },
    logging: { type: Boolean, default: false },
  }
});

export default mongoose.models.Guild || mongoose.model('Guild', GuildSchema);
