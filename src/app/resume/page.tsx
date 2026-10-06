import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume - Tushar Jain | Computer Science & Software Engineering',
  description: 'View and download the complete resume and CV of Tushar Jain, CSBS engineering student at BMSCE Bengaluru.',
  alternates: {
    canonical: 'https://www.tusharjain.in/resume',
  },
};

export default function ResumePage() {
  const resumeUrl = '/resume.pdf';

  return (
    <div className="min-h-screen bg-(--bg-primary) text-(--text-primary) flex flex-col font-body">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-(--bg-secondary)/80 backdrop-blur-md border-b border-(--border-color) px-4 sm:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link 
            href="/"
            className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-widest text-(--text-secondary) hover:text-(--text-primary) transition-colors py-1.5 px-3 rounded-lg border border-(--border-color) hover:border-(--accent)"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Portfolio
          </Link>
          <span className="hidden sm:inline font-heading font-bold text-sm sm:text-base text-(--text-primary)">
            Tushar Jain - Resume
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-(--text-primary) bg-(--bg-secondary) hover:bg-(--accent)/10 hover:border-(--accent) border border-(--border-color) px-3 sm:px-4 py-2 rounded-xl transition-all"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span className="hidden sm:inline">Open in New Tab</span>
            <span className="sm:hidden">New Tab</span>
          </a>

          <a
            href={resumeUrl}
            download="Tushar_Jain_Resume.pdf"
            className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-(--bg-primary) bg-(--accent) hover:opacity-90 px-3 sm:px-4 py-2 rounded-xl font-bold transition-all shadow-md"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download</span>
          </a>
        </div>
      </header>

      {/* Main Full-Page PDF Container */}
      <main className="flex-1 w-full flex flex-col items-center justify-center p-2 sm:p-4 md:p-6 bg-(--bg-primary)">
        <div className="w-full max-w-5xl h-[calc(100vh-6rem)] bg-white rounded-2xl overflow-hidden border border-(--border-color) shadow-2xl relative">
          <iframe
            src={`${resumeUrl}#view=FitH&toolbar=0&navpanes=0`}
            className="w-full h-full border-none"
            title="Tushar Jain Resume"
          />
        </div>
      </main>
    </div>
  );
}
