'use client';

import React from 'react';
import { useParams } from 'next/navigation';

import { Card } from '@/components/ui/Card';
import { Icons } from '@/components/icons';

const supportModules = [
  { name: 'Tickets', href: 'tickets', desc: 'Manage support tickets', icon: Icons.Ticket },
  { name: 'Appeals', href: 'appeals', desc: 'Ban appeals handling', icon: Icons.Gavel },
  { name: 'Reports', href: 'reports', desc: 'User reports', icon: Icons.Shield },
  { name: 'Suggestions', href: 'suggestions', desc: 'Community suggestions', icon: Icons.Message },
  { name: 'Surveys', href: 'surveys', desc: 'Feedback forms', icon: Icons.TrendUp },
  { name: 'Settings', href: 'settings', desc: 'Support configuration', icon: Icons.Settings },
];

export default function SupportPage() {
  const params = useParams();
  const guildId = params?.guildId as string;

  return (
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8 font-display">Support & Tickets</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportModules.map(m => (
            <a key={m.name} href={`/dashboard/${guildId}/support/${m.href}`} className="block group">
              <Card variant="elevated" className="h-full hover:border-primary/50 transition-all hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                        <m.icon size={20} />
                    </div>
                    <h3 className="font-bold text-lg font-display">{m.name}</h3>
                </div>
                <p className="text-sm text-zinc-500">{m.desc}</p>
              </Card>
            </a>
          ))}
        </div>
      </div>
  );
}
