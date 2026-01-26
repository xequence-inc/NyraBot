import mongoose from 'mongoose';

const TicketSchema = new mongoose.Schema({
  guildId: { type: String, required: true },
  ticketId: { type: String, required: true, unique: true }, // Channel ID usually
  userId: { type: String, required: true },
  topic: { type: String, default: 'General Support' },
  status: { type: String, enum: ['OPEN', 'CLOSED', 'ARCHIVED'], default: 'OPEN' },
  createdAt: { type: Date, default: Date.now },
  closedAt: { type: Date },
  transcript: { type: String }, // URL to transcript
});

export default mongoose.models.Ticket || mongoose.model('Ticket', TicketSchema);
