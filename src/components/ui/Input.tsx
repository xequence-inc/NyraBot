import { cn } from '@/lib/utils';
import React from 'react';

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full rounded-xl bg-surface-hover/50 border border-white/10 px-4 py-3 text-sm text-white placeholder-zinc-500",
        "focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300",
        "hover:bg-surface-hover hover:border-white/20",
        className
      )}
      {...props}
    />
  );
}
