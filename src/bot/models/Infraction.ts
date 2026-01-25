import mongoose, { Schema, Document } from 'mongoose';

export interface IInfraction extends Document {
    guildId: string;
    userId: string;
    action: 'WARN' | 'MUTE' | 'KICK' | 'BAN' | 'UNBAN';
    reason: string;
    moderatorId: string;
    timestamp: Date;
    duration?: number; // In milliseconds
}

const InfractionSchema: Schema = new Schema({
    guildId: { type: String, required: true, index: true },
    userId: { type: String, required: true, index: true },
    action: { type: String, required: true, enum: ['WARN', 'MUTE', 'KICK', 'BAN', 'UNBAN'] },
    reason: { type: String, required: false, default: 'No reason provided' },
    moderatorId: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    duration: { type: Number, required: false }
});

export default mongoose.models.Infraction || mongoose.model<IInfraction>('Infraction', InfractionSchema);
