
import React from 'react';
import Link from 'next/link';
import { PORTFOLIO } from '@/data/portfolio';

export const metadata = {
  title: "About | Tushar Jain",
  description: "How I think and build engineering systems.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-neutral-800">
      
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 pb-16 sm:pb-20 max-w-3xl mx-auto space-y-14 sm:space-y-20">
        
        {/* PAGE TITLE */}
        <header className="border-b border-[var(--border-color)] pb-8 sm:pb-12 pt-6 sm:pt-8">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4">About Me</h1>
            <p className="text-base sm:text-xl text-[var(--text-secondary)] font-light">How I think and build.</p>
        </header>

        {/* SECTION 1 - WHO I AM */}
        <section className="space-y-4 sm:space-y-6 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-light">
            <h2 className="text-xs sm:text-sm font-mono text-[var(--text-muted)] mb-4 sm:mb-6 uppercase tracking-widest block">Who I am</h2>
            <p>
                I am an engineering student at {PORTFOLIO.education.college} (CSBS). My focus is not just on writing code, but on building systems that actually ship and solve real-world problems.
            </p>
            <p>
                I love solving <strong>real problems</strong> for real people. That&apos;s why I built <strong>PulsePredict AI</strong> (an affordable health monitor for elderly care) and <strong>BookMySlot</strong> (an ultra-low-cost B2B SaaS that helps small businesses manage reservations, appointments, and admin panels without expensive software).
            </p>
            <p>
                Whether it&apos;s wiring an ESP32 for a health monitor or architecting a Next.js frontend, I prefer practical execution over endless theory. I believe in building MVPs fast, breaking things early, and iterating based on real-world feedback rather than assumptions.
            </p>
        </section>

        {/* SECTION 2 - HOW I BUILD */}
        <section>
             <h2 className="text-xs sm:text-sm font-mono text-[var(--text-muted)] mb-6 sm:mb-8 uppercase tracking-widest border-b border-[var(--border-color)] pb-2">How I Build</h2>
             <ul className="grid gap-5 sm:gap-6">
                {[
                    { title: "MVP First", desc: "Build the core value functionality first. Polish comes later." },
                    { title: "Debug Reality", desc: "Failures in production are better than successes in a simulation." },
                    { title: "Constraints Drive Design", desc: "Limited power, limited bandwidth, or limited time – these constraints force better engineering solutions." },
                    { title: "Don't Over-Engineer", desc: "If a spreadsheet works, don't build a database. Complexity is debt." }
                ].map((item) => (
                    <li key={item.title} className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-6">
                        <span className="font-bold text-[var(--text-primary)] sm:min-w-[180px] text-sm sm:text-base">{item.title}</span>
                        <span className="text-[var(--text-secondary)] text-sm sm:text-base">{item.desc}</span>
                    </li>
                ))}
             </ul>
        </section>

        {/* SECTION 3 - WHAT I CARE ABOUT */}
        <section>
            <h2 className="text-xs sm:text-sm font-mono text-[var(--text-muted)] mb-6 sm:mb-8 uppercase tracking-widest border-b border-[var(--border-color)] pb-2">What I Care About</h2>
            <ul className="space-y-3 sm:space-y-4 text-[var(--text-secondary)]">
                {[
                    { bold: "Systems that work", rest: " outside the lab environment." },
                    { bold: "Clarity over complexity", rest: " in code, architecture, and communication." },
                    { bold: "Solving real problems", rest: " for real people, not building toy projects." },
                    { bold: "Learning by shipping", rest: " projects, not just watching tutorials." },
                ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm sm:text-base">
                        <span className="text-[var(--text-muted)] shrink-0">▹</span>
                        <span><strong>{item.bold}</strong>{item.rest}</span>
                    </li>
                ))}
            </ul>
        </section>

         {/* SECTION 4 - WHAT I'M LEARNING */}
         <section>
            <h2 className="text-xs sm:text-sm font-mono text-[var(--text-muted)] mb-6 sm:mb-8 uppercase tracking-widest border-b border-[var(--border-color)] pb-2">Currently Learning</h2>
             <div className="flex flex-wrap gap-2">
                {[
                    "MERN Stack",
                    "Data Structures & Algorithms (DSA)",
                    "System Design Fundamentals", 
                    "Advanced React Patterns", 
                    "Embedded Systems (ESP32)",
                    "Low-Cost SaaS Architecture"
                ].map((topic) => (
                    <span key={topic} className="px-3 py-1.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-muted)] rounded-full text-xs sm:text-sm">
                        {topic}
                    </span>
                ))}
             </div>
        </section>

        {/* SECTION 5 - BACKGROUND */}
        <section>
             <h2 className="text-xs sm:text-sm font-mono text-[var(--text-muted)] mb-6 sm:mb-8 uppercase tracking-widest border-b border-[var(--border-color)] pb-2">Background</h2>
             <div className="space-y-2 text-[var(--text-secondary)]">
                <p className="font-bold text-[var(--text-primary)] text-sm sm:text-base">{PORTFOLIO.education.degree}</p>
                <p className="text-sm sm:text-base">{PORTFOLIO.education.college}</p>
                <p className="text-[var(--text-muted)] font-mono text-xs sm:text-sm">Graduation: {PORTFOLIO.education.graduation}</p>
             </div>
        </section>

        {/* SECTION 6 - CTA */}
        <section className="pt-8 sm:pt-12 border-t border-[var(--border-color)]">
            <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6">Let&apos;s build something real.</h2>
            <div className="flex flex-wrap gap-4 sm:gap-6">
                <Link href="/" className="text-sm sm:text-base text-[var(--text-muted)] hover:text-[var(--text-primary)] border-b border-[var(--border-color)] hover:border-[var(--text-primary)] transition-all pb-1">
                    View my work
                </Link>
                 <a href={`mailto:${PORTFOLIO.profile.socials.email}`} className="text-sm sm:text-base text-[var(--text-muted)] hover:text-[var(--text-primary)] border-b border-[var(--border-color)] hover:border-[var(--text-primary)] transition-all pb-1">
                    Get in touch
                </a>
            </div>
        </section>

      </div>
    </main>
  );
}
