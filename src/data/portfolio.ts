
import { PortfolioData } from './types';

export const PORTFOLIO: PortfolioData = {
  profile: {
    name: "Tushar Jain",
    role: "Engineering Student & MVP Builder",
    bio: "Engineering student at BMS College of Engineering who builds real MVPs across frontend web apps and embedded systems, focusing on shipping before over-engineering.",
    socials: {
      email: "jaint0910@gmail.com",
      linkedin: "https://www.linkedin.com/in/tushar-jain-781149322/",
      github: "https://github.com/Tusharjain-19",
    },
    resumeLink: "/resume.pdf",
  },
  education: {
    degree: "B.E. Computer Science & Business Systems (CSBS)",
    college: "BMS College of Engineering, Bengaluru",
    year: "1st Year (Ongoing)",
    graduation: "2028",
  },
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "C++",
    "DSA",
    "React",
    "Next.js",
    "Tailwind CSS",
    "ESP32 (C/C++)",
    "Sensor Integration (I2C/UART)",
    "BLE Communication",
    "MVP System Design",
  ],
  research: [
    {
      id: "dual-uuv-system",
      slug: "dual-uuv-system",
      title: "A Conceptual Framework for a Human-Supervised Dual-UUV System for Autonomous Maritime Surveillance",
      researchType: "Independent Research (Conceptual + Systems Design)",
      problemContext: "Traditional maritime surveillance often lacks the flexibility to ethically differentiate between threats in real-time without immediate human presence.",
      systemArchitectureSummary: "Proposed a split-architecture system: one passive UUV for stealthy detection and a separate active UUV for response, both gated by a mandatory human-in-the-loop control protocol.",
      coreTechnicalAreas: [
        "Unmanned Underwater Vehicles (UUV)",
        "Passive Acoustic Detection",
        "Sensor Fusion (EKF)",
        "Human-in-the-loop Control",
      ],
      keyContributions: [
        "Designed system architecture separating detection and response into two specialized platforms.",
        "Defined detection, localization using Extended Kalman Filters (EKF), and underwater communication frameworks.",
        "Proposed a strict ethical compliance model requiring human authorization for any active response.",
        "Theoretical performance analysis of sensor fusion combining IMU, pressure sensing, and acoustics.",
      ],
      limitationsAndEthics: "This is a strictly theoretical framework. No physical prototype was built, and the system is designed explicitly for non-lethal, surveillance-only applications with human oversight.",
      learnings: [
        "Deepened understanding of autonomous navigation and sensor fusion challenges underwater.",
        "Learned to design systems with ethical constraints as a core architectural requirement.",
        "Studied underwater acoustic communication limitations (bandwidth/latency).",
      ],
      paperLink: "/resume.pdf", // Placeholder if paper isn't separate, or we can use the resume link if it's there. User said "paper link" but didn't provide specific PDF yet other than resume. Using resume pdf as placeholder or null if preferred. I will use the resume link for now as it's the only asset we have.
    },
  ],
  projects: [
    {
      id: "vital-health-tech",
      slug: "vital-health-tech",
      title: "Vital Health Tech (PulsePredict AI)",
      tagline: "Product / Hardware",
      oneLineSummary: "ESP32-based wearable health monitoring MVP for elderly care.",
      ideaOrigin: "I noticed elderly health monitoring is fragmented across devices, with no affordable all-in-one solution for continuous tracking.",
      problemStatement: [
        "Health data scattered across multiple devices",
        "No affordable continuous monitoring",
        "Manual dependency on caretakers for emergencies"
      ],
      solutionOverview: [
        "Built an ESP32-based wearable prototype",
        "Integrated SpO₂, heart rate, motion/fall detection, and GPS",
        "Implemented BLE communication for real-time data access",
        "Focused on MVP reliability over cosmetic polish"
      ],
      hardestTechnicalChallenge: "Stabilizing noisy sensor data from MAX30102 while managing BLE stack memory usage alongside active sensor polling on a dual-core microcontroller.",
      learnings: [
        "MVP-first hardware development exposes real constraints early",
        "Sensor accuracy matters more than UI polish",
        "Debugging hardware is very different from software"
      ],
      techStack: ["ESP32", "C/C++", "MAX30102", "MPU6050", "NEO-6M GPS", "BLE", "I2C", "UART"],
      proofLinks: {
        demo: "https://pulsepredit-ai.github.io/website/",
        github: "https://github.com/Tusharjain-19",
      }
    },
    {
      id: "bookmyslot",
      slug: "bookmyslot",
      title: "BookMySlot",
      tagline: "Reservation & Operations System",
      oneLineSummary: "Ultra-low-cost B2B SaaS helping small businesses manage reservations and operations in real-time — without complexity.",
      ideaOrigin: "I observed how small businesses (restaurants, clinics) still run on paper, WhatsApp, phone calls, and human memory. Waiters shout table numbers, patients wait blindly without slot clarity, and owners have zero real-time visibility. They don't need fancy tech — they need clarity, control, and real-time sync.",
      problemStatement: [
        "Reservations → double booking and confusion",
        "Staff sync → admin ≠ staff ≠ front desk",
        "Customers → no trust, long waits, no confirmation",
        "Owners → zero visibility, zero control over operations"
      ],
      solutionOverview: [
        "Built a SYSTEM, not just one app — verticalized for restaurants (BookMyDine) and clinics (BookMyClinic)",
        "Web for customers (reservation websites)",
        "Admin panels for owners (full control)",
        "Dedicated staff apps where required (Waiter App for live table/order sync)",
        "Same core backend logic, different vertical-specific frontends"
      ],
      hardestTechnicalChallenge: "Designing a reusable architecture that handles real-time sync (Supabase) across admin panels, staff apps, and customer-facing websites while keeping it ultra-simple for non-tech business owners.",
      learnings: [
        "Small businesses need clarity, not features",
        "Vertical-specific UX beats one-size-fits-all SaaS",
        "Real-time sync is critical for operational trust",
        "Building for Indian reality means low-cost, mobile-first, staff-friendly"
      ],
      techStack: ["HTML/CSS/JS", "Supabase (Auth + Real-time DB)", "Vercel", "Google Sheets API"],
      proofLinks: {
        demo: "https://book-my-slot-webpage.vercel.app/index.html",
        github: "https://github.com/Tusharjain-19",
      }
    },
    {
      id: "namma-ride",
      slug: "namma-ride",
      title: "Namma Ride",
      tagline: "Public Utility / UX",
      oneLineSummary: "Bengaluru Metro journey planner with clear instructions in 3 languages.",
      ideaOrigin: "Many metro users, especially first-time and non-English speakers, struggle to understand routes and interchanges.",
      problemStatement: [
        "Confusing metro journey planning",
        "Language barriers in public transport apps",
        "Overloaded UIs that overwhelm elderly users"
      ],
      solutionOverview: [
        "Designed a step-by-step journey flow",
        "Added language support: English, Hindi, Kannada",
        "Kept the UI minimal and mobile-first"
      ],
      hardestTechnicalChallenge: "Managing multilingual state and responsive UI layouts without a heavy framework, keeping the app extremely lightweight for spotty network conditions.",
      learnings: [
        "Accessibility starts with language",
        "Simple UI takes more thought than complex UI",
        "Public-utility apps must prioritize clarity"
      ],
      techStack: ["HTML", "CSS", "Vanilla JavaScript"],
      proofLinks: {
        demo: "https://nammaride.site",
        github: "https://github.com/Tusharjain-19/NammaRide",
      }
    },
    {
      id: "indigo-inflight",
      slug: "indigo-inflight",
      title: "Indigo In-Flight (Air-Stream)",
      tagline: "Systems / Web",
      oneLineSummary: "Offline-first in-flight entertainment web system.",
      ideaOrigin: "I wanted to understand how airlines stream content without internet access.",
      problemStatement: [
        "No internet availability during flights",
        "Need for reliable local content delivery"
      ],
      solutionOverview: [
        "Built a fully offline-capable frontend",
        "Designed UI assuming local network constraints",
        "Focused on reliability over features"
      ],
      hardestTechnicalChallenge: "Simulating and testing the 'air-gapped' constraint during development and ensuring assets loaded reliably without external CDNs.",
      learnings: [
        "Offline systems require different UX assumptions",
        "Reliability matters more than features in constrained environments"
      ],
      techStack: ["HTML", "CSS", "JavaScript", "Offline-first architecture"],
      proofLinks: {
        github: "https://github.com/Tusharjain-19/air-stream",
      }
    },
    {
      id: "air-guitar",
      slug: "air-guitar",
      title: "Air Guitar",
      tagline: "Systems / Music",
      oneLineSummary: "Gesture-controlled virtual guitar using MPU6050 and Karplus-Strong sound synthesis.",
      ideaOrigin: "I wanted to bridge the gap between physical motion and digital sound synthesis without using pre-recorded samples, making it feel more like a real instrument.",
      problemStatement: [
        "Digital instruments often feel disconnected from physical strumming",
        "High latency in gesture-based audio",
        "Need for realistic timbre without large audio libraries"
      ],
      solutionOverview: [
        "Used MPU6050 (IMU) to track wrist tilt for string selection and flicking for strumming",
        "Developed a Python audio engine using the Karplus-Strong Algorithm to synthesize strings in real-time",
        "Implemented low-latency Serial communication (115200 baud) between Arduino and Python",
        "Applied velocity-sensitive logic based on acceleration magnitude"
      ],
      hardestTechnicalChallenge: "Implementing the Karplus-Strong algorithm in a real-time thread-safe audio callback while maintaining sub-10ms latency for a responsive 'strum' feel.",
      learnings: [
        "Sound can be simulated as a physical system (buffers and averaging)",
        "Thread locking is critical when mixing audio dynamically",
        "Serial data jitter can be mitigated with calibration and delta-based checks"
      ],
      techStack: ["Python", "Arduino", "MPU6050", "NumPy", "Karplus-Strong Synthesis", "Serial Communication"],
      proofLinks: {
        github: "https://github.com/Tusharjain-19/Air-Guitar",
        linkedin: "https://www.linkedin.com/posts/tushar-jain-781149322_arduino-python-gesturecontrol-activity-7408202188344373248-HwjJ"
      }
    },
  ],
};

// Re-export old constants for backward compatibility if needed, 
// mapping them to the new structure found in PORTFOLIO.
// This prevents breaking the current UI while we wait for the UI refactor step.

export const PROFILE = PORTFOLIO.profile;
export const EDUCATION = PORTFOLIO.education;
export const SKILLS = PORTFOLIO.skills;

export const PROJECTS = PORTFOLIO.projects.map(p => ({
    id: p.id,
    name: p.title,
    tagline: p.tagline,
    description: p.oneLineSummary, // mapping summary to description for old card
    challenge: p.hardestTechnicalChallenge,
    tech: p.techStack
}));

export const RESEARCH = PORTFOLIO.research.map(r => ({
    id: r.id,
    title: r.title,
    type: r.researchType,
    role: "Sole Author", // Hardcoded from context
    contributions: r.keyContributions,
    technical_areas: r.coreTechnicalAreas,
    note: r.limitationsAndEthics
}));
