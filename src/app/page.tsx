'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Shield, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Landing() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#050505] text-white selection:bg-purple-500/30 font-sans">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
           <div className="font-bold text-2xl tracking-tighter flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600"></div>
              Nyra
           </div>
           <Link href="/login" className="px-6 py-2.5 rounded-full bg-white text-black font-bold text-sm hover:scale-105 transition-transform">
             Dashboard Login
           </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-48 pb-32 px-6 flex flex-col items-center text-center">
         {/* Background Orbs */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="relative z-10 max-w-4xl mx-auto"
         >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-white/70">System Operational</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter leading-[1.1]">
              <span className="block text-white drop-shadow-2xl">Manage Less.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 animate-gradient-x">Do More.</span>
            </h1>

            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              The all-in-one Discord platform. Automate moderation, scale your economy, and engage your community with zero latency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/login" className="px-8 py-4 rounded-2xl bg-white text-black font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 group shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="#" className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md font-bold text-lg hover:bg-white/10 transition-colors">
                View Documentation
              </a>
            </div>
         </motion.div>
      </section>

      {/* Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
                icon={<Shield className="w-8 h-8 text-purple-400" />}
                title="Sentry Security"
                desc="Automated raid detection and lockdown. Set thresholds, sit back, and let Nyra protect your server."
            />
             <FeatureCard 
                icon={<Rocket className="w-8 h-8 text-blue-400" />}
                title="Global Economy"
                desc="A unified currency system that works across all servers. Trade, shop, and compete on a global scale."
            />
             <FeatureCard 
                icon={<Users className="w-8 h-8 text-pink-400" />}
                title="Leveling v2"
                desc="Rewarding engagement has never been prettier. Customizable rank cards and role rewards."
            />
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, desc }: any) {
  return (
    <div className="p-8 rounded-3xl border border-white/5 bg-[#0A0A0A] hover:border-purple-500/30 transition-all hover:bg-white/5 group">
      <div className="mb-6 p-4 rounded-2xl bg-purple-500/10 w-fit group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-zinc-500 leading-relaxed font-medium">{desc}</p>
    </div>
  )
}
