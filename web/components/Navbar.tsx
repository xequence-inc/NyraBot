import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";

export default function Navbar() {
  return (
      <nav className="fixed w-full z-50 transition-all duration-300 backdrop-blur-md bg-background/50 border-b border-white/5 top-0">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
             <div className="w-10 h-10 relative">
                <Image src="/nyralogo.png" alt="Nyra Logo" fill className="object-contain" />
             </div>
             <span className="font-heading font-bold text-xl tracking-wide group-hover:text-accent-purple transition-colors">Nyra</span>
          </Link>

          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <Link href="/#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
            <Link href="/support" className="hover:text-white transition-colors">Support</Link>
          </div>

          <div className="flex items-center gap-4">
             <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center h-full">Log In</Link>
             <Link href="/dashboard" className="bg-white text-black hover:bg-gray-200 transition-colors px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-white/5 flex items-center gap-2">
                Dashboard
                <Icon name="arrow-right" className="text-xs" />
             </Link>
          </div>
        </div>
      </nav>
  );
}
