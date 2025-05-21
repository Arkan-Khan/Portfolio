'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10 rounded-full bg-secondary" />;
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={cn(
        'rounded-full w-10 h-10 transition-all duration-300',
        theme === 'dark' 
          ? 'bg-slate-800 text-yellow-300 hover:text-yellow-200 border-slate-700 hover:border-slate-600' 
          : 'bg-slate-100 text-slate-900 hover:text-slate-700 border-slate-200'
      )}
      aria-label="Toggle theme"
    >
      <Sun 
        className={cn(
          'h-5 w-5 absolute transition-all duration-300',
          theme === 'dark' ? 'opacity-0 scale-0 rotate-90' : 'opacity-100 scale-100 rotate-0'
        )} 
      />
      <Moon 
        className={cn(
          'h-5 w-5 absolute transition-all duration-300',
          theme === 'dark' ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 rotate-90'
        )} 
      />
    </Button>
  );
}