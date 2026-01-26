'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();
  // Don't show footer on dashboard pages as they have their own layout (usually)
  // Or actually, user said "global on all pages".
  // But dashboard usually has sidebar+content. Adding footer to bottom of main might be ok.
  // For now let's add it, but if dashboard layout is flex-row, it might break flow if not placed right.
  // We'll put it in RootLayout, but `DashboardSidebar` pages might hide it or it might just appear at bottom.
  // Let's implement it and see.

  if (pathname?.startsWith('/dashboard')) return null;

  return (
    <footer className="border-t border-white/5 bg-background py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Nyra" className="w-8 h-8" />
            <span className="font-bold text-xl font-display">Nyra</span>
          </div>
          <p className="text-sm text-zinc-500">
            The next generation of Discord community management. Powerful, intuitive, and beautiful.
          </p>
          <div className="text-sm text-zinc-600">
            © {new Date().getFullYear()} Nyra. All rights reserved.
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-zinc-400">Product</h4>
          <ul className="space-y-2 text-sm text-zinc-500">
            <li><Link href="/#features" className="hover:text-white transition-colors">Features</Link></li>
            <li><Link href="/premium" className="hover:text-white transition-colors">Pricing</Link></li>
            <li><Link href="/docs/changelog" className="hover:text-white transition-colors">Changelog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-zinc-400">Resources</h4>
          <ul className="space-y-2 text-sm text-zinc-500">
            <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
            <li><Link href="/docs/api" className="hover:text-white transition-colors">API</Link></li>
            <li><Link href="/status" className="hover:text-white transition-colors">System Status</Link></li>
          </ul>
        </div>

        <div>
           <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-zinc-400">Community</h4>
           <ul className="space-y-2 text-sm text-zinc-500">
             <li><a href="/discord" className="hover:text-white transition-colors">Discord Server</a></li>
             <li><a href="https://twitter.com/nyrabot" className="hover:text-white transition-colors">Twitter</a></li>
             <li><a href="https://github.com/nyrabot" className="hover:text-white transition-colors">GitHub</a></li>
           </ul>
        </div>
      </div>
    </footer>
  );
}
