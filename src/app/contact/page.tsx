
import React from 'react';
import { PORTFOLIO } from '@/data/portfolio';
import { ArrowUpRight } from '@/components/Icons';
import ResumeModal from '@/components/ResumeModal';
import PreferredSourceButton from '@/components/PreferredSourceButton';

export const metadata = {
  title: "Contact & Hire Tushar Jain | Software Engineer Intern",
  description: "Contact Tushar Jain, an engineering student at BMSCE Bengaluru, for software engineer internships, web app development, ESP32 IoT projects, or technical collaboration.",
  alternates: {
    canonical: "https://www.tusharjain.in/contact",
  },
  openGraph: {
    title: "Contact Tushar Jain | Software Engineering Student",
    description: "Get in touch with Tushar Jain, Computer Science & Business Systems student at BMS College of Engineering (BMSCE), Bengaluru.",
    url: "https://www.tusharjain.in/contact",
    siteName: "Tushar Jain - Engineering Portfolio",
    type: "website",
    images: [
      {
        url: "/pic2.jpeg",
        width: 800,
        height: 600,
        alt: "Contact Tushar Jain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Hire Tushar Jain | Software Engineer Intern",
    description: "Contact Tushar Jain, an engineering student at BMSCE Bengaluru, for software engineer internships, web app development, ESP32 IoT projects, or technical collaboration.",
    images: ["/pic2.jpeg"],
  },
};

export default function ContactPage() {
  return (
    <main className="theme-pushkar bg-(--bg-primary) text-(--text-primary) selection:bg-(--accent) selection:text-(--bg-primary) relative overflow-hidden transition-colors duration-500 font-body">

      {/* Dot Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
           style={{
             backgroundImage: 'radial-gradient(circle at 2px 2px, var(--border-color) 1px, transparent 0)',
             backgroundSize: '48px 48px'
           }}
      />

      <div className="px-4 sm:px-8 md:px-10 pt-20 sm:pt-28 md:pt-32 pb-16 sm:pb-24 max-w-3xl mx-auto w-full relative z-10">
        
        {/* PAGE TITLE */}
        <div className="mb-10 sm:mb-16 text-center sm:text-left">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 font-heading text-(--text-primary) tracking-tighter">
            Get in Touch
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-(--text-secondary) font-light max-w-xl leading-relaxed mx-auto sm:mx-0">
            Open to engineering internships, software projects, and tech collaborations.
          </p>
        </div>

        {/* FLOATING GLASS PANEL */}
        <div className="w-full space-y-3 sm:space-y-4 mb-10 sm:mb-16 bg-(--bg-secondary)/30 backdrop-blur-xl border border-(--border-color) p-4 sm:p-8 md:p-12 rounded-3xl sm:rounded-[3rem] shadow-2xl relative overflow-hidden group">
            {/* EMAIL */}
            <a 
                href={`mailto:${PORTFOLIO.profile.socials.email}`}
                className="block w-full p-5 sm:p-8 bg-(--bg-primary)/60 border border-(--border-color) rounded-2xl sm:rounded-3xl hover:border-(--accent) transition-all duration-300 relative overflow-hidden group/item"
            >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-(--text-muted) uppercase tracking-widest group-hover/item:text-(--accent) transition-colors">
                    Email
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-(--accent) opacity-60 group-hover/item:opacity-100 transition-opacity" />
                </div>
                <span className="text-base sm:text-2xl md:text-3xl font-heading font-bold text-(--text-primary) break-all leading-tight block">
                  {PORTFOLIO.profile.socials.email}
                </span>
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                 {/* LINKEDIN */}
                <a 
                    href={PORTFOLIO.profile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full p-5 sm:p-7 bg-(--bg-primary)/60 border border-(--border-color) rounded-2xl sm:rounded-3xl hover:border-(--accent) transition-all duration-300 group/item"
                >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-(--text-muted) uppercase tracking-widest group-hover/item:text-(--accent) transition-colors">
                        LinkedIn
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-(--accent) opacity-60 group-hover/item:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-lg sm:text-xl font-heading font-bold text-(--text-primary) block">
                      LinkedIn Profile
                    </span>
                </a>

                {/* GITHUB */}
                <a 
                    href={PORTFOLIO.profile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full p-5 sm:p-7 bg-(--bg-primary)/60 border border-(--border-color) rounded-2xl sm:rounded-3xl hover:border-(--accent) transition-all duration-300 group/item"
                >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-(--text-muted) uppercase tracking-widest group-hover/item:text-(--accent) transition-colors">
                        GitHub
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-(--accent) opacity-60 group-hover/item:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-lg sm:text-xl font-heading font-bold text-(--text-primary) block">
                      GitHub Profile
                    </span>
                </a>
            </div>
        </div>

        {/* SECTION 3 - RESUME */}
        <div className="mb-12 sm:mb-20 flex justify-center sm:justify-start w-full">
             <ResumeModal resumeUrl={PORTFOLIO.profile.resumeLink}>
                <div className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-10 py-4 sm:py-5 bg-(--text-primary) text-(--bg-primary) font-mono text-xs sm:text-sm font-bold uppercase tracking-wider rounded-2xl sm:rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300">
                   <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                   <span>View / Download Resume</span>
                </div>
             </ResumeModal>
        </div>

        {/* SECTION 3.5 - GOOGLE PREFERRED SOURCE */}
        <div className="mb-12 sm:mb-16 flex flex-col items-center sm:items-start">
            <span className="text-[10px] font-mono text-(--text-muted) uppercase tracking-widest mb-3">Save Source</span>
            <PreferredSourceButton siteUrl="https://www.tusharjain.in" />
        </div>

        {/* SECTION 4 - LOCATION */}
        <div className="w-full flex justify-center sm:justify-start">
            <div className="text-(--text-muted) font-mono text-xs uppercase tracking-widest relative inline-flex items-center gap-3">
                <span className="w-2 h-2 bg-(--accent) rounded-full animate-pulse shadow-[0_0_8px_var(--accent)]" />
                Based in Bengaluru, India
            </div>
        </div>

      </div>
    </main>
  );
}
