'use client';

import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';

const tabs = [
  { name: 'Builder', href: 'builder', icon: Icons.Edit },
  { name: 'Branding', href: 'branding', icon: Icons.Palette },
  { name: 'Responses', href: 'responses', icon: Icons.Message },
  { name: 'Broadcast', href: 'broadcast', icon: Icons.Radio },
];

export default function MessagesLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const params = useParams();
  const guildId = params?.guildId as string;

  return (
    <div className="flex-1 flex flex-col">
       {/* Sub-navigation Header */}
       <div className="border-b border-white/5 bg-background/50 backdrop-blur-xl sticky top-0 z-10">
          <div className="px-8 pt-6 pb-0">
             <h1 className="text-3xl font-bold mb-6 font-display">Messages</h1>
             <div className="flex items-center gap-6">
                {tabs.map(tab => {
                   const isActive = pathname?.includes(tab.href);
                   return (
                      <Link 
                        key={tab.name} 
                        href={`/dashboard/${guildId}/messages/${tab.href}`}
                        className={cn(
                           "flex items-center gap-2 pb-4 text-sm font-medium border-b-2 transition-all",
                           isActive 
                             ? "border-primary text-white" 
                             : "border-transparent text-zinc-400 hover:text-zinc-200"
                        )}
                      >
                         <tab.icon size={16} />
                         {tab.name}
                      </Link>
                   );
                })}
             </div>
          </div>
       </div>
       
       {children}
    </div>
  );
}
