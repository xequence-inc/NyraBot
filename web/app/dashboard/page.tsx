"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function DashboardSelection() {
  const { data: session } = useSession();

  // Placeholder State (Since we aren't connected to real API yet)
  const guilds: any[] = []; 

  return (
    <div className="min-h-screen p-8 pt-24">
        <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-4xl font-heading font-bold">Select a Server</h1>
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Filter Server" 
                        className="bg-surface-100/50 border border-white/5 rounded-full px-5 py-2.5 text-sm focus:outline-none focus:border-accent-purple/50 w-64 pl-10"
                    />
                    <i className="fi fi-rr-search absolute left-4 top-3 text-gray-500"></i>
                </div>
            </div>

            {session ? (
                 guilds.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Real guild mapping would go here */}
                    </div>
                 ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 rounded-3xl border border-dashed border-white/10 bg-white/5">
                        <div className="w-16 h-16 rounded-full bg-surface-200 flex items-center justify-center text-gray-400">
                             <i className="fi fi-rr-search-alt text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-bold">No Servers Found</h3>
                        <p className="text-gray-400 max-w-sm">It looks like you don't manage any servers, or Nyra isn't in them yet.</p>
                        <button className="px-6 py-2.5 bg-accent-purple rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity">
                            Invite Nyra
                        </button>
                    </div>
                 )
            ) : (
                <div className="flex flex-col items-center justify-center py-32 text-center space-y-6">
                     <div className="w-20 h-20 rounded-3xl bg-surface-100 flex items-center justify-center mb-2 animate-bounce-slow">
                         <i className="fi fi-brands-discord text-4xl text-[#5865F2]"></i>
                     </div>
                     <h2 className="text-3xl font-heading font-bold">Login Required</h2>
                     <p className="text-gray-400 max-w-md">Please login with Discord to view and manage your servers.</p>
                     <Link href="/login" className="px-8 py-3 bg-[#5865F2] hover:bg-[#4752C4] rounded-xl font-bold text-white transition-colors shadow-lg shadow-[#5865F2]/20">
                         Login with Discord
                     </Link>
                </div>
            )}
        </div>
    </div>
  );
}
