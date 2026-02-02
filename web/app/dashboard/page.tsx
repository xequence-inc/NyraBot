"use client";
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Icon from '@/components/Icon';
import Image from 'next/image';
import Link from 'next/link';

interface Guild {
    id: string;
    name: string;
    icon: string | null;
    inGuild: boolean;
}

export default function DashboardSelection() {
  const { data: session } = useSession();
  const [guilds, setGuilds] = useState<Guild[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (session?.accessToken) {
        fetch('/api/guilds')
            .then(res => res.json())
            .then(data => {
                if(Array.isArray(data)) setGuilds(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    } else {
        setLoading(false);
    }
  }, [session]);

  const getInviteLink = (guildId: string) => {
     const clientId = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID; // Need to expose this
     return `https://discord.com/oauth2/authorize?client_id=${clientId}&permissions=8&scope=bot%20applications.commands&guild_id=${guildId}&disable_guild_select=true&response_type=code&redirect_uri=${encodeURIComponent(process.env.NEXT_PUBLIC_Url || 'http://localhost:3000/api/auth/callback/discord')}`;
  };

  return (
    <div className="min-h-screen p-8 pt-24 relative overflow-hidden">
        {/* Immersive Background */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black pointer-events-none"></div>

        <div className="max-w-7xl mx-auto space-y-8 relative z-10">
            <div className="flex items-center justify-between">
                <h1 className="text-4xl font-heading font-bold">Select a Server</h1>
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Filter Server" 
                        className="bg-surface-100/50 border border-white/5 rounded-full px-5 py-2.5 text-sm focus:outline-none focus:border-accent-purple/50 w-64 pl-10"
                    />
                    <Icon name="search" className="absolute left-4 top-3 text-gray-500" />
                </div>
            </div>

            {session ? (
                 loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[1,2,3,4].map(i => (
                            <div key={i} className="h-48 rounded-3xl bg-surface-100/50 animate-pulse"></div>
                        ))}
                    </div>
                 ) : guilds.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {guilds.map(guild => (
                            <div key={guild.id} className={`group relative p-[1px] rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${guild.inGuild ? 'bg-gradient-to-br from-accent-purple via-accent-pink to-accent-orange' : 'bg-white/10'}`}>
                                <div className="bg-surface-100 h-full w-full rounded-[23px] p-6 flex flex-col items-center text-center relative z-10">
                                    
                                    {/* Icon */}
                                    <div className={`w-20 h-20 rounded-2xl mb-4 relative shadow-2xl ${!guild.inGuild && 'grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300'}`}>
                                        {guild.icon ? (
                                            <Image 
                                                src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} 
                                                alt={guild.name} 
                                                fill 
                                                className="rounded-2xl object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full rounded-2xl flex items-center justify-center text-white font-bold text-2xl" style={{ backgroundColor: `#${Math.floor(Math.random()*16777215).toString(16)}` }}>
                                                <Icon name="discord" variant="filled" className="text-3xl text-white" />
                                            </div>
                                        )}
                                    </div>

                                    <h3 className="font-bold text-lg mb-1 truncate w-full">{guild.name}</h3>
                                    <p className="text-xs text-gray-500 mb-6">{guild.inGuild ? 'Managed by Nyra' : 'Nyra not added'}</p>

                                    {guild.inGuild ? (
                                        <Link href={`/dashboard/${guild.id}/home`} className="w-full py-2.5 rounded-xl bg-accent-purple/10 text-accent-purple font-bold text-sm border border-accent-purple/20 hover:bg-accent-purple hover:text-white transition-colors flex items-center justify-center gap-2">
                                            <Icon name="dashboard" variant="filled" />
                                            Manage
                                        </Link>
                                    ) : (
                                        <a href={`/api/invite?guild_id=${guild.id}`} target="_blank" rel="noopener noreferrer" className="w-full py-2.5 rounded-xl bg-white/5 text-gray-400 font-bold text-sm border border-white/10 hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2">
                                            <Icon name="plus" />
                                            Invite Bot
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                 ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 rounded-3xl border border-dashed border-white/10 bg-white/5">
                        <div className="w-16 h-16 rounded-full bg-surface-200 flex items-center justify-center text-gray-400">
                             <Icon name="search" className="text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold">No Servers Found</h3>
                        <p className="text-gray-400 max-w-sm">It looks like you don't manage any servers with the correct permissions.</p>
                    </div>
                 )
            ) : (
                <div className="flex flex-col items-center justify-center py-32 text-center space-y-6">
                     <div className="w-20 h-20 rounded-3xl bg-surface-100 flex items-center justify-center mb-2 animate-bounce-slow">
                         <Icon name="discord" variant="filled" className="text-4xl text-[#5865F2]" />
                     </div>
                     <h2 className="text-3xl font-heading font-bold">Login Required</h2>
                     <p className="text-gray-400 max-w-md">Please login with Discord to view and manage your servers.</p>
                     <Link href="/login" className="px-8 py-3 bg-[#5865F2] hover:bg-[#4752C4] rounded-xl font-bold text-white transition-colors shadow-lg shadow-[#5865F2]/20 flex items-center gap-2">
                         <Icon name="discord" variant="filled" />
                         Login with Discord
                     </Link>
                </div>
            )}
        </div>
    </div>
  );
}
