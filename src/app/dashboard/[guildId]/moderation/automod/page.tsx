'use client';
import React from 'react';

export default function AutoModPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
        <h1 className="text-2xl font-bold">Auto-Sentry Defense</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
            {/* Anti-Spam */}
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold">Anti-Spam</h3>
                    <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/20">ACTIVE</div>
                </div>
                
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span>Burst Limit (5s)</span>
                        <input type="number" className="w-20 bg-black border border-white/10 rounded px-2 py-1 text-center" defaultValue={5} />
                    </div>
                     <div className="flex items-center justify-between">
                        <span>Duplicate Text</span>
                        <select className="bg-black border border-white/10 rounded px-2 py-1 text-sm">
                            <option>Delete Message</option>
                            <option>Warn User</option>
                            <option>Mute User</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Anti-Link */}
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold">Content Filters</h3>
                     <div className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-bold border border-yellow-500/20">WARNING</div>
                </div>
                <div className="space-y-4">
                     <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                        <input type="checkbox" defaultChecked className="accent-purple-500" />
                        <span>Block Discord Invites</span>
                     </label>
                      <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                        <input type="checkbox" className="accent-purple-500" />
                        <span>Block All Links</span>
                     </label>
                </div>
            </div>
        </div>
    </div>
  )
}
