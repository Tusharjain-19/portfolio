import Hero from '@/components/Hero';
import Link from 'next/link';
import { PORTFOLIO } from '@/data/portfolio';
import { ArrowUpRight } from '@/components/Icons';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <main className="theme-jaipur bg-(--bg-primary) text-(--text-primary) overflow-x-hidden selection:bg-(--accent) selection:text-(--bg-primary) transition-colors duration-500 font-body relative">
      
      {/* Dot Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
           style={{
             backgroundImage: 'radial-gradient(circle at 2px 2px, var(--border-color) 1px, transparent 0)',
             backgroundSize: '48px 48px'
           }}
      />

      <Hero />

      <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-16 max-w-7xl mx-auto space-y-16 sm:space-y-24 pb-12 sm:pb-16">
        
        {/* PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-32">
           <ScrollReveal className="text-center mb-16 sm:mb-24">
             <div className="w-16 h-1 bg-(--accent) mx-auto mb-6 opacity-80" />
             <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight text-(--text-primary)">
               Featured Projects
             </h2>
             <p className="text-xl sm:text-2xl text-(--text-secondary) font-light max-w-2xl mx-auto">
               Real apps and tools I&apos;ve built to solve everyday problems.
             </p>
           </ScrollReveal>

           <div className="space-y-16 sm:space-y-32">
             {PORTFOLIO.projects.slice(0, 3).map((project, index) => (
                <ScrollReveal 
                    key={project.id} 
                    className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                    <div className="w-full md:w-1/2 relative group perspective-[1000px]">
                        {/* Layered Shadow frames */}
                        <div className="absolute inset-0 bg-(--accent)/10 translate-x-4 translate-y-4 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
                        <div className="absolute inset-0 border border-(--accent)/30 -translate-x-4 -translate-y-4 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
                        
                        <Link href={`/work/${project.slug}`} className="block relative z-10 rounded-xl overflow-hidden border-2 border-(--border-color) group-hover:border-(--accent) transition-colors duration-500 transform group-hover:rotate-y-[2deg] group-hover:rotate-x-[2deg]">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img 
                                src={project.imageUrl} 
                                alt={project.title} 
                                className="w-full aspect-[16/10] object-cover filter grayscale-30 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                            />
                        </Link>
                    </div>
                    <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                        <div className="inline-block px-4 py-1.5 border border-(--border-color) rounded-full text-xs font-mono uppercase tracking-widest text-(--text-muted)">
                            {project.tagline.split('|')[0].trim()}
                        </div>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-(--text-primary) hover:text-(--accent) transition-colors">
                            <Link href={`/work/${project.slug}`}>{project.title}</Link>
                        </h3>
                        <p className="text-lg sm:text-xl text-(--text-secondary) font-light leading-relaxed">
                            {project.oneLineSummary}
                        </p>
                        <Link href={`/work/${project.slug}`} className="inline-flex items-center gap-2 mt-4 text-(--accent) font-medium font-mono uppercase tracking-widest hover:tracking-[0.3em] transition-all duration-300">
                            View Project <ArrowUpRight className="w-5 h-5" />
                        </Link>
                    </div>
                </ScrollReveal>
             ))}
           </div>
           
           <div className="mt-20 text-center">
               <Link href="/projects" className="inline-block px-10 py-5 bg-(--bg-secondary) border border-(--border-color) text-(--text-primary) font-bold rounded-full hover:bg-(--text-primary) hover:text-(--bg-primary) transition-all duration-500 shadow-xl tracking-wide">
                   View All Projects
               </Link>
           </div>
        </section>

        {/* RESEARCH SECTION */}
        <section id="research" className="scroll-mt-32 relative">
            {/* Water Reflection Hint */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-(--accent)/5 to-transparent pointer-events-none opacity-50" />
            
            <ScrollReveal className="text-center mb-10 sm:mb-16 relative z-10">
                <div className="w-1 h-12 bg-(--accent) mx-auto mb-6 opacity-80" />
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-heading mb-4 tracking-tight text-(--text-primary)">
                    Research & Papers
                </h2>
                <p className="text-xl sm:text-2xl text-(--text-secondary) font-light max-w-2xl mx-auto">
                    In-depth technical research and engineering studies.
                </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 relative z-10">
                {PORTFOLIO.research.slice(0, 2).map((paper) => (
                    <ScrollReveal key={paper.id} className="group h-full">
                        <Link 
                            href={`/research/${paper.slug}`}
                            className="flex flex-col h-full p-6 sm:p-10 md:p-12 bg-(--bg-primary)/40 backdrop-blur-md border border-(--border-color) hover:border-(--accent) rounded-2xl transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] relative overflow-hidden"
                        >
                            {/* Water Ripple Hover Effect */}
                            <div className="absolute inset-0 bg-(--accent)/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out pointer-events-none" />
                            
                            <div className="text-[10px] sm:text-xs font-mono text-(--text-muted) uppercase tracking-widest mb-4 sm:mb-6 block">
                                {paper.researchType}
                            </div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-heading text-(--text-primary) mb-4 sm:mb-6 leading-tight group-hover:text-(--accent) transition-colors">
                                {paper.title}
                            </h3>
                            <p className="text-sm sm:text-base text-(--text-secondary) font-light leading-relaxed line-clamp-4 grow">
                                {paper.problemContext}
                            </p>
                            <div className="mt-6 sm:mt-8 flex items-center text-(--accent) font-medium font-mono uppercase tracking-widest text-[10px] sm:text-xs">
                                Read Paper <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                        </Link>
                    </ScrollReveal>
                ))}
            </div>

            <div className="mt-12 text-center relative z-10">
                <Link href="/research" className="inline-block px-8 py-4 bg-(--bg-secondary) border border-(--border-color) text-(--text-primary) font-bold rounded-full hover:bg-(--text-primary) hover:text-(--bg-primary) transition-all duration-500 shadow-lg tracking-wide text-xs font-mono uppercase">
                    View All Research Papers →
                </Link>
            </div>
        </section>

        {/* ACHIEVEMENTS SECTION */}
        <section id="achievements" className="scroll-mt-32 relative">
             <ScrollReveal className="text-center mb-10 sm:mb-16">
                 <div className="w-1 h-12 bg-(--accent) mx-auto mb-6 opacity-80" />
                 <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-heading mb-4 tracking-tight text-(--text-primary)">
                     Achievements
                 </h2>
                 <p className="text-xl sm:text-2xl text-(--text-secondary) font-light max-w-2xl mx-auto">
                     Hackathon wins, awards, and recognitions.
                 </p>
             </ScrollReveal>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 relative z-10">
                 {PORTFOLIO.hackathons.map((item, idx) => (
                     <ScrollReveal key={idx} className="group">
                         <div className="flex flex-col h-full p-6 sm:p-10 bg-(--bg-secondary)/40 border border-(--border-color) hover:border-(--accent) rounded-2xl transition-all duration-500 hover:shadow-xl relative overflow-hidden">
                             <div className="absolute top-0 right-0 p-4 opacity-5 font-mono text-7xl font-black select-none pointer-events-none">
                                 0{idx + 1}
                             </div>
                             <span className="inline-block px-3 py-1 bg-(--bg-tertiary) border border-(--border-color) rounded-full text-[10px] font-mono uppercase tracking-widest text-(--text-muted) self-start mb-4">
                                 {item.title}
                             </span>
                             <h3 className="text-2xl font-bold font-heading text-(--text-primary) mb-2 group-hover:text-(--accent) transition-colors">
                                 {item.achievement}
                             </h3>
                             <h4 className="text-sm font-mono text-(--text-muted) uppercase tracking-wider mb-4">
                                 Project: {item.project}
                             </h4>
                             {item.description && (
                                 <p className="text-sm sm:text-base text-(--text-secondary) font-light leading-relaxed mb-6">
                                     {item.description}
                                 </p>
                             )}
                             {item.imageUrl && (
                                 <div className="mt-auto w-full border border-(--border-color) rounded-xl overflow-hidden shadow-md bg-(--bg-primary)">
                                     {/* eslint-disable-next-line @next/next/no-img-element */}
                                     <img 
                                         src={item.imageUrl} 
                                         alt={`${item.project} Certificate`} 
                                         className="w-full h-auto max-h-55 object-cover filter grayscale-20 group-hover:grayscale-0 transition-all duration-700" 
                                     />
                                 </div>
                             )}
                         </div>
                     </ScrollReveal>
                  ))}
              </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section id="certifications" className="scroll-mt-32">
             <ScrollReveal className="text-center mb-10 sm:mb-16">
                 <div className="w-16 h-1 bg-(--accent) mx-auto mb-6 opacity-80" />
                 <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-heading mb-4 tracking-tight text-(--text-primary)">
                     Certifications
                 </h2>
                 <p className="text-xl sm:text-2xl text-(--text-secondary) font-light max-w-2xl mx-auto">
                     Verified courses and skill certificates.
                 </p>
             </ScrollReveal>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                 {PORTFOLIO.certifications.map((cert, idx) => (
                     <ScrollReveal key={idx}>
                         <div className="flex flex-col h-full p-6 bg-(--bg-secondary)/40 border border-(--border-color) hover:border-(--accent) rounded-2xl transition-all duration-500 hover:shadow-xl relative">
                             {/* Badge */}
                             <div className="flex justify-between items-start mb-6">
                                 <div className="flex items-center gap-2">
                                     <div className="w-8 h-8 rounded-full bg-(--accent) text-(--bg-primary) flex items-center justify-center font-bold text-xs">
                                         {cert.issuer === 'Coursera' ? 'C' : 'I'}
                                     </div>
                                     <div>
                                         <span className="block text-xs font-bold text-(--text-primary)">{cert.issuer}</span>
                                         <span className="block text-[9px] font-mono text-(--text-muted) uppercase">Verified Certificate</span>
                                     </div>
                                 </div>
                                 <span className="px-2 py-0.5 border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-[9px] font-mono uppercase tracking-wider rounded-full">
                                     Verified
                                 </span>
                             </div>

                             <h3 className="text-xl font-bold font-heading text-(--text-primary) mb-4 grow">
                                 {cert.title}
                             </h3>

                             {cert.skillsGained && (
                                 <div className="mb-6">
                                     <span className="block text-[10px] font-mono text-(--text-muted) uppercase tracking-wider mb-2">Skills Gained:</span>
                                     <div className="flex flex-wrap gap-1.5">
                                         {cert.skillsGained.map((skill) => (
                                             <span key={skill} className="px-2 py-0.5 bg-(--bg-tertiary) border border-(--border-color) text-(--text-secondary) text-[10px] rounded font-mono">
                                                 {skill}
                                             </span>
                                         ))}
                                     </div>
                                 </div>
                             )}

                             {cert.verifyUrl !== '#' && (
                                 <a 
                                     href={cert.verifyUrl}
                                     target="_blank"
                                     rel="noopener noreferrer"
                                     className="w-full mt-auto py-2.5 bg-(--accent) text-(--bg-primary) font-bold text-center text-xs uppercase tracking-widest rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5"
                                 >
                                     <span>Verify Certificate</span>
                                     <ArrowUpRight className="w-3.5 h-3.5" />
                                 </a>
                             )}
                         </div>
                     </ScrollReveal>
                 ))}
             </div>
        </section>

      </div>
    </main>
  );
}
