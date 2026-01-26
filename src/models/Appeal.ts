import mongoose from 'mongoose';

const AppealSchema = new mongoose.Schema({
  guildId: { type: String, required: true },
  userId: { type: String, required: true },
  caseId: { type: Number, required: true }, // Linked moderation case
  reason: { type: String, required: true },
  status: { type: String, enum: ['PENDING', 'APPROVED', 'DENIED'], default: 'PENDING' },
  createdAt: { type: Date, default: Date.now },
  reviewedBy: { type: String },
  reviewedAt: { type: Date },
});

export default mongoose.models.Appeal || mongoose.model('Appeal', AppealSchema);
