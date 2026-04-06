
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PORTFOLIO } from '@/data/portfolio';
import { AnimatePresence, motion } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Research', href: '/research/dual-uuv-system' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [hash, setHash] = useState('');

  React.useEffect(() => {
    setHash(window.location.hash);
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-3 sm:top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 md:px-6 pointer-events-none">
        <div className="w-full max-w-5xl bg-[#0a0a0a]/85 backdrop-blur-xl border border-neutral-800 rounded-full px-3 sm:px-4 md:px-6 h-11 sm:h-12 md:h-14 flex items-center justify-between pointer-events-auto shadow-2xl shadow-black/10 transition-all duration-300">
          
          {/* LOGO */}
          <Link 
            href="/" 
            className="font-bold text-sm sm:text-base md:text-lg text-white hover:opacity-70 transition-opacity z-50 tracking-tight shrink-0"
          >
            {PORTFOLIO.profile.name}<span className="text-neutral-500">.</span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-0.5 lg:gap-1">
            {NAV_ITEMS.map((item) => {
               const isActive = item.href === '/'
                 ? pathname === '/' && hash === ''
                 : pathname === item.href || pathname + hash === item.href;
                 
               return (
                  <Link 
                    key={item.label} 
                    href={item.href}
                    onClick={() => {
                      if (item.href.includes('#')) {
                        setHash('#' + item.href.split('#')[1]);
                      } else {
                        setHash('');
                      }
                    }}
                    className={`px-3 lg:px-4 py-1.5 lg:py-2 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-white text-[#0a0a0a]' 
                        : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                    }`}
                  >
                    {item.label}
                  </Link>
               );
            })}
          </nav>

          {/* MOBILE MENU TOGGLE */}
          <button 
            className="md:hidden text-neutral-400 hover:text-white z-50 p-2 -mr-1 shrink-0"
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

      {/* MOBILE OVERLAY NAV — Full Screen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-3 top-16 sm:top-18 z-40 bg-[#0a0a0a] border border-neutral-800 rounded-3xl flex flex-col items-center justify-center gap-2 md:hidden p-6 shadow-2xl"
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
                    onClick={() => {
                      setIsOpen(false);
                      if (item.href.includes('#')) setHash('#' + item.href.split('#')[1]);
                      else setHash('');
                    }}
                    className={`block w-full text-center py-3 px-6 rounded-xl text-lg font-bold transition-all ${
                      isActive 
                        ? 'bg-white text-black' 
                        : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
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
