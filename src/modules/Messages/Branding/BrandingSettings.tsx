'use client';

import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Icons } from '@/components/icons';

interface BrandingSettingsProps {
  guildId: string;
}

export function BrandingSettings({ guildId }: BrandingSettingsProps) {
  const [branding, setBranding] = useState({
    accentColor: '#5865f2',
    footerText: '',
    footerIcon: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`/api/guilds/${guildId}/settings`)
      .then(r => r.json())
      .then(d => {
        if (d.branding) setBranding(prev => ({ ...prev, ...d.branding }));
        setLoading(false);
      });
  }, [guildId]);

  const saveBranding = async () => {
    setSaving(true);
    try {
      const res = await fetch(`/api/guilds/${guildId}/settings`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ branding })
      });
      if (res.ok) {
          setMessage('Settings saved!');
          setTimeout(() => setMessage(''), 3000);
      } else {
          setMessage('Failed to save.');
      }
    } catch { setMessage('Error saving.'); }
    setSaving(false);
  };

  if (loading) return <div className="p-8 text-zinc-500">Loading settings...</div>;

  return (
    <div className="flex-1 p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      {/* Settings Form */}
      <div className="flex flex-col gap-6">
         <Card className="space-y-6">
             <div>
                <Label>System Accent Color</Label>
                <div className="flex gap-4 items-center">
                    <input 
                        type="color" 
                        value={branding.accentColor} 
                        onChange={e => setBranding({...branding, accentColor: e.target.value})}
                        className="w-16 h-12 rounded-lg cursor-pointer bg-background border border-border p-1"
                    />
                    <div className="space-y-1">
                        <div className="text-sm font-mono bg-background px-3 py-1 rounded border border-border">{branding.accentColor}</div>
                        <div className="text-xs text-zinc-500">Used for system embeds & notifications</div>
                    </div>
                </div>
             </div>

             <div>
                 <Label>Default Footer Text</Label>
                 <Input 
                    value={branding.footerText} 
                    onChange={e => setBranding({...branding, footerText: e.target.value})}
                    placeholder="e.g. Server Name • System"
                 />
                 <div className="text-xs text-zinc-500 mt-1">Appears on all auto-generated messages</div>
             </div>

             <div>
                 <Label>Footer Icon URL</Label>
                 <div className="flex gap-3">
                     <div className="flex-1">
                        <Input 
                            value={branding.footerIcon} 
                            onChange={e => setBranding({...branding, footerIcon: e.target.value})}
                            placeholder="https://..."
                        />
                     </div>
                     {branding.footerIcon && (
                         <div className="w-10 h-10 rounded-lg bg-surface border border-white/5 overflow-hidden flex-shrink-0">
                             <img src={branding.footerIcon} className="w-full h-full object-cover" alt="" />
                         </div>
                     )}
                 </div>
             </div>

             <div className="pt-4 flex items-center justify-between border-t border-white/5">
                 <p className={`text-sm ${message.includes('saved') ? 'text-emerald-400' : 'text-danger'}`}>{message}</p>
                 <Button onClick={saveBranding} disabled={saving} glow>
                     {saving ? 'Saving...' : 'Save Changes'}
                 </Button>
             </div>
         </Card>
      </div>

      {/* Preview */}
      <div className="flex flex-col gap-6">
          <h2 className="text-lg font-bold">Live Preview</h2>
          <div className="bg-[#313338] rounded-md p-4 border-l-4 shadow-lg max-w-md w-full" style={{ borderColor: branding.accentColor }}>
              <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-zinc-700"></div>
                  <span className="font-semibold text-white">Nyra</span>
                  <span className="text-[10px] bg-[#5865f2] text-white px-1 rounded">BOT</span>
                  <span className="text-xs text-zinc-400 ml-auto">Today at 12:00 PM</span>
              </div>
              
              <div className="bg-[#2b2d31] rounded p-4 border-l-4" style={{ borderColor: branding.accentColor }}>
                   <div className="font-semibold text-white mb-2">Welcome to the Server!</div>
                   <p className="text-zinc-300 text-sm mb-4">
                       This is a preview of how system messages will look with your new branding settings. 
                       The accent color on the left and the footer below are controlled by your preferences.
                   </p>
                   
                   <div className="flex items-center gap-2 mt-2 pt-2 border-t border-white/5">
                       {branding.footerIcon && <img src={branding.footerIcon} className="w-5 h-5 rounded-full" />}
                       <span className="text-xs text-zinc-400">{branding.footerText || 'System Message'}</span>
                   </div>
              </div>
          </div>
      </div>
    </div>
  );
}
