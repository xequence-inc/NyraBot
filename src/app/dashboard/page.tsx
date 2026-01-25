'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface Guild {
  id: string;
  name: string;
  icon: string | null;
  hasBot: boolean;
}

export default function DashboardRoot() {
  const [guilds, setGuilds] = useState<Guild[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user's guilds from API
    async function fetchGuilds() {
      try {
        const res = await fetch('/api/auth/guilds');
        if (res.ok) {
          const data = await res.json();
          setGuilds(data.guilds || []);
        }
      } catch (err) {
        console.error('Failed to fetch guilds:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchGuilds();
  }, []);

  return (
    <div className="min-h-screen px-6 py-20">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] opacity-50" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl font-bold mb-2">Your Servers</h1>
            <p className="text-zinc-400">Select a server to manage</p>
          </div>
          <Link href="/" className="text-sm text-zinc-500 hover:text-white transition-colors">
            ← Back to home
          </Link>
        </div>

        {/* Content */}
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="aspect-square rounded-2xl bg-surface animate-pulse" />
            ))}
          </div>
        ) : guilds.length === 0 ? (
          <div className="text-center py-20 glass rounded-3xl">
            <div className="w-16 h-16 rounded-2xl bg-zinc-800 mx-auto mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4"/>
                <path d="M12 8h.01"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">No servers found</h3>
            <p className="text-zinc-500 mb-6">You need to be logged in or have servers with Nyra</p>
            <a 
              href="/login"
              className="inline-flex px-6 py-3 rounded-xl bg-primary hover:bg-primary/80 font-semibold transition-colors"
            >
              Sign in with Discord
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {guilds.map((guild) => (
              <Link 
                key={guild.id} 
                href={`/dashboard/${guild.id}/moderation`}
                className="group"
              >
                <div className="aspect-square rounded-2xl glass hover:bg-white/[0.04] transition-all p-4 flex flex-col items-center justify-center text-center">
                  {guild.icon ? (
                    <img 
                      src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} 
                      alt={guild.name}
                      className="w-16 h-16 rounded-full mb-3 group-hover:scale-110 transition-transform"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <span className="text-lg font-bold">{guild.name.substring(0, 2).toUpperCase()}</span>
                    </div>
                  )}
                  <h3 className="font-semibold text-sm truncate w-full">{guild.name}</h3>
                  <span className={`text-xs mt-1 ${guild.hasBot ? 'text-emerald-400' : 'text-zinc-500'}`}>
                    {guild.hasBot ? '● Connected' : 'Invite Bot'}
                  </span>
                </div>
              </Link>
            ))}

            {/* Add Server Button */}
            <a 
              href={`https://discord.com/oauth2/authorize?client_id=${process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID || '1464998515695419596'}&permissions=8&scope=bot%20applications.commands`}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="aspect-square rounded-2xl border-2 border-dashed border-white/10 hover:border-white/20 transition-all flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500">
                    <path d="M12 5v14"/>
                    <path d="M5 12h14"/>
                  </svg>
                </div>
                <span className="text-sm text-zinc-500 group-hover:text-white transition-colors">Add Server</span>
              </div>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
