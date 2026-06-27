import { PortfolioData } from './types';

export const PORTFOLIO: PortfolioData = {
  profile: {
    name: "Tushar Jain",
    role: "Engineering Student & MVP Builder",
    bio: "I am an engineering student at BMS College of Engineering. I love building practical software and hardware projects that solve real, everyday problems for people.",
    socials: {
      email: "jaint0910@gmail.com",
      linkedin: "https://www.linkedin.com/in/tushar-jain-781149322/",
      github: "https://github.com/Tusharjain-19",
      twitter: "https://x.com/TusharJain0012",
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
      problemContext: "Traditional sea surveillance systems are not flexible enough to safely tell apart real threats in real-time, especially without a human present.",
      systemArchitectureSummary: "I designed a split system: one quiet submarine for sneaky detection and a separate active one for checking things out, both controlled by a strict human approval step.",
      coreTechnicalAreas: [
        "Unmanned Underwater Vehicles (UUV)",
        "Passive Acoustic Detection",
        "Sensor Fusion (EKF)",
        "Human-in-the-loop Control",
      ],
      keyContributions: [
        "Designed a system that splits detection and inspection tasks between two specialized vehicles.",
        "Created guidelines for locating targets using filters and underwater signal sharing.",
        "Set up an ethical safety rule requiring active human approval before taking any action.",
        "Calculated how combining sensors like compasses and acoustics helps keep tracking accurate.",
      ],
      limitationsAndEthics: "This is a purely theoretical design. I did not build a physical submarine, and the system is strictly meant for safe, surveillance-only tasks under human supervision.",
      learnings: [
        "Learned how underwater navigation and combining sensor data works in tough environments.",
        "Practiced designing systems with strict safety and ethical rules from the very start.",
        "Studied how sound travels underwater and its limits in sending data.",
      ],
      paperLink: "/Dual-UUVSystemResearch.pdf",
      researchGateLink: "https://www.researchgate.net/publication/397870338_A_Conceptual_Framework_for_a_Human_Supervised_Dual-UUV_System_Enabling_Autonomous_Maritime_Surveillance",
    },
  ],
  projects: [
    {
      id: "jaipur-ride",
      slug: "jaipur-ride",
      title: "Jaipur Ride (Metro)",
      imageUrl: "/jaipur-ride-poster.png",
      detailImageUrl: "/jaipur-ride.png",
      tagline: "Public Utility / Smart Transport",
      oneLineSummary: "A unified, offline-first transit platform that simplifies navigation for the Jaipur Metro, serving over 500+ active commuters on the Google Play Store.",
      ideaOrigin: "I noticed that people in Jaipur had a really hard time finding correct metro and bus timings, often relying on rumors, random Google searches, or scattered WhatsApp messages.",
      problemStatement: [
        "Metro timing info was messy and scattered all over the place.",
        "There was no single, clean app to check routes quickly.",
        "New travelers found it hard to figure out interchanges and ticket rates."
      ],
      solutionOverview: [
        "Built a simple, single app for all routes and timings.",
        "Focused on making the layout clean and super easy to read on the go.",
        "Made sure the app works offline so commuters can use it inside tunnels."
      ],
      hardestTechnicalChallenge: "Creating a quick data structure that stores all routes and timings locally on the phone, keeping the app lightweight and fast even on cheap smartphones with poor network signals.",
      learnings: [
        "How to turn messy schedules and route grids into a clean, simple layout.",
        "How to design smooth user flows for people on the move.",
        "Building for real utility and help rather than just adding fancy, useless features."
      ],
      techStack: ["React.js", "JavaScript", "HTML & CSS", "Vercel"],
      proofLinks: {
        demo: "https://jaipurride.vercel.app/",
        github: "https://github.com/Tusharjain-19/jaipur-ride",
        playStore: "https://play.google.com/store/apps/details?id=co.median.android.nmdabkl"
      }
    },
    {
      id: "notescsbs",
      slug: "notescsbs",
      title: "NotesCSBS",
      imageUrl: "/notescsbs.png",
      tagline: "Productivity / Resource Hub",
      oneLineSummary: "A clean study resource platform built to save students from the chaos of scattered notes.",
      ideaOrigin: "My personal frustration with wasting time searching for notes across messy WhatsApp groups and broken Google Drive links right before exams.",
      problemStatement: [
        "Study materials were scattered across different groups and links.",
        "Students wasted valuable study time just trying to find files.",
        "There was no single repository for CSBS department study guides."
      ],
      solutionOverview: [
        "Created a single, reliable hub where students can find all study files.",
        "Used Supabase to store documents and keep access super fast.",
        "Designed the UI to be clean and easy to navigate under exam stress."
      ],
      hardestTechnicalChallenge: "Managing high-volume document downloads and storage while keeping the website fast and responsive when many students access it at the same time.",
      learnings: [
        "Directly solving student frustrations using simple web software.",
        "Designing from the user's perspective (high stress, very little time).",
        "Integrating cloud storage backends like Supabase cleanly."
      ],
      techStack: ["Next.js", "Supabase", "React.js", "JavaScript", "Vercel"],
      proofLinks: {
        demo: "https://notescsbs.vercel.app/",
      }
    },
    {
      id: "vital-health-tech",
      slug: "vital-health-tech",
      title: "PulsePredict (Vital Health Tech)",
      imageUrl: "/pulsepredit.png",
      detailImageUrl: "/pulsepredict_architecture.png",
      tagline: "Co Founder & Tech Lead | Aug 2025 - Jan 2026",
      oneLineSummary: "Pitched at JIC Accelerator 7.0. A sub-INR 6000 wearable health tracking device for elderly care.",
      ideaOrigin: "My co-founder and I realized that proper health and fall trackers are way too expensive (often over ₹10,000) for average Indian families. We wanted to build a simple, reliable health watch under ₹6,000 that normal people can afford for their parents.",
      problemStatement: [
        "Vitals monitors and fall trackers cost over ₹10,000, excluding normal families.",
        "Elderly people living alone do not have cheap, continuous health tracking.",
        "Existing low-cost devices trigger too many fake fall alerts."
      ],
      solutionOverview: [
        "Designed a smart hardware device using an ESP32 microchip and motion sensors.",
        "Wrote low-level code for sharing data via Bluetooth and built a companion mobile dashboard.",
        "Presented the product to mentors at the JIC Accelerator 7.0 and refined the business model.",
        "Planned the data setup to match future national digital health standards."
      ],
      hardestTechnicalChallenge: "Stopping false alarms in fall detection by testing and fine-tuning the sensor math on real people, while keeping the Bluetooth code light enough to run on a tiny microchip.",
      learnings: [
        "Getting feedback from startup mentors helped us refine our features and pricing.",
        "Hands-on user testing is absolutely necessary to calibrate sensor thresholds.",
        "Building software that follows national health standards ensures long-term scale."
      ],
      techStack: ["ESP32", "C/C++", "MPU6050", "BLE", "Mobile App Dev", "System Architecture"],
      proofLinks: {
        demo: "https://pulsepredit-ai.github.io/website/",
        github: "https://github.com/Tusharjain-19",
      }
    },
    {
      id: "bookmyslot",
      slug: "bookmyslot",
      title: "BookMySlot",
      imageUrl: "/bookmyslot.png",
      tagline: "Reservation & Operations System",
      oneLineSummary: "A low-cost reservation SaaS helping small businesses manage client bookings in real-time.",
      ideaOrigin: "I saw that local restaurants and clinics still run on paper diaries, phone calls, and memory. Waiters mix up table bookings, patients wait hours without knowing their slot status, and owners have no clear view. They don't need fancy enterprise software; they just need a simple, real-time booking sheet.",
      problemStatement: [
        "Paper diaries lead to double-bookings and booking confusion.",
        "Front desk staff, servers, and owners are not in sync.",
        "Customers wait blindly without booking confirmations.",
        "Owners have no easy way to check how their daily business is doing."
      ],
      solutionOverview: [
        "Built a modular system customized for food dining (BookMyDine) and medical clinics (BookMyClinic).",
        "Created booking pages for customers to reserve slots online.",
        "Designed dashboards for owners and live screens for staff to track tables/patients.",
        "Used a single backend logic with simple layouts tailored for each business type."
      ],
      hardestTechnicalChallenge: "Making sure the booking data syncs instantly (using Supabase) across customer sites, staff apps, and owner screens without lag, while keeping the app simple for non-tech owners.",
      learnings: [
        "Small businesses need clear, simple layouts, not complex features.",
        "Customizing the design for specific businesses works better than a general tool.",
        "Instant database sync is key to building trust with staff.",
        "Building for local realities means making things low-cost and mobile-friendly."
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
      imageUrl: "/nammaride.png",
      tagline: "Public Utility / UX",
      oneLineSummary: "A clean Bengaluru Metro route planner with clear instructions in Kannada, English, and Hindi.",
      ideaOrigin: "Many metro riders, especially first-time travelers and non-English speakers, struggle to understand map routes and where to change trains.",
      problemStatement: [
        "Confusing and complicated route planning tools.",
        "Lack of local language support in travel apps.",
        "Overloaded screens that overwhelm elderly passengers."
      ],
      solutionOverview: [
        "Designed a very clean, step-by-step route selector.",
        "Added full language support for Kannada, Hindi, and English.",
        "Kept the screens clean and mobile-friendly."
      ],
      hardestTechnicalChallenge: "Managing language switching and layout updates instantly without using heavy frameworks, keeping the app fast under poor network connections.",
      learnings: [
        "True accessibility starts by speaking the user's language.",
        "Making a clean, simple layout takes more thought than making a complex one.",
        "Public transit helpers must prioritize speed and ease of use above all else."
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
      imageUrl: "/indigo_project.png",
      detailImageUrl: "/indigo_inflight_architecture.png",
      tagline: "Systems / Web",
      oneLineSummary: "An offline content streaming web page built for airplane entertainment systems.",
      ideaOrigin: "I was curious about how airlines stream movies and music directly to passenger devices without internet access.",
      problemStatement: [
        "No internet availability for passengers during flight hours.",
        "Need to stream media files reliably from a local server on the plane."
      ],
      solutionOverview: [
        "Built a web page that runs entirely without internet access.",
        "Designed a responsive layout suited for local server limits.",
        "Focused on reliability and fast loading over fancy graphics."
      ],
      hardestTechnicalChallenge: "Testing the offline setup during coding, and making sure all video files load reliably without calling external web networks.",
      learnings: [
        "Offline web pages require completely different layout assumptions.",
        "Reliability and fast load times matter much more than features when offline."
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
      imageUrl: "/air_guitar_architecture.png",
      detailImageUrl: "/air_guitar_architecture.png",
      tagline: "Systems / Music",
      oneLineSummary: "A gestural virtual instrument that turns hand movements in the air into acoustic guitar sounds.",
      ideaOrigin: "I wanted to make a fun instrument that translates hand movements in the air into actual guitar sounds in real-time, using a motion sensor and code instead of just playing pre-recorded audio files.",
      problemStatement: [
        "Digital instruments often feel fake and disconnected from physical strumming.",
        "Hand gesture tools have too much delay between movement and sound.",
        "Synthesizing realistic guitar sounds usually requires heavy software libraries."
      ],
      solutionOverview: [
        "Used a motion sensor (MPU6050) on a glove to track wrist tilt for chord picking and flicking for strumming.",
        "Wrote a Python audio script using the Karplus-Strong formula to synthesize string acoustics on the fly.",
        "Set up a fast, low-delay connection (115200 baud) to stream data from the sensor to the laptop.",
        "Added code to make the sound louder or softer based on how hard the user strums."
      ],
      hardestTechnicalChallenge: "Running the sound synthesis formulas in real-time without glitching the audio, keeping the delay under 10 milliseconds so it feels like playing a real instrument.",
      learnings: [
        "How to model real physical systems (like a vibrating string) using code buffer averages.",
        "Managing multiple threads is key when mixing sounds dynamically.",
        "How to filter out sensor jitter using calibration and movement checks."
      ],
      techStack: ["Python", "Arduino", "MPU6050", "NumPy", "Karplus-Strong Synthesis", "Serial Communication"],
      proofLinks: {
        github: "https://github.com/Tusharjain-19/Air-Guitar",
        linkedin: "https://www.linkedin.com/posts/tushar-jain-781149322_arduino-python-gesturecontrol-activity-7408202188344373248-HwjJ"
      }
    },
    {
      id: "split-payment",
      slug: "split-payment",
      title: "Split-Payment System",
      imageUrl: "/split_payment_architecture.png",
      detailImageUrl: "/split_payment_architecture.png",
      tagline: "FinTech | Payments | System Design",
      oneLineSummary: "A concept payment system that safely splits a single bill across multiple sources like UPI and Cards.",
      ideaOrigin: "I wanted to solve the everyday problem where you want to buy something online but want to pay using two different methods, like paying half with your UPI account and the rest using your credit card, and making sure the system safely rolls back if one fails.",
      problemStatement: [
        "Standard checkouts only let you select a single payment method.",
        "Users cannot combine partial balances (like using a card and UPI together).",
        "Retrying failed split transactions can easily lead to double charges or partial orders."
      ],
      solutionOverview: [
        "Created logic to divide a single purchase amount into multiple streams (UPI + Card).",
        "Integrated Razorpay test mode to simulate real payment status.",
        "Wrote checks to prevent capturing one payment if the other stream fails.",
        "Built retry safety checks to ensure consistency.",
        "Simulated rollback flows if the checkout is cancelled midway."
      ],
      hardestTechnicalChallenge: "Making sure the transaction is fully complete or fully rolled back. If one payment goes through but the other fails, the system must refund the charge instantly to avoid partial orders and duplicate deductions.",
      learnings: [
        "How to manage transactions across different payment services safely.",
        "Handling error screens and simulation rollbacks in fintech checkouts.",
        "Integrating payment APIs to handle complex multi-source logic.",
        "Designing systems to be retry-safe so reloading a page doesn't cause duplicate charges."
      ],
      techStack: ["JavaScript", "Node.js", "Razorpay (Test Mode)", "REST API"],
      proofLinks: {
        github: "https://github.com/Tusharjain-19/split-payment",
        linkedin: "https://www.linkedin.com/posts/tushar-jain-781149322_payments-fintech-systemdesign-activity-7423281476747845632-hHYt"
      }
    },
  ],
};

export const PROFILE = PORTFOLIO.profile;
export const EDUCATION = PORTFOLIO.education;
export const SKILLS = PORTFOLIO.skills;

export const PROJECTS = PORTFOLIO.projects.map(p => ({
    id: p.id,
    name: p.title,
    tagline: p.tagline,
    description: p.oneLineSummary,
    challenge: p.hardestTechnicalChallenge,
    tech: p.techStack
}));

export const RESEARCH = PORTFOLIO.research.map(r => ({
    id: r.id,
    title: r.title,
    type: r.researchType,
    role: "Sole Author",
    contributions: r.keyContributions,
    technical_areas: r.coreTechnicalAreas,
    note: r.limitationsAndEthics
}));
