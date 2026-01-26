import mongoose from 'mongoose';

const CaseSchema = new mongoose.Schema({
  guildId: { type: String, required: true },
  caseId: { type: Number, required: true },
  action: { type: String, enum: ['WARN', 'MUTE', 'KICK', 'BAN', 'UNBAN', 'TIMEOUT'], required: true },
  userId: { type: String, required: true },
  userName: { type: String, required: true },
  moderatorId: { type: String, required: true },
  reason: { type: String, default: 'No reason provided' },
  timestamp: { type: Date, default: Date.now },
  active: { type: Boolean, default: true }, // For mutes/bans
  duration: { type: Number }, // For temp actions
});

CaseSchema.index({ guildId: 1, caseId: 1 }, { unique: true });

export default mongoose.models.Case || mongoose.model('Case', CaseSchema);
