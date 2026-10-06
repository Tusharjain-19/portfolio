import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { ArrowLeft, ArrowUpRight } from '@/components/Icons';

export const metadata = {
  title: "Software Engineering & Systems Technical Focus | Tushar Jain",
  description: "Explore the technical engineering work of Tushar Jain, CSBS student at BMS College of Engineering (BMSCE), Bengaluru. Technical focus includes Next.js, Supabase PostgreSQL, ESP32 IoT firmware, and autonomous systems.",
  alternates: {
    canonical: "https://www.tusharjain.in/engineering",
  },
  openGraph: {
    title: "Software Engineering & Systems Technical Focus | Tushar Jain",
    description: "Technical engineering work of Tushar Jain at BMS College of Engineering (BMSCE), Bengaluru. Full-stack web development, embedded IoT hardware, and system architectures.",
    url: "https://www.tusharjain.in/engineering",
    siteName: "Tushar Jain - Engineering Portfolio",
    type: "website",
    images: [
      {
        url: "/pic2.jpeg",
        width: 800,
        height: 600,
        alt: "Tushar Jain - Software Engineering & Technical Focus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Engineering & Technical Focus | Tushar Jain",
    description: "Explore Tushar Jain's engineering projects, full-stack architectures, and embedded IoT solutions.",
    images: ["/pic2.jpeg"],
  },
};

export default function EngineeringPage() {
  return (
    <main className="theme-jodhpur bg-(--bg-primary) text-(--text-primary) selection:bg-(--accent) selection:text-(--bg-primary) transition-colors duration-500 font-body relative overflow-hidden">
      
      {/* Background Ceramic Geometry */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
           style={{
             backgroundImage: 'radial-gradient(circle at 2px 2px, var(--border-color) 1px, transparent 0)',
             backgroundSize: '48px 48px'
           }}
      />

      <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-16 pt-24 sm:pt-32 pb-16 sm:pb-24 max-w-5xl mx-auto space-y-16 sm:space-y-24">
        
        {/* PAGE HEADER */}
        <header className="border-b-2 border-(--border-color) pb-8 sm:pb-12 text-center sm:text-left space-y-4">
            <Link href="/" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-(--text-muted) hover:text-(--accent) transition-colors uppercase tracking-widest">
                <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading text-(--text-primary) tracking-tight">
              Software Engineering & Systems Architecture
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-(--text-secondary) font-light max-w-3xl">
              A comprehensive technical overview of my work across full-stack applications, embedded hardware, public transport engines, and autonomous systems research.
            </p>
        </header>

        {/* SECTION 1: FULL-STACK WEB DEVELOPMENT */}
        <ScrollReveal className="space-y-6">
          <div className="inline-block px-3 py-1 bg-(--bg-tertiary) border border-(--border-color) rounded-full text-xs font-mono uppercase tracking-widest text-(--accent)">
            01. Full-Stack Web Development & SaaS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-(--text-primary)">
            Scalable Web Applications & Real-Time Architectures
          </h2>
          <p className="text-base sm:text-lg text-(--text-secondary) leading-relaxed font-light">
            As a Computer Science & Business Systems (CSBS) student at BMS College of Engineering (BMSCE) in Bengaluru, I design and build full-stack web applications with a focus on high concurrency, real-time database synchronization, and clean component-driven architecture.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-6 bg-(--bg-secondary)/40 border border-(--border-color) rounded-2xl hover:border-(--accent) transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 font-mono text-7xl font-black select-none pointer-events-none">
                01
              </div>
              <h3 className="text-xl font-bold font-heading text-(--text-primary) mb-2">
                Multi-Tenant B2B SaaS & Offline-First POS
              </h3>
              <p className="text-sm text-(--text-secondary) font-light leading-relaxed mb-4">
                Engineered <strong className="text-(--text-primary)">RestaurantOS</strong> and <strong className="text-(--text-primary)">Billing Pro POS</strong> using React 19, TypeScript, Dexie.js (IndexedDB), and Supabase. Implemented PL/pgSQL database triggers for atomic inventory deductions and native ESC/POS thermal receipt printing over Bluetooth SPP/USB OTG for zero-latency cashier counters.
              </p>
              <div className="flex items-center gap-4">
                <Link href="/work/billing-pos" className="inline-flex items-center gap-1.5 text-xs font-mono text-(--accent) uppercase tracking-wider font-bold">
                  Billing Pro POS <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link href="/work/restaurant-os" className="inline-flex items-center gap-1.5 text-xs font-mono text-(--text-muted) hover:text-(--text-primary) uppercase tracking-wider font-bold">
                  RestaurantOS <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="p-6 bg-(--bg-secondary)/40 border border-(--border-color) rounded-2xl hover:border-(--accent) transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 font-mono text-7xl font-black select-none pointer-events-none">
                02
              </div>
              <h3 className="text-xl font-bold font-heading text-(--text-primary) mb-2">
                Educational Data Distribution & SEO
              </h3>
              <p className="text-sm text-(--text-secondary) font-light leading-relaxed mb-4">
                Built <strong className="text-(--text-primary)">NotesCSBS</strong>, a full-stack academic resource hub connecting Next.js with Supabase PostgreSQL and Google Drive APIs. Optimized metadata and document routes, driving over 1.17K+ organic clicks and 9.75K+ Google search impressions with a 12% CTR.
              </p>
              <Link href="/work/notescsbs" className="inline-flex items-center gap-1.5 text-xs font-mono text-(--accent) uppercase tracking-wider font-bold">
                Explore NotesCSBS <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* SECTION 2: EMBEDDED SYSTEMS & IOT */}
        <ScrollReveal className="space-y-6">
          <div className="inline-block px-3 py-1 bg-(--bg-tertiary) border border-(--border-color) rounded-full text-xs font-mono uppercase tracking-widest text-(--accent)">
            02. Embedded Systems & IoT Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-(--text-primary)">
            Hardware-Software Prototyping & Sensor Integration
          </h2>
          <p className="text-base sm:text-lg text-(--text-secondary) leading-relaxed font-light">
            Combining C++ firmware with physical sensors allows me to build tangible IoT products designed for real-world impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-6 bg-(--bg-secondary)/40 border border-(--border-color) rounded-2xl hover:border-(--accent) transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 font-mono text-7xl font-black select-none pointer-events-none">
                01
              </div>
              <h3 className="text-xl font-bold font-heading text-(--text-primary) mb-2">
                Geriatric Fall Detection Wearable
              </h3>
              <p className="text-sm text-(--text-secondary) font-light leading-relaxed mb-4">
                Developed <strong className="text-(--text-primary)">PulsePredict AI (Vital Health Tech)</strong>, an ESP32-powered health monitoring watch running low-level C++ firmware under FreeRTOS. Programmed a 10-step moving average filter to calibrate MPU6050 accelerometer vectors, eliminating false fall alerts during daily hand movements.
              </p>
              <Link href="/work/vital-health-tech" className="inline-flex items-center gap-1.5 text-xs font-mono text-(--accent) uppercase tracking-wider font-bold">
                Explore PulsePredict AI <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 bg-(--bg-secondary)/40 border border-(--border-color) rounded-2xl hover:border-(--accent) transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 font-mono text-7xl font-black select-none pointer-events-none">
                02
              </div>
              <h3 className="text-xl font-bold font-heading text-(--text-primary) mb-2">
                Gestural Digital Audio Synthesizer
              </h3>
              <p className="text-sm text-(--text-secondary) font-light leading-relaxed mb-4">
                Created the <strong className="text-(--text-primary)">Air Guitar</strong> project, translating MPU6050 spatial metrics to acoustic signals via an Arduino over 115200 baud serial. Implemented Karplus-Strong string synthesis using optimized Python NumPy array operations to achieve sub-8ms gesture latency.
              </p>
              <Link href="/work/air-guitar" className="inline-flex items-center gap-1.5 text-xs font-mono text-(--accent) uppercase tracking-wider font-bold">
                Explore Air Guitar <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* SECTION 3: PUBLIC TRANSIT PATHFINDING ENGINES */}
        <ScrollReveal className="space-y-6">
          <div className="inline-block px-3 py-1 bg-(--bg-tertiary) border border-(--border-color) rounded-full text-xs font-mono uppercase tracking-widest text-(--accent)">
            03. Offline-First Client Pathfinding
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-(--text-primary)">
            Client-Side Transit Engines & Low-Latency Routing
          </h2>
          <p className="text-base sm:text-lg text-(--text-secondary) leading-relaxed font-light">
            Public transportation apps in underground metro stations must function reliably without steady cellular connectivity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-6 bg-(--bg-secondary)/40 border border-(--border-color) rounded-2xl hover:border-(--accent) transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 font-mono text-7xl font-black select-none pointer-events-none">
                01
              </div>
              <h3 className="text-xl font-bold font-heading text-(--text-primary) mb-2">
                Jaipur Metro Transit Planner
              </h3>
              <p className="text-sm text-(--text-secondary) font-light leading-relaxed mb-4">
                Built <strong className="text-(--text-primary)">Jaipur Ride</strong>, compiling Jaipur Metro transit networks into a 15KB local JSON adjacency list. Programmed a client-side Breadth-First Search (BFS) pathfinder that calculates station routes, ticket fares, and interchanges in under 10ms with zero network requests. Over 1,000+ organic Play Store downloads.
              </p>
              <Link href="/work/jaipur-ride" className="inline-flex items-center gap-1.5 text-xs font-mono text-(--accent) uppercase tracking-wider font-bold">
                Explore Jaipur Ride <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 bg-(--bg-secondary)/40 border border-(--border-color) rounded-2xl hover:border-(--accent) transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 font-mono text-7xl font-black select-none pointer-events-none">
                02
              </div>
              <h3 className="text-xl font-bold font-heading text-(--text-primary) mb-2">
                Bengaluru Multilingual Metro Assistant
              </h3>
              <p className="text-sm text-(--text-secondary) font-light leading-relaxed mb-4">
                Created <strong className="text-(--text-primary)">NammaRide</strong> for Bengaluru commuters, delivering lightweight, multilingual (Kannada, English, Hindi) transit routing with sub-50KB bundle sizes optimized for low-end mobile devices.
              </p>
              <Link href="/work/namma-ride" className="inline-flex items-center gap-1.5 text-xs font-mono text-(--accent) uppercase tracking-wider font-bold">
                Explore NammaRide <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* SECTION 4: AUTONOMOUS SYSTEMS & RESEARCH */}
        <ScrollReveal className="space-y-6">
          <div className="inline-block px-3 py-1 bg-(--bg-tertiary) border border-(--border-color) rounded-full text-xs font-mono uppercase tracking-widest text-(--accent)">
            04. Autonomous Systems & Research Studies
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-(--text-primary)">
            Robotics Modeling & Statistical Experimentation
          </h2>
          <p className="text-base sm:text-lg text-(--text-secondary) leading-relaxed font-light">
            My research work explores sensor fusion algorithms and empirical data analysis.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-6 bg-(--bg-secondary)/40 border border-(--border-color) rounded-2xl hover:border-(--accent) transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 font-mono text-7xl font-black select-none pointer-events-none">
                01
              </div>
              <h3 className="text-xl font-bold font-heading text-(--text-primary) mb-2">
                Dual-UUV Autonomous Maritime Surveillance
              </h3>
              <p className="text-sm text-(--text-secondary) font-light leading-relaxed mb-4">
                Authored a systems engineering research paper proposing a cooperative multi-agent Unmanned Underwater Vehicle (UUV) surveillance framework. Integrates Extended Kalman Filtering (EKF) for Doppler Velocity Log (DVL) and Inertial Navigation System (INS) telemetry fusion.
              </p>
              <Link href="/research/dual-uuv-system" className="inline-flex items-center gap-1.5 text-xs font-mono text-(--accent) uppercase tracking-wider font-bold">
                Read Dual-UUV Paper <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 bg-(--bg-secondary)/40 border border-(--border-color) rounded-2xl hover:border-(--accent) transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 font-mono text-7xl font-black select-none pointer-events-none">
                02
              </div>
              <h3 className="text-xl font-bold font-heading text-(--text-primary) mb-2">
                Mobile Detox & Sleep Quality Data Study
              </h3>
              <p className="text-sm text-(--text-secondary) font-light leading-relaxed mb-4">
                Constructed a weighted Sleep Quality Index (SQI) formula and conducted parametric hypothesis testing (Independent Two-Sample t-Test, <code className="text-xs bg-(--bg-tertiary) px-1 rounded">p &lt; 0.01</code>, <code className="text-xs bg-(--bg-tertiary) px-1 rounded">t = 3.18</code>) analyzing physiological impacts of device screens before sleep.
              </p>
              <Link href="/research/mobile-detox-sleep-quality" className="inline-flex items-center gap-1.5 text-xs font-mono text-(--accent) uppercase tracking-wider font-bold">
                Read Sleep Detox Paper <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal className="pt-12 border-t border-(--border-color) text-center space-y-6">
          <h2 className="text-3xl font-bold font-heading text-(--text-primary)">
            Interested in discussing technical collaborations or engineering projects?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/projects" className="px-8 py-4 bg-(--accent) text-(--bg-primary) font-bold rounded-full hover:scale-105 transition-transform tracking-wide">
              View All Projects
            </Link>
            <Link href="/contact" className="px-8 py-4 border border-(--accent) text-(--accent) font-bold rounded-full hover:bg-(--accent) hover:text-(--bg-primary) transition-all tracking-wide">
              Contact Tushar Jain
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </main>
  );
}
