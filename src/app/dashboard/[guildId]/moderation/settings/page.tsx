'use client';
import React from 'react';

export default function SettingsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
        <h1 className="text-2xl font-bold">Module Settings</h1>
        
        <div className="p-6 rounded-2xl bg-zinc-900 border border-white/10">
            <h3 className="font-bold mb-4">Log Channels</h3>
            <div className="grid gap-4">
                 <div>
                    <label className="block text-xs uppercase text-zinc-500 mb-1">Public Mod Log</label>
                    <select className="w-full bg-black border border-white/10 rounded-lg p-3">
                        <option>#mod-logs</option>
                        <option>#general</option>
                    </select>
                 </div>
            </div>
        </div>
    </div>
  )
}
