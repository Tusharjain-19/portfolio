
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
      
      {/* HEADER / NAVIGATION */}
      <nav className="p-6 md:p-12 flex justify-between items-center max-w-3xl mx-auto w-full">
         <Link href="/" className="font-bold text-lg hover:text-[var(--text-secondary)] transition-colors">
            {PORTFOLIO.profile.name}.
         </Link>
          <Link href="/" className="text-sm font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
            ← Back Home
         </Link>
      </nav>

      <div className="px-6 md:px-12 pb-20 max-w-3xl mx-auto space-y-20">
        
        {/* PAGE TITLE */}
        <header className="border-b border-[var(--border-color)] pb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-[var(--text-secondary)] font-light">How I think and build.</p>
        </header>

        {/* SECTION 1 - WHO I AM */}
        <section className="space-y-6 text-lg text-[var(--text-secondary)] leading-relaxed font-light">
            <h2 className="text-sm font-mono text-[var(--text-muted)] mb-6 uppercase tracking-widest block">Who I am</h2>
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
             <h2 className="text-sm font-mono text-[var(--text-muted)] mb-8 uppercase tracking-widest border-b border-[var(--border-color)] pb-2">How I Build</h2>
             <ul className="grid gap-6">
                {[
                    { title: "MVP First", desc: "Build the core value functionality first. Polish comes later." },
                    { title: "Debug Reality", desc: "Failures in production are better than successes in a simulation." },
                    { title: "Constraints Drive Design", desc: "Limited power, limited bandwidth, or limited time – these constraints force better engineering solutions." },
                    { title: "Don't Over-Engineer", desc: "If a spreadsheet works, don't build a database. Complexity is debt." }
                ].map((item) => (
                    <li key={item.title} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                        <span className="font-bold text-[var(--text-primary)] min-w-[180px]">{item.title}</span>
                        <span className="text-[var(--text-secondary)]">{item.desc}</span>
                    </li>
                ))}
             </ul>
        </section>

        {/* SECTION 3 - WHAT I CARE ABOUT */}
        <section>
            <h2 className="text-sm font-mono text-[var(--text-muted)] mb-8 uppercase tracking-widest border-b border-[var(--border-color)] pb-2">What I Care About</h2>
            <ul className="space-y-4 text-[var(--text-secondary)]">
                <li className="flex gap-3">
                    <span className="text-[var(--text-muted)]">▹</span>
                    <span><strong>Systems that work</strong> outside the lab environment.</span>
                </li>
                <li className="flex gap-3">
                    <span className="text-[var(--text-muted)]">▹</span>
                    <span><strong>Clarity over complexity</strong> in code, architecture, and communication.</span>
                </li>
                <li className="flex gap-3">
                    <span className="text-[var(--text-muted)]">▹</span>
                    <span><strong>Solving real problems</strong> for real people, not building toy projects.</span>
                </li>
                 <li className="flex gap-3">
                    <span className="text-[var(--text-muted)]">▹</span>
                    <span><strong>Learning by shipping</strong> projects, not just watching tutorials.</span>
                </li>
            </ul>
        </section>

         {/* SECTION 4 - WHAT I'M LEARNING */}
         <section>
            <h2 className="text-sm font-mono text-[var(--text-muted)] mb-8 uppercase tracking-widest border-b border-[var(--border-color)] pb-2">Currently Learning</h2>
             <div className="flex flex-wrap gap-2">
                {[
                    "MERN Stack",
                    "Data Structures & Algorithms (DSA)",
                    "System Design Fundamentals", 
                    "Advanced React Patterns", 
                    "Embedded Systems (ESP32)",
                    "Low-Cost SaaS Architecture"
                ].map((topic) => (
                    <span key={topic} className="px-3 py-1 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-muted)] rounded-full text-sm">
                        {topic}
                    </span>
                ))}
             </div>
        </section>

        {/* SECTION 5 - BACKGROUND */}
        <section>
             <h2 className="text-sm font-mono text-[var(--text-muted)] mb-8 uppercase tracking-widest border-b border-[var(--border-color)] pb-2">Background</h2>
             <div className="space-y-2 text-[var(--text-secondary)]">
                <p className="font-bold text-[var(--text-primary)]">{PORTFOLIO.education.degree}</p>
                <p>{PORTFOLIO.education.college}</p>
                <p className="text-[var(--text-muted)] font-mono text-sm">Graduation: {PORTFOLIO.education.graduation}</p>
             </div>
        </section>

        {/* SECTION 6 - CTA */}
        <section className="pt-12 border-t border-[var(--border-color)]">
            <h2 className="text-2xl font-bold mb-6">Let&apos;s build something real.</h2>
            <div className="flex gap-6">
                <Link href="/" className="text-[var(--text-muted)] hover:text-[var(--text-primary)] border-b border-[var(--border-color)] hover:border-[var(--text-primary)] transition-all pb-1">
                    View my work
                </Link>
                 <a href={`mailto:${PORTFOLIO.profile.socials.email}`} className="text-[var(--text-muted)] hover:text-[var(--text-primary)] border-b border-[var(--border-color)] hover:border-[var(--text-primary)] transition-all pb-1">
                    Get in touch
                </a>
            </div>
        </section>

      </div>
    </main>
  );
}
