import { cn } from '@/lib/utils';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  glow?: boolean;
}

export function Button({ className, variant = 'primary', size = 'md', glow = false, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-[14px] font-semibold transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden",
        
        // Variants
        variant === 'primary' && "bg-gradient-to-r from-primary to-primary-hover text-white hover:brightness-110 shadow-lg shadow-primary/20",
        variant === 'secondary' && "bg-surface hover:bg-surface-hover text-zinc-300 hover:text-white border border-white/10 hover:border-white/20",
        variant === 'danger' && "bg-danger/10 text-danger hover:bg-danger/20 border border-danger/20 hover:border-danger/40",
        variant === 'ghost' && "bg-transparent text-zinc-400 hover:text-white hover:bg-white/5",

        // Glow
        glow && variant === 'primary' && "shadow-[0_0_20px_-5px_var(--primary)]",

        // Sizes
        size === 'xs' && "px-2 py-1 text-[10px] h-6 min-w-16",
        size === 'sm' && "px-3 py-1.5 text-xs",
        size === 'md' && "px-5 py-2.5 text-sm",
        size === 'lg' && "px-8 py-4 text-base",
        
        className
      )}
      {...props}
    />
  );
}
