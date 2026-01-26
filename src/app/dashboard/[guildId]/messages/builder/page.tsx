'use client';
import { useParams } from 'next/navigation';
import { EmbedBuilder } from '@/modules/Messages/Builder/EmbedBuilder';

export default function BuilderPage() {
  const params = useParams();
  const guildId = params?.guildId as string;
  return <EmbedBuilder guildId={guildId} />;
}
