
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
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

const montserrat = Montserrat({
  variable: "--font-primary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tusharjain.in'),
  title: {
    default: "Tushar Jain",
    template: "%s / Tushar Jain"
  },
  description: "Tushar Jain is an Engineering Student at BMS College of Engineering (BMSCE), Bengaluru, studying Computer Science & Business Systems (CSBS). Builder of Jaipur Ride, Namma Ride, PulsePredict AI, Split-Payment System, BookMySlot SaaS, and more. Specialist in full-stack web development, embedded systems (ESP32), and real-world MVP execution.",
  keywords: [
    // === NAME VARIATIONS (highest priority) ===
    "Tushar Jain", "Tushar", "Jain", "tusharjain", "tushar jain portfolio",
    "Tushar Jain resume", "Tushar Jain CV", "Tushar Jain CV 2026", "Tushar Jain resume 2026",
    "Tushar Jain engineer", "Tushar Jain developer", "Tushar Jain student",
    "Tushar Jain Bengaluru", "Tushar Jain Bangalore", "Tushar Jain India",
    "Tushar Jain Jaipur", "tusharjain.in",

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
    "Split Payment System", "Split Payment developer", "Tushar Jain Split Payment",
    "BookMySlot", "BookMySlot SaaS", "BookMySlot developer",
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
    "engineering portfolio 2026", "best student portfolio India",
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
    title: "Tushar Jain | Engineering Portfolio — BMSCE, Bengaluru",
    description: "Engineering student at BMS College of Engineering (BMSCE) building real-world MVPs — Jaipur Ride, Namma Ride, PulsePredict AI, Split-Payment System & more.",
    url: 'https://tusharjain.in',
    siteName: 'Tushar Jain — Engineering Portfolio',
    images: [
      {
        url: '/pic2.jpeg',
        width: 800,
        height: 600,
        alt: 'Tushar Jain — Engineering Student at BMSCE, Bengaluru',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tushar Jain | Engineering Portfolio — BMSCE, Bengaluru",
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
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${montserrat.variable} antialiased bg-(--bg-primary) text-(--text-primary) transition-colors duration-200 font-sans overflow-x-hidden w-full max-w-[100vw]`}
      >
        <ThemeProvider>
          <StructuredData />
          <SoundProvider>
              <Preloader />
              <SmoothScroll />
              <MotionConfig reducedMotion="user">
                  <Cursor />
                  <Grain />
                  <ThemeToggle />
                  <SoundToggle />
                  <Navbar />
                  <div className="pt-16 min-h-screen flex flex-col overflow-x-hidden w-full max-w-[100vw]">
                      {children}
                      {modal}
                  </div>
                  <Footer />
              </MotionConfig>
          </SoundProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
