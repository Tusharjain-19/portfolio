"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Github } from '@/components/Icons';
import Link from 'next/link';

interface MockFlight {
  flightNumber: string;
  airline: string;
  route: string;
  origin: string;
  destination: string;
  depTime: string;
  arrTime: string;
  status: 'En Route' | 'Landed' | 'Delayed' | 'Departed';
  altitude: string;
  speed: string;
  terminal: string;
  gate: string;
  baggage: string;
  weather: string;
}

const MOCK_FLIGHTS: Record<string, MockFlight> = {
  "LH430": {
    flightNumber: "LH430",
    airline: "Lufthansa German Airlines",
    route: "FRA ➔ ORD (Frankfurt to Chicago)",
    origin: "Frankfurt Am Main (FRA)",
    destination: "Chicago O'Hare Intl (ORD)",
    depTime: "10:45 AM CEST",
    arrTime: "01:15 PM CDT",
    status: "En Route",
    altitude: "36,000 ft",
    speed: "512 knots",
    terminal: "Terminal 1",
    gate: "B18",
    baggage: "Carousel 5",
    weather: "Overcast, 14°C"
  },
  "AI101": {
    flightNumber: "AI101",
    airline: "Air India",
    route: "DEL ➔ JFK (New Delhi to New York)",
    origin: "Indira Gandhi Intl (DEL)",
    destination: "John F. Kennedy Intl (JFK)",
    depTime: "02:20 AM IST",
    arrTime: "07:35 AM EDT",
    status: "Departed",
    altitude: "38,000 ft",
    speed: "490 knots",
    terminal: "Terminal 4",
    gate: "B24",
    baggage: "Carousel 9",
    weather: "Clear, 21°C"
  },
  "EK564": {
    flightNumber: "EK564",
    airline: "Emirates",
    route: "DXB ➔ BLR (Dubai to Bengaluru)",
    origin: "Dubai International (DXB)",
    destination: "Kempegowda Intl (BLR)",
    depTime: "03:40 AM GST",
    arrTime: "08:50 AM IST",
    status: "Landed",
    altitude: "0 ft",
    speed: "0 knots",
    terminal: "Terminal 2",
    gate: "D12",
    baggage: "Carousel 3",
    weather: "Partly Cloudy, 26°C"
  },
  "SQ502": {
    flightNumber: "SQ502",
    airline: "Singapore Airlines",
    route: "SIN ➔ BLR (Singapore to Bengaluru)",
    origin: "Singapore Changi (SIN)",
    destination: "Kempegowda Intl (BLR)",
    depTime: "08:05 PM SGT",
    arrTime: "10:15 PM IST",
    status: "Delayed",
    altitude: "34,000 ft",
    speed: "475 knots",
    terminal: "Terminal 2",
    gate: "C08",
    baggage: "Carousel 1",
    weather: "Light Rain, 24°C"
  }
};

const STATS = [
  { label: "Global Coverage", val: "10,000+ Flights" },
  { label: "Data Refresh Rate", val: "15 Seconds" },
  { label: "API Provider", val: "AirLabs Engine" },
  { label: "Cache Policy", val: "60s Server Edge" },
  { label: "Response Latency", val: "< 120ms" },
  { label: "Uptime SLA", val: "99.9%" }
];

