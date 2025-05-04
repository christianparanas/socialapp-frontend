"use client";

import { cn } from '@/lib/utils';

export function Button({ className, children, ...props }) {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}