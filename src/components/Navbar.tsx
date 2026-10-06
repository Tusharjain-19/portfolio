'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { useSound } from '@/hooks/useSound';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Engineering', href: '/engineering' },
  { label: 'Research', href: '/research' },
  { label: 'Credentials', href: '/credentials' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { playSound, playToggleSound } = useSound();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [hash, setHash] = useState(() => typeof window !== 'undefined' ? window.location.hash : '');

  // Reset menu open state directly during render when route changes
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <header className="fixed top-2 sm:top-3 md:top-4 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 md:px-6 pointer-events-none">
        <div className="w-auto inline-flex bg-white/5 dark:bg-black/10 backdrop-blur-2xl border border-white/10 dark:border-white/5 rounded-full px-5 sm:px-8 md:px-10 h-12 sm:h-14 md:h-15 items-center justify-between pointer-events-auto shadow-[0_8px_32px_0_rgba(0,0,0,0.25)] transition-all duration-500 gap-6 md:gap-12 relative">
          
          {/* LOGO */}
          <Link 
            href="/" 
            className="flex items-center gap-1 font-bold text-sm sm:text-lg md:text-xl text-(--text-primary) hover:opacity-70 transition-opacity z-50 shrink-0"
          >
            <span className="font-heading italic font-normal tracking-tight truncate max-w-30 sm:max-w-none pr-2">tushar jain</span>
            <span className="font-heading tracking-tighter">.</span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-1 lg:gap-2 items-center">
            {NAV_ITEMS.map((item) => {
              const isActive = item.href === '/'
                ? pathname === '/' && hash === ''
                : pathname === item.href || pathname.startsWith(item.href) || pathname + hash === item.href;

              return (
                <Link 
                  key={item.label} 
                  href={item.href}
                  className={`px-3 lg:px-4 py-1.5 rounded-full text-[10px] lg:text-xs font-medium uppercase tracking-widest font-mono transition-all duration-300 ${
                    isActive
                      ? 'bg-(--accent) text-(--bg-primary)' 
                      : 'text-(--text-secondary) hover:text-(--text-primary) hover:bg-(--bg-secondary)'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* MOBILE CONTROLS */}
          <div className="flex items-center gap-1 md:hidden z-50">
            <button
              onClick={() => {
                toggleTheme();
                playSound('click');
                playToggleSound();
              }}
              className="p-2 text-(--text-secondary) hover:text-(--text-primary) transition-colors rounded-full"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* MOBILE MENU TOGGLE */}
            <button 
              className="text-(--text-secondary) hover:text-(--text-primary) p-2 -mr-2 shrink-0 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center gap-1.5">
                <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE OVERLAY NAV */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-3 top-20 z-40 bg-(--bg-primary) border border-(--border-color) rounded-3xl flex flex-col items-center justify-center gap-2.5 md:hidden p-6 shadow-2xl max-h-[85vh] overflow-y-auto"
          >
            {NAV_ITEMS.map((item, i) => {
              const isActive = item.href === '/'
                ? pathname === '/' && hash === ''
                : pathname === item.href || pathname.startsWith(item.href) || pathname + hash === item.href;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="w-full"
                >
                  <Link 
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block w-full text-center py-3 px-6 rounded-2xl text-lg font-heading tracking-widest transition-all ${
                      isActive 
                        ? 'bg-(--accent) text-(--bg-primary)' 
                        : 'text-(--text-secondary) hover:text-(--text-primary) hover:bg-(--bg-secondary)'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
