'use client';

import React, { useEffect, useState } from 'react';
import Script from 'next/script';

interface PreferredSourceButtonProps {
  siteUrl?: string;
  className?: string;
  theme?: 'auto' | 'dark' | 'light';
  showLabel?: boolean;
}

export default function PreferredSourceButton({
  siteUrl = 'https://www.tusharjain.in',
  className = '',
  theme = 'auto',
  showLabel = true,
}: PreferredSourceButtonProps) {
  const [currentUrl, setCurrentUrl] = useState<string>(siteUrl);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const googleSearchPrefUrl = `https://www.google.com/preferences/source?q=${encodeURIComponent(siteUrl)}`;

  return (
    <div className={`group relative inline-flex flex-col gap-1.5 ${className}`}>
      {/* Async loading of Google Preferred Sources Client Library */}
      <Script
        src="https://www.gstatic.com/preferredsources/v1/preferred-sources.js"
        strategy="lazyOnload"
      />

      {showLabel && (
        <span className="text-[10px] font-mono tracking-widest uppercase text-(--text-muted) flex items-center gap-1.5 opacity-80">
          <svg className="w-3 h-3 text-amber-400 inline" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          Google Search Preference
        </span>
      )}

      {/* Container for Google Interactive Preferred Source Badge */}
      <div className="relative inline-flex items-center rounded-lg border border-(--border-color) bg-(--bg-secondary)/60 backdrop-blur-md px-3 py-2 transition-all duration-300 hover:border-(--accent) hover:shadow-sm">
        <div
          className="g-preferred-source"
          data-site={siteUrl}
          data-theme={theme}
          data-return-url={currentUrl}
        />

        {/* Fallback link if JS is disabled or script fails to load */}
        <noscript>
          <a
            href={googleSearchPrefUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-(--text-secondary) hover:text-(--text-primary) underline underline-offset-4 flex items-center gap-1"
          >
            <span>Star on Google Search</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </noscript>
      </div>

      {/* Dynamic CTA Note */}
      <p className="text-[11px] font-light text-(--text-muted) leading-tight opacity-75">
        Prioritize <span className="font-medium text-(--text-primary)">tusharjain.in</span> in Google Search & Discover AI overviews.
      </p>
    </div>
  );
}

