'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Icons } from '@/components/icons';

const docItems = [
  { category: 'Getting Started', title: 'Introduction', href: '/docs/intro' },
  { category: 'Getting Started', title: 'Inviting Nyra', href: '/docs/invite' },
  { category: 'Modules', title: 'Moderation', href: '/docs/moderation' },
  { category: 'Modules', title: 'Ticket System', href: '/docs/tickets' },
  { category: 'Modules', title: 'Economy', href: '/docs/economy' },
  { category: 'Commands', title: 'Command List', href: '/docs/commands' },
  { category: 'Commands', title: 'Permissions', href: '/docs/permissions' },
  { category: 'API', title: 'Developer API', href: '/docs/api' },
];

export default function DocsPage() {
  const [search, setSearch] = useState('');

  const filteredDocs = docItems.filter(doc => 
    doc.title.toLowerCase().includes(search.toLowerCase()) || 
    doc.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background font-sans text-white pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold font-display mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary animate-gradient leading-tight">
            Documentation
          </h1>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">Everything you need to master Nyra.</p>
          
          <div className="max-w-lg mx-auto relative group">
            <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <Input 
              placeholder="Search docs..." 
              className="pl-14 py-5 text-lg rounded-2xl bg-surface border-white/10 relative z-10 shadow-2xl"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Icons.Search className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400 z-20" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((doc, i) => (
            <Link key={i} href={doc.href} className="group">
              <Card variant="glass" className="h-full hover:border-primary/50 transition-all hover:-translate-y-1 hover:bg-surface-hover/50">
                <div className="flex items-center justify-between mb-4">
                    <div className="text-xs font-bold text-primary uppercase tracking-widest opacity-80">{doc.category}</div>
                    <Icons.ChevronRight className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary" size={16} />
                </div>
                <h3 className="text-xl font-bold font-display group-hover:text-white transition-colors">{doc.title}</h3>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
