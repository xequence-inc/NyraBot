'use client';

import { Card } from '@/components/ui/Card';
import { Icons } from '@/components/icons';

export default function SupportSettingsPage() {
  return (
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8 font-display flex items-center gap-3">
            <Icons.Settings className="text-primary" /> Support Settings
        </h1>
        <Card>
            <p className="text-zinc-400">Configure support modules.</p>
        </Card>
      </div>
  );
}
