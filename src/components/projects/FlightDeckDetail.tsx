"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Github } from '@/components/Icons';
import Link from 'next/link';

interface FlightInfo {
  flightNumber: string;
  airline: string;
  route: string;
  origin: string;
  destination: string;
  depTime: string;
  arrTime: string;
  status: 'Scheduled' | 'Boarding' | 'Departed' | 'Delayed' | 'Landed';
  terminal: string;
  gate: string;
  baggage: string;
  weather: string;
  temp: string;
}

const MOCK_FLIGHTS: Record<string, FlightInfo> = {
  "LH430": {
    flightNumber: "LH430",
    airline: "Lufthansa",
    route: "FRA ➔ BLR",
    origin: "Frankfurt (FRA) - T1, Gate B24",
    destination: "Bengaluru (BLR) - T2, Gate C18",
    depTime: "11:40 AM (FRA)",
    arrTime: "11:55 PM (BLR)",
    status: 'Departed',
    terminal: "Terminal 2",
    gate: "Gate C18",
    baggage: "Belt 06",
    weather: "24°C, Heavy Rain",
    temp: "24°C"
  },
  "AI101": {
    flightNumber: "AI101",
    airline: "Air India",
    route: "DEL ➔ JFK",
    origin: "New Delhi (DEL) - T3, Gate 15",
    destination: "New York (JFK) - T4, Gate 32",
    depTime: "02:20 AM (DEL)",
    arrTime: "08:45 AM (JFK)",
    status: 'Boarding',
    terminal: "Terminal 4",
    gate: "Gate 32",
    baggage: "Belt 11",
    weather: "28°C, Clear",
    temp: "28°C"
  },
  "EK564": {
    flightNumber: "EK564",
    airline: "Emirates",
    route: "DXB ➔ BLR",
    origin: "Dubai (DXB) - T3, Gate A12",
    destination: "Bengaluru (BLR) - T2, Gate C12",
    depTime: "03:40 PM (DXB)",
    arrTime: "08:50 PM (BLR)",
    status: 'Delayed',
    terminal: "Terminal 2",
    gate: "Gate C12",
    baggage: "Belt 02",
    weather: "24°C, Rain",
    temp: "24°C"
  },
  "SQ502": {
    flightNumber: "SQ502",
    airline: "Singapore Airlines",
    route: "SIN ➔ BLR",
    origin: "Singapore (SIN) - T2, Gate F38",
    destination: "Bengaluru (BLR) - T2, Gate C20",
    depTime: "08:20 AM (SIN)",
    arrTime: "10:15 AM (BLR)",
    status: 'Landed',
    terminal: "Terminal 2",
    gate: "Gate C20",
    baggage: "Belt 05",
    weather: "25°C, Thunderstorm",
    temp: "25°C"
  }
};

const STATS = [
  { label: "Active Connections", val: "14 API nodes" },
  { label: "Query Latency", val: "18ms cached" },
  { label: "Update Rate", val: "30-sec polling" }
];

