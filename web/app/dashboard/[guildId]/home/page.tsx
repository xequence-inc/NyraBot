export default function ServerHome() {
    return (
      <div className="p-8 pt-24 max-w-6xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
              <div>
                  <h2 className="text-3xl font-heading font-bold">Button Roles</h2>
                  <p className="text-gray-400">Distribute roles within your server using awesome buttons.</p>
              </div>
              <button className="bg-surface-200 hover:bg-surface-300 transition-colors px-6 py-2 rounded-lg font-medium border border-white/5">
                  Discard
              </button>
          </div>
  
          {/* Mock Grid based on Design */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Settings Column */}
              <div className="lg:col-span-1 space-y-6">
                  <div className="glass-panel p-6 rounded-3xl space-y-4">
                      <h3 className="font-bold text-lg">Settings</h3>
                      
                      <div>
                          <label className="text-xs text-gray-400 uppercase font-bold">Message Name</label>
                          <input type="text" className="w-full bg-surface-100 border border-white/5 rounded-xl px-4 py-3 mt-2 text-sm focus:outline-none focus:border-accent-purple" placeholder="Enter name..." />
                      </div>
  
                      <div className="grid grid-cols-2 gap-4">
                          <div>
                              <label className="text-xs text-gray-400 uppercase font-bold">Channel</label>
                              <div className="mt-2 text-sm bg-surface-100 p-3 rounded-xl">General</div>
                          </div>
                          <div>
                              <label className="text-xs text-gray-400 uppercase font-bold">Type</label>
                              <div className="mt-2 text-sm bg-surface-100 p-3 rounded-xl">Verify</div>
                          </div>
                      </div>
                  </div>
              </div>
  
              {/* Preview Column */}
              <div className="lg:col-span-1 space-y-6">
                  <div className="glass-panel p-6 rounded-3xl">
                      <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center">bot</div>
                          <div className="flex-1 space-y-2">
                              <div className="flex items-center gap-2">
                                  <span className="font-bold text-sm">Phantom</span>
                                  <span className="bg-[#5865F2] text-[10px] text-white px-1 rounded">BOT</span>
                                  <span className="text-xs text-gray-500">Today at 6:30 PM</span>
                              </div>
                              
                              <div className="bg-[#2B2D31] rounded p-4 border-l-4 border-accent-purple max-w-sm">
                                  <div className="flex items-center gap-2 mb-2">
                                      <div className="w-6 h-6 rounded-full bg-gray-500"></div>
                                      <span className="font-bold text-sm">DARKIE_</span>
                                  </div>
                                  <h4 className="font-bold text-base mb-1">Get your roles!</h4>
                                  <p className="text-sm text-gray-300 mb-3">Below with the click of a button!</p>
                                  
                                  <div className="flex gap-2">
                                      <button className="bg-[#5865F2] text-white text-xs px-3 py-1.5 rounded hover:bg-[#4752C4]">Master Chief</button>
                                       <button className="bg-gray-600 text-white text-xs px-3 py-1.5 rounded">Forerunner</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
  
          </div>
      </div>
    )
  }
