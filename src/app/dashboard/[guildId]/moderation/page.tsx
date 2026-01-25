'use client';
import React from 'react';
import Link from 'next/link';

// Inline SVG icons
const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const GavelIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9"/>
    <path d="M15 13 9 7l4-4 6 6-4 4z"/>
    <path d="m22 22-4-4"/>
  </svg>
);

const UserXIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <line x1="17" x2="22" y1="8" y2="13"/>
    <line x1="22" x2="17" y1="8" y2="13"/>
  </svg>
);

const ActivityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
);

type Status = 'green' | 'yellow' | 'red';

function TrafficLight({ status }: { status: Status }) {
  const glows: Record<Status, string> = {
    green: 'shadow-[0_0_30px_-5px_#22c55e]',
    yellow: 'shadow-[0_0_30px_-5px_#eab308]',
    red: 'shadow-[0_0_30px_-5px_#ef4444]'
  };

  const label: Record<Status, string> = {
    green: 'System Normal',
    yellow: 'Elevated Activity',
    red: 'Lockdown Active'
  };

  return (
    <div className={`flex items-center gap-4 p-4 rounded-xl glass ${glows[status]}`}>
      <div className="flex gap-2">
        <div className={`w-3 h-3 rounded-full ${status === 'red' ? 'bg-red-500 animate-pulse' : 'bg-zinc-800'}`} />
        <div className={`w-3 h-3 rounded-full ${status === 'yellow' ? 'bg-yellow-500 animate-pulse' : 'bg-zinc-800'}`} />
        <div className={`w-3 h-3 rounded-full ${status === 'green' ? 'bg-green-500 animate-pulse' : 'bg-zinc-800'}`} />
      </div>
      <div>
        <div className="text-xs text-zinc-500 font-mono uppercase tracking-widest">Status</div>
        <div className={`font-bold ${status === 'green' ? 'text-green-400' : status === 'yellow' ? 'text-yellow-400' : 'text-red-400'}`}>
          {label[status]}
        </div>
      </div>
    </div>
  );
}

function MetricsCard({ 
  title, 
  value, 
  trend, 
  icon, 
  color 
}: { 
  title: string; 
  value: string; 
  trend: string; 
  icon: React.ReactNode; 
  color: string; 
}) {
  return (
    <div className="p-6 rounded-2xl glass hover:bg-white/[0.03] transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-zinc-500 font-medium mb-1">{title}</p>
          <h3 className="text-3xl font-bold tracking-tight">{value}</h3>
        </div>
        <div className={`p-3 rounded-xl bg-white/5 ${color}`}>
          {icon}
        </div>
      </div>
      <div className="text-xs font-mono">
        <span className="text-emerald-400">{trend}</span>
        <span className="text-zinc-500"> vs last 24h</span>
      </div>
    </div>
  );
}

export default function SentryHUD() {
  return (
    <div className="min-h-screen p-6">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <Link href="/dashboard" className="text-sm text-zinc-500 hover:text-white transition-colors mb-4 inline-block">
              ← Back to Servers
            </Link>
            <h1 className="text-3xl font-bold mb-2">Sentry</h1>
            <p className="text-zinc-400">Moderation Overview & Emergency Controls</p>
          </div>
          <TrafficLight status="green" />
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricsCard 
            title="Total Actions" 
            value="1,284" 
            trend="+12%" 
            icon={<GavelIcon />} 
            color="text-blue-400"
          />
          <MetricsCard 
            title="Auto-Mod Triggers" 
            value="42" 
            trend="-5%" 
            icon={<ShieldIcon />} 
            color="text-yellow-400"
          />
          <MetricsCard 
            title="Active Bans" 
            value="89" 
            trend="+2" 
            icon={<UserXIcon />} 
            color="text-red-400"
          />
          <MetricsCard 
            title="Appeal Rate" 
            value="4%" 
            trend="Stable" 
            icon={<ActivityIcon />} 
            color="text-purple-400"
          />
        </div>

        {/* Navigation */}
        <div className="flex gap-2 flex-wrap">
          {['Overview', 'Logs', 'Auto-Mod', 'Scaling', 'Settings'].map((tab, i) => (
            <Link 
              key={tab}
              href={i === 0 ? '' : tab.toLowerCase().replace('-', '')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                i === 0 ? 'bg-white text-black' : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab}
            </Link>
          ))}
        </div>
        
        {/* Activity Stream */}
        <div className="glass rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold mb-2">Recent Activity</h3>
          <p className="text-zinc-500">Live feed of moderation actions will appear here.</p>
        </div>
      </div>
    </div>
  );
}
