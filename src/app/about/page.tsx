
import React from 'react';
import Link from 'next/link';
import { PORTFOLIO } from '@/data/portfolio';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: "About",
  description: "The story of Tushar Jain, engineering student and builder.",
};

export default function AboutPage() {
  return (
    <main className="theme-jaisalmer bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[var(--accent)] selection:text-[var(--bg-primary)] transition-colors duration-500 font-body relative overflow-hidden">
      
      {/* Dot Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
           style={{
             backgroundImage: 'radial-gradient(circle at 2px 2px, var(--border-color) 1px, transparent 0)',
             backgroundSize: '48px 48px'
           }}
      />

      <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-16 pt-24 sm:pt-32 pb-16 sm:pb-24 max-w-4xl mx-auto space-y-16 sm:space-y-24">
        
        {/* PAGE TITLE - Chapter 0 */}
        <header className="text-center space-y-6 sm:space-y-8 pb-10 border-b border-[var(--border-color)]">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold font-heading text-[var(--text-primary)] tracking-tight">
              The Journey
            </h1>
            <p className="text-xl sm:text-2xl text-[var(--text-secondary)] font-light max-w-2xl mx-auto">
                A narrative of engineering, curiosity, and the art of building.
            </p>
        </header>

        {/* CHAPTER 1 - The Concept */}
        <ScrollReveal className="relative pl-6 sm:pl-12 border-l border-[var(--accent-muted)]">
            <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-[var(--accent)]" />
            <h2 className="text-sm font-mono text-[var(--accent)] mb-4 uppercase tracking-[0.2em]">Chapter I. The Concept</h2>
            <div className="space-y-6 text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed font-light">
                <p>
                    I am an engineering student at BMS College of Engineering, Bengaluru. But beyond the classroom, I view engineering as a craft—a medium to solve friction in the real world.
                </p>
                <p>
                    My work spans frontend aesthetics, backend logic, and embedded systems hardware. I don&apos;t just write code; I build tools that people actually use.
                </p>
            </div>
        </ScrollReveal>

        {/* CHAPTER 2 - Solving Friction */}
        <ScrollReveal className="relative pl-6 sm:pl-12 border-l border-[var(--accent-muted)]">
             <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-[var(--accent)]" />
             <h2 className="text-sm font-mono text-[var(--accent)] mb-4 uppercase tracking-[0.2em]">Chapter II. Solving Friction</h2>
             <div className="space-y-6 text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed font-light">
                <p>
                    Every project I&apos;ve built was born out of frustration. <strong>NotesCSBS</strong> was created to untangle the chaos of scattered study materials. <strong>Jaipur Ride</strong> was built because navigating public transport shouldn&apos;t require decoding ten different WhatsApp messages.
                </p>
                <p>
                    I believe in <em>MVP First</em>. Build the core mechanism. Test it. Break it. Refine it. Let the user&apos;s need dictate the architecture, not the other way around.
                </p>
             </div>
        </ScrollReveal>

        {/* CHAPTER 3 - Hardware & Health */}
        <ScrollReveal className="relative pl-6 sm:pl-12 border-l border-[var(--accent-muted)]">
             <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-[var(--accent)]" />
             <h2 className="text-sm font-mono text-[var(--accent)] mb-4 uppercase tracking-[0.2em]">Chapter III. The Physical Realm</h2>
             <div className="space-y-6 text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed font-light">
                <p>
                    Software is infinite, but hardware grounds you in reality. Working on <strong>PulsePredict</strong> (Vital Health Tech) taught me the constraints of the physical world.
                </p>
                <p>
                    Building a sub-INR 6000 wearable for elderly care meant fighting with BLE stacks, tuning IMU sensor thresholds to prevent false fall detections, and understanding the true cost of making technology accessible to 140 million Indians.
                </p>
             </div>
        </ScrollReveal>

        {/* CHAPTER 4 - The Craft */}
        <ScrollReveal className="relative pl-6 sm:pl-12 border-l border-[var(--accent-muted)]">
             <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-[var(--accent)]" />
             <h2 className="text-sm font-mono text-[var(--accent)] mb-4 uppercase tracking-[0.2em]">Chapter IV. The Craft</h2>
             <ul className="grid sm:grid-cols-2 gap-8 text-[var(--text-secondary)] font-light mt-8">
                <li className="p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)] rounded-2xl hover:border-[var(--accent)] transition-colors">
                    <strong className="block text-[var(--text-primary)] font-heading text-2xl mb-2">Simplicity</strong>
                    Clear UI over complex dashboards. If it needs a manual, it&apos;s broken.
                </li>
                <li className="p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)] rounded-2xl hover:border-[var(--accent)] transition-colors">
                    <strong className="block text-[var(--text-primary)] font-heading text-2xl mb-2">Systems</strong>
                    Data structures to hardware interrupts, I care about the whole vertical slice.
                </li>
             </ul>
        </ScrollReveal>

        {/* EPILOGUE - CTA */}
        <ScrollReveal className="pt-16 border-t border-[var(--border-color)] text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-8 text-[var(--text-primary)]">The story continues.</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/projects" className="px-8 py-4 bg-[var(--accent)] text-[var(--bg-primary)] font-bold rounded-full hover:scale-105 transition-transform tracking-wide">
                    View the Archives
                </Link>
                 <a href={`mailto:${PORTFOLIO.profile.socials.email}`} className="px-8 py-4 border border-[var(--accent)] text-[var(--accent)] font-bold rounded-full hover:bg-[var(--accent)] hover:text-[var(--bg-primary)] transition-all tracking-wide">
                    Start a Dialogue
                </a>
            </div>
        </ScrollReveal>

      </div>
    </main>
  );
}
