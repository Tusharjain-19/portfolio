
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
  description: "Portfolio of Tushar Jain, an Engineering Student at BMSCE building real MVPs in Web & Embedded Systems.",
  keywords: ["Tushar Jain", "Portfolio", "BMSCE", "Engineering Student", "MVP Builder", "Next.js", "Embedded Systems", "ESP32", "Fullstack Developer"],
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
