import { PortfolioData } from './types';

export const PORTFOLIO: PortfolioData = {
  profile: {
    name: "Tushar Jain",
    role: "Computer Science & Business Systems Student",
    bio: "I am a Computer Science & Business Systems (CSBS) engineering student at BMS College of Engineering (BMSCE) in Bengaluru, Karnataka. Originally from Jaipur, Rajasthan, I build full-stack web applications, embedded systems, and autonomous prototypes.",
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
      title: "Frontend Wars 2026",
      project: "Frontend Arena",
      achievement: "Finalist — Frontend Wars 2026",
      description: "Qualified as a Finalist in Frontend Wars 2026 organized by Frontend Arena for designing and delivering innovative frontend web solutions.",
      imageUrl: "/Tushar-Jain-FA-L6UMTXXG.png"
    },
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
      problemContext: "Traditional maritime surveillance systems lack operational flexibility, suffering from high acoustic signal attenuation and wave noise that degrades anomaly tracking. Identifying and classifying targets in real-time requires cooperative multi-vehicle systems to balance cover and sensor footprint.",
      systemArchitectureSummary: "Designed a multi-agent cooperative UUV surveillance systems architecture. The model divides operational roles between a passive, silent 'Scout' UUV (for initial acoustic anomaly detection) and an active, sonar-equipped 'Inspector' UUV (for optical and high-frequency sonar validation), coordinating states over dynamic acoustic communication links.",
      coreTechnicalAreas: [
        "Autonomous Systems",
        "UUV Research",
        "Maritime Surveillance",
        "Multi-Agent Systems",
        "Sensor Fusion (EKF)",
        "Signal Processing",
        "Human-Supervised Autonomy",
        "Systems Architecture"
      ],
      keyContributions: [
        "Designed a multi-agent systems architecture dividing scout-detection and inspector-validation roles between specialized UUV classes.",
        "Formulated a cooperative target localization model utilizing passive acoustic arrays and range-only tracking filters.",
        "Integrated a Human-Supervised cryptographic override schema, establishing safety guardrails for autonomous mission plans.",
        "Developed a sensor fusion mathematical model employing Extended Kalman Filtering (EKF) to merge DVL (Doppler Velocity Log) and INS (Inertial Navigation System) telemetry, reducing cumulative positional drift in simulated states."
      ],
      limitationsAndEthics: "This is a purely conceptual systems design and mathematical modeling framework. No physical submarine vehicle was manufactured, and the system is strictly limited to simulated, human-supervised surveillance modeling.",
      learnings: [
        "Extended Kalman Filtering (EKF) sensor fusion algorithms and error state propagation.",
        "Acoustic signal propagation under water and communication channel limitations.",
        "Ethical design patterns for autonomous systems and human-in-the-loop control overrides."
      ],
      paperLink: "/Dual-UUVSystemResearch.pdf",
      researchGateLink: "https://www.researchgate.net/publication/397870338_A_Conceptual_Framework_for_a_Human_Supervised_Dual-UUV_System_Enabling_Autonomous_Maritime_Surveillance",
    },
    {
      id: "mobile-detox-sleep-quality",
      slug: "mobile-detox-sleep-quality",
      title: "Does Mobile Detox Improve Sleep Quality?",
      researchType: "Statistical Data Analysis • Research Project • Data Science",
      problemContext: "Investigating the physiological and cognitive impacts of digital device screens before sleep. The study targets whether strict digital device detox protocols significantly reduce sleep onset latency and improve subjective restfulness metrics.",
      systemArchitectureSummary: "Designed a statistical modeling and engineering experimentation pipeline. Constructed a multi-variable weighted Sleep Quality Index (SQI) formula to quantify subjective sleep dimensions, executing parametric hypothesis tests on student sample sets.",
      coreTechnicalAreas: [
        "Statistical Modeling",
        "Hypothesis Testing (t-Test)",
        "Feature Engineering (SQI)",
        "Engineering Experimentation",
        "Technical Modeling",
        "Data Preprocessing"
      ],
      keyContributions: [
        "Collected a primary experimental dataset of 22 student participants under the BMSCE Statistical Modeling course framework.",
        "Engineered a multi-variable weighted Sleep Quality Index (SQI) formula combining latency, disruptions, and restfulness.",
        "Executed an Independent Two-Sample t-Test validating statistical significance at the 1% level (p < 0.01, t-score = 3.18, df = 20), rejecting the null hypothesis.",
        "Compiled complete data visualization charts and parametric analysis documentation for academic course review."
      ],
      limitationsAndEthics: "Primary survey scope limited to 22 student respondents within a single age cohort; further longitudinal tracking is recommended for wider population generalization.",
      learnings: [
        "Designing structured survey data collection mechanisms and ensuring response validation.",
        "Conducting parametric hypothesis testing (t-tests) and defining error boundaries.",
        "Feature engineering index metrics by combining and weighting multiple subjective variables."
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
      tagline: "Public Transport App",
      oneLineSummary: "A high-performance, client-side optimized public transit routing engine utilizing Breadth-First Search (BFS) pathfinding over static transit graphs for commuter assistance.",
      ideaOrigin: "I noticed that people in Jaipur had a really hard time finding correct metro and bus timings, often relying on rumors, random Google searches, or scattered WhatsApp messages.",
      problemStatement: [
        "Commuters in Jaipur lacked an offline-capable, unified transit planner showing correct schedules, interchange zones, and ticket fares.",
        "Existing mapping platforms suffered from high API loading latencies and required continuous internet connectivity, creating friction for tourists in underground stations."
      ],
      solutionOverview: [
        "Engineering Approach: Developed a Progressive Web Application (PWA) client that caches and processes all routing calculations locally on the device.",
        "Architecture: The application loads the entire transit network from a highly compressed static JSON adjacency list representation, executing search traverses entirely in-browser.",
        "What I Personally Built: Programmed the local BFS pathfinding algorithm, compiled the transit coordinate JSON database, designed the responsive routes page, and published the production Android app on Google Play.",
        "Current Status & Result: Deployed production platform with over 1,000+ organic downloads and 250+ Monthly Active Users (MAU) in Jaipur, India."
      ],
      hardestTechnicalChallenge: "Eliminating external map API lookup latencies and cellular network dependence. Solved this by compiling Jaipur's transit routes into a 15KB JSON adjacency list. Implemented a client-side Breadth-First Search (BFS) pathfinding algorithm that executes locally on the device's CPU, returning complete route, fare, and station breakdowns in under 10ms with zero server calls.",
      learnings: [
        "Breadth-First Search (BFS) graph traversal and JSON data serialization.",
        "Client-side caching strategies and Progressive Web App (PWA) asset management.",
        "Responsive, mobile-first interface compilation optimized for users on the move."
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
      tagline: "Academic Platform",
      oneLineSummary: "A full-stack academic document distribution platform built with Supabase PostgreSQL and Google Drive APIs, optimized for high caching and search engine indexing (SEO).",
      ideaOrigin: "My personal frustration with wasting time searching for notes across messy WhatsApp groups and broken Google Drive links right before exams.",
      problemStatement: [
        "Lecture notes, previous year question papers, and syllabus resources for the BMSCE CSBS department were scattered across ephemeral groups and expired links.",
        "Students wasted valuable time trying to locate materials right before exams without a structured database."
      ],
      solutionOverview: [
        "Engineering Approach: Built a centralized relational document distribution hub with secure role-based administrative access and file synchronization.",
        "Architecture: Implemented a Next.js/React frontend connected to a Supabase PostgreSQL database, linking document metadata to Google Drive cloud storage buckets.",
        "What I Personally Built: Configured the PostgreSQL schema, created Supabase Row Level Security (RLS) policies for user authentication, integrated the Google Drive API for download routing, and optimized search console SEO.",
        "Current Status & Result: Active academic portal that achieved 500+ organic clicks and 3K+ search impressions with an average Google search position of 4.7."
      ],
      hardestTechnicalChallenge: "Managing high-stress concurrent file download requests during examination periods without encountering Google Drive API rate limiting. Solved by implementing an API caching layer on the server side and structuring metadata lookups in a PostgreSQL database to bypass direct Drive directory searches.",
      learnings: [
        "Relational database schema modeling and role-based Row Level Security (RLS).",
        "Third-party API integration and document routing pipelines.",
        "On-page SEO optimization targeting educational query structures."
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
      tagline: "Health Tech Wearable",
      oneLineSummary: "An ESP32-powered wearable health monitoring watch utilizing FreeRTOS, sensor fusion (MPU6050 accelerometer & MAX30102 SpO2), and threshold-based fall detection.",
      ideaOrigin: "My co-founder and I realized that proper health and fall trackers are way too expensive (often over ₹10,000) for average Indian families. We wanted to build a simple, reliable health watch under ₹6,000 that normal people can afford for their parents.",
      problemStatement: [
        "Vitals monitoring and fall trackers are commercially inaccessible (often costing over ₹10,000) for the middle-class geriatric demographic in India.",
        "Low-cost devices suffer from high false-alarm rates during daily hand movements like writing or hand waving.",
        "Lack of real-time remote telemetry sync to emergency contact dashboards."
      ],
      solutionOverview: [
        "Engineering Approach: Built an integrated hardware-software health watch combining spatial motion sensing and heart rate oximetry with cloud synchronization.",
        "Architecture: Configured an ESP32 microcontroller reading raw values via I2C, streaming metrics over BLE to a paired client dashboard, which writes updates to a Supabase database.",
        "What I Personally Built: Programmed the low-level C++ firmware loops under FreeRTOS, configured the MPU6050 sensor calibration offsets, coded the fall-detection algorithm, and designed the real-time Supabase telemetry tables.",
        "Current Status & Result: Fully functional hardware and software MVP, selected and pitched to mentors at JIC Accelerator 7.0."
      ],
      hardestTechnicalChallenge: "Differentiating actual elderly falls from common physical actions to eliminate false alarms. Solved this by structuring a 10-step moving average filter in the ESP32 C++ firmware loop running at 50Hz. The algorithm triggers a fall alert only if the acceleration vector drops below 0.3g (freefall), spike-climbs past 3.0g (impact), and is immediately followed by a 5-second window of immobility.",
      learnings: [
        "Low-level C++ firmware compilation and FreeRTOS multi-threading tasks.",
        "I2C protocol configuration and hardware sensor calibration.",
        "Power management and LDO linear regulator circuit integration."
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
      tagline: "Booking System",
      oneLineSummary: "A multi-tenant reservation SaaS featuring real-time WebSockets synchronization, PostgreSQL Row Level Security (RLS) tenant isolation, and pessimistic transaction locking.",
      ideaOrigin: "I saw that local restaurants and clinics still run on paper diaries, phone calls, and memory. Waiters mix up table bookings, patients wait hours without knowing their slot status, and owners have no clear view. They don't need fancy enterprise software; they just need a simple, real-time booking sheet.",
      problemStatement: [
        "Paper diaries in clinics and restaurants lead to frequent double-bookings, scheduling conflicts, and customer waiting friction.",
        "Front desk staff, service operators, and business owners lack a centralized, real-time view of daily slots."
      ],
      solutionOverview: [
        "Engineering Approach: Developed a multi-tenant booking system isolating database transactions by organization key while pushing instant slot state changes.",
        "Architecture: Deployed a multi-tenant schema with PostgreSQL Row Level Security (RLS) policies, using Supabase Realtime listeners (WebSockets) to coordinate UI states.",
        "What I Personally Built: Programmed the calendar reservation layout, configured the Supabase database triggers, and designed the real-time client sync loops.",
        "Current Status & Result: Live B2B SaaS template adapted for medical clinics (BookMyClinic) and dining rooms (BookMyDine)."
      ],
      hardestTechnicalChallenge: "Preventing simultaneous double-booking race conditions when two clients attempt to lock the exact same time slot. Solved by writing a PL/pgSQL database trigger that executes a pessimistic lock (`SELECT ... FOR UPDATE`) on the target slot before inserting, ensuring concurrent reservation attempts are queued and evaluated atomically.",
      learnings: [
        "Pessimistic locking and ACID database transaction isolation.",
        "WebSocket connection state management and real-time data sync.",
        "Multi-tenant database schema modeling and row isolation policies."
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
      tagline: "Metro Route Planner",
      oneLineSummary: "A lightweight, multilingual transit path planner for the Namma Metro network, optimized for sub-10ms route calculation and low-connectivity mobile browsers.",
      ideaOrigin: "Many metro riders, especially first-time travelers and non-English speakers, struggle to understand map routes and where to change trains.",
      problemStatement: [
        "Transit applications often lack local language options (Kannada, Hindi), creating accessibility barriers for local commuters in Bengaluru.",
        "Heavy routing engines fail to load in underground stations due to poor cellular network coverage."
      ],
      solutionOverview: [
        "Engineering Approach: Built a client-side route calculation tool optimized for speed and low bandwidth, requiring zero server-side network roundtrips.",
        "Architecture: Compiled station data structures directly on the client, utilizing a custom BFS routing script and lightweight JSON localization lookups.",
        "What I Personally Built: Wrote the multilingual translation switcher, designed the step-by-step route finder UI, and programmed the offline pathfinding script.",
        "Current Status & Result: Live web application helping commuters navigate Bengaluru's metro lines in English, Kannada, and Hindi."
      ],
      hardestTechnicalChallenge: "Implementing comprehensive multilingual support and fast route calculation under 50KB total asset bundle weight. Solved by avoiding heavy UI frameworks and building the app using pure Vanilla JavaScript, referencing static string maps locally.",
      learnings: [
        "Localized resource file structuring and internationalization.",
        "DOM manipulation and lightweight web asset size optimization.",
        "Offline-first mobile web design guidelines."
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
      tagline: "In-Flight Media Player",
      oneLineSummary: "An offline-first in-flight entertainment streaming server and client application optimized for local intranet media delivery without external internet connectivity.",
      ideaOrigin: "I was curious about how airlines stream movies and music directly to passenger devices without internet access.",
      problemStatement: [
        "Commercial airplanes operate in isolated network environments without access to public internet servers.",
        "Streaming high-quality media requires significant local bandwidth control to prevent frame buffering across dozens of passenger devices."
      ],
      solutionOverview: [
        "Engineering Approach: Developed a local intranet web client optimized for media streaming directly from an onboard flight server.",
        "Architecture: Implemented an offline-first client player structure that caches static pages, reading video assets from a local aircraft server directory.",
        "What I Personally Built: Programmed the responsive video layout interface, designed local media buffer controls, and tested passenger client pages under isolated Docker setups.",
        "Current Status & Result: Completed sandbox prototype simulating local airplane intranet media delivery."
      ],
      hardestTechnicalChallenge: "Ensuring video files load and buffer smoothly over localized cabin WLAN networks without accessing external content delivery networks (CDNs). Solved by caching static player configurations and utilizing native HTML5 video stream buffering parameters to optimize data throughput.",
      learnings: [
        "Offline-first system architecture and local network streaming topologies.",
        "Asset buffering, HTML5 video performance parameters, and storage caches.",
        "Docker container setup for simulating isolated network environments."
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
      tagline: "Restaurant OS & Billing",
      oneLineSummary: "A high-concurrency multi-tenant restaurant operating system coordinating point-of-sale (POS) billing, kitchen order ticket routing, and inventory sync.",
      ideaOrigin: "I noticed that local restaurants struggle to coordinate booking sheets, tables, inventory count, and instant billing, often using multiple disconnected apps or paper logs.",
      problemStatement: [
        "Fragmented restaurant operations across isolated POS, kitchen routing, and stock control tools lead to order delays, double bookings, and stock mismatches.",
        "Lack of real-time synchronization between waiting staff, kitchen monitors, and management dashboards."
      ],
      solutionOverview: [
        "Engineering Approach: Built a consolidated operations hub synchronizing table states and order tickets across dining rooms and kitchens.",
        "Architecture: Designed a multi-tenant relational database structure with strict Supabase Row Level Security (RLS) and WebSockets realtime listeners.",
        "What I Personally Built: Coded the database schema, wrote the PL/pgSQL transaction triggers for stock deductions, set up KOT WebSockets, and designed the dashboard.",
        "Current Status & Result: Production-ready operational SaaS template, complete with live mock KOT dashboard and analytics preview."
      ],
      hardestTechnicalChallenge: "Managing high table-order concurrency and preventing raw material mismatches during busy hours. Solved by writing PL/pgSQL atomic transaction functions that deduct required ingredients from inventory tables instantly upon order billing, locking target rows to prevent write conflicts.",
      learnings: [
        "Multi-tenant database isolation, SQL stored procedures, and triggers.",
        "WebSocket connection lifecycle and real-time state synchronization.",
        "UX design for busy kitchen staff (KOT ticket progression workflows)."
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
      detailImageUrl: "/flight_deck.png",
      tagline: "Real-Time Flight Tracker",
      oneLineSummary: "A real-time aviation telemetry dashboard integrating flight state APIs, dynamic baggage and gate updates, and destination weather feeds using server-side Next.js route handlers.",
      ideaOrigin: "I wanted to build a unified, high-performance aviation control panel that makes global flight tracking, delays, and destination metrics searchable without bloat.",
      problemStatement: [
        "Airport flight information displays are local to terminal structures, while commercial flight tracking websites are heavily bloated with tracking scripts and ads.",
        "Aviation portals lack direct correlation between flight routing milestones and destination weather alerts in a single timeline view."
      ],
      solutionOverview: [
        "Engineering Approach: Designed a clean server-brokered aviation tracking panel pulling from global live flight radars and meteorological nodes.",
        "Architecture: Deployed Next.js Server Route Handlers acting as an intermediary to secure third-party keys and cache high-frequency payload requests.",
        "What I Personally Built: Programmed the Next.js API endpoints, created the dashboard HUD layout, and implemented the timeline rendering logic.",
        "Current Status & Result: Deployed project template with live search previews, showcased on LinkedIn and active on Vercel."
      ],
      hardestTechnicalChallenge: "Managing high-frequency live API data requests without exhausting strict rate limits on external ADSB data endpoints. Solved by implementing a server-side caching middleware layer with a 60-second TTL (Time-To-Live) on the Next.js API route, returning cached responses for identical requests.",
      learnings: [
        "Server-side API proxy routing and key management.",
        "Dynamic UI state management using Framer Motion animation containers.",
        "Payload filtering and performance optimization techniques."
      ],
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AirLabs API", "REST APIs", "Vercel"],
      proofLinks: {
        demo: "https://flightdeck-track.vercel.app/",
        github: "https://github.com/Tusharjain-19/FlightDeck",
        linkedin: "https://www.linkedin.com/posts/tushar-jain-781149322_flightdeck-buildinpublic-webdevelopment-activity-7464891820997718018-DEPB?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFGI8REBvtlyRzZqGv1yWOpicAgg8Rv2pZA"
      }
    },
    {
      id: "air-guitar",
      slug: "air-guitar",
      title: "Air Guitar",
      imageUrl: "/air_guitar_architecture.png",
      detailImageUrl: "/air_guitar_architecture.png",
      tagline: "Motion-Controlled Instrument",
      oneLineSummary: "A real-time gestural digital audio synthesizer converting MPU6050 spatial accelerometer metrics to acoustic signals via the Karplus-Strong string synthesis algorithm.",
      ideaOrigin: "I wanted to make a fun instrument that translates hand movements in the air into actual guitar sounds in real-time, using a motion sensor and code instead of just playing pre-recorded audio files.",
      problemStatement: [
        "Digital MIDI instruments lack tactile feedback and physical expressiveness during performance.",
        "High latencies (above 20ms) between gestural movement and acoustic output disrupt the user's musical timing.",
        "Synthesizing high-fidelity, realistic guitar acoustics typically requires heavy software libraries."
      ],
      solutionOverview: [
        "Engineering Approach: Developed a spatial controller glove that transmits acceleration vectors to a local, high-speed mathematical sound compiler.",
        "Architecture: Deployed an Arduino microcontroller reading MPU6050 data over I2C, streaming bytes via 115200 baud serial connection to a local Python synthesis thread.",
        "What I Personally Built: Programmed the Arduino I2C reading scripts, wrote the Python Karplus-Strong acoustic loop, and wired the spatial glove prototype.",
        "Current Status & Result: Functional hardware and software prototype demonstrating real-time gestural sound compilation."
      ],
      hardestTechnicalChallenge: "Executing string synthesis equations in real-time under a strict 10ms execution deadline to prevent audio cracking. Solved by writing the Karplus-Strong algorithm using optimized NumPy array operations, eliminating standard loop lookup overhead and reducing latency to sub-8ms.",
      learnings: [
        "Digital Signal Processing (DSP) and wave synthesis modeling.",
        "High-baud serial data transmission and latency isolation.",
        "Sensor calibration and motion threshold filtering."
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
      tagline: "Multi-Source Payment Checkout",
      oneLineSummary: "A transactional fintech checkout engine enabling atomic split-payment authorization across multi-source gateways (UPI + Card) with automated rollbacks.",
      ideaOrigin: "I wanted to solve the everyday problem where you want to buy something online but want to pay using two different methods, like paying half with your UPI account and the rest using your credit card, and making sure the system safely rolls back if one fails.",
      problemStatement: [
        "Standard online checkouts restrict transactions to a single payment source, preventing customers from combining multiple balances.",
        "Splitting transactions across two independent payment gateways introduces severe concurrency risks, potentially leading to partial payments and double charges upon network drops."
      ],
      solutionOverview: [
        "Engineering Approach: Created a transactional checkout router that manages two isolated payment authorization streams, ensuring atomicity.",
        "Architecture: Developed a Node.js express router managing concurrent payment requests linked to Razorpay API endpoints.",
        "What I Personally Built: Programmed the checkout router logic, integrated the Razorpay gateway capture APIs, and coded the transaction rollback listeners.",
        "Current Status & Result: Deployed backend checkout prototype demonstrating transaction safety during simulated gateway dropouts."
      ],
      hardestTechnicalChallenge: "Ensuring database and gateway consistency during partial payment failures. Solved by wrapping both payment authorizations in a database transaction block; if either stream fails, the system executes an automated rollback, triggering an instant API refund call to the captured gateway to prevent customer double charges.",
      learnings: [
        "Payment gateway API integration and reconciliation loops.",
        "Fintech database transaction design and ACID consistency.",
        "Idempotency controls and checkout error recovery paths."
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
