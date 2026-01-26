'use client';
import { useParams } from 'next/navigation';
import { BroadcastTower } from '@/modules/Messages/Broadcast/BroadcastTower';

export default function BroadcastPage() {
  const params = useParams();
  const guildId = params?.guildId as string;
  return <BroadcastTower guildId={guildId} />;
}
