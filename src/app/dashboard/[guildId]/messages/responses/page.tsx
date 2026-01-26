'use client';
import { useParams } from 'next/navigation';
import { ResponseEditor } from '@/modules/Messages/Responses/ResponseEditor';

export default function ResponsesPage() {
  const params = useParams();
  const guildId = params?.guildId as string;
  return <ResponseEditor guildId={guildId} />;
}
