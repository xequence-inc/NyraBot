'use client';

import { Icons } from '@/components/icons';

export default function MessagesDocs() {
  return (
    <div className="space-y-8 max-w-4xl">
       <div className="mb-8 border-b border-white/10 pb-8">
          <h1 className="text-4xl font-bold font-display mb-4">Messages & Branding</h1>
          <p className="text-xl text-zinc-400">Design beautiful embeds, customize system branding, and automate your server's communication.</p>
       </div>

       <div className="grid md:grid-cols-2 gap-6">
           <div className="p-6 rounded-2xl bg-surface border border-white/5 space-y-4">
               <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                   <Icons.Edit size={24} />
               </div>
               <h3 className="text-xl font-bold">Embed Builder</h3>
               <p className="text-zinc-400">
                   A powerful WYSIWYG editor for Discord embeds. Switch between <strong>Visual Mode</strong> for easy editing and <strong>JSON Mode</strong> for advanced control. Add buttons, select menus, and more.
               </p>
           </div>

           <div className="p-6 rounded-2xl bg-surface border border-white/5 space-y-4">
               <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-500">
                   <Icons.Palette size={24} />
               </div>
               <h3 className="text-xl font-bold">System Branding</h3>
               <p className="text-zinc-400">
                   Define your server's identity. Set a global <strong>Accent Color</strong> and <strong>Footer</strong> that will be applied to all system messages automatically.
               </p>
           </div>
           
           <div className="p-6 rounded-2xl bg-surface border border-white/5 space-y-4">
               <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center text-violet-500">
                   <Icons.Message size={24} />
               </div>
               <h3 className="text-xl font-bold">System Responses</h3>
               <p className="text-zinc-400">
                   Configure automated messages for events like <strong>Welcome</strong>, <strong>Goodbye</strong>, and <strong>Server Boosts</strong>. Use the Embed Builder to design the perfect greeting.
               </p>
           </div>

           <div className="p-6 rounded-2xl bg-surface border border-white/5 space-y-4">
               <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-500">
                   <Icons.Radio size={24} />
               </div>
               <h3 className="text-xl font-bold">Broadcast Tower</h3>
               <p className="text-zinc-400">
                   Send announcements to specific <strong>Channels</strong> or <strong>Roles</strong>. Schedule messages for later delivery to ensure maximum engagement.
               </p>
           </div>
       </div>

       <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 border border-white/10">
           <h2 className="text-2xl font-bold mb-4 font-display">Developer API</h2>
           <p className="text-zinc-300 mb-6">
               Looking to automate via API? The Messages module exposes endpoints for sending embeds programmatically.
           </p>
           <div className="bg-black/50 rounded-xl p-4 font-mono text-sm text-zinc-300">
               POST /api/bot/send-embed
               <br/>
               {`{ "channelId": "123...", "embed": { ... } }`}
           </div>
       </div>
    </div>
  );
}
