"use client";

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 relative overflow-hidden text-center">
       
       <div className="relative w-32 h-32 mb-8 animate-float">
            <Image src="/nyralogo.png" alt="Nyra" fill className="object-contain opacity-20" />
       </div>

       <h1 className="text-9xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 tracking-tighter mb-4">404</h1>
       <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
       <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-8">
           We couldn't find what you were looking for. It might have been removed or doesn't exist.
       </p>

        <Link href="/" className="px-8 py-3.5 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all flex items-center gap-2">
            Return Home
        </Link>
    </div>
  )
}
