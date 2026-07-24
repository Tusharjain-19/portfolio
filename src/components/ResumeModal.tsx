'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ResumeModal({ 
  children, 
  resumeUrl 
}: { 
  children: React.ReactNode, 
  resumeUrl: string 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Reset states when closed
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setShowPreview(false);
        setIsLoading(true);
      }, 300);
    }
  }, [isOpen]);

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer inline-block w-full sm:w-auto">
        {children}
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-() border border-() rounded-2xl shadow-2xl overflow-hidden flex flex-col"
              style={{ maxHeight: '90vh', minHeight: showPreview ? '80vh' : 'auto' }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-() bg-()/50">
                <h3 className="font-heading text-lg font-bold">Resume</h3>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-() rounded-full transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col relative bg-() overflow-hidden">
                {!showPreview ? (
                  <div className="flex flex-col items-center justify-center p-10 sm:p-16 gap-6">
                    <div className="w-16 h-16 rounded-full bg-()/10 flex items-center justify-center text-() mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center">How would you like to view it?</h2>
                    
                    <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full max-w-md">
                      <button 
                        onClick={() => setShowPreview(true)}
                        className="flex-1 py-4 px-6 bg-() border border-() rounded-xl font-bold font-mono text-sm uppercase tracking-wider hover:border-() hover:text-() transition-all"
                      >
                        Preview
                      </button>
                      <a 
                        href={resumeUrl}
                        download
                        className="flex-1 py-4 px-6 bg-() text-() border border-() rounded-xl font-bold font-mono text-sm uppercase tracking-wider text-center hover:opacity-90 transition-all flex items-center justify-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                        Download
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full flex-1 relative flex items-center justify-center min-h-125">
                    {isLoading && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-() z-10">
                        {/* Chrome Offline Dino Animation (CSS) */}
                        <div className="relative w-75 h-25 border-b-2 border-() overflow-hidden">
                            {/* Dino */}
                            <div className="absolute bottom-0 left-5 w-10 h-11 bg-() animate-bounce" style={{
                              clipPath: 'polygon(50% 0%, 100% 0, 100% 40%, 80% 40%, 80% 50%, 60% 50%, 60% 60%, 100% 60%, 100% 100%, 70% 100%, 70% 80%, 40% 80%, 40% 100%, 0 100%, 0 40%, 20% 40%, 20% 20%, 50% 20%)',
                              animationDuration: '0.4s'
                            }}></div>
                            {/* Cactus (Obstacles moving) */}
                            <div className="absolute bottom-0 w-6 h-8 bg-() animate-[slide_1.5s_linear_infinite]" style={{
                              clipPath: 'polygon(40% 0, 60% 0, 60% 30%, 100% 30%, 100% 60%, 60% 60%, 60% 100%, 40% 100%, 40% 50%, 0 50%, 0 20%, 40% 20%)',
                              right: '-30px'
                            }}></div>
                            <div className="absolute bottom-0 w-8 h-10 bg-() animate-[slide_2s_linear_infinite_0.75s]" style={{
                              clipPath: 'polygon(40% 0, 60% 0, 60% 30%, 100% 30%, 100% 60%, 60% 60%, 60% 100%, 40% 100%, 40% 50%, 0 50%, 0 20%, 40% 20%)',
                              right: '-30px'
                            }}></div>
                            {/* Cloud */}
                            <div className="absolute top-5 w-12 h-4 bg-() opacity-30 animate-[slide_4s_linear_infinite]" style={{
                              clipPath: 'ellipse(50% 50% at 50% 50%)',
                              right: '-50px'
                            }}></div>
                        </div>
                        
                        <p className="mt-8 font-mono text-sm uppercase tracking-widest text-() animate-pulse">
                          Loading Preview...
                        </p>
                        <style dangerouslySetInnerHTML={{__html: `
                          @keyframes slide {
                            0% { transform: translateX(300px); }
                            100% { transform: translateX(-400px); }
                          }
                        `}} />
                      </div>
                    )}
                    <iframe 
                      src={`${resumeUrl}#toolbar=0`} 
                      className={`w-full h-full min-h-[60vh] border-none transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                      onLoad={() => {
                        // Add a slight artificial delay so the animation is visible
                        setTimeout(() => setIsLoading(false), 1500);
                      }}
                      title="Resume Preview"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
