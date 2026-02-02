import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black/20 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-purple to-accent-pink flex items-center justify-center">
                                <i className="fi fi-br-star text-white text-xs mt-1"></i>
                            </div>
                            <span className="font-heading font-bold text-xl tracking-wide">Nyra</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            The next-generation modular Discord bot. 
                            Built for scale, designed for simplicity, and powered by advanced technology.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-surface-100 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all">
                                <i className="fi fi-brands-twitter text-lg mt-1"></i>
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-surface-100 flex items-center justify-center text-gray-400 hover:bg-[#5865F2] hover:text-white transition-all">
                                <i className="fi fi-brands-discord text-lg mt-1"></i>
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-surface-100 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white transition-all">
                                <i className="fi fi-brands-github text-lg mt-1"></i>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Product</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-accent-purple transition-colors">Features</Link></li>
                            <li><Link href="#" className="hover:text-accent-purple transition-colors">Premium</Link></li>
                            <li><Link href="#" className="hover:text-accent-purple transition-colors">Changelog</Link></li>
                            <li><Link href="#" className="hover:text-accent-purple transition-colors">Guide</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-accent-purple transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-accent-purple transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-accent-purple transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                    <p>© 2026 Nyra System. All rights reserved.</p>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        <span>All Systems Operational</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
