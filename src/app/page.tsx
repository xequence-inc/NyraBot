'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

// Mock simple decorative items
const FeatureCard = ({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) => (
  <div className="p-8 rounded-3xl bg-surface border border-border hover:border-primary/50 transition-all hover:-translate-y-2 group">
    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 font-display">{title}</h3>
    <p className="text-zinc-400 leading-relaxed">{desc}</p>
  </div>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 opacity-30 pointer-events-none">
             <div className="absolute top-[-200px] left-[20%] w-[500px] h-[500px] bg-primary/40 rounded-full blur-[120px] animate-pulse-glow" />
             <div className="absolute top-[100px] right-[10%] w-[400px] h-[400px] bg-secondary/40 rounded-full blur-[100px] animate-pulse-glow delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-float">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-medium text-zinc-300">v3.0 is now live</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-8 leading-tight">
            Manage Less. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
              Do More.
            </span>
          </h1>
          
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            The all-in-one Discord platform designed for communities that demand excellence. 
            Moderation, tickets, and economy - reimagined.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Link href="/login">
               <Button size="lg" className="h-14 px-8 text-lg rounded-2xl shadow-xl shadow-primary/20">
                 Get Started
               </Button>
             </Link>
             <Link href="/discord" target="_blank">
               <Button variant="secondary" size="lg" className="h-14 px-8 text-lg rounded-2xl">
                 Join Support
               </Button>
             </Link>
          </div>

          <div className="mt-20 relative mx-auto max-w-5xl">
            <div className="rounded-2xl border border-white/10 bg-surface/50 p-2 backdrop-blur-sm shadow-2xl">
               <img 
                 src="/hero-dashboard.png" 
                 alt="Dashboard Preview" 
                 className="rounded-xl w-full h-auto opacity-90"
                 // Placeholder if image doesn't exist, will show broken icon or alt text 
                 // User can add image later
                 onError={(e) => { e.currentTarget.style.display = 'none'; }}
               />
               <div className="h-[400px] flex items-center justify-center text-zinc-600 bg-surface rounded-xl">
                  [Dashboard Preview Image Placeholder]
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Everything you need</h2>
             <p className="text-zinc-400">Powerful modules to supercharge your community</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Advanced Moderation" 
              desc="Traffic light system, automated lockdowns, and detailed audit logs keep your server safe."
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
            />
             <FeatureCard 
              title="Support Tickets" 
              desc="Streamline support with transcripts, categories, and automated workflows."
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/></svg>}
            />
             <FeatureCard 
              title="Global Economy" 
              desc="Cross-server currency, shops, and trading systems to engage your members."
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="8"/><path d="M12 2v20"/></svg>}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-primary to-secondary p-12 md:p-20 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
           <div className="relative z-10">
             <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Ready to upgrade?</h2>
             <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
               Join thousands of communities using Nyra to manage their servers.
             </p>
             <Link href="/login">
               <Button size="lg" className="h-14 px-8 text-lg bg-white text-primary hover:bg-white/90 shadow-xl border-none">
                 Add to Discord
               </Button>
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
