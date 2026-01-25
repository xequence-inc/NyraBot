'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Using inline SVG for icons since mage-icons-react may need specific import pattern
const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

const RocketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);

const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18"/>
    <path d="m19 9-5 5-4-4-3 3"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/>
    <path d="m12 5 7 7-7 7"/>
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function Landing() {
  return (
    <div className="relative overflow-hidden">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 rounded-full blur-[150px] opacity-50" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] opacity-40" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] opacity-30" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform">
              N
            </div>
            <span className="font-bold text-xl tracking-tight">Nyra</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <Link href="/premium" className="hover:text-white transition-colors">Pricing</Link>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="https://discord.gg/nyra" className="hover:text-white transition-colors">Support</a>
          </div>
          
          <Link href="/login" className="px-5 py-2 rounded-xl bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all hover:scale-105">
            Dashboard
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 px-6">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Status Badge */}
          <motion.div 
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-zinc-400">All systems operational</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="block mb-2">Manage Less.</span>
            <span className="text-gradient">Do More.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            The all-in-one Discord platform. Automate moderation, scale your economy, 
            and engage your community — all with zero latency.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeUp}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link 
              href="/login" 
              className="group px-8 py-4 rounded-2xl bg-white text-black font-bold text-lg hover:scale-105 transition-all flex items-center gap-3 glow-sm"
            >
              Get Started Free
              <span className="group-hover:translate-x-1 transition-transform">
                <ArrowRightIcon />
              </span>
            </Link>
            <Link 
              href="/premium" 
              className="px-8 py-4 rounded-2xl glass font-semibold text-lg hover:bg-white/5 transition-all"
            >
              View Pricing
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={fadeUp}
            transition={{ delay: 0.5 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
          >
            <div>
              <div className="text-3xl font-bold text-white">50K+</div>
              <div className="text-sm text-zinc-500">Servers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">2M+</div>
              <div className="text-sm text-zinc-500">Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">99.9%</div>
              <div className="text-sm text-zinc-500">Uptime</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Built for Scale</h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Everything you need to run a thriving Discord community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<ShieldIcon />}
              title="Sentry Security"
              description="Automated raid detection, anti-spam, and instant lockdown. Your server stays protected 24/7."
              gradient="from-primary/20 to-primary/5"
              iconColor="text-primary"
              delay={0}
            />
            <FeatureCard 
              icon={<RocketIcon />}
              title="Global Economy"
              description="Unified currency across all servers. Trade, shop, gamble, and compete on a global leaderboard."
              gradient="from-secondary/20 to-secondary/5"
              iconColor="text-secondary"
              delay={0.1}
            />
            <FeatureCard 
              icon={<ChartIcon />}
              title="Advanced Analytics"
              description="Deep insights into member activity, engagement metrics, and growth trends."
              gradient="from-accent/20 to-accent/5"
              iconColor="text-accent"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl glass glow"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-zinc-400 mb-8">Join thousands of servers already using Nyra.</p>
            <Link 
              href="/login" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-black font-bold hover:scale-105 transition-transform"
            >
              Add to Discord
              <ArrowRightIcon />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary to-secondary" />
            <span>© 2026 Nyra. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ 
  icon, 
  title, 
  description, 
  gradient, 
  iconColor, 
  delay 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  gradient: string;
  iconColor: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group p-8 rounded-3xl glass hover:bg-white/[0.04] transition-all duration-300"
    >
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 ${iconColor} group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-zinc-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}
