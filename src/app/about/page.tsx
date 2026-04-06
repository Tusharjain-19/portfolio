
import React from 'react';
import Link from 'next/link';
import { PORTFOLIO } from '@/data/portfolio';
import { ChevronRight } from '@/components/Icons';

export const metadata = {
  title: "About | Tushar Jain",
  description: "Engineering student building practical, real-world products across frontend, backend, and embedded systems.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-(--bg-primary) text-(--text-primary) selection:bg-neutral-800">
      
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 pb-16 sm:pb-20 max-w-3xl mx-auto space-y-14 sm:space-y-20">
        
        {/* PAGE TITLE */}
        <header className="border-b border-(--border-color) pb-8 sm:pb-12 pt-6 sm:pt-8">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4">About Me</h1>
            <p className="text-base sm:text-xl text-(--text-secondary) font-light">How I think and build.</p>
        </header>

        {/* SECTION 1 - WHO I AM */}
        <section className="space-y-4 sm:space-y-6 text-base sm:text-lg text-(--text-secondary) leading-relaxed font-light">
            <h2 className="text-xs sm:text-sm font-mono text-(--text-muted) mb-4 sm:mb-6 uppercase tracking-widest block">The Concept</h2>
            <p>
                I am an engineering student at BMS College of Engineering, Bengaluru (CSBS). I focus on building real, working products across frontend, backend, and embedded systems; not just writing code, but solving practical problems.
            </p>
            <p>
                Most of what I build comes from real frustrations. I created <strong>NotesCSBS</strong> to organize scattered study resources into one simple platform, and <strong>Jaipur Ride</strong> to make public transport information easier to access. Alongside this, I’m working on a health-tech project focused on affordable monitoring using embedded systems.
            </p>
            <p>
                I enjoy building end-to-end systems from designing clean frontend interfaces to handling backend logic and integrating hardware when needed. Whether it’s a React-based web app or an ESP32-based device, I prefer practical execution over theory.
            </p>
        </section>

        {/* SECTION 2 - HOW I BUILD */}
        <section>
             <h2 className="text-xs sm:text-sm font-mono text-(--text-muted) mb-6 sm:mb-8 uppercase tracking-widest border-b border-(--border-color) pb-2">How I Build</h2>
             <ul className="grid gap-5 sm:gap-6">
                {[
                    { title: "MVP First", desc: "I focus on building the core functionality that delivers value, then improve it step by step." },
                    { title: "Learn by Building", desc: "Most of my learning comes from building real projects, debugging issues, and improving them over time." },
                    { title: "Keep It Simple", desc: "I avoid unnecessary complexity and try to design systems that are easy to use and maintain." },
                    { title: "Iterate Fast", desc: "I ship early versions, observe how they work, and improve based on real feedback." }
                ].map((item) => (
                    <li key={item.title} className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-6">
                        <span className="font-bold text-(--text-primary) sm:min-w-[180px] text-sm sm:text-base">{item.title}</span>
                        <span className="text-(--text-secondary) text-sm sm:text-base font-light italic">{item.desc}</span>
                    </li>
                ))}
             </ul>
        </section>

        {/* SECTION 3 - WHAT I CARE ABOUT */}
        <section>
            <h2 className="text-xs sm:text-sm font-mono text-(--text-muted) mb-6 sm:mb-8 uppercase tracking-widest border-b border-(--border-color) pb-2">What I Care About</h2>
            <ul className="space-y-3 sm:space-y-4 text-(--text-secondary)">
                {[
                    "Building projects that solve real problems",
                    "Simple and clear UI/UX over complicated designs",
                    "Writing understandable and maintainable code",
                    "Learning by doing, not just consuming tutorials",
                ].map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm sm:text-base font-light items-start">
                        <ChevronRight className="text-(--text-muted) w-4 h-4 mt-1 shrink-0" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </section>

         {/* SECTION 4 - WHAT I'M LEARNING */}
         <section>
            <h2 className="text-xs sm:text-sm font-mono text-(--text-muted) mb-6 sm:mb-8 uppercase tracking-widest border-b border-(--border-color) pb-2">Currently Learning</h2>
             <div className="flex flex-wrap gap-2">
                {[
                    "Data Structures & Algorithms using C++",
                    "MERN Stack (MongoDB, Express, React, Node.js)",
                    "Backend development and API design", 
                    "Advanced React and frontend architecture", 
                    "System design fundamentals",
                    "Embedded systems (ESP32 and sensors)"
                ].map((topic) => (
                    <span key={topic} className="px-3 py-1.5 bg-(--bg-secondary) border border-(--border-color) text-(--text-muted) rounded-full text-xs sm:text-sm">
                        {topic}
                    </span>
                ))}
             </div>
        </section>

        {/* SECTION 5 - BACKGROUND */}
        <section>
             <h2 className="text-xs sm:text-sm font-mono text-(--text-muted) mb-6 sm:mb-8 uppercase tracking-widest border-b border-(--border-color) pb-2">Background</h2>
             <div className="space-y-2 text-(--text-secondary)">
                <p className="font-bold text-(--text-primary) text-sm sm:text-base">B.E. Computer Science & Business Systems (CSBS)</p>
                <p className="text-sm sm:text-base">BMS College of Engineering, Bengaluru</p>
                <p className="text-(--text-muted) font-mono text-xs sm:text-sm">Graduation: 2028</p>
             </div>
        </section>

        {/* SECTION 6 - CTA */}
        <section className="pt-8 sm:pt-12 border-t border-(--border-color)">
            <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6">Let&apos;s build something useful.</h2>
            <div className="flex flex-wrap gap-4 sm:gap-6">
                <Link href="/" className="text-sm sm:text-base text-(--text-muted) hover:text-(--text-primary) border-b border-(--border-color) hover:border-(--text-primary) transition-all pb-1">
                    View my work
                </Link>
                 <a href={`mailto:${PORTFOLIO.profile.socials.email}`} className="text-sm sm:text-base text-(--text-muted) hover:text-(--text-primary) border-b border-(--border-color) hover:border-(--text-primary) transition-all pb-1">
                    Get in touch
                </a>
            </div>
        </section>

      </div>
    </main>
  );
}
