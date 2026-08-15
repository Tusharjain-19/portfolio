
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import SmoothScroll from "@/components/SmoothScroll";
import { MotionConfig } from "framer-motion";
import { SoundProvider } from "@/hooks/useSound";
import { ThemeProvider } from "@/hooks/useTheme";
import SoundToggle from "@/components/SoundToggle";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";
import Preloader from "@/components/Preloader";
import Grain from "@/components/Grain";
import StructuredData from "@/components/StructuredData";
import AEOContent from "@/components/AEOContent";
import { Analytics } from "@vercel/analytics/next";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tusharjain.in'),
  title: {
    default: "Tushar Jain | Software Engineer & Engineering Student",
    template: "%s / Tushar Jain"
  },
  description: "Tushar Jain is an engineering student at BMS College of Engineering (BMSCE) in Bengaluru, studying Computer Science and Business Systems (CSBS), who builds real-world software, full-stack applications, embedded systems, AI-enabled products, and engineering prototypes.",
  keywords: [
    // === NAME & LOCATION VARIATIONS (highest priority for Google/AI) ===
    "Tushar Jain", "Tushar Jain Jaipur", "Tushar Jain India", "Tushar Jain Bengaluru",
    "Tushar Jain software engineer", "Tushar Jain developer", "Tushar Jain BMSCE",
    "Tushar", "Jain", "tusharjain", "tushar jain portfolio", "tushar jain jaipur india",
    "Tushar Jain resume", "Tushar Jain CV 2026", "Tushar Jain Bangalore",
    "tusharjain.in", "Tushar Jain engineer India", "Tushar Jain Jaipur Rajasthan",
    "tushra jain", "tushra jain portfolio", "tushra jain jaipur", "tushra jain developer",
    "tushar jain bms college", "tushar jain csbs", "tushar jain engineer",
    "tushar dausa", "tushar jain dausa", "tushar jain jaipur", "tushar jaipur", 
    "tushar jain rajasthan", "tushar jain bengaluru", "tushar bengaluru", 
    "tushar jain cv", "tushar resume", "tushar cv",
    "tushar jain resume pdf", "tushar jain portfolio 2026", "tushar jain projects",
    "tushar jain contact", "tushar jain email", "tushar jain git", "tushar jain github",
    "tushar jain linkedin", "tushar jain bmsce student", "tushar jain csbs student",
    "tushar jain embedded engineer", "tushar jain full stack developer", "tushar jain mvp builder",
    "tushar jain software engineer jaipur", "tushar jain software engineer bengaluru",
    "tushar jain software engineer Bangalore", "tushar jain dausa rajasthan", "tushar dausa rajasthan",
    "tushar jain jaipur rajasthan", "tushar jaipur rajasthan", "tushar jain bmsce portfolio",
    "tushar bmsce portfolio", "tushar jain csbs portfolio", "tushar csbs portfolio",
    "tushar jain notes", "tushar jain resume 2026", "tushar jain cv pdf",
    "tushar jain resume docx", "tushar jain cv docx", "tushar jain resume download",
    "tushar jain cv download", "tushar jain projects list", "tushar jain jaipur ride",
    "tushar jain namma ride", "tushar jain pulsepredict", "tushar jain bookmyslot",
    "tushar jain air guitar", "tushar jain split payment", "tushar jain uuv research",
    "tushar jain underwater vehicle", "tushar jain research gate", "tushar jain publications",
    "tushar jain profile", "tushar jain bio", "tushar jain contact details", "tushar jain email address",

    // === COLLEGE / EDUCATION VARIATIONS ===
    "BMS", "BMSCE", "BMS College", "BMS College of Engineering",
    "BMS student", "BMSCE student", "BMS College student",
    "BMS engineering student", "BMSCE engineering",
    "Tushar Jain BMS", "Tushar Jain BMSCE", "Tushar Jain BMS College",
    "CSBS", "CSBS BMSCE", "CSBS BMS", "Computer Science Business Systems",
    "Computer Science and Business Systems", "CSBS student",
    "CSBS BMS College of Engineering", "Tushar Jain CSBS",
    "BMS College of Engineering Bengaluru", "BMSCE Bengaluru",
    "engineering student Bengaluru", "engineering student Bangalore",
    "engineering student portfolio India", "Bengaluru engineering portfolio",

    // === PROJECT NAMES & MAKER IDENTITY ===
    "Jaipur Ride", "Jaipur Ride app", "Jaipur Ride maker", "Jaipur Ride developer",
    "Jaipur Ride Metro", "Jaipur Metro app", "Jaipur Metro planner",
    "Jaipur Ride Google Play", "Jaipur Ride Play Store",
    "Namma Ride", "Namma Ride app", "Namma Ride maker", "Namma Ride developer",
    "Namma Ride Metro", "Bengaluru Metro app", "Bengaluru Metro planner",
    "Namma Ride journey planner", "Namma Metro Bengaluru",
    "PulsePredict", "PulsePredict AI", "Vital Health Tech", "PulsePredict maker",
    "PulsePredict developer", "wearable health tech India",
    "Tushar Jain PulsePredict", "Tushar Jain Vital Health Tech",
    "RestaurantOS", "RestaurantOS SaaS", "RestaurantOS developer",
    "FlightDeck", "FlightDeck tracker", "FlightDeck developer",
    "BookMySlot", "BookMySlot SaaS", "BookMySlot developer",
    "Split Payment System", "Split Payment developer", "Tushar Jain Split Payment",
    "NotesCSBS", "NotesCSBS maker", "CSBS notes platform",
    "Air Guitar project", "Air Guitar maker", "gesture controlled guitar",
    "Air Stream", "in-flight entertainment system",

    // === TECHNICAL SKILLS ===
    "Full Stack Developer India", "Next.js Developer India",
    "React Developer India", "React.js Developer Bengaluru",
    "ESP32 Developer", "ESP32 projects India", "Arduino Developer India",
    "Embedded Systems Engineer", "Embedded Systems Student India",
    "IoT Developer India", "Hardware MVP Builder",
    "C++ Developer India", "JavaScript Developer India",
    "Node.js Developer India", "Tailwind CSS Developer",
    "Supabase Developer", "Vercel Developer India",
    "BLE Communication Engineer", "Sensor Integration Expert",
    "MPU6050 projects", "MAX30102 SpO2 sensor",
    "I2C UART SPI protocol", "ESP32 wearable",
    "Razorpay integration developer", "payment gateway developer India",

    // === DOMAIN EXPERTISE ===
    "MVP Builder India", "Startup MVP Developer", "SaaS Founder India",
    "FinTech System Design", "distributed systems developer",
    "real-time operations SaaS", "health tech startup India",
    "elderly care wearable India", "fall detection device India",
    "public transport app India", "metro planner app India",
    "student resource platform", "college notes platform",
    "offline first system design",

    // === RESEARCH ===
    "Dual UUV System", "autonomous maritime surveillance",
    "underwater vehicle research", "sensor fusion EKF",
    "human in the loop systems", "maritime security tech",
    "Tushar Jain research", "Tushar Jain ResearchGate",
    "Karplus Strong synthesis", "gesture controlled audio",

    // === PORTFOLIO / RESUME SEARCHES ===
    "goated engineering portfolio", "best systems engineering portfolio",
    "underwater robotics research paper", "cooperative UUV surveillance framework",
    "ESP32 fall detection sensor fusion", "pessimistic locking real-time database",
    "multi-tenant B2B SaaS architecture", "gesture-controlled synthesizer C++",
    "high-performance developer portfolio", "exceptional student developer resume",
    "independent systems robotics researcher", "creative developer portfolio",
    "advanced physical computing showcase", "engineering portfolio 2026", "best student portfolio India",
    "software engineering student portfolio", "hardware engineering portfolio",
    "modern web portfolio Next.js", "interactive portfolio website",
    "engineering projects portfolio", "GitHub portfolio Tushar Jain",
    "LinkedIn Tushar Jain", "Tushar Jain GitHub",
    "Tushar Jain projects", "Tushar Jain engineering projects",

    // === LOCATION-BASED ===
    "developer Bengaluru", "developer Bangalore", "developer Jaipur",
    "software engineer Bengaluru", "engineer Bangalore",
    "freelance developer India", "student developer India",
    "tech portfolio Bengaluru", "engineering intern Bengaluru",
  ],
  authors: [{ name: "Tushar Jain", url: "https://tusharjain.in" }],
  creator: "Tushar Jain",
  publisher: "Tushar Jain",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Tushar Jain | Engineering Portfolio  -  BMSCE, Bengaluru",
    description: "Engineering student at BMS College of Engineering (BMSCE) building real-world SaaS & MVPs  -  RestaurantOS, FlightDeck, Jaipur Ride, Namma Ride, PulsePredict AI & more.",
    url: 'https://tusharjain.in',
    siteName: 'Tushar Jain  -  Engineering Portfolio',
    images: [
      {
        url: '/pic2.jpeg',
        width: 800,
        height: 600,
        alt: 'Tushar Jain  -  Engineering Student at BMSCE, Bengaluru',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tushar Jain | Engineering Portfolio  -  BMSCE, Bengaluru",
    description: "Engineering student building real MVPs: Jaipur Ride, Namma Ride, PulsePredict AI & more. BMSCE CSBS 2028.",
    images: ['/pic2.jpeg'],
  },
  verification: {
    google: "ymbVHAYENYHPBoHYqGZGjpqKBCY3_fOdkr3Wn4YNigU",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5, // A11y: allow zooming
};

export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" data-theme="light">
      <body
        suppressHydrationWarning
        className={`${playfair.variable} ${inter.variable} antialiased bg-(--bg-primary) text-(--text-primary) transition-colors duration-500 font-body overflow-x-hidden w-full max-w-[100vw]`}
      >
        <ThemeProvider>
          <StructuredData />
          <SoundProvider>
              <Preloader />
              <SmoothScroll />
              <MotionConfig reducedMotion="user">
                  <AEOContent />
                  <Cursor />
                  <Grain />
                  <ThemeToggle />
                  <SoundToggle />
                  <Navbar />
                  <div className="pt-16 flex flex-col overflow-x-hidden w-full max-w-[100vw]">
                      {children}
                      {modal}
                  </div>
                  <Footer />
              </MotionConfig>
          </SoundProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
