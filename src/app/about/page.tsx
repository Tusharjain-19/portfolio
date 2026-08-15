
import React from 'react';
import Link from 'next/link';
import { PORTFOLIO } from '@/data/portfolio';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: "About Tushar Jain | Software Developer & Systems Engineer",
  description: "Learn about Tushar Jain, a Computer Science & Business Systems student at BMS College of Engineering (BMSCE), Bengaluru. Discover his journey in full-stack web development, IoT, and building impact-driven products.",
  alternates: {
    canonical: "https://tusharjain.in/about",
  },
  openGraph: {
    title: "About Tushar Jain | Software Developer & Systems Engineer",
    description: "Learn about Tushar Jain, a Computer Science & Business Systems student at BMS College of Engineering (BMSCE), Bengaluru. Discover his journey in full-stack web development, IoT, and building impact-driven products.",
    url: "https://tusharjain.in/about",
    siteName: "Tushar Jain - Engineering Portfolio",
    type: "profile",
    images: [
      {
        url: "/pic2.jpeg",
        width: 800,
        height: 600,
        alt: "Tushar Jain - BMSCE Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Tushar Jain | Software Developer & Systems Engineer",
    description: "Learn about Tushar Jain, a Computer Science & Business Systems student at BMS College of Engineering (BMSCE), Bengaluru.",
    images: ["/pic2.jpeg"],
  },
};

export default function AboutPage() {
  return (
    <main className="theme-jaisalmer bg-(--bg-primary) text-(--text-primary) selection:bg-(--accent) selection:text-(--bg-primary) transition-colors duration-500 font-body relative overflow-hidden">
      
      {/* Dot Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
           style={{
             backgroundImage: 'radial-gradient(circle at 2px 2px, var(--border-color) 1px, transparent 0)',
             backgroundSize: '48px 48px'
           }}
      />

      <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-16 pt-24 sm:pt-32 pb-16 sm:pb-24 max-w-4xl mx-auto space-y-16 sm:space-y-24">
        
        {/* PAGE TITLE */}
        <header className="text-center space-y-6 sm:space-y-8 pb-10 border-b border-(--border-color)">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold font-heading text-(--text-primary) tracking-tight">
              The Journey
            </h1>
            <p className="text-xl sm:text-2xl text-(--text-secondary) font-light max-w-2xl mx-auto">
                My background, experience, and why I love building things.
            </p>
        </header>

        {/* SECTION 1 - About Me */}
        <ScrollReveal className="relative pl-6 sm:pl-12 border-l border-(--accent-muted)">
            <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-(--accent)" />
            <h2 className="text-sm font-mono text-(--accent) mb-4 uppercase tracking-[0.2em]">01. About Me</h2>
            <div className="space-y-6 text-lg sm:text-xl text-(--text-secondary) leading-relaxed font-light">
                <p>
                    I am a Computer Science & Business Systems student at BMS College of Engineering, Bengaluru. I build software, web applications, and embedded hardware designed to solve practical problems for real people.
                </p>
                <p>
                    My work spans clean frontend UIs, backend API logic, and hardware microcontrollers. I focus on building straightforward tools that people can easily use.
                </p>
            </div>
        </ScrollReveal>

        {/* SECTION 2 - Solving Real Problems */}
        <ScrollReveal className="relative pl-6 sm:pl-12 border-l border-(--accent-muted)">
             <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-(--accent)" />
             <h2 className="text-sm font-mono text-(--accent) mb-4 uppercase tracking-[0.2em]">02. Solving Real Problems</h2>
             <div className="space-y-6 text-lg sm:text-xl text-(--text-secondary) leading-relaxed font-light">
                <p>
                    Every project I&apos;ve built was created to solve a real headache. <strong>NotesCSBS</strong> was built to organize scattered college study notes. <strong>Jaipur Ride</strong> was made so commuters don&apos;t have to decipher confusing messages to catch the metro.
                </p>
                <p>
                    I believe in getting working prototypes into users&apos; hands quickly—build the core app, test it with real users, fix what breaks, and refine it based on real feedback.
                </p>
             </div>
        </ScrollReveal>

        {/* SECTION 3 - Hardware & Health */}
        <ScrollReveal className="relative pl-6 sm:pl-12 border-l border-(--accent-muted)">
             <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-(--accent)" />
             <h2 className="text-sm font-mono text-(--accent) mb-4 uppercase tracking-[0.2em]">03. Hardware & Health Tech</h2>
             <div className="space-y-6 text-lg sm:text-xl text-(--text-secondary) leading-relaxed font-light">
                <p>
                    Software is great, but combining it with hardware creates tangible impact. Working on <strong>PulsePredict</strong> (Vital Health Tech) taught me how software connects with real-world sensors.
                </p>
                <p>
                    Building an affordable wearable for elderly safety meant tuning motion sensors to prevent fake fall alerts and making reliable tech accessible to everyday families.
                </p>
             </div>
        </ScrollReveal>

        {/* SECTION 4 - How I Work */}
        <ScrollReveal className="relative pl-6 sm:pl-12 border-l border-(--accent-muted)">
             <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-(--accent)" />
             <h2 className="text-sm font-mono text-(--accent) mb-4 uppercase tracking-[0.2em]">04. How I Work</h2>
             <ul className="grid sm:grid-cols-2 gap-8 text-(--text-secondary) font-light mt-8">
                <li className="p-6 border border-(--border-color) bg-(--bg-secondary) rounded-2xl hover:border-(--accent) transition-colors">
                    <strong className="block text-(--text-primary) font-heading text-2xl mb-2">Simplicity</strong>
                    Clean interfaces that work intuitively without needing an instruction manual.
                </li>
                <li className="p-6 border border-(--border-color) bg-(--bg-secondary) rounded-2xl hover:border-(--accent) transition-colors">
                    <strong className="block text-(--text-primary) font-heading text-2xl mb-2">End-to-End</strong>
                    From database tables down to hardware microchips, I build the complete solution.
                </li>
             </ul>
        </ScrollReveal>

        {/* SECTION 5 - Research & Engineering Philosophy */}
        <ScrollReveal className="relative pl-6 sm:pl-12 border-l border-(--accent-muted)">
             <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-(--accent)" />
             <h2 className="text-sm font-mono text-(--accent) mb-4 uppercase tracking-[0.2em]">05. Engineering Principles</h2>
             <div className="space-y-6 text-lg sm:text-xl text-(--text-secondary) leading-relaxed font-light">
                <p>
                    My engineering philosophy focuses on building scalable software architectures, interactive developer portfolios, and advanced physical hardware systems. I specialize in designing fullstack web applications and SaaS platforms optimized with pessimistic transaction locks, composite index lookups, and real-time database subscriptions.
                </p>
                <p>
                    In robotics and embedded systems engineering, my research investigates cooperative pathfinding, multi-agent autonomous underwater vehicle coordination, and sensor fusion navigation algorithms. Fusing data from Doppler Velocity Logs and Inertial Navigation Systems using Extended Kalman Filtering, I design robust, human-supervised control loops. By writing low-level microcontroller firmware under FreeRTOS, I build responsive physical instruments, gestural synthesizers, and health wearables that bridge the digital-physical divide.
                </p>
             </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal className="pt-16 border-t border-(--border-color) text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-8 text-(--text-primary)">Let&apos;s build something together.</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/projects" className="px-8 py-4 bg-(--accent) text-(--bg-primary) font-bold rounded-full hover:scale-105 transition-transform tracking-wide">
                    View Projects
                </Link>
                 <a href={`mailto:${PORTFOLIO.profile.socials.email}`} className="px-8 py-4 border border-(--accent) text-(--accent) font-bold rounded-full hover:bg-(--accent) hover:text-(--bg-primary) transition-all tracking-wide">
                    Send Me an Email
                </a>
            </div>
        </ScrollReveal>

      </div>
    </main>
  );
}
