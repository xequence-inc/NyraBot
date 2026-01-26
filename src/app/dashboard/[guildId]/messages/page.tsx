import { redirect } from 'next/navigation';

export default function MessagesPage({ params }: { params: { guildId: string } }) {
  redirect(`/dashboard/${params.guildId}/messages/builder`);
}
