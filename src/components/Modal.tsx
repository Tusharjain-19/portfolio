
'use client';

import React, { useEffect, useCallback, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSound } from '@/hooks/useSound';
import { motion, AnimatePresence } from 'framer-motion';

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const { playSound } = useSound();

  // Play open sound on mount
  useEffect(() => {
    playSound('open');
  }, [playSound]);

  const onDismiss = useCallback(() => {
    playSound('close');
    setIsVisible(false);
    setTimeout(() => {
        router.push('/#projects'); 
    }, 300);
  }, [router, playSound]);

  // Handle escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onDismiss]);

  // Handle click outside
  const onClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      onDismiss();
    }
  };

  // Lock Body Scroll and stop Lenis from scrolling
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = originalStyle;
      document.documentElement.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          ref={overlayRef}
          onClick={onClick}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{ touchAction: 'none' }}
        >
          <motion.div 
            ref={contentRef}
            data-lenis-prevent
            className="relative w-full max-w-4xl overflow-y-auto overscroll-contain bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg shadow-2xl no-scrollbar"
            layoutId="modal-content"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ 
              maxHeight: 'calc(100vh - 4rem)',
            }}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
             {/* Close Button - Floats nicely */}
            <button 
                onClick={onDismiss}
                className="absolute top-6 right-6 z-20 w-8 h-8 flex items-center justify-center bg-[var(--text-primary)]/10 text-[var(--text-primary)] rounded-full hover:bg-[var(--text-primary)]/20 transition-all backdrop-blur-md"
                data-cursor-text="CLOSE"
            >
                ✕
            </button>
            <div className="relative z-10">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
