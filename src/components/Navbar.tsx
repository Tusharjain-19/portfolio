'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PORTFOLIO } from '@/data/portfolio';
import { AnimatePresence, motion } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Research', href: '/research/dual-uuv-system' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [hash, setHash] = useState('');

  useEffect(() => {
    setHash(window.location.hash);
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-2 sm:top-3 md:top-4 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 md:px-6 pointer-events-none">
        <div className="w-auto inline-flex bg-[var(--bg-primary)]/80 backdrop-blur-xl border border-[var(--border-color)] rounded-full px-5 sm:px-8 md:px-10 h-12 sm:h-14 md:h-[60px] items-center justify-between pointer-events-auto shadow-2xl transition-all duration-500 gap-6 md:gap-12">
          
          {/* LOGO */}
          <Link 
            href="/" 
            className="flex items-center gap-1 font-bold text-sm sm:text-lg md:text-xl text-[var(--text-primary)] hover:opacity-70 transition-opacity z-50 shrink-0"
          >
            <span className="font-heading italic font-normal tracking-tight truncate max-w-[100px] sm:max-w-none">tushar jain</span>
            <span className="font-heading tracking-tighter">.</span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-1 lg:gap-2">
            {NAV_ITEMS.map((item) => {
               const isActive = item.href === '/'
                 ? pathname === '/' && hash === ''
                 : pathname === item.href || pathname + hash === item.href;
                 
               return (
                  <Link 
                    key={item.label} 
                    href={item.href}
                    className={`px-3 lg:px-4 py-1.5 rounded-full text-[10px] lg:text-xs font-medium uppercase tracking-widest font-mono transition-all duration-300 ${
                      isActive
                        ? 'bg-[var(--accent)] text-[var(--bg-primary)]' 
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                    }`}
                  >
                    {item.label}
                  </Link>
               );
            })}
          </nav>

          {/* MOBILE MENU TOGGLE */}
          <button 
            className="md:hidden text-[var(--text-secondary)] hover:text-[var(--text-primary)] z-50 p-2 -mr-2 shrink-0 transition-colors"
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
      </header>

      {/* MOBILE OVERLAY NAV */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-3 top-20 z-40 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-3xl flex flex-col items-center justify-center gap-4 md:hidden p-8 shadow-2xl"
          >
            {NAV_ITEMS.map((item, i) => {
              const isActive = item.href === '/'
                ? pathname === '/' && hash === ''
                : pathname === item.href || pathname + hash === item.href;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="w-full"
                >
                  <Link 
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block w-full text-center py-4 px-6 rounded-2xl text-lg font-heading tracking-widest transition-all ${
                      isActive 
                        ? 'bg-[var(--accent)] text-[var(--bg-primary)]' 
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
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
