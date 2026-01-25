import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative text-center">
        <h1 className="text-[12rem] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent select-none">
          404
        </h1>
        <h2 className="text-3xl font-bold mb-4 -mt-8">Page Not Found</h2>
        <p className="text-zinc-400 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="inline-flex px-8 py-4 rounded-2xl bg-white text-black font-bold hover:scale-105 transition-transform"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
