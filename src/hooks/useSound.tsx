
'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';

type SoundType = 'hover' | 'click' | 'open' | 'close';

interface SoundContextType {
  isEnabled: boolean;
  toggleSound: () => void;
  playSound: (type: SoundType) => void;
  playChainSound: (intensity: number) => void;
  playToggleSound: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [isEnabled, setIsEnabled] = useState(false);
  // Refs for audio contexts/oscillators to avoid re-renders
  const audioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    // Check local storage on mount
    const saved = localStorage.getItem('sound-enabled');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (saved === 'true') setIsEnabled(true);
  }, []);

  const initAudio = useCallback(() => {
    if (!audioCtxRef.current) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
  }, []);

  const playToggleSound = useCallback(() => {
    if (!audioCtxRef.current) initAudio();
    const ctx = audioCtxRef.current;
    if (!ctx) return;
    
    if (ctx.state === 'suspended') ctx.resume();

    // Crisp zero-latency mechanical tick sound
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1200, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.015);

    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.015);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.015);
  }, [initAudio]);

  const toggleSound = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    localStorage.setItem('sound-enabled', String(newState));
    
    if (newState) {
      initAudio();
      // Play a tiny confirmation blip
      playTone(600, 0.05, 0.1); 
    }
  };

  const playTone = useCallback((freq: number, attack: number, decay: number) => {
    if (!audioCtxRef.current) initAudio();
    const ctx = audioCtxRef.current;
    if (!ctx) return;
    
    // Resume context if suspended (browser auto-play policy)
    if (ctx.state === 'suspended') ctx.resume();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    
    // Envelope
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + attack);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + attack + decay);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + attack + decay + 0.1);
  }, [initAudio]);

  const playSound = useCallback((type: SoundType) => {
    if (!isEnabled) return;

    switch (type) {
      case 'hover':
        playTone(800, 0.005, 0.03); 
        break;
      case 'click':
        playTone(600, 0.01, 0.1);
        break;
      case 'open':
        playTone(300, 0.05, 0.3);
        break;
      case 'close':
        playTone(200, 0.05, 0.15);
        break;
    }
  }, [isEnabled, playTone]);

  // Metallic chain sound generator based on intensity
  const playChainSound = useCallback((intensity: number) => {
    if (!isEnabled) return;
    if (!audioCtxRef.current) initAudio();
    const ctx = audioCtxRef.current;
    if (!ctx || ctx.state === 'suspended') return;
    
    // Base frequencies for metallic clink
    const baseFreqs = [1200, 2400, 3600];
    const pitchJitter = 0.8 + Math.random() * 0.4; // Random pitch variation
    
    const volume = Math.min(0.05, intensity * 0.005); // Map intensity to volume
    if (volume < 0.001) return;

    baseFreqs.forEach((freq) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.type = 'triangle';
        osc.frequency.value = freq * pitchJitter;
        
        gain.gain.setValueAtTime(0, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.005);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05 + Math.random() * 0.05);
        
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.15);
    });
  }, [isEnabled, initAudio]);

  return (
    <SoundContext.Provider value={{ isEnabled, toggleSound, playSound, playChainSound, playToggleSound }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
}
