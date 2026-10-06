import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL('https://www.tusharjain.in'),
  title: {
    default: "Tushar Jain | Computer Science & Software Engineering Student",
    template: "%s | Tushar Jain"
  },
  description: "Tushar Jain is a Computer Science & Business Systems (CSBS) engineering student at BMS College of Engineering (BMSCE) in Bengaluru. He builds full-stack web applications, embedded IoT systems, and software products like Jaipur Ride, NammaRide, PulsePredict AI, and NotesCSBS.",
  keywords: [
    "Tushar Jain", "Tushar Jain Jaipur", "Tushar Jain Bengaluru", "Tushar Jain BMSCE",
    "Tushar Jain software engineer", "Tushar Jain developer", "Tushar Jain portfolio",
    "tusharjain.in", "Tushar Jain resume", "Tushar Jain CV", "BMS College of Engineering",
    "Computer Science and Business Systems", "CSBS BMSCE", "Jaipur Ride", "Namma Ride",
    "PulsePredict AI", "NotesCSBS", "Billing Pro POS", "RestaurantOS", "FlightDeck",
    "ESP32 developer", "React developer Bengaluru", "Next.js developer India"
  ],
  authors: [{ name: "Tushar Jain", url: "https://www.tusharjain.in" }],
  creator: "Tushar Jain",
  publisher: "Tushar Jain",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.tusharjain.in/',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Tushar Jain | Computer Science & Software Engineering Student",
    description: "Computer Science & Business Systems engineering student at BMS College of Engineering (BMSCE), Bengaluru. Building Jaipur Ride, NammaRide, PulsePredict AI, RestaurantOS & more.",
    url: 'https://www.tusharjain.in',
    siteName: 'Tushar Jain - Engineering Portfolio',
    images: [
      {
        url: '/pic2.jpeg',
        width: 800,
        height: 600,
        alt: 'Tushar Jain - Computer Science & Business Systems Student at BMSCE, Bengaluru',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tushar Jain | Computer Science & Software Engineering Student",
    description: "Engineering student building real products: Jaipur Ride, NammaRide, PulsePredict AI & more. BMSCE CSBS.",
    images: ['/pic2.jpeg'],
  },
  verification: {
    google: "ymbVHAYENYHPBoHYqGZGjpqKBCY3_fOdkr3Wn4YNigU",
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
      <head>
        <Script
          src="https://gstatic.com"
          strategy="afterInteractive"
        />
      </head>
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
