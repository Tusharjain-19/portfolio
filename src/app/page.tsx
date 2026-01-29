
import Hero from '@/components/Hero';
import { PORTFOLIO } from '@/data/portfolio';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import Marquee from '@/components/Marquee';
import TiltCard from '@/components/TiltCard';
import MagneticHover from '@/components/MagneticHover';

export default function Home() {
  return (
    <main className="min-h-screen px-6 md:px-12 lg:px-24 max-w-7xl mx-auto selection:bg-neutral-700 selection:text-white pb-20 font-sans bg-[var(--bg-primary)]">
      
       {/* Removed grid background - was causing gray in light mode */}

      {/* SECTION 1: HERO (With Profile Pic) */}
      <ScrollReveal>
        <Hero />
      </ScrollReveal>

      {/* SECTION 2: SELECTED WORK */}
      <section id="projects" className="py-20 border-b border-[var(--border-color)]">
        <ScrollReveal delay={0.2}>
            <h2 className="text-sm font-mono text-[var(--text-muted)] mb-8 uppercase tracking-widest">
                Selected Work
            </h2>
            <div className="flex flex-col gap-8 group/list">
                {PORTFOLIO.projects.map((project) => (
                    <MagneticHover key={project.id} className="group project-card transition-all duration-500 group-hover/list:opacity-40 hover:!opacity-100 scale-100 hover:!scale-[1.02]" intensity={6}>
                        <TiltCard className="cursor-pointer block rounded-xl" intensity={5}>
                            <Link 
                                href={`/work/${project.slug}`} 
                                className="block h-full w-full bg-[var(--bg-secondary)] p-6 rounded-xl border border-[var(--border-color)] hover:border-[var(--text-muted)] transition-all hover:scale-[1.02] hover:shadow-xl"
                                data-cursor-text="OPEN"
                            >
                                <article>
                                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-[var(--text-muted)] font-mono text-sm max-w-2xl">
                                        {project.oneLineSummary}
                                    </p>
                                </article>
                            </Link>
                        </TiltCard>
                    </MagneticHover>
                ))}
            </div>
        </ScrollReveal>
      </section>

      {/* SECTION 3: RESEARCH */}
      <section className="py-20 border-b border-[var(--border-color)]">
         <ScrollReveal delay={0.1}>
             <h2 className="text-sm font-mono text-[var(--text-muted)] mb-8 uppercase tracking-widest">
                Research & Systems
            </h2>
             <div className="flex flex-col gap-8 group/research">
                {PORTFOLIO.research.map((item) => (
                    <Link 
                        key={item.id} 
                        href={`/research/${item.slug}`} 
                        className="group cursor-pointer block transition-all duration-500 group-hover/research:opacity-40 hover:!opacity-100"
                    >
                        <article>
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] leading-tight underline decoration-transparent group-hover:decoration-[var(--text-muted)] underline-offset-4 transition-all">
                                    {item.title}
                                </h3>
                                <span className="text-xs border border-yellow-700 text-yellow-600 px-2 py-0.5 rounded font-mono uppercase">Conceptual</span>
                            </div>
                        
                            <p className="text-[var(--text-muted)] font-mono text-sm max-w-3xl leading-relaxed">
                                {item.systemArchitectureSummary}
                            </p>
                        </article>
                    </Link>
                ))}
            </div>
        </ScrollReveal>
      </section>

      {/* MARQUEE SEPARATOR */}
      <Marquee 
        items={["HTML", "CSS", "JS", "C++", "DSA", "React", "Next.js", "Arduino", "ESP32", "Sensors", "Hardware", "Systems Design", "MVP Builder"]} 
        speed={50}
      />

      {/* SECTION 4: QUICK ABOUT */}
      <section className="py-20 border-b border-[var(--border-color)]">
        <ScrollReveal>
            <h2 className="text-sm font-mono text-[var(--text-muted)] mb-8 uppercase tracking-widest">
                About Me
            </h2>
            <div className="max-w-2xl space-y-6 text-lg text-[var(--text-secondary)] leading-relaxed">
                <p>
                    I am an engineering student at {PORTFOLIO.education.college} focused on shipping real software. 
                    My philosophy is simple: <strong>Build first, optimize second.</strong>
                </p>
                <p>
                    Whether it&apos;s embedded systems (ESP32) or frontend architecture (Next.js), I focus on creating MVPs 
                    that solve actual problems, rather than getting lost in theory.
                </p>
            </div>
        </ScrollReveal>
      </section>

       {/* SECTION 5: CONTACT CTA */}
       <section className="py-20">
            <ScrollReveal>
                <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-8">
                    Ready to build?
                </h2>
                <Link 
                    href="/contact"
                    className="inline-block text-xl border-b border-[var(--border-color)] pb-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all"
                >
                    Let&apos;s talk engineering. ↗
                </Link>
            </ScrollReveal>
       </section>
      

    </main>
  );
}
