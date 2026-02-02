"use client";
import Link from "next/link";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-accent-purple/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
       <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-accent-orange/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
       
       {/* Login Card */}
       <div className="w-full max-w-md relative z-10 animate-fade-in-up">
           <div className="glass-card p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/10 relative overflow-hidden group">
               <div className="text-center mb-12">
                   <div className="inline-flex items-center justify-center w-24 h-24 mb-6 relative">
                     <Image src="/nyralogo.png" alt="Nyra" fill className="object-contain" />
                   </div>
                   <h1 className="font-heading text-4xl font-bold mb-3 tracking-tight">Welcome Back</h1>
                   <p className="text-gray-400 text-lg">Manage your community with Nyra.</p>
               </div>

               <div className="space-y-6">
                   <button 
                        onClick={() => signIn('discord', { callbackUrl: '/dashboard' })}
                        className="w-full bg-[#5865F2] hover:bg-[#4752C4] transition-all py-4 px-6 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-[#5865F2]/20 hover:shadow-[#5865F2]/40 hover:-translate-y-1 group relative overflow-hidden"
                    >
                       <span className="relative z-10 flex items-center gap-3">
                           <i className="fi fi-brands-discord text-2xl flex items-center justify-center"></i>
                           Continue with Discord
                       </span>
                   </button>
                   
                   <p className="text-xs text-center text-gray-500 leading-relaxed max-w-xs mx-auto">
                       By continuing, you agree to our <Link href="#" className="text-white hover:underline decoration-accent-purple underline-offset-4">Terms of Service</Link> and <Link href="#" className="text-white hover:underline decoration-accent-purple underline-offset-4">Privacy Policy</Link>.
                   </p>
               </div>
           </div>
       </div>
    </div>
  );
}
