'use client';
import React from 'react';
import Link from 'next/link';

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export default function PremiumPage() {
  return (
    <div className="min-h-screen px-6 py-20">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full blur-[150px] opacity-60" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <Link href="/" className="inline-block mb-10 text-zinc-500 hover:text-white transition-colors text-sm">
          ← Back Home
        </Link>
        
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Go <span className="text-gradient">Premium</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Unlock higher limits, advanced automation, and priority support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Free */}
          <PricingCard
            title="Free"
            price="$0"
            features={['Basic Moderation', 'Economy System', 'Standard Support']}
            buttonText="Current Plan"
            buttonStyle="secondary"
          />

          {/* Pro */}
          <PricingCard
            title="Pro"
            price="$5"
            features={['Everything in Free', 'Unlimited Auto-Mod', 'Detailed Logs (30 days)', 'Custom Branding']}
            buttonText="Upgrade Now"
            buttonStyle="primary"
            highlighted
            badge="Most Popular"
          />

          {/* Enterprise */}
          <PricingCard
            title="Enterprise"
            price="$20"
            features={['Priority Support', 'Data Export API', 'Dedicated Instance']}
            buttonText="Contact Sales"
            buttonStyle="secondary"
          />
        </div>
      </div>
    </div>
  );
}

function PricingCard({ 
  title, 
  price, 
  features, 
  buttonText, 
  buttonStyle, 
  highlighted = false,
  badge 
}: {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  buttonStyle: 'primary' | 'secondary';
  highlighted?: boolean;
  badge?: string;
}) {
  return (
    <div className={`relative p-8 rounded-3xl ${highlighted ? 'glass glow scale-105 z-10' : 'glass'}`}>
      {badge && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-secondary text-xs font-bold uppercase tracking-wider">
          {badge}
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="text-4xl font-bold mb-6">
        {price}<span className="text-sm font-normal text-zinc-500">/mo</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3">
            <div className={`p-1 rounded-full ${highlighted ? 'bg-primary/20 text-primary' : 'bg-zinc-800 text-zinc-400'}`}>
              <CheckIcon />
            </div>
            <span className={highlighted ? 'text-white' : 'text-zinc-400'}>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-xl font-bold transition-all ${
        buttonStyle === 'primary' 
          ? 'bg-white text-black hover:scale-105' 
          : 'bg-white/10 hover:bg-white/20'
      }`}>
        {buttonText}
      </button>
    </div>
  );
}
