'use client';
import { useParams } from 'next/navigation';
import { BrandingSettings } from '@/modules/Messages/Branding/BrandingSettings';

export default function BrandingPage() {
  const params = useParams();
  const guildId = params?.guildId as string;
  return <BrandingSettings guildId={guildId} />;
}
