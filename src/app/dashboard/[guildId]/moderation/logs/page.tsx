'use client';
import React from 'react';
import Link from 'next/link';

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.3-4.3"/>
  </svg>
);

const FilterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
  </svg>
);

const logs = [
  { id: '1', user: 'Spammer#1234', action: 'BAN', mod: 'Nyra', reason: 'Raid detected (Velocity)', time: '2 mins ago' },
  { id: '2', user: 'Troll#5555', action: 'MUTE', mod: 'Admin', reason: 'Toxicity', time: '1 hour ago' },
  { id: '3', user: 'Newbie#0000', action: 'WARN', mod: 'Mod1', reason: 'Link in general', time: '3 hours ago' },
];

const badges: Record<string, string> = {
  BAN: 'bg-red-500/20 text-red-400 border-red-500/50',
  KICK: 'bg-orange-500/20 text-orange-400 border-orange-500/50',
  MUTE: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
  WARN: 'bg-blue-500/20 text-blue-400 border-blue-500/50',
};

export default function LogsPage() {
  return (
    <div className="min-h-screen p-6">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <Link href="./" className="text-sm text-zinc-500 hover:text-white transition-colors mb-2 inline-block">
              ← Back to Sentry
            </Link>
            <h1 className="text-2xl font-bold">The Logbook</h1>
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">
                <SearchIcon />
              </div>
              <input 
                type="text" 
                placeholder="Search logs..." 
                className="pl-10 pr-4 py-2 rounded-lg bg-surface border border-white/10 text-sm focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <button className="p-2 rounded-lg bg-surface border border-white/10 hover:bg-white/5 transition-colors">
              <FilterIcon />
            </button>
          </div>
        </div>

        <div className="glass rounded-xl overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-zinc-400 font-medium">
              <tr>
                <th className="p-4">User</th>
                <th className="p-4">Action</th>
                <th className="p-4">Reason</th>
                <th className="p-4">Moderator</th>
                <th className="p-4">Time</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-medium text-white">{log.user}</td>
                  <td className="p-4">
                    <span className={`px-2 py-0.5 rounded text-xs border ${badges[log.action]}`}>
                      {log.action}
                    </span>
                  </td>
                  <td className="p-4 max-w-xs truncate text-zinc-400">{log.reason}</td>
                  <td className="p-4 text-zinc-400">{log.mod}</td>
                  <td className="p-4 text-zinc-500">{log.time}</td>
                  <td className="p-4 text-right">
                    <button className="p-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-white transition-colors">
                      <EyeIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
