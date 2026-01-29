
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PORTFOLIO } from '@/data/portfolio';

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

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <div className="w-full max-w-5xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-neutral-800 rounded-full px-6 h-16 flex items-center justify-between pointer-events-auto shadow-2xl shadow-black/5 transition-all duration-300 hover:shadow-black/10">
        
        {/* LOGO */}
        <Link href="/" className="font-bold text-lg text-white hover:opacity-70 transition-opacity z-50 tracking-tight">
          {PORTFOLIO.profile.name}<span className="text-neutral-500">.</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-1">
          {NAV_ITEMS.map((item) => {
             const isActive = pathname === item.href;
             return (
                <Link 
                  key={item.label} 
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
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
          className="md:hidden text-neutral-400 hover:text-white z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* MOBILE OVERLAY NAV */}
        {isOpen && (
          <nav className="fixed inset-x-4 top-24 sm:inset-0 sm:top-0 bg-[#0a0a0a] sm:bg-[#0a0a0a]/95 backdrop-blur-3xl rounded-3xl sm:rounded-none border border-neutral-800 sm:border-0 flex flex-col items-center justify-center gap-8 md:hidden z-40 p-8 shadow-2xl">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.label} 
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-neutral-400 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
