
import Hero from '@/components/Hero';
import { PORTFOLIO } from '@/data/portfolio';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import Marquee from '@/components/Marquee';
import TiltCard from '@/components/TiltCard';
import MagneticHover from '@/components/MagneticHover';

export default function Home() {
  return (
    <main className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 max-w-7xl mx-auto selection:bg-neutral-700 selection:text-white pb-16 sm:pb-20 font-sans bg-[var(--bg-primary)]">

      {/* SECTION 1: HERO */}
      <ScrollReveal>
        <Hero />
      </ScrollReveal>

      {/* SECTION 2: SELECTED WORK */}
      <section id="projects" className="py-14 sm:py-20 border-b border-[var(--border-color)]">
        <ScrollReveal delay={0.2}>
            <h2 className="text-xs sm:text-sm font-mono text-[var(--text-muted)] mb-6 sm:mb-8 uppercase tracking-widest">
                Selected Work
            </h2>
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 group/list">
                {PORTFOLIO.projects
                    .filter(project => ['jaipur-ride', 'notescsbs', 'vital-health-tech', 'split-payment', 'namma-ride'].includes(project.id))
                    .sort((a, b) => {
                        const order = ['jaipur-ride', 'notescsbs', 'vital-health-tech', 'split-payment', 'namma-ride'];
                        return order.indexOf(a.id) - order.indexOf(b.id);
                    })
                    .map((project) => (
                    <MagneticHover key={project.id} className="group project-card transition-all duration-500 group-hover/list:opacity-40 hover:!opacity-100 scale-100 hover:!scale-[1.01] sm:hover:!scale-[1.02]" intensity={4}>
                        <TiltCard className="cursor-pointer block rounded-xl" intensity={4}>
                            <Link 
                                href={`/work/${project.slug}`} 
                                className="block h-full w-full bg-[var(--bg-secondary)] p-4 sm:p-6 rounded-xl border border-[var(--border-color)] hover:border-[var(--text-muted)] transition-all hover:shadow-xl"
                                data-cursor-text="OPEN"
                            >
                                <article>
                                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                                        <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                                            {project.title}
                                        </h3>
                                        {project.tagline && (
                                            <span className="text-[10px] font-mono text-[var(--text-muted)] border border-[var(--border-color)] px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                                                {project.tagline.split('|')[0].trim()}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-[var(--text-muted)] font-mono text-xs sm:text-sm max-w-2xl leading-relaxed">
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
      <section className="py-14 sm:py-20 border-b border-[var(--border-color)]">
         <ScrollReveal delay={0.1}>
             <h2 className="text-xs sm:text-sm font-mono text-[var(--text-muted)] mb-6 sm:mb-8 uppercase tracking-widest">
                Research &amp; Systems
            </h2>
             <div className="flex flex-col gap-6 sm:gap-8 group/research">
                {PORTFOLIO.research.map((item) => (
                    <Link 
                        key={item.id} 
                        href={`/research/${item.slug}`} 
                        className="group cursor-pointer block transition-all duration-500 group-hover/research:opacity-40 hover:!opacity-100"
                    >
                        <article>
                            <div className="flex flex-wrap items-start gap-2 sm:gap-3 mb-2">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--text-primary)] leading-tight underline decoration-transparent group-hover:decoration-[var(--text-muted)] underline-offset-4 transition-all">
                                    {item.title}
                                </h3>
                                <span className="text-xs border border-yellow-700 text-yellow-600 px-2 py-0.5 rounded font-mono uppercase shrink-0 mt-0.5">Conceptual</span>
                            </div>
                        
                            <p className="text-[var(--text-muted)] font-mono text-xs sm:text-sm max-w-3xl leading-relaxed">
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
      <section className="py-14 sm:py-20 border-b border-[var(--border-color)]">
        <ScrollReveal>
            <h2 className="text-xs sm:text-sm font-mono text-[var(--text-muted)] mb-6 sm:mb-8 uppercase tracking-widest">
                About Me
            </h2>
            <div className="max-w-2xl space-y-4 sm:space-y-6 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
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
       <section className="py-14 sm:py-20">
            <ScrollReveal>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 sm:mb-8 leading-tight">
                    Ready to build?
                </h2>
                <Link 
                    href="/contact"
                    className="inline-block text-base sm:text-xl border-b border-[var(--border-color)] pb-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all"
                >
                    Let&apos;s talk engineering. ↗
                </Link>
            </ScrollReveal>
       </section>

    </main>
  );
}
