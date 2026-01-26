'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Icons } from '@/components/icons';

interface Case {
  caseId: number;
  action: string;
  userName: string;
  reason: string;
  timestamp: string;
}

export default function ModerationPage() {
  const params = useParams();
  const guildId = params?.guildId as string;
  const [cases, setCases] = useState<Case[]>([]);

  return (

      <div className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 font-display">Moderation</h1>
            <p className="text-zinc-400">View and manage server cases</p>
          </div>
          <Button>
             <Icons.Gavel className="mr-2 h-4 w-4" />
             Create Case
          </Button>
        </div>

        <Card>
          <div className="flex items-center gap-2 mb-6">
            <Icons.Shield className="text-primary" />
            <h3 className="font-bold">Recent Cases</h3>
          </div>
          
          {cases.length === 0 ? (
            <div className="text-center py-20 text-zinc-500 border-2 border-dashed border-white/5 rounded-xl">
              <Icons.Shield size={48} className="mx-auto mb-4 text-zinc-700" />
              <p>No moderation cases found.</p>
              <p className="text-xs mt-1 text-zinc-600">Cases created by Nyra will appear here.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {cases.map((c) => (
                <div key={c.caseId} className="flex items-center gap-4 p-3 rounded-xl bg-surface-hover hover:bg-white/5 transition-colors">
                   {/* Case mapping... */}
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    
  );
}
