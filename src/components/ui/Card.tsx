import { cn } from '@/lib/utils';
import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'glass';
}

export function Card({ className, variant = 'default', ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[18px] p-6 transition-all duration-300",
        variant === 'default' && "bg-surface border border-white/5 hover:border-white/10",
        variant === 'elevated' && "bg-surface-hover border border-white/10 shadow-xl",
        variant === 'glass' && "bg-white/[0.03] backdrop-blur-xl border border-white/10",
        className
      )}
      {...props}
    />
  );
}
