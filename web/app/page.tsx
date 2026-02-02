import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="fixed w-full z-50 transition-all duration-300 backdrop-blur-md bg-background/50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-purple to-accent-pink flex items-center justify-center">
                <i className="fi fi-br-star text-white text-xs mt-1"></i>
             </div>
             <span className="font-heading font-bold text-xl tracking-wide">Nyra</span>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <Link href="#" className="hover:text-white transition-colors">Features</Link>
            <Link href="#" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="#" className="hover:text-white transition-colors">Support</Link>
          </div>

          <div className="flex items-center gap-4">
             <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Log In</Link>
             <Link href="/login" className="bg-white text-black hover:bg-gray-200 transition-colors px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-white/5">
                Dashboard
             </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple text-xs font-bold uppercase tracking-wider">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-purple opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-purple"></span>
                  </span>
                  v2.0 Released
                </div>

                <h1 className="font-heading text-6xl lg:text-7xl font-bold leading-[1.1]">
                    Manage your
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple via-accent-pink to-accent-orange">
                        Discord Server
                    </span>
                    <br />
                    like a Pro.
                </h1>

                <p className="text-lg text-gray-400 max-w-lg leading-relaxed font-light">
                    The ultimate modular bot with a beautiful dashboard. 
                    Configure moderation, welcome messages, and leveling with zero code.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                    <button className="bg-gradient-to-r from-accent-purple to-accent-pink hover:opacity-90 transition-opacity text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-accent-purple/20">
                        Add to Discord
                    </button>
                    <button className="px-8 py-4 rounded-xl font-bold text-white border border-white/10 bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm">
                        View Features
                    </button>
                </div>
            </div>

            {/* Right Visual (Abstract UI/Dashboard Mockup) */}
            <div className="relative group">
                {/* Glow Effect behind the card */}
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-purple to-accent-orange rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                
                {/* Main Card */}
                <div className="relative glass-card rounded-3xl p-6 md:p-8 transform rotate-[-2deg] hover:rotate-0 transition-all duration-500 ease-out">
                    {/* Fake Header */}
                    <div className="flex items-center justify-between mb-8">
                       <div className="flex items-center gap-4">
                           <div className="w-12 h-12 rounded-full bg-surface-300 animate-pulse"></div>
                           <div className="space-y-2">
                               <div className="h-4 w-32 bg-surface-300 rounded animate-pulse"></div>
                               <div className="h-3 w-20 bg-surface-300/50 rounded animate-pulse"></div>
                           </div>
                       </div>
                       <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Online</div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="glass-panel p-4 rounded-2xl">
                            <div className="text-gray-400 text-xs mb-1">Total Members</div>
                            <div className="text-2xl font-heading font-bold">14,205</div>
                        </div>
                        <div className="glass-panel p-4 rounded-2xl">
                             <div className="text-gray-400 text-xs mb-1">Messages Today</div>
                             <div className="text-2xl font-heading font-bold text-accent-orange">8.5k</div>
                        </div>
                    </div>

                    {/* Toggle List mockup */}
                    <div className="space-y-3">
                        {['Moderation Module', 'Welcome Messages', 'Leveling System'].map((item, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-surface-200/50 border border-white/5">
                                <span className="font-medium">{item}</span>
                                <div className={`w-10 h-6 rounded-full p-1 flex items-center ${i === 2 ? 'bg-surface-300 justify-start' : 'bg-accent-purple justify-end'}`}>
                                    <div className="w-4 h-4 rounded-full bg-white shadow-sm"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Floating Elements */}
                <div className="absolute -right-8 top-20 glass-panel p-4 rounded-2xl animate-float-slow hidden md:block">
                     <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-accent-pink/20 flex items-center justify-center text-accent-pink">❤️</div>
                         <div>
                             <div className="text-xs text-gray-400">Reputation</div>
                             <div className="font-bold">+150</div>
                         </div>
                     </div>
                </div>
            </div>
        </div>
      </main>

      {/* Feature Strip */}
      <div className="border-y border-white/5 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                      <h3 className="text-xl font-heading font-bold mb-2">99.99% Uptime</h3>
                      <p className="text-gray-400 text-sm">Hosted on high-availability clusters.</p>
                  </div>
                  <div>
                      <h3 className="text-xl font-heading font-bold mb-2">Zero Latency</h3>
                      <p className="text-gray-400 text-sm">Optimized specifically for speed.</p>
                  </div>
                  <div>
                      <h3 className="text-xl font-heading font-bold mb-2">Fully Modular</h3>
                      <p className="text-gray-400 text-sm">Enable only what you need.</p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}
