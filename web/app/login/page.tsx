import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute -top-20 -left-20 w-96 h-96 bg-accent-purple/20 rounded-full blur-[100px] pointer-events-none"></div>
       <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent-orange/10 rounded-full blur-[100px] pointer-events-none"></div>

       {/* Login Card */}
       <div className="w-full max-w-md relative z-10">
           <div className="glass-card p-8 md:p-10 rounded-3xl shadow-2xl">
               <div className="text-center mb-10">
                   <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-purple to-accent-pink mb-6 shadow-lg shadow-accent-purple/20">
                     <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                   </div>
                   <h1 className="font-heading text-3xl font-bold mb-2">Welcome Back</h1>
                   <p className="text-gray-400">Login to manage your communities.</p>
               </div>

               <div className="space-y-4">
                   <button className="w-full bg-[#5865F2] hover:bg-[#4752C4] transition-colors py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-[#5865F2]/20 group">
                       <svg className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 127 96"><path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.07 72.07 0 0 0-3.36 6.83 97.96 97.96 0 0 0-29.11 0A72.37 72.37 0 0 0 45.64 0a105.15 105.15 0 0 0-26.25 8.09C2.79 32.65-1.71 56.6.54 80.21h27.1Z" fill="#fff"/></svg>
                       Login with Discord
                   </button>
               </div>

                <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm">
                    <p className="text-gray-500">By logging in, you agree to our <Link href="#" className="text-accent-purple hover:underline">Terms</Link> and <Link href="#" className="text-accent-purple hover:underline">Privacy Policy</Link>.</p>
                </div>
           </div>
           
           <div className="text-center mt-6">
                <Link href="/" className="text-gray-500 hover:text-white transition-colors text-sm font-medium">← Back to Home</Link>
           </div>
       </div>
    </div>
  );
}
