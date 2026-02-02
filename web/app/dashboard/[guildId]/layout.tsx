"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/Icon";

export default function ServerLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ guildId: string }>;
}) {
  const pathname = usePathname();
  const { guildId } = React.use(params);

  const links = [
    { name: "Dashboard", href: `/dashboard/${guildId}/home`, icon: "dashboard" },
    { name: "Button Roles", href: `/dashboard/${guildId}/roles`, icon: "mouse-pointer" },
    { name: "Moderation", href: `/dashboard/${guildId}/moderation`, icon: "shield-check" }, 
    { name: "Utils", href: `/dashboard/${guildId}/utils`, icon: "settings" },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <aside className="w-72 border-r border-white/5 bg-surface-100/30 flex flex-col pt-24 pb-6 px-4">
        <div className="mb-8 px-2">
           <div className="flex items-center gap-3 mb-1">
               <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 animate-pulse"></div>
               <div>
                   <div className="font-bold text-sm text-gray-300">Loading Server...</div>
                   <div className="text-xs text-gray-500">Connecting...</div>
               </div>
           </div>
        </div>

        <nav className="space-y-2 flex-1">
           {links.map((link) => {
             const isActive = pathname?.startsWith(link.href) || (link.name === "Dashboard" && pathname === `/dashboard/${guildId}/home`);
             return (
             <Link key={link.href} href={link.href}>
                <div className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors cursor-pointer ${isActive ? 'bg-accent-purple text-white shadow-lg shadow-accent-purple/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                    <Icon 
                        name={link.icon} 
                        variant={isActive ? "filled" : "outline"} 
                        className="text-xl" 
                    />
                    <span className="font-medium text-sm">{link.name}</span>
                    {link.name === "Button Roles" && <div className="ml-auto w-8 h-4 bg-white/20 rounded-full flex items-center justify-end p-0.5"><div className="w-3 h-3 bg-white rounded-full"></div></div>}
                </div>
             </Link>
             )
           })}
        </nav>

        {/* User Card */}
        <div className="glass-panel p-3 rounded-xl flex items-center gap-3 mt-auto border border-white/5">
            <div className="w-8 h-8 rounded-full bg-surface-300"></div>
            <div className="flex-1 overflow-hidden">
                <div className="h-3 w-20 bg-surface-300 rounded mb-1"></div>
                <div className="h-2 w-12 bg-surface-300 rounded"></div>
            </div>
            <Icon name="settings" className="text-gray-400" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative">
         {children}
      </main>
    </div>
  );
}
