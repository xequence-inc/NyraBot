'use client';
import { Card } from '@/components/ui/Card';

export default function DocPlaceholder({ title }: { title: string }) {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6">
       <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-display mb-6">{title}</h1>
          <Card className="p-8 text-zinc-400">
             Documentation for {title} is coming soon.
          </Card>
       </div>
    </div>
  );
}
