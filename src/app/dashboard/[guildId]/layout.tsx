import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';

export default function GuildLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background font-sans text-white">
      <DashboardSidebar />
      {children}
    </div>
  );
}