export default function FlightDeckDetail() {
  const [activeFlightKey, setActiveFlightKey] = useState<string>("LH430");
  const [searchQuery, setSearchQuery] = useState<string>("LH430");

  const selectedFlight = MOCK_FLIGHTS[activeFlightKey] || MOCK_FLIGHTS["LH430"];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim().toUpperCase();
    if (MOCK_FLIGHTS[query]) {
      setActiveFlightKey(query);
    } else {
      alert("Flight not found in mock simulator. Try LH430, AI101, EK564, or SQ502.");
    }
  };

  return (
    <article className="min-h-screen text-(--text-primary) pb-20 selection:bg-(--accent)/20 selection:text-(--text-primary)">
      
      {/* HEADER SECTION */}
      <header className="relative py-16 md:py-24 border-b border-(--border-color) overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center md:text-left">
          <Link href="/projects" className="inline-flex items-center gap-1.5 text-xs font-mono text-(--text-muted) hover:text-(--text-primary) transition-colors mb-8 uppercase tracking-widest">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Archives
          </Link>
          
          <div className="mb-4 inline-block px-3 py-1 bg-(--bg-secondary) border border-(--border-color) rounded-full">
            <span className="text-[10px] font-mono uppercase tracking-widest text-(--text-muted) font-semibold">
              Flagship Web Application
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight leading-none text-(--text-primary) font-heading">
            FlightDeck
          </h1>
          <p className="text-lg sm:text-xl text-(--text-secondary) font-light leading-relaxed max-w-2xl">
            Real-Time Flight Tracking Platform. Synchronizing live arrivals, delay matrices, terminal gates, baggage carousel routing, and destination weather feeds.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-10">
            <a 
              href="https://flightdeck-track.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-(--text-primary) text-(--bg-primary) font-semibold rounded-lg hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group text-sm shadow-md"
            >
              <span>Live Demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a 
              href="https://github.com/Tusharjain-19/flight-deck" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-(--bg-secondary) border border-(--border-color) text-(--text-primary) hover:bg-(--border-color) font-semibold rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 text-sm"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 mt-16 space-y-24">
        
        {/* INTERACTIVE TRACKING FLIGHT SEARCH WIDGET */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <h2 className="text-xs font-mono text-(--text-muted) uppercase tracking-widest mb-2">Simulation Sandbox</h2>
              <h3 className="text-2xl sm:text-3xl font-bold text-(--text-primary) tracking-tight">Interactive Flight Tracker</h3>
            </div>
            <div className="flex gap-2 shrink-0">
              {Object.keys(MOCK_FLIGHTS).map((key) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveFlightKey(key);
                    setSearchQuery(key);
                  }}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-mono transition-all cursor-pointer ${
                    activeFlightKey === key 
                      ? 'bg-(--accent) text-(--bg-primary) font-bold' 
                      : 'bg-(--bg-secondary) border-(--border-color) text-(--text-muted) hover:text-(--text-primary)'
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>

          {/* Aviation HUD Dashboard Frame */}
          <div className="bg-(--bg-secondary) border border-(--border-color) rounded-2xl overflow-hidden shadow-xl relative">
            <div className="px-6 py-4 bg-(--bg-primary)/50 border-b border-(--border-color) flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-mono text-(--text-muted)">Flight Status Monitor (Active AirLabs API)</span>
              </div>
              
              <form onSubmit={handleSearchSubmit} className="flex gap-2">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. LH430"
                  className="px-3 py-1.5 bg-(--bg-primary) border border-(--border-color) focus:border-(--accent) text-(--text-primary) text-xs rounded-lg font-mono outline-none w-32"
                />
                <button 
                  type="submit" 
                  className="px-3 py-1.5 bg-(--text-primary) text-(--bg-primary) text-xs font-bold rounded-lg hover:opacity-90 transition-all cursor-pointer"
                >
                  Query
                </button>
              </form>
            </div>

            <div className="p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedFlight.flightNumber}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  <div className="p-5 bg-(--bg-primary) border border-(--border-color) rounded-xl space-y-4">
                    <div>
                      <span className="text-[9px] font-mono text-(--text-muted) block uppercase">{selectedFlight.airline}</span>
                      <h4 className="text-2xl font-black font-mono text-(--text-primary) tracking-tight">{selectedFlight.flightNumber}</h4>
                      <p className="text-xs text-(--text-secondary) font-mono font-medium pt-1">{selectedFlight.route}</p>
                    </div>

                    <div className="pt-2 border-t border-(--border-color) space-y-3">
                      <div>
                        <span className="text-[9px] font-mono text-(--text-muted) block uppercase">STATUS</span>
                        <span className="text-xs font-bold inline-block px-2.5 py-0.5 rounded-full mt-1 bg-(--bg-secondary) border border-(--border-color) text-(--text-primary)">
                          {selectedFlight.status}
                        </span>
                      </div>

                      <div>
                        <span className="text-[9px] font-mono text-(--text-muted) block uppercase">DESTINATION WEATHER</span>
                        <span className="text-xs text-(--text-secondary) font-mono block mt-1">{selectedFlight.weather}</span>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2 p-5 bg-(--bg-primary) border border-(--border-color) rounded-xl flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <span className="text-xs font-bold text-(--text-primary) uppercase tracking-wider block">Route Progression</span>
                      
                      <div className="relative pl-6 space-y-6 border-l border-(--border-color)">
                        <div className="relative">
                          <span className="absolute -left-[30px] top-1 w-4 h-4 rounded-full bg-(--bg-secondary) border-2 border-(--border-color) flex items-center justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-(--text-muted)"></span>
                          </span>
                          <span className="text-[10px] font-mono text-(--text-muted)">DEPARTURE</span>
                          <h5 className="text-xs font-bold text-(--text-primary)">{selectedFlight.origin}</h5>
                          <span className="text-[10px] font-mono text-(--text-muted)">Scheduled: {selectedFlight.depTime}</span>
                        </div>

                        <div className="relative">
                          <span className="absolute -left-[30px] top-1 w-4 h-4 rounded-full bg-(--bg-secondary) border-2 border-(--accent) flex items-center justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-(--accent)"></span>
                          </span>
                          <span className="text-[10px] font-mono text-(--text-primary) font-medium">ARRIVAL INFO</span>
                          <h5 className="text-xs font-bold text-(--text-primary)">{selectedFlight.destination}</h5>
                          <span className="text-[10px] font-mono text-(--text-muted)">ETA: {selectedFlight.arrTime}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-(--border-color)">
                      <div className="p-2.5 bg-(--bg-secondary) border border-(--border-color) rounded-lg">
                        <span className="text-[8px] font-mono text-(--text-muted) block uppercase">TERMINAL</span>
                        <span className="text-xs font-bold font-mono text-(--text-primary) block mt-0.5">{selectedFlight.terminal}</span>
                      </div>
                      <div className="p-2.5 bg-(--bg-secondary) border border-(--border-color) rounded-lg">
                        <span className="text-[8px] font-mono text-(--text-muted) block uppercase">GATE</span>
                        <span className="text-xs font-bold font-mono text-(--text-primary) block mt-0.5">{selectedFlight.gate}</span>
                      </div>
                      <div className="p-2.5 bg-(--bg-secondary) border border-(--border-color) rounded-lg">
                        <span className="text-[8px] font-mono text-(--text-muted) block uppercase">BAGGAGE CLAIM</span>
                        <span className="text-xs font-bold font-mono text-(--text-primary) block mt-0.5">{selectedFlight.baggage}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* DETAILS LIST GRID */}
        <section className="space-y-8">
          <div>
            <h2 className="text-xs font-mono text-(--text-muted) uppercase tracking-widest mb-2">Key Highlights</h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-(--text-primary) tracking-tight">Engineered for Latency</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STATS.map((stat, idx) => (
              <div 
                key={idx}
                className="p-6 bg-(--bg-secondary) border border-(--border-color) rounded-2xl flex flex-col justify-center text-center space-y-2 hover:border-(--accent) transition-colors"
              >
                <span className="text-xs font-mono text-(--text-muted) uppercase tracking-wider block">{stat.label}</span>
                <span className="text-xl font-bold font-mono text-(--text-primary)">{stat.val}</span>
              </div>
            ))}
          </div>
        </section>

        {/* MINIMALIST ARCHITECTURE DIAGRAM */}
        <section className="space-y-8">
          <div>
            <h2 className="text-xs font-mono text-(--text-muted) uppercase tracking-widest mb-2">System Design</h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-(--text-primary) tracking-tight">REST API Integration Topology</h3>
            <p className="text-sm text-(--text-secondary) font-light mt-2 max-w-xl">
              Clean pipeline caching live global aviation feeds at Next.js server borders, minimizing client loading penalties.
            </p>
          </div>

          <div className="p-6 bg-(--bg-secondary) border border-(--border-color) rounded-2xl flex justify-center items-center overflow-x-auto no-scrollbar">
            <svg width="780" height="240" viewBox="0 0 780 240" fill="none" className="min-w-[650px] select-none text-[10px]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
              <defs>
                <marker id="arr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 2 L 6 5 L 0 8 z" fill="var(--text-muted)" />
                </marker>
              </defs>

              <path d="M 150 120 L 220 120" stroke="var(--border-color)" strokeWidth="1" markerEnd="url(#arr)" />
              <path d="M 360 120 L 430 120" stroke="var(--border-color)" strokeWidth="1" markerEnd="url(#arr)" />
              <path d="M 570 120 L 640 120" stroke="var(--border-color)" strokeWidth="1" strokeDasharray="2 2" markerEnd="url(#arr)" />
              <path d="M 290 85 Q 290 50 310 50 Q 330 50 330 85" stroke="var(--border-color)" strokeWidth="1" strokeDasharray="2 2" markerEnd="url(#arr)" />

              <g>
                <rect x="20" y="85" width="130" height="70" rx="4" fill="var(--bg-primary)" stroke="var(--border-color)" strokeWidth="1" />
                <text x="35" y="108" fill="var(--text-primary)" fontWeight="600" fontSize="10">Next.js Client</text>
                <text x="35" y="122" fill="var(--text-secondary)" fontSize="8">Interactive Grid</text>
                <text x="35" y="134" fill="var(--text-muted)" fontSize="8">Framer Motion HUD</text>
              </g>

              <g>
                <rect x="220" y="85" width="140" height="70" rx="4" fill="var(--bg-primary)" stroke="var(--border-color)" strokeWidth="1" />
                <text x="235" y="108" fill="var(--text-primary)" fontWeight="600" fontSize="10">REST API Router</text>
                <text x="235" y="122" fill="var(--text-secondary)" fontSize="8">Next.js Server border</text>
                <text x="235" y="134" fill="var(--text-muted)" fontSize="8">Response Cache (60s)</text>
              </g>

              <g>
                <rect x="430" y="85" width="140" height="70" rx="4" fill="var(--bg-primary)" stroke="var(--border-color)" strokeWidth="1" />
                <text x="445" y="108" fill="var(--text-primary)" fontWeight="600" fontSize="10">AirLabs API Node</text>
                <text x="445" y="122" fill="var(--text-secondary)" fontSize="8">Global Flight Engine</text>
                <text x="445" y="134" fill="var(--text-muted)" fontSize="8">Payload Filtering</text>
              </g>

              <g>
                <rect x="640" y="85" width="120" height="70" rx="4" fill="var(--bg-primary)" stroke="var(--border-color)" strokeWidth="1" />
                <text x="652" y="108" fill="var(--text-primary)" fontWeight="600" fontSize="10">Live Flight Feed</text>
                <text x="652" y="122" fill="var(--text-secondary)" fontSize="8">FAA / ADSB radars</text>
                <text x="652" y="134" fill="var(--text-muted)" fontSize="8">Real-time coordinates</text>
              </g>
            </svg>
          </div>
        </section>

        {/* CODE HIGHLIGHTS PANEL */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xs font-mono text-(--text-muted) uppercase tracking-widest mb-2">Software Quality</h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-(--text-primary) tracking-tight">Engineering & Implementation Highlights</h3>
          </div>

          <div className="bg-(--bg-secondary) border border-(--border-color) rounded-2xl overflow-hidden shadow-xl">
            <div className="px-6 py-4 bg-(--bg-primary)/50 border-b border-(--border-color) flex items-center justify-between">
              <span className="text-xs font-mono text-(--text-muted)">src/app/api/flights/route.ts</span>
              <span className="text-[10px] font-mono text-(--text-primary) px-2 py-0.5 bg-(--bg-primary) border border-(--border-color) rounded">Next.js API Handler</span>
            </div>
            
            <div className="p-6 font-mono text-[11px] sm:text-xs text-(--text-secondary) leading-relaxed overflow-x-auto bg-(--bg-primary) max-h-[350px]">
              <pre>{`import { NextResponse } from 'next/server';

let cachedData: any = null;
let lastFetchTime = 0;
const CACHE_TTL = 60 * 1000; 

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const flightNo = searchParams.get('flightNo')?.toUpperCase();
  
  if (!flightNo) {
    return NextResponse.json({ error: 'Flight number required' }, { status: 400 });
  }

  try {
    const now = Date.now();
    
    if (cachedData && (now - lastFetchTime < CACHE_TTL)) {
      const flight = cachedData.find((f: any) => f.flight_iata === flightNo);
      if (flight) return NextResponse.json({ data: flight, source: 'cache' });
    }

    const response = await fetch(
      \`https://airlabs.co/api/v9/flights?api_key=\${process.env.AIRLABS_API_KEY}\`
    );
    
    const json = await response.json();
    cachedData = json.response || [];
    lastFetchTime = now;

    const flight = cachedData.find((f: any) => f.flight_iata === flightNo);
    if (!flight) {
      return NextResponse.json({ error: 'Flight details not found' }, { status: 404 });
    }

    return NextResponse.json({ data: flight, source: 'live' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to retrieve flight data' }, { status: 500 });
  }
}`}</pre>
            </div>
          </div>
        </section>

      </div>
    </article>
  );
}
