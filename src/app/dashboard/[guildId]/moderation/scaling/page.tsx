'use client';
import React from 'react';

export default function ScalingPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold">Punishment Scaling</h1>
        <p className="text-zinc-400">Configure the path of escalating consequences.</p>

        <div className="space-y-2">
            {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900 border border-white/5">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">{step}</div>
                    <div className="flex-1">
                        <div className="text-sm font-bold">Warning Threshold: {step * 2}</div>
                    </div>
                    <div className="text-zinc-500">→</div>
                    <div className="px-4 py-2 rounded-lg bg-black border border-white/10 text-sm">
                        {step === 4 ? 'Ban User' : step === 3 ? 'Kick User' : 'Mute (1h)'}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
