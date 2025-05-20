'use client';

import { useState, useEffect } from 'react';
import { ThemeToggle } from './theme-toggle';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState<'TOP' | 'RIGHT' | 'BOTTOM' | 'LEFT'>('TOP');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Improved rotating border animation - more controlled rotation timing
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection((prevState) => {
        const directions: Array<'TOP' | 'RIGHT' | 'BOTTOM' | 'LEFT'> = ['TOP', 'RIGHT', 'BOTTOM', 'LEFT'];
        const currentIndex = directions.indexOf(prevState);
        const nextIndex = (currentIndex + 1) % directions.length;
        return directions[nextIndex];
      });
    }, 1000); // Consistent timing for smoother transitions
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  // Border animation glow effect directions with enhanced blue-600 color (Tailwind blue-600: #2563eb)
  // Using a more intense blue with larger gradient spread for better visibility in both modes
  const movingMap = {
    TOP: "radial-gradient(30% 80% at 50% 0%, rgba(37, 99, 235, 1) 0%, rgba(59, 130, 246, 0.7) 50%, rgba(37, 99, 235, 0) 100%)",
    LEFT: "radial-gradient(30% 80% at 0% 50%, rgba(37, 99, 235, 1) 0%, rgba(59, 130, 246, 0.7) 50%, rgba(37, 99, 235, 0) 100%)",
    BOTTOM: "radial-gradient(30% 80% at 50% 100%, rgba(37, 99, 235, 1) 0%, rgba(59, 130, 246, 0.7) 50%, rgba(37, 99, 235, 0) 100%)",
    RIGHT: "radial-gradient(30% 80% at 100% 50%, rgba(37, 99, 235, 1) 0%, rgba(59, 130, 246, 0.7) 50%, rgba(37, 99, 235, 0) 100%)",
  };

  // Base highlight effect that's always active (orange)
  const highlight = "radial-gradient(75% 181.15% at 50% 50%, #F97316 0%, rgba(249, 115, 22, 0) 100%)";
  
  // New hover effect - more intense glow
  const hoverHighlight = "radial-gradient(75% 181.15% at 50% 50%, #FB923C 0%, #EA580C 50%, rgba(249, 115, 22, 0) 100%)";

  return (
    <div className="w-full flex justify-center fixed top-0 z-50 px-4 pt-4">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="relative w-full max-w-3xl"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Blue border animation - similar to HoverBorderGradient */}
        <motion.div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{
            filter: "blur(4px)",
            opacity: 1,
            position: "absolute",
            width: "100%",
            height: "100%",
            boxShadow: "0 0 8px 2px rgba(37, 99, 235, 0.5)",
          }}
          initial={{ background: movingMap[direction] }}
          animate={{ background: movingMap[direction] }}
          transition={{ 
            ease: "linear", 
            duration: 1
          }}
        />
        
        {/* Layer 2: Base glow effect that changes on hover */}
        <motion.div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{
            filter: "blur(6px)",
            mixBlendMode: "normal"
          }}
          animate={{
            background: hovered
              ? hoverHighlight
              : highlight,
          }}
          transition={{ ease: "linear", duration: 0.3 }}
        />
        
        {/* Background with slight transparency */}
        <div className={cn(
          "absolute inset-[2px] rounded-full bg-background/90 dark:bg-background/80 backdrop-blur-md",
          isScrolled ? "shadow-lg" : ""
        )} />

        {/* Navbar content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="text-xl font-bold group relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700">
                Arkan
              </span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-orange-700 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground transition-colors relative group py-1"
                >
                  {item.label}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-orange-700 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="p-1"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden absolute left-0 right-0 mt-2 p-3 rounded-lg bg-background/95 backdrop-blur-md shadow-lg border border-orange-500/20"
            >
              <div className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-orange-500/10 rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </div>
  );
}