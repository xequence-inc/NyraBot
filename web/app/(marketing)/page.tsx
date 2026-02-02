import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      
      {/* Background Gradients */}
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 pointer-events-none -z-20"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-accent-purple/10 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-accent-orange/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-100 border border-white/5 text-sm font-medium mb-8 animate-fade-in-up">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-purple opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-purple"></span>
                </span>
                <span className="text-gray-300">New Experience Available</span>
                <Icon name="arrow-right" className="text-gray-500" />
            </div>

            <div className="relative mb-6">
                <h1 className="font-heading text-6xl md:text-8xl font-bold tracking-tight leading-[1.1] max-w-4xl mx-auto">
                    The Pulse of your 
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-pink">
                        Community
                    </span>
                </h1>
                {/* Decorative Sparkles using Mage Icons */}
                <Icon name="stars" variant="filled" className="absolute -top-10 -right-10 text-4xl text-accent-orange opacity-50 animate-pulse-slow hidden md:block" />
                <Icon name="lightning" variant="filled" className="absolute -bottom-5 -left-10 text-4xl text-accent-purple opacity-50 animate-bounce-slow hidden md:block" />
            </div>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
                Nyra isn't just a bot; it's the operating system for your Discord server. 
                Powerful moderation, engaging leveling, and seamless music—all in one place.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up delay-100">
                <button className="h-14 px-8 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform flex items-center gap-3 shadow-xl shadow-white/10 group">
                    <Icon name="discord" variant="filled" className="text-2xl" />
                    Add to Discord
                </button>
                <button className="h-14 px-8 rounded-full bg-surface-100 border border-white/10 text-white font-bold text-lg hover:bg-surface-200 transition-colors flex items-center gap-3 backdrop-blur-sm group">
                    <Icon name="dashboard" className="text-xl group-hover:text-accent-purple transition-colors" />
                    View Dashboard
                </button>
            </div>

            {/* Dashboard Mockup - Centered & Large */}
            <div className="mt-24 relative w-full max-w-5xl mx-auto perspective-1000 group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-purple via-transparent to-accent-orange opacity-20 blur-3xl -z-10 rounded-full group-hover:opacity-30 transition-opacity duration-700"></div>
                
                <div className="relative glass-card rounded-[2rem] border border-white/10 shadow-2xl p-4 md:p-2 bg-black/40 backdrop-blur-xl transform rotate-x-[5deg] group-hover:rotate-0 transition-transform duration-700">
                     {/* Window Controls */}
                     <div className="h-12 border-b border-white/5 flex items-center px-6 gap-2">
                         <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                         <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                         <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                         <div className="mx-auto text-xs text-gray-600 font-mono">dashboard.nyra.bot</div>
                     </div>

                     {/* Content Mockup */}
                     <div className="p-6 md:p-12 grid md:grid-cols-4 gap-8 text-left">
                         {/* Sidebar Mockup */}
                         <div className="hidden md:block col-span-1 space-y-4">
                             <div className="h-10 w-3/4 bg-surface-300/50 rounded-lg animate-pulse"></div>
                             <div className="space-y-2">
                                 <div className="h-8 w-full bg-surface-200/30 rounded-lg"></div>
                                 <div className="h-8 w-full bg-surface-200/30 rounded-lg"></div>
                                 <div className="h-8 w-full bg-accent-purple/20 rounded-lg border border-accent-purple/30"></div>
                                 <div className="h-8 w-full bg-surface-200/30 rounded-lg"></div>
                             </div>
                         </div>

                         {/* Main Content Mockup */}
                         <div className="col-span-1 md:col-span-3 space-y-6">
                             <div className="flex items-center justify-between">
                                 <div>
                                     <div className="h-8 w-48 bg-surface-300/50 rounded-lg mb-2"></div>
                                     <div className="h-4 w-32 bg-surface-200/30 rounded-lg"></div>
                                 </div>
                                 <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                      <Icon name="check-circle" variant="filled" className="text-green-500" />
                                 </div>
                             </div>

                             <div className="grid grid-cols-3 gap-4">
                                 {[1,2,3].map(i => (
                                     <div key={i} className="bg-surface-200/30 rounded-xl p-4 border border-white/5 h-24"></div>
                                 ))}
                             </div>
                             <div className="h-40 bg-surface-200/30 rounded-xl border border-white/5 w-full"></div>
                         </div>
                     </div>
                </div>
            </div>
        </div>
      </main>

      {/* Feature Strip - Updated with Mage Icons */}
      <div className="border-y border-white/5 bg-black/50 backdrop-blur-md relative z-10">
          <div className="max-w-7xl mx-auto px-6 py-20">
              <div className="grid md:grid-cols-3 gap-16 text-center">
                  <div className="group">
                      <div className="w-16 h-16 mx-auto bg-surface-100 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-accent-purple/20 transition-all duration-300 border border-white/5">
                          <Icon name="clock" variant="filled" className="text-3xl text-gray-300 group-hover:text-accent-purple transition-colors" />
                      </div>
                      <h3 className="text-xl font-heading font-bold mb-3">99.99% Uptime</h3>
                      <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">Hosted on high-availability clusters ensuring your server never goes offline.</p>
                  </div>
                  <div className="group">
                      <div className="w-16 h-16 mx-auto bg-surface-100 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-accent-orange/20 transition-all duration-300 border border-white/5">
                         <Icon name="lightning" variant="filled" className="text-3xl text-gray-300 group-hover:text-accent-orange transition-colors" />
                      </div>
                      <h3 className="text-xl font-heading font-bold mb-3">Zero Latency</h3>
                      <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">Global edge network optimized specifically for speed and instant responses.</p>
                  </div>
                  <div className="group">
                      <div className="w-16 h-16 mx-auto bg-surface-100 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-accent-pink/20 transition-all duration-300 border border-white/5">
                         <Icon name="box-3d" variant="filled" className="text-3xl text-gray-300 group-hover:text-accent-pink transition-colors" />
                      </div>
                      <h3 className="text-xl font-heading font-bold mb-3">Fully Modular</h3>
                      <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">Enable only what you need. Keep your bot lightweight and focused.</p>
                  </div>
              </div>
          </div>
      </div>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Ready to upgrade your server?</h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">Join thousands of communities already using Nyra.</p>
              <button className="bg-white text-black text-lg font-bold px-10 py-5 rounded-full hover:scale-105 transition-transform shadow-2xl shadow-white/10 flex items-center gap-3 mx-auto">
                  <Icon name="rocket" variant="filled" className="text-2xl" />
                  Get Started
              </button>
          </div>
      </section>

    </div>
  );
}