export default function FlightDeckDetail() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFlightKey, setActiveFlightKey] = useState<string>('LH430');

  const selectedFlight = MOCK_FLIGHTS[activeFlightKey] || MOCK_FLIGHTS["LH430"];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const queryUpper = searchQuery.toUpperCase().trim();
    if (MOCK_FLIGHTS[queryUpper]) {
      setActiveFlightKey(queryUpper);
    } else {
      alert("Flight not found in mock simulator. Try LH430, AI101, EK564, or SQ502.");
    }
  };

  return (
    <article className="min-h-screen text-neutral-200 pb-20 selection:bg-sky-500/20 selection:text-sky-400">
      
      {/* HEADER SECTION */}
      <header className="relative py-16 md:py-24 border-b border-neutral-900 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center md:text-left">
          <Link href="/projects" className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 hover:text-sky-400 transition-colors mb-8 uppercase tracking-widest">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Archives
          </Link>
          
          <div className="mb-4 inline-block px-3 py-1 bg-sky-950/20 border border-sky-900/40 rounded-full">
            <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400">
              Flagship Web Application
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight leading-none text-white font-heading">
            FlightDeck
          </h1>
          <p className="text-lg sm:text-xl text-neutral-400 font-light leading-relaxed max-w-2xl">
            Real-Time Flight Tracking Platform. Synchronizing live arrivals, delay matrices, terminal gates, baggage carousel routing, and destination weather feeds.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-10">
            <a 
              href="https://flightdeck-track.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group text-sm"
            >
              <span>Live Demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a 
              href="https://github.com/Tusharjain-19/flight-deck" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-neutral-950 border border-neutral-900 text-neutral-400 hover:text-white font-semibold rounded-lg hover:bg-neutral-900 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 text-sm"
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
              <h2 className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-2">Simulation Sandbox</h2>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Interactive Flight Tracker</h3>
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
                      ? 'bg-sky-500/10 border-sky-500/30 text-sky-400' 
                      : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>

          {/* Aviation HUD Dashboard Frame */}
          <div className="bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden shadow-2xl relative">
            <div className="px-6 py-4 bg-neutral-900/40 border-b border-neutral-900 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                <span className="text-xs font-mono text-neutral-400">Flight Status Monitor (Active AirLabs API)</span>
              </div>
              
              <form onSubmit={handleSearchSubmit} className="flex gap-2">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. LH430"
                  className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 focus:border-sky-500/50 text-white text-xs rounded-lg font-mono placeholder:text-neutral-600 outline-none w-32"
                />
                <button 
                  type="submit" 
                  className="px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded-lg transition-all cursor-pointer"
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
                  <div className="p-5 bg-neutral-900/10 border border-neutral-900 rounded-xl space-y-4">
                    <div>
                      <span className="text-[9px] font-mono text-neutral-500 block uppercase">{selectedFlight.airline}</span>
                      <h4 className="text-2xl font-black font-mono text-white tracking-tight">{selectedFlight.flightNumber}</h4>
                      <p className="text-xs text-sky-400 font-mono font-medium pt-1">{selectedFlight.route}</p>
                    </div>

                    <div className="pt-2 border-t border-neutral-900 space-y-3">
                      <div>
                        <span className="text-[9px] font-mono text-neutral-500 block uppercase">STATUS</span>
                        <span className={`text-xs font-bold inline-block px-2.5 py-0.5 rounded-full mt-1 ${
                          selectedFlight.status === 'Landed' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                          selectedFlight.status === 'Delayed' ? 'bg-red-500/10 text-red-400 border border-red-500/20 animate-pulse' :
                          selectedFlight.status === 'Departed' ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20' :
                          'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        }`}>
                          {selectedFlight.status}
                        </span>
                      </div>

                      <div>
                        <span className="text-[9px] font-mono text-neutral-500 block uppercase">DESTINATION WEATHER</span>
                        <span className="text-xs text-neutral-300 font-mono block mt-1">{selectedFlight.weather}</span>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2 p-5 bg-neutral-900/10 border border-neutral-900 rounded-xl flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">Route Progression</span>
                      
                      <div className="relative pl-6 space-y-6 border-l border-neutral-800">
                        <div className="relative">
                          <span className="absolute -left-[30px] top-1 w-4 h-4 rounded-full bg-neutral-900 border-2 border-neutral-700 flex items-center justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-500"></span>
                          </span>
                          <span className="text-[10px] font-mono text-neutral-500">DEPARTURE</span>
                          <h5 className="text-xs font-bold text-white">{selectedFlight.origin}</h5>
                          <span className="text-[10px] font-mono text-neutral-400">Scheduled: {selectedFlight.depTime}</span>
                        </div>

                        <div className="relative">
                          <span className="absolute -left-[30px] top-1 w-4 h-4 rounded-full bg-neutral-900 border-2 border-sky-500/50 flex items-center justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                          </span>
                          <span className="text-[10px] font-mono text-sky-400 font-medium">ARRIVAL INFO</span>
                          <h5 className="text-xs font-bold text-white">{selectedFlight.destination}</h5>
                          <span className="text-[10px] font-mono text-neutral-400">ETA: {selectedFlight.arrTime}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-neutral-900">
                      <div className="p-2.5 bg-neutral-950 border border-neutral-900 rounded-lg">
                        <span className="text-[8px] font-mono text-neutral-500 block uppercase">TERMINAL</span>
                        <span className="text-xs font-bold font-mono text-white block mt-0.5">{selectedFlight.terminal}</span>
                      </div>
                      <div className="p-2.5 bg-neutral-950 border border-neutral-900 rounded-lg">
                        <span className="text-[8px] font-mono text-neutral-500 block uppercase">GATE</span>
                        <span className="text-xs font-bold font-mono text-white block mt-0.5">{selectedFlight.gate}</span>
                      </div>
                      <div className="p-2.5 bg-neutral-950 border border-neutral-900 rounded-lg">
                        <span className="text-[8px] font-mono text-neutral-500 block uppercase">BAGGAGE CLAIM</span>
                        <span className="text-xs font-bold font-mono text-sky-400 block mt-0.5">{selectedFlight.baggage}</span>
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
            <h2 className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-2">Key Highlights</h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Engineered for Latency</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STATS.map((stat, idx) => (
              <div 
                key={idx}
                className="p-6 bg-neutral-900/10 border border-neutral-900 rounded-2xl flex flex-col justify-center text-center space-y-2 hover:border-neutral-850 transition-colors"
              >
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">{stat.label}</span>
                <span className="text-xl font-bold font-mono text-white">{stat.val}</span>
              </div>
            ))}
          </div>
        </section>

        {/* MINIMALIST ARCHITECTURE DIAGRAM */}
        <section className="space-y-8">
          <div>
            <h2 className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-2">System Design</h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">REST API Integration Topology</h3>
            <p className="text-sm text-neutral-400 font-light mt-2 max-w-xl">
              Clean pipeline caching live global aviation feeds at Next.js server borders, minimizing client loading penalties.
            </p>
          </div>

          <div className="p-6 bg-neutral-950 border border-neutral-900 rounded-2xl flex justify-center items-center overflow-x-auto no-scrollbar">
            <svg width="780" height="240" viewBox="0 0 780 240" fill="none" className="min-w-[650px] select-none text-[10px]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
              <defs>
                <marker id="arr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 2 L 6 5 L 0 8 z" fill="#3f3f46" />
                </marker>
              </defs>

              {/* Connections (Lines) */}
              <path d="M 150 120 L 220 120" stroke="#27272a" strokeWidth="1" markerEnd="url(#arr)" />
              <path d="M 360 120 L 430 120" stroke="#27272a" strokeWidth="1" markerEnd="url(#arr)" />
              <path d="M 570 120 L 640 120" stroke="#27272a" strokeWidth="1" strokeDasharray="2 2" markerEnd="url(#arr)" />

              {/* Secondary loop showing Next.js In-Memory Cache hit */}
              <path d="M 290 85 Q 290 50 310 50 Q 330 50 330 85" stroke="#27272a" strokeWidth="1" strokeDasharray="2 2" markerEnd="url(#arr)" />

              {/* NODES */}
              {/* Node 1: Next.js Client Side Page */}
              <g>
                <rect x="20" y="85" width="130" height="70" rx="4" fill="#09090b" stroke="#27272a" strokeWidth="1" />
                <text x="35" y="108" fill="#f4f4f5" fontWeight="600" fontSize="10">Next.js Client</text>
                <text x="35" y="122" fill="#a1a1aa" fontSize="8">Interactive Grid</text>
                <text x="35" y="134" fill="#71717a" fontSize="8">Framer Motion HUD</text>
              </g>

              {/* Node 2: Next.js API Route Handlers */}
              <g>
                <rect x="220" y="85" width="140" height="70" rx="4" fill="#09090b" stroke="#27272a" strokeWidth="1" />
                <text x="235" y="108" fill="#f4f4f5" fontWeight="600" fontSize="10">REST API Router</text>
                <text x="235" y="122" fill="#a1a1aa" fontSize="8">Next.js Server border</text>
                <text x="235" y="134" fill="#71717a" fontSize="8">Response Cache (60s)</text>
              </g>
              {/* Cache label */}
              <text x="290" y="42" fill="#a1a1aa" fontSize="7" textAnchor="middle">Cache Hit (Fast Path)</text>

              {/* Node 3: AirLabs API Gateway */}
              <g>
                <rect x="430" y="85" width="140" height="70" rx="4" fill="#09090b" stroke="#27272a" strokeWidth="1" />
                <text x="445" y="108" fill="#f4f4f5" fontWeight="600" fontSize="10">AirLabs API Node</text>
                <text x="445" y="122" fill="#a1a1aa" fontSize="8">Global Flight Engine</text>
                <text x="445" y="134" fill="#71717a" fontSize="8">Payload Filtering</text>
              </g>

              {/* Node 4: Global Flight Feeds */}
              <g>
                <rect x="640" y="85" width="120" height="70" rx="4" fill="#09090b" stroke="#27272a" strokeWidth="1" />
                <text x="652" y="108" fill="#f4f4f5" fontWeight="600" fontSize="10">Live Flight Feed</text>
                <text x="652" y="122" fill="#a1a1aa" fontSize="8">FAA / ADSB radars</text>
                <text x="652" y="134" fill="#71717a" fontSize="8">Real-time coordinates</text>
                <circle cx="740" cy="103" r="3" fill="#0284c7" />
              </g>
            </svg>
          </div>
        </section>

        {/* ENGINEERING HIGHLIGHTS CODE PANEL */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-2">Software Quality</h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Engineering & Implementation Highlights</h3>
          </div>

          <div className="bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-6 py-4 bg-neutral-900/20 border-b border-neutral-900 flex items-center justify-between">
              <span className="text-xs font-mono text-neutral-400">src/app/api/flights/route.ts</span>
              <span className="text-[10px] font-mono text-sky-400 px-2 py-0.5 bg-sky-500/10 border border-sky-500/20 rounded">Next.js API Handler</span>
            </div>
            
            <div className="p-6 font-mono text-[11px] sm:text-xs text-neutral-300 leading-relaxed overflow-x-auto bg-neutral-950 max-h-[350px]">
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
