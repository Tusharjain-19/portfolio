
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

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tushar Jain Portfolio",
  description: "Portfolio of Tushar Jain, an Engineering Student building real MVPs.",
  verification: {
    google: "ymbVHAYENYHPBoHYqGZGjpqKBCY3_fOdkr3Wn4YNigU",
  },
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
