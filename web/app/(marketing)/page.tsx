import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      {/* Content */}
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
                    <button className="bg-gradient-to-r from-accent-purple to-accent-pink hover:opacity-90 transition-opacity text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-accent-purple/20 flex items-center gap-3">
                        <i className="fi fi-brands-discord text-xl"></i>
                        Add to Discord
                    </button>
                    <button className="px-8 py-4 rounded-xl font-bold text-white border border-white/10 bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center gap-3">
                        <i className="fi fi-br-eye text-base"></i>
                        View Features
                    </button>
                </div>
            </div>

            {/* Right Visual (Abstract UI/Dashboard Mockup) */}
            <div className="relative group perspective-1000">
                {/* Glow Effect behind the card */}
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-purple to-accent-orange rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                
                {/* Main Card */}
                <div className="relative glass-card rounded-3xl p-6 md:p-8 transform rotate-y-[-5deg] rotate-x-[5deg] group-hover:rotate-0 transition-all duration-700 ease-out shadow-2xl">
                    {/* Fake Header */}
                    <div className="flex items-center justify-between mb-8">
                       <div className="flex items-center gap-4">
                           <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white">
                                <i className="fi fi-br-rocket-lunch text-xl"></i>
                           </div>
                           <div className="space-y-1">
                               <div className="text-lg font-bold leading-none">Space Outpost</div>
                               <div className="text-xs text-gray-400">Managed by Nyra</div>
                           </div>
                       </div>
                       <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full flex items-center gap-2 font-bold">
                           <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                           Online
                       </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="glass-panel p-5 rounded-2xl flex flex-col justify-between h-full">
                            <i className="fi fi-sr-users text-accent-purple text-xl block mb-2"></i>
                            <div>
                                <div className="text-gray-400 text-xs uppercase font-bold tracking-wider mb-1">Total Members</div>
                                <div className="text-2xl font-heading font-bold">14,205</div>
                            </div>
                        </div>
                        <div className="glass-panel p-5 rounded-2xl flex flex-col justify-between h-full">
                             <i className="fi fi-sr-comment-alt text-accent-orange text-xl block mb-2"></i>
                             <div>
                                 <div className="text-gray-400 text-xs uppercase font-bold tracking-wider mb-1">Messages Today</div>
                                 <div className="text-2xl font-heading font-bold text-accent-orange">8.5k</div>
                             </div>
                        </div>
                    </div>

                    {/* Toggle List mockup */}
                    <div className="space-y-3">
                        {[
                            { name: 'Moderation System', icon: 'fi-sr-shield-check', active: true },
                            { name: 'Welcome Messages', icon: 'fi-sr-hand-wave', active: true },
                            { name: 'Leveling System', icon: 'fi-sr-chart-histogram', active: false }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-surface-200/50 border border-white/5 hover:bg-surface-200 transition-colors cursor-default">
                                <div className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${item.active ? 'bg-white/10 text-white' : 'bg-white/5 text-gray-500'}`}>
                                        <i className={`fi ${item.icon} text-sm`}></i>
                                    </div>
                                    <span className={`font-medium ${!item.active && 'text-gray-500'}`}>{item.name}</span>
                                </div>
                                <div className={`w-10 h-6 rounded-full p-1 flex items-center transition-colors ${!item.active ? 'bg-surface-300 justify-start' : 'bg-accent-purple justify-end'}`}>
                                    <div className="w-4 h-4 rounded-full bg-white shadow-sm"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Floating Elements */}
                <div className="absolute -right-12 top-20 glass-panel p-4 rounded-2xl animate-float-slow hidden md:block shadow-2xl border border-white/10">
                     <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-full bg-accent-pink/20 flex items-center justify-center text-accent-pink">
                            <i className="fi fi-sr-heart"></i>
                         </div>
                         <div>
                             <div className="text-xs text-gray-400 font-bold uppercase">Reputation</div>
                             <div className="font-bold text-lg">+1,250</div>
                         </div>
                     </div>
                </div>

                <div className="absolute -left-8 bottom-10 glass-panel p-4 rounded-2xl animate-float-delayed hidden md:block shadow-2xl border border-white/10">
                     <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                            <i className="fi fi-sr-shield-check"></i>
                         </div>
                         <div>
                             <div className="text-xs text-gray-400 font-bold uppercase">System Status</div>
                             <div className="font-bold text-lg text-green-400">Protected</div>
                         </div>
                     </div>
                </div>
            </div>
        </div>
      </main>

      {/* Feature Strip */}
      <div className="border-y border-white/5 bg-black/20 backdrop-blur-sm relative z-10">
          <div className="max-w-7xl mx-auto px-6 py-16">
              <div className="grid md:grid-cols-3 gap-12 text-center">
                  <div className="group">
                      <div className="w-16 h-16 mx-auto bg-surface-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg group-hover:bg-accent-purple/20 group-hover:text-accent-purple duration-300">
                          <i className="fi fi-sr-time-fast text-3xl"></i>
                      </div>
                      <h3 className="text-xl font-heading font-bold mb-3">99.99% Uptime</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">Hosted on high-availability clusters ensuring your server never goes offline.</p>
                  </div>
                  <div className="group">
                      <div className="w-16 h-16 mx-auto bg-surface-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg group-hover:bg-accent-orange/20 group-hover:text-accent-orange duration-300">
                         <i className="fi fi-sr-bolt text-3xl"></i>
                      </div>
                      <h3 className="text-xl font-heading font-bold mb-3">Zero Latency</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">Global edge network optimized specifically for speed and instant responses.</p>
                  </div>
                  <div className="group">
                      <div className="w-16 h-16 mx-auto bg-surface-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg group-hover:bg-accent-pink/20 group-hover:text-accent-pink duration-300">
                         <i className="fi fi-sr-apps text-3xl"></i>
                      </div>
                      <h3 className="text-xl font-heading font-bold mb-3">Fully Modular</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">Enable only what you need. Keep your bot lightweight and focused.</p>
                  </div>
              </div>
          </div>
      </div>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent-purple/5 pointer-events-none"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Ready to upgrade your server?</h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">Join thousands of communities already using Nyra to power their engagement and moderation.</p>
              <button className="bg-white text-black text-lg font-bold px-10 py-5 rounded-full hover:scale-105 transition-transform shadow-2xl shadow-white/10 flex items-center gap-3 mx-auto">
                  <i className="fi fi-brands-discord text-2xl"></i>
                  Add Nyra to Discord
              </button>
          </div>
      </section>

    </div>
  );
}
