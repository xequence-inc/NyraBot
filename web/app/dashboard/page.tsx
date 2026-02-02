"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function DashboardSelection() {
  const { data: session } = useSession();

  // Mock Data (In reality, fetch from API which uses Discord API + filter by Manage Server perm)
  const guilds = [
      { id: "123", name: "Blue Shark", icon: null, owner: true },
      { id: "456", name: "Coyote", icon: null, owner: false },
      { id: "789", name: "OS Tech.", icon: null, owner: true },
  ];

  return (
    <div className="min-h-screen p-8 pt-24">
        <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-4xl font-heading font-bold">Select a Server</h1>
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Filter Server" 
                        className="bg-surface-100/50 border border-white/5 rounded-full px-5 py-2.5 text-sm focus:outline-none focus:border-accent-purple/50 w-64"
                    />
                    <i className="fi fi-rr-search absolute right-4 top-3 text-gray-500"></i>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {guilds.map((guild, i) => (
                    <div key={i} className="glass-panel p-6 rounded-3xl flex flex-col items-center text-center group hover:bg-surface-200/50 transition-colors">
                        <div className="w-20 h-20 rounded-full bg-surface-300 mb-4 flex items-center justify-center text-2xl font-bold">
                            {guild.icon ? <img src={guild.icon} /> : guild.name.substring(0,2)}
                        </div>
                        <h3 className="font-bold text-lg mb-1">{guild.name}</h3>
                        <p className="text-xs text-gray-400 mb-6">{guild.owner ? 'Owner' : 'Bot Master'}</p>
                        
                        <Link href={`/dashboard/${guild.id}/home`} className="mt-auto w-full">
                            <button className={`w-full py-2.5 rounded-full text-sm font-bold transition-colors ${i % 2 === 0 ? 'bg-[#00DDA2] text-black hover:bg-[#00DDA2]/90' : 'bg-[#FFC940] text-black hover:bg-[#FFC940]/90'}`}>
                                {i % 2 === 0 ? 'Go' : 'Setup'}
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}
