'use client';

import React from 'react';

interface PreferredSourceButtonProps {
  siteUrl?: string;
  className?: string;
}

export default function PreferredSourceButton({
  siteUrl = 'https://www.tusharjain.in',
  className = '',
}: PreferredSourceButtonProps) {
  return (
    <div className={`inline-flex items-center ${className}`}>
      {/* Standard Google Preferred Source Widget Container */}
      <div 
        className="g-preferred-source" 
        data-site={siteUrl}
      />
      {/* Fallback link if script is blocked or external preference page is desired */}
      <noscript>
        <a 
          href="https://www.google.com/preferences/source" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs font-mono underline text-(--text-muted) hover:text-(--text-primary)"
        >
          Add to Google Preferred Sources
        </a>
      </noscript>
    </div>
  );
}
