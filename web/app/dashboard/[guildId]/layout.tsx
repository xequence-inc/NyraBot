"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ServerLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { guildId: string };
}) {
  const pathname = usePathname();
  const guildId = params.guildId;

  const links = [
    { name: "Dashboard", href: `/dashboard/${guildId}/home`, icon: "fi-rr-apps" },
    { name: "Button Roles", href: `/dashboard/${guildId}/roles`, icon: "fi-rr-magic-wand", active: true },
    { name: "Moderation", href: `/dashboard/${guildId}/moderation`, icon: "fi-rr-shield-check" },
    { name: "Utils", href: `/dashboard/${guildId}/utils`, icon: "fi-rr-settings" },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <aside className="w-72 border-r border-white/5 bg-surface-100/30 flex flex-col pt-24 pb-6 px-4">
        <div className="mb-8 px-2">
           <div className="flex items-center gap-3 mb-1">
               <div className="w-10 h-10 rounded-full bg-blue-500"></div>
               <div>
                   <div className="font-bold text-sm">Blue Shark</div>
                   <div className="text-xs text-green-400">● Online</div>
               </div>
           </div>
        </div>

        <nav className="space-y-2 flex-1">
           {links.map((link) => (
             <Link key={link.href} href={link.href}>
                <div className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors cursor-pointer ${pathname === link.href ? 'bg-accent-purple text-white shadow-lg shadow-accent-purple/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                    <i className={`fi ${link.icon} text-lg`}></i>
                    <span className="font-medium text-sm">{link.name}</span>
                    {link.name === "Button Roles" && <div className="ml-auto w-8 h-4 bg-white/20 rounded-full flex items-center justify-end p-0.5"><div className="w-3 h-3 bg-white rounded-full"></div></div>}
                </div>
             </Link>
           ))}
        </nav>

        {/* User Card */}
        <div className="glass-panel p-3 rounded-xl flex items-center gap-3 mt-auto">
            <div className="w-8 h-8 rounded-full bg-pink-500"></div>
            <div className="flex-1 overflow-hidden">
                <div className="font-bold text-sm truncate">Darkie_</div>
                <div className="text-[10px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded inline-block">Upgrade</div>
            </div>
            <i className="fi fi-rr-angle-small-up text-gray-400"></i>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative">
         {children}
      </main>
    </div>
  );
}
