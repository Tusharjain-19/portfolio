'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Research', href: '/research', hasDropdown: true },
  { label: 'Credentials', href: '/credentials' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const RESEARCH_ITEMS = [
  {
    title: 'Dual-UUV Maritime Surveillance',
    desc: 'Human-Supervised Autonomous Robotics & Extended Kalman Filter',
    href: '/research/dual-uuv-system',
    badge: 'Systems Architecture'
  },
  {
    title: 'Does Mobile Detox Improve Sleep Quality?',
    desc: 'Statistical Data Analysis, Primary Survey & Hypothesis Testing (p < 0.01)',
    href: '/research/mobile-detox-sleep-quality',
    badge: 'Data Science'
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isResearchHovered, setIsResearchHovered] = useState(false);
  const pathname = usePathname();
  const [hash, setHash] = useState(() => typeof window !== 'undefined' ? window.location.hash : '');

  // Reset menu open state directly during render when route changes
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
    setIsResearchHovered(false);
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
            <span className="font-heading italic font-normal tracking-tight truncate max-w-[120px] sm:max-w-none pr-2">tushar jain</span>
            <span className="font-heading tracking-tighter">.</span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-1 lg:gap-2 items-center">
            {NAV_ITEMS.map((item) => {
              const isActive = item.href === '/'
                ? pathname === '/' && hash === ''
                : pathname === item.href || pathname.startsWith(item.href) || pathname + hash === item.href;
                
              if (item.hasDropdown) {
                return (
                  <div 
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setIsResearchHovered(true)}
                    onMouseLeave={() => setIsResearchHovered(false)}
                  >
                    <Link 
                      href={item.href}
                      className={`px-3 lg:px-4 py-1.5 rounded-full text-[10px] lg:text-xs font-medium uppercase tracking-widest font-mono transition-all duration-300 flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-(--accent) text-(--bg-primary)' 
                          : 'text-(--text-secondary) hover:text-(--text-primary) hover:bg-(--bg-secondary)'
                      }`}
                    >
                      <span>{item.label}</span>
                      <svg className={`w-3 h-3 transition-transform ${isResearchHovered ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>

                    {/* DROPDOWN POPOVER */}
                    <AnimatePresence>
                      {isResearchHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full right-0 sm:left-1/2 sm:-translate-x-1/2 mt-2 w-80 p-3 bg-(--bg-primary) border border-(--border-color) rounded-2xl shadow-2xl backdrop-blur-xl z-50 space-y-2"
                        >
                          <div className="px-3 py-1.5 text-[9px] font-mono text-(--text-muted) uppercase tracking-widest border-b border-(--border-color)">
                            Select Research Project
                          </div>

                          {RESEARCH_ITEMS.map((res) => (
                            <Link
                              key={res.href}
                              href={res.href}
                              onClick={() => setIsResearchHovered(false)}
                              className="block p-3 rounded-xl hover:bg-(--bg-secondary) transition-colors group/item"
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs font-bold text-(--text-primary) group-hover/item:text-blue-500 transition-colors">
                                  {res.title}
                                </span>
                                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                                  {res.badge}
                                </span>
                              </div>
                              <p className="text-[10px] text-(--text-muted) font-light line-clamp-2">
                                {res.desc}
                              </p>
                            </Link>
                          ))}

                          <Link
                            href="/research"
                            onClick={() => setIsResearchHovered(false)}
                            className="block text-center py-2 text-[10px] font-mono text-blue-600 dark:text-blue-400 hover:underline uppercase tracking-wider font-bold pt-2 border-t border-(--border-color)"
                          >
                            Explore All Research Index →
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

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

          {/* MOBILE MENU TOGGLE */}
          <button 
            className="md:hidden text-(--text-secondary) hover:text-(--text-primary) z-50 p-2 -mr-2 shrink-0 transition-colors"
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
            className="fixed inset-x-3 top-20 z-40 bg-(--bg-primary) border border-(--border-color) rounded-3xl flex flex-col items-center justify-center gap-3 md:hidden p-6 shadow-2xl max-h-[85vh] overflow-y-auto"
          >
            {NAV_ITEMS.map((item, i) => {
              const isActive = item.href === '/'
                ? pathname === '/' && hash === ''
                : pathname === item.href || pathname + hash === item.href;

              if (item.hasDropdown) {
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="w-full space-y-2"
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

                    {/* Mobile Sub Links */}
                    <div className="grid grid-cols-1 gap-2 pl-4 pr-2 border-l-2 border-blue-500/30">
                      {RESEARCH_ITEMS.map((res) => (
                        <Link
                          key={res.href}
                          href={res.href}
                          onClick={() => setIsOpen(false)}
                          className="p-2.5 rounded-xl bg-(--bg-secondary) border border-(--border-color) text-xs font-mono text-(--text-primary) flex items-center justify-between"
                        >
                          <span className="truncate pr-2">{res.title}</span>
                          <span className="text-[8px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-500 shrink-0 font-sans">
                            {res.badge}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                );
              }

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
