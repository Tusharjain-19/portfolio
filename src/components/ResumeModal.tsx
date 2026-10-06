'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function ResumeModal({ 
  children, 
  resumeUrl 
}: { 
  children: React.ReactNode, 
  resumeUrl: string 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer inline-block w-full sm:w-auto">
        {children}
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-2 sm:p-4 md:p-6">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            {/* Modal Dialog (Full screen width & height) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full h-full max-w-6xl max-h-[96vh] bg-(--bg-primary) border border-(--border-color) rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-(--border-color) bg-(--bg-secondary)/90 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-(--accent)/15 border border-(--accent)/30 flex items-center justify-center text-(--accent)">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-sm sm:text-base font-bold text-(--text-primary)">
                      Tushar Jain - Resume
                    </h3>
                    <p className="text-[10px] sm:text-xs font-mono text-(--text-muted) uppercase">
                      B.E. Computer Science & Business Systems
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <Link
                    href="/resume"
                    target="_blank"
                    className="hidden sm:flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-(--text-primary) hover:text-(--accent) bg-(--bg-primary) hover:border-(--accent) border border-(--border-color) px-3 py-1.5 rounded-xl transition-all"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Full Page</span>
                  </Link>

                  <a 
                    href={resumeUrl}
                    download="Tushar_Jain_Resume.pdf"
                    className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-(--bg-primary) bg-(--accent) hover:opacity-90 px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span>Download</span>
                  </a>

                  <button 
                    onClick={() => setIsOpen(false)}
                    aria-label="Close modal"
                    className="p-1.5 text-(--text-muted) hover:text-(--text-primary) hover:bg-(--border-color)/40 rounded-xl transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content Body */}
              <div className="flex-1 w-full relative bg-neutral-900/40 overflow-hidden flex flex-col">
                {isLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-(--bg-primary) z-10">
                    <div className="w-10 h-10 border-2 border-(--accent)/30 border-t-(--accent) rounded-full animate-spin mb-4" />
                    <p className="font-mono text-xs uppercase tracking-widest text-(--text-muted) animate-pulse">
                      Rendering PDF Document...
                    </p>
                  </div>
                )}
                
                <iframe 
                  src={`${resumeUrl}#view=FitH&toolbar=0&navpanes=0`} 
                  className={`w-full h-full flex-1 border-none transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                  onLoad={() => setIsLoading(false)}
                  title="Tushar Jain Resume Preview"
                />

                {/* Mobile Floating Bar */}
                <div className="sm:hidden p-2.5 bg-(--bg-secondary) border-t border-(--border-color) flex items-center justify-between">
                  <span className="text-xs text-(--text-muted)">Having trouble viewing?</span>
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-(--accent) font-bold underline"
                  >
                    Open Full PDF
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
