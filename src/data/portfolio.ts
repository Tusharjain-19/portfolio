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
    year: "2nd Year (Ongoing)",
    graduation: "2028",
  },
  skills: [
    "JavaScript",
    "TypeScript",
    "C/C++",
    "Python",
    "SQL",
    "HTML",
    "CSS",
    "React",
    "Next.js",
    "Vite",
    "Node.js",
    "Express",
    "Tailwind CSS",
    "Supabase",
    "Firebase",
    "MySQL",
    "REST APIs",
    "Razorpay API",
    "Google Sheets API",
    "ESP32",
    "Arduino",
    "BLE",
    "Git",
    "GitHub",
    "Vercel",
    "Figma",
  ],
  skillsGrouped: {
    "Languages": ["JavaScript", "TypeScript", "C/C++", "Python", "SQL", "HTML", "CSS"],
    "Frameworks": ["React", "Next.js", "Vite", "Node.js", "Express", "Tailwind CSS"],
    "Backend & Databases": ["Supabase (PostgreSQL)", "Firebase", "MySQL", "REST APIs", "Razorpay API", "Google Sheets API"],
    "Embedded & IoT": ["ESP32", "Arduino", "MPU6050", "MAX30102", "BLE", "I2C/SPI/UART"],
    "Developer Tools": ["Git", "GitHub", "Vercel", "Netlify", "VS Code", "Figma", "Postman", "Arduino IDE"],
  },
  certifications: [
    {
      title: "Investment Risk Management",
      issuer: "Coursera",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/MWIVK1DVGR6J",
      verifyCode: "MWIVK1DVGR6J",
      skillsGained: ["Financial Risk Management", "Asset Valuation", "Quantitative Risk Analysis", "Financial Modeling"]
    },
    {
      title: "Business Analysis & Process Management",
      issuer: "Coursera",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/76W901BZ2HPB",
      verifyCode: "76W901BZ2HPB",
      skillsGained: ["Process Modeling", "Requirements Engineering", "Operational Strategy", "System Analysis"]
    },
    {
      title: "Web Development Internship Certificate",
      issuer: "3Skill Training",
      verifyUrl: "/Certificate_INTERN260467_Tushar_Jain.pdf",
      verifyCode: "2025",
      skillsGained: ["Full-Stack Web Development", "HTML5 & CSS3", "Responsive UI/UX design"]
    }
  ],
  hackathons: [
    {
      title: "Conference 2.0 Hackathon",
      project: "Safe Route",
      achievement: "Top 10 Finalist out of 500+ teams",
      description: "Selected among 500+ participating teams during a national hackathon for designing an AI-powered safer route planning solution.",
      imageUrl: "/hackthon june 2026.jpeg"
    },
    {
      title: "JIC Accelerator 7.0",
      project: "Pulse Predict",
      achievement: "Pitched Hardware & Software MVP",
      description: "Presented Pulse Predict (Vital Health Tech), a low-cost embedded health-tech wearable for elderly safety and remote monitoring."
    }
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
    {
      id: "mobile-detox-sleep-quality",
      slug: "mobile-detox-sleep-quality",
      title: "Does Mobile Detox Improve Sleep Quality?",
      researchType: "Statistical Data Analysis • Research Project • Data Science",
      problemContext: "Investigating whether reducing mobile phone usage before sleep significantly improves overall sleep quality through primary survey data and hypothesis testing.",
      systemArchitectureSummary: "Constructed a multi-variable weighted Sleep Quality Index (SQI) and executed Independent Two-Sample t-Tests comparing detox vs non-detox student cohorts.",
      coreTechnicalAreas: [
        "Statistical Modeling",
        "Hypothesis Testing (t-Test)",
        "Feature Engineering (SQI)",
        "Data Preprocessing & Cleaning",
      ],
      keyContributions: [
        "Collected primary survey dataset of 22 respondents under BMSCE statistical modeling course.",
        "Formulated custom weighted Sleep Quality Index (SQI) algorithm.",
        "Executed Independent Two-Sample t-Test proving statistical significance (p < 0.01, t = 3.18, df = 20).",
        "Formatted publication-ready analytical report and statistical documentation."
      ],
      limitationsAndEthics: "Primary survey scope limited to 22 student respondents; further longitudinal tracking is recommended for wider population generalization.",
      learnings: [
        "Designing structured survey data collection mechanisms.",
        "Conducting parametric hypothesis testing and error boundary analysis.",
        "Engineered index metrics combining multiple survey dimensions."
      ],
      paperLink: "/Statistical_Data_Analysis_Report_final (1).pdf"
    }
  ],
  projects: [
    {
      id: "jaipur-ride",
      slug: "jaipur-ride",
      title: "Jaipur Ride (Metro)",
      imageUrl: "/jaipur-ride-poster.png",
      detailImageUrl: "/jaipur-ride.png",
      tagline: "Public Utility / Smart Transport",
      oneLineSummary: "A public production application optimized for low-connectivity environments, serving 1,000+ Google Play Store downloads and 250+ Monthly Active Users with route analytics.",
      ideaOrigin: "I noticed that people in Jaipur had a really hard time finding correct metro and bus timings, often relying on rumors, random Google searches, or scattered WhatsApp messages.",
      problemStatement: [
        "Metro timing info was messy and scattered all over the place.",
        "There was no single, clean app to check routes quickly.",
        "New travelers found it hard to figure out interchanges and ticket rates."
      ],
      solutionOverview: [
        "Built a public production transit planner specifically for real commuters.",
        "Implemented client-side BFS pathfinding on static station graphs, optimized for low-connectivity environments.",
        "Incorporated real-world feedback from 1,000+ users to refine interface speed and schedule accuracy."
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
      tagline: "Productivity / Full-Stack Platform",
      oneLineSummary: "A full-stack academic platform with Google Search Console metrics including 500+ organic clicks and a 16% click-through rate.",
      ideaOrigin: "My personal frustration with wasting time searching for notes across messy WhatsApp groups and broken Google Drive links right before exams.",
      problemStatement: [
        "Study materials were scattered across different groups and links.",
        "Students wasted valuable study time just trying to find files.",
        "There was no single repository for CSBS department study guides."
      ],
      solutionOverview: [
        "Developed a centralized full-stack academic platform featuring a component-based React frontend.",
        "Integrated Supabase Authentication and a SQL-backed PostgreSQL database for secure document management.",
        "Designed an Admin Dashboard and implemented a robust Google Drive integration for scalable content management.",
        "Optimized SEO metrics resulting in 500+ organic clicks, 3K+ impressions, 16% CTR, and an average Google search position of 4.7."
      ],
      hardestTechnicalChallenge: "Managing high-volume document downloads and storage while keeping the website fast and responsive when many students access it at the same time.",
      learnings: [
        "Directly solving student frustrations using simple web software.",
        "Designing from the user's perspective (high stress, very little time).",
        "Integrating cloud storage backends like Supabase cleanly."
      ],
      techStack: ["React", "JavaScript", "Supabase", "SQL", "Google Drive API", "HTML5", "CSS3", "Vercel"],
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
      id: "restaurant-os",
      slug: "restaurant-os",
      title: "RestaurantOS",
      imageUrl: "/restaurant_os.png",
      tagline: "SaaS | POS | Operations & Billing",
      oneLineSummary: "A cloud-native operating system that centralizes restaurant operations, including POS, reservations, table management, inventory, billing, and live analytical metrics into a single multi-tenant platform.",
      ideaOrigin: "I noticed that local restaurants struggle to coordinate booking sheets, tables, inventory count, and instant billing, often using multiple disconnected apps or paper logs.",
      problemStatement: [
        "Fragmented operations across POS, reservations, and inventory led to billing delays and stock mismatches.",
        "Lack of centralized real-time synchronization between front-of-house staff, kitchen staff, and management.",
        "Inability for small-to-medium restaurant groups to handle multiple branches under a unified SaaS framework safely."
      ],
      solutionOverview: [
        "Built a multi-tenant operating system architecture to coordinate point-of-sale operations, live kitchen ticket routing, and reservations.",
        "Designed a database schema isolating client branch transactions using PostgreSQL Row Level Security (RLS).",
        "Integrated real-time database subscription sync to keep front staff, kitchen monitors, and analytics dashboards aligned instantaneously."
      ],
      hardestTechnicalChallenge: "Implementing bulletproof PostgreSQL Row Level Security (RLS) policies and tenancy scopes alongside multi-client real-time synchronization under high table order concurrency without data leakage.",
      learnings: [
        "Structuring deep relational SQL schemas with triggers, stored procedures, and secure isolation policies.",
        "Synchronizing heavy real-time state machines across distributed user interfaces (POS, KOT, and Admin Dashboard).",
        "Designing for operational resilience during transient offline phases in busy kitchen environments."
      ],
      techStack: ["React", "TypeScript", "Vite", "PostgreSQL", "Supabase", "SQL", "WebSockets", "Vercel"],
      proofLinks: {
        demo: "https://restaurant-os-rouge.vercel.app/dashboard",
        github: "https://github.com/Tusharjain-19/restaurantOS"
      }
    },
    {
      id: "flight-deck",
      slug: "flight-deck",
      title: "FlightDeck",
      imageUrl: "/flight_deck.png",
      tagline: "Aviation | Real-Time Systems",
      oneLineSummary: "A modern real-time flight tracking dashboard displaying arrivals, departures, delays, terminals, gates, baggage carousels, routes, and destination weather globally.",
      ideaOrigin: "I wanted to build a unified, high-performance aviation control panel that makes global flight tracking, delays, and destination metrics searchable without bloat.",
      problemStatement: [
        "Flight information screens at airports are local, while web tracking sites are bloated with ads and tracking scripts.",
        "Airlines scatter baggage belt and gate updates across separate notifications or proprietary apps.",
        "No single minimal page connects flight routes with destination weather details efficiently."
      ],
      solutionOverview: [
        "Built a real-time tracking interface using Next.js Route Handlers to integrate the AirLabs live aviation API feeds.",
        "Implemented an optimized search filter allowing passengers to trace flight paths, delays, gates, and terminals in milliseconds.",
        "Connected live destination weather conditions directly to flight timeline trackers to provide immediate situational context."
      ],
      hardestTechnicalChallenge: "Orchestrating live flight state polling and optimizing external API query caching to prevent rate-limit exhaustion while maintaining instant search responses across dynamic flight databases.",
      learnings: [
        "Designing highly reusable React dashboard panels and optimizing API query boundaries.",
        "Configuring server-side REST API route handlers to balance external data feeds securely.",
        "Designing intuitive timeline UIs that display flight status progressions (departed, boarding, delayed, landed) responsively."
      ],
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AirLabs API", "REST APIs", "Vercel"],
      proofLinks: {
        demo: "https://flightdeck-track.vercel.app/",
        github: "https://github.com/Tusharjain-19/FlightDeck",
        linkedin: "https://www.linkedin.com/posts/tushar-jain-781149322_flightdeck-buildinpublic-webdevelopment-activity-7464891820997718018-DEPB?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFGI8REBvtlyRzZqGv1yWOpicAgg8Rv2pZA"
      }
    },
    {
      id: "mobile-detox-sleep-quality",
      slug: "mobile-detox-sleep-quality",
      title: "Does Mobile Detox Improve Sleep Quality?",
      tagline: "Statistical Data Analysis • Research Project",
      oneLineSummary: "A statistical research project investigating the relationship between mobile detox practices and sleep quality using primary survey data, custom index construction, descriptive statistics, and hypothesis testing.",
      ideaOrigin: "This study was conducted to investigate whether reducing mobile device usage prior to sleep yields statistically significant improvements in sleep quality metrics.",
      problemStatement: [
        "Widespread night-time mobile phone usage negatively impacts sleep duration, latency, and perceived restfulness.",
        "Lack of empirical student survey data quantified into structured sleep quality indices.",
        "Unverified assumptions regarding the efficacy of pre-sleep mobile detox habits."
      ],
      solutionOverview: [
        "Collected primary survey responses across 22 participants and performed thorough data cleaning.",
        "Constructed a multi-variable weighted Sleep Quality Index (SQI) formula to quantify restfulness.",
        "Executed an Independent Two-Sample t-Test proving statistically significant SQI improvements in detox subjects."
      ],
      hardestTechnicalChallenge: "Engineered a normalized weighted Sleep Quality Index (SQI) balancing non-linear categorical survey variables while ensuring mathematical validity during parametric t-test evaluations.",
      learnings: [
        "Formulating hypothesis tests and interpreting critical t-values and p-values accurately.",
        "Constructing custom indexes from multidimensional survey parameters.",
        "Communicating complex statistical findings using clean visual dashboards."
      ],
      techStack: ["Google Forms", "Excel Data Engine", "Statistical Modeling", "Hypothesis Testing", "Data Cleaning", "Data Visualization"],
      proofLinks: {
        demo: "/Statistical_Data_Analysis_Report_final (1).pdf",
        github: "https://github.com/Tusharjain-19"
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
export const SKILLS_GROUPED = PORTFOLIO.skillsGrouped;
export const CERTIFICATIONS = PORTFOLIO.certifications;
export const HACKATHONS = PORTFOLIO.hackathons;

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
