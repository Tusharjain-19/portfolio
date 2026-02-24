
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tusharjain.in'),
  title: {
    default: "Tushar Jain | Engineering Portfolio & MVP Builder",
    template: "%s | Tushar Jain"
  },
  description: "Portfolio of Tushar Jain, an Engineering Student at BMSCE building real MVPs in Web & Embedded Systems. Specialist in wearable health tech and autonomous maritime systems.",
  keywords: [
    "Tushar Jain", "Tushar Jain Portfolio", "Tushar Jain Engineering", "Tushar Jain BMSCE",
    "Embedded Systems Engineer", "IoT Developer India", "Full Stack Developer India", "Next.js Developer India",
    "Wearable Health Tech", "PulsePredict AI", "Dual-UUV System", "Autonomous Maritime Surveillance",
    "ESP32 Developer", "Arduino Programming", "C++ Developer India", "Hardware MVP Builder",
    "BMS College of Engineering", "Computer Science Business Systems", "CSBS BMSCE",
    "FinTech System Design", "Split Payment System Architecture", "Razorpay Integration Developer",
    "Distributed Systems Developer India", "Real-time Operations SaaS", "BookMySlot SaaS",
    "Namma Ride Metro Planner", "Karplus-Strong Synthesis Python", "Gesture Controlled Audio Synthesis",
    "Sensor Integration Expert India", "I2C UART SPI Protocol Developer", "BLE Communication Engineer",
    "Autonomous Underwater Vehicles Research", "Maritime Security Tech", "Human-in-the-loop Systems",
    "Maritime Surveillance Framework", "Underwater Sensor Fusion EKF", "Extended Kalman Filter IoT",
    "Low Latency Audio Synthesis Python", "MPU6050 Sensor Expert India", "MAX30102 SpO2 Sensor Integration",
    "Elderly Care Wearable Tech India", "Indian Wedding Biodata Generator Developer",
    "SaaS Founder India", "Startup MVP Developer India", "Bengaluru Software Engineer Portfolio",
    "Bengaluru Hardware Engineer Portfolio", "BMSCE CSBS Student Portfolio",
    "High Performance Web Applications Next.js", "Tailwind CSS Developer India", "React Native Developer India",
    "Supabase Real-time Database Developer", "PostgreSQL Expert India", "Node.js Backend Developer India",
    "REST API Design Expert India", "Distributed System Atomicity Fintech",
    "Payment Gateway Orchestration Logic", "Offline First System Design", "Air Stream In-Flight Entertainment",
    "Acoustic Localization Underwater", "Underwater Communication Protocols",
    "Non-lethal Maritime Defense Tech", "Ethical AI Systems Engineering",
    "Rapid Prototyping Hardware India", "Proof of Concept Builder Bengaluru",
    "Vercel Deployment Expert India", "Git Workflow Expert India", "GitHub Portfolio Tushar Jain",
    "LinkedIn Tushar Jain Portfolio", "Computer Science Business Systems Engineer",
    "Systems Research Engineer India", "Technical Writing Research Papers India",
    "ResearchGate Tushar Jain", "Scholar Article Autonomous Systems",
    "Product Operations Systems Design", "B2B SaaS Developer India", "Small Business Tech Solutions India",
    "Table Reservation System Real-time", "Clinic Management System Real-time",
    "Multilingual UI Specialist India", "Accessibility in Public Utility Apps",
    "Low bandwidth Web Performance Optimization", "Edge Computing ESP32 Portfolio",
    "Machine Learning at the Edge India", "Predictive Health Models IoT",
    "System Design Visuals Portfolio", "Modern Web Design Portfolio Bengaluru",
    "Interactive UI/UX Portfolio Next.js", "Clean Code Engineering Portfolio India",
    "Tushar Jain GitHub Projects", "Tushar Jain Split Payment", "Tushar Jain PulsePredict",
    "Tushar Jain Karplus Strong", "Tushar Jain Maritime Research", "Tushar Jain UUV Framework",
    "Software Engineering Student Portfolio India", "Engineering Projects for Portfolio",
    "Best Engineering Portfolio 2026", "Creative Engineering Works India", "Tushar Jain CV 2026"
  ],
  authors: [{ name: "Tushar Jain" }],
  creator: "Tushar Jain",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Tushar Jain | Engineering Portfolio",
    description: "Building real-world MVPs across Web and Embedded Systems.",
    url: 'https://tusharjain.in',
    siteName: 'Tushar Jain Portfolio',
    images: [
      {
        url: '/pic2.jpeg', // Using current profile pic as default OG image
        width: 800,
        height: 600,
        alt: 'Tushar Jain Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tushar Jain | Engineering Portfolio",
    description: "Engineering student building real software and hardware MVPs.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-200`}
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
                  <div className="pt-16 min-h-screen flex flex-col">
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
