'use client';

import { Card } from '@/components/ui/Card';
import { Icons } from '@/components/icons';

export default function SuggestionsPage() {
  return (
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8 font-display flex items-center gap-3">
            <Icons.Message className="text-primary" /> Suggestions
        </h1>
        <Card>
            <p className="text-zinc-400">Community suggestions.</p>
        </Card>
      </div>
  );
}
