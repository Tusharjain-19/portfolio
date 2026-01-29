
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { isDaytime } from '@/utils/astronomy';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isAutoTheme: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Get theme based on real time
 * 06:00 - 17:59 = Light (Day)
 * 18:00 - 05:59 = Dark (Night)
 */
function getAutoTheme(): Theme {
  return isDaytime(new Date()) ? 'light' : 'dark';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isAutoTheme, setIsAutoTheme] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Initialize theme
  useEffect(() => {
    setMounted(true);
    
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const savedAuto = localStorage.getItem('theme-auto');
    
    if (savedTheme && savedAuto === 'false') {
      // User has manually set a preference
      setTheme(savedTheme);
      setIsAutoTheme(false);
    } else {
      // Use real-time based theme
      const autoTheme = getAutoTheme();
      setTheme(autoTheme);
      setIsAutoTheme(true);
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    root.setAttribute('data-theme', theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    setIsAutoTheme(false);
    localStorage.setItem('theme', newTheme);
    localStorage.setItem('theme-auto', 'false');
  };

  // Return safe default during SSR
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isAutoTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Safe default during SSR
    return { theme: 'dark' as Theme, toggleTheme: () => {}, isAutoTheme: true };
  }
  return context;
}
