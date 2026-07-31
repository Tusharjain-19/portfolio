"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Github } from '@/components/Icons';
import Link from 'next/link';

interface OrderItem {
  id: string;
  table: string;
  items: string;
  status: 'New' | 'Preparing' | 'Ready' | 'Delivered';
  price: string;
  time: string;
}

const INITIAL_ORDERS: OrderItem[] = [
  { id: '#KOT-8492', table: 'Table 04', items: '2x Truffle Pasta, 1x Sparkling Water', status: 'New', price: '$42.00', time: '2 mins ago' },
  { id: '#KOT-8491', table: 'Table 12', items: '1x Wagyu Burger, 1x Craft IPA', status: 'Preparing', price: '$34.50', time: '8 mins ago' },
  { id: '#KOT-8489', table: 'Table 02', items: '3x Woodfired Pizza, 2x Tiramisu', status: 'Ready', price: '$78.00', time: '14 mins ago' },
];

const FEATURES = [
  { title: "Row Level Security (RLS)", desc: "Isolated multi-tenancy at the database level. Each restaurant organization only reads and mutates its own scoped relational tables." },
  { title: "WebSocket KOT Dispatch", desc: "Instant order sync between waiter tablets and kitchen displays with sub-50ms latency using Supabase Realtime listeners." },
  { title: "Real-Time Inventory Deduction", desc: "Atomic PostgreSQL database functions deduct raw ingredient stock upon order billing to eliminate warehouse discrepancies." },
  { title: "Role-Based Access Control", desc: "Granular administrative permissions separating waiters, chefs, floor managers, and financial accountants." },
  { title: "Offline Resilience Queue", desc: "Local IndexedDB caching ensures POS terminals continue taking orders during internet dropouts and sync cleanly on reconnect." },
  { title: "Dynamic Menu & Modifiers", desc: "Real-time updates to menu availability, seasonal pricing, and dish customizations across all POS nodes instantly." }
];

export default function RestaurantOSDetail() {
  const [orders, setOrders] = useState<OrderItem[]>(INITIAL_ORDERS);
  const [activeTab, setActiveTab] = useState<'sales' | 'hours' | 'items'>('sales');
  const [selectedSqlTab, setSelectedSqlTab] = useState<'rls' | 'tx' | 'schema'>('rls');
  const [isReportOpen, setIsReportOpen] = useState(false);

  const addSimulatedOrder = () => {
    const newId = `#KOT-${Math.floor(1000 + Math.random() * 9000)}`;
    const tables = ['Table 01', 'Table 06', 'Table 09', 'VIP Suite 2'];
    const sampleItems = ['1x Artisan Ramen, 1x Gyoza', '2x Ribeye Steak, 1x Merlot', '1x Caesar Salad, 1x Iced Tea'];
    const randomTable = tables[Math.floor(Math.random() * tables.length)];
    const randomItems = sampleItems[Math.floor(Math.random() * sampleItems.length)];
    const randomPrice = `$${(20 + Math.random() * 50).toFixed(2)}`;

    const newOrder: OrderItem = {
      id: newId,
      table: randomTable,
      items: randomItems,
      status: 'New',
      price: randomPrice,
      time: 'Just now'
    };

    setOrders(prev => [newOrder, ...prev.slice(0, 4)]);
  };

  const advanceStatus = (id: string) => {
    setOrders(prev => prev.map(order => {
      if (order.id === id) {
        const nextStatus: OrderItem['status'] = 
          order.status === 'New' ? 'Preparing' :
          order.status === 'Preparing' ? 'Ready' : 'Delivered';
        return { ...order, status: nextStatus };
      }
      return order;
    }));
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
              Flagship SaaS Product
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight leading-none text-(--text-primary) font-heading">
            RestaurantOS
          </h1>
          <p className="text-lg sm:text-xl text-(--text-secondary) font-light leading-relaxed max-w-2xl">
            Cloud-Native Multi-Tenant Restaurant Management SaaS. Centralizing POS, live table states, inventory tracking, RLS security, and instant WebSockets.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-10">
            <a 
              href="https://restaurant-os-rouge.vercel.app/dashboard" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-(--text-primary) text-(--bg-primary) font-semibold rounded-lg hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group text-sm shadow-md"
            >
              <span>Live Demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a 
              href="/Project_DBMS_pdf.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-(--bg-secondary) border border-(--border-color) text-(--text-primary) hover:bg-(--border-color) font-semibold rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 text-sm cursor-pointer"
            >
              <span>Project Report (PDF)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a 
              href="https://github.com/Tusharjain-19/restaurant-os" 
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
        
        {/* INTERACTIVE DASHBOARD SECTION */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h2 className="text-xs font-mono text-(--text-muted) uppercase tracking-widest mb-2">Live Application Preview</h2>
              <h3 className="text-2xl sm:text-3xl font-bold text-(--text-primary) tracking-tight">Interactive Operations Hub</h3>
            </div>
            <button 
              onClick={addSimulatedOrder}
              className="px-4 py-2 bg-(--bg-secondary) border border-(--border-color) hover:bg-(--border-color) text-(--text-primary) rounded-lg text-xs font-mono transition-all flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              Simulate Customer Order
            </button>
          </div>

          <div className="bg-(--bg-secondary) border border-(--border-color) rounded-2xl overflow-hidden shadow-xl">
            <div className="px-6 py-4 bg-(--bg-primary)/50 border-b border-(--border-color) flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-(--border-color)" />
                <span className="w-2.5 h-2.5 rounded-full bg-(--border-color)" />
                <span className="w-2.5 h-2.5 rounded-full bg-(--border-color)" />
                <span className="text-xs font-mono text-(--text-muted) ml-2">tenant_id: main_branch_blr</span>
              </div>
              <span className="text-xs px-2.5 py-0.5 bg-(--bg-primary) text-(--text-primary) rounded-full font-mono border border-(--border-color)">
                ● Live Websocket Connected
              </span>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-(--text-primary) uppercase tracking-wider">Active KOT Queue</span>
                  <span className="text-[10px] font-mono text-(--text-muted)">Click ticket to advance status</span>
                </div>
                
                <div className="space-y-3">
                  <AnimatePresence initial={false}>
                    {orders.map((order) => (
                      <motion.div
                        key={order.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        onClick={() => advanceStatus(order.id)}
                        className="p-4 bg-(--bg-primary) border border-(--border-color) hover:border-(--accent) rounded-xl transition-all cursor-pointer flex justify-between items-start gap-4 shadow-xs"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-(--text-primary)">{order.id}</span>
                            <span className="text-xs px-2 py-0.5 bg-(--bg-secondary) rounded font-mono text-(--text-muted) border border-(--border-color)">{order.table}</span>
                          </div>
                          <p className="text-xs text-(--text-secondary) font-light">{order.items}</p>
                          <span className="text-[10px] font-mono text-(--text-muted) block pt-1">Ordered {order.time}</span>
                        </div>
                        <div className="flex flex-col items-end gap-2 shrink-0">
                          <span className="text-sm font-mono font-bold text-(--text-primary)">{order.price}</span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                            order.status === 'New' ? 'bg-(--bg-secondary) text-(--text-secondary) border-(--border-color)' :
                            order.status === 'Preparing' ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20' :
                            order.status === 'Ready' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 animate-pulse' :
                            'bg-(--bg-secondary) text-(--text-muted) border-(--border-color)'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-4 bg-(--bg-primary) border border-(--border-color) rounded-xl space-y-4">
                  <span className="text-xs font-bold text-(--text-primary) uppercase tracking-wider block">Live Analytics</span>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="text-[10px] font-mono text-(--text-muted) block uppercase">Real-Time Revenue</span>
                      <span className="text-xl font-bold font-mono text-(--text-primary)">$4,128.50 <span className="text-xs text-(--text-muted) font-light font-sans">(+14%)</span></span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-(--text-muted) block uppercase">Inventory Warnings</span>
                      <span className="text-base font-bold font-mono text-amber-600 dark:text-amber-400">2 Items Low Stock</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-(--text-muted) block uppercase">Avg Prep Time</span>
                      <span className="text-base font-bold font-mono text-(--text-primary)">9.4 mins</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-(--bg-primary) border border-(--border-color) rounded-xl">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-(--text-primary) uppercase tracking-wider">Reports</span>
                    <div className="flex gap-1.5">
                      {(['sales', 'hours', 'items'] as const).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded transition-all cursor-pointer ${
                            activeTab === tab ? 'bg-(--accent) text-(--bg-primary) font-bold' : 'text-(--text-muted) hover:text-(--text-primary)'
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="h-20 w-full flex items-end justify-between gap-1 pt-4">
                    {activeTab === 'sales' && [40, 50, 45, 60, 75, 65, 80, 95].map((val, i) => (
                      <div key={i} className="bg-(--accent)/40 hover:bg-(--accent) rounded-t-sm w-full transition-all" style={{ height: `${val}%` }} />
                    ))}
                    {activeTab === 'hours' && [15, 30, 80, 95, 60, 45, 75, 90].map((val, i) => (
                      <div key={i} className="bg-(--border-color) hover:bg-(--text-muted) rounded-t-sm w-full transition-all" style={{ height: `${val}%` }} />
                    ))}
                    {activeTab === 'items' && [95, 80, 65, 50, 40, 30, 20, 10].map((val, i) => (
                      <div key={i} className="bg-(--border-color) hover:bg-(--text-muted) rounded-t-sm w-full transition-all" style={{ height: `${val}%` }} />
                    ))}
                  </div>
                  <div className="flex justify-between text-[8px] font-mono text-(--text-muted) mt-2">
                    <span>{activeTab === 'sales' ? '12 PM' : activeTab === 'hours' ? '11 AM' : 'Burger'}</span>
                    <span>{activeTab === 'sales' ? '8 PM' : activeTab === 'hours' ? '10 PM' : 'Salad'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="space-y-8">
          <div>
            <h2 className="text-xs font-mono text-(--text-muted) uppercase tracking-widest mb-2">Core capabilities</h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-(--text-primary) tracking-tight">Designed for Modern Kitchens</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((feat, idx) => (
              <div 
                key={idx}
                className="p-6 bg-(--bg-secondary) border border-(--border-color) hover:border-(--accent) rounded-2xl transition-all group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <h4 className="font-bold text-(--text-primary) transition-colors">{feat.title}</h4>
                  <p className="text-sm text-(--text-secondary) font-light leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SYSTEM DESIGN TOPOLOGY */}
        <section className="space-y-8">
          <div>
            <h2 className="text-xs font-mono text-(--text-muted) uppercase tracking-widest mb-2">System Design</h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-(--text-primary) tracking-tight">SaaS Architecture Topology</h3>
            <p className="text-sm text-(--text-secondary) font-light mt-2 max-w-xl">
              An elegant, high-throughput distributed layout synchronizing state across nodes with row-level isolated relational storage.
            </p>
          </div>

          <div className="p-6 bg-(--bg-secondary) border border-(--border-color) rounded-2xl flex justify-center items-center overflow-x-auto no-scrollbar">
            <svg width="780" height="320" viewBox="0 0 780 320" fill="none" className="min-w-[700px] select-none text-[10px]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 2 L 6 5 L 0 8 z" fill="var(--text-muted)" />
                </marker>
              </defs>

              {/* Connections (Lines) */}
              <path d="M 140 80 Q 200 80 200 130" stroke="var(--border-color)" strokeWidth="1" strokeDasharray="2 2" markerEnd="url(#arrow)" />
              <path d="M 140 160 Q 200 160 200 160" stroke="var(--border-color)" strokeWidth="1" strokeDasharray="2 2" markerEnd="url(#arrow)" />
              <path d="M 140 240 Q 200 240 200 190" stroke="var(--border-color)" strokeWidth="1" strokeDasharray="2 2" markerEnd="url(#arrow)" />

              {/* Frontend to Supabase Gateway */}
              <path d="M 330 160 L 370 160" stroke="var(--border-color)" strokeWidth="1" markerEnd="url(#arrow)" />
              
              {/* Supabase to Postgres */}
              <path d="M 490 160 L 530 160" stroke="var(--border-color)" strokeWidth="1" markerEnd="url(#arrow)" />

              {/* Postgres back to Analytics Dashboard */}
              <path d="M 590 120 Q 590 60 480 60 Q 370 60 370 130" stroke="var(--text-muted)" strokeWidth="1.1" strokeDasharray="3 3" markerEnd="url(#arrow)" />
              <path d="M 590 200 Q 590 260 670 260 Q 720 260 720 180" stroke="var(--border-color)" strokeWidth="1" strokeDasharray="2 2" markerEnd="url(#arrow)" />

              {/* NODES */}
              <g>
                <rect x="20" y="55" width="120" height="50" rx="4" fill="var(--bg-primary)" stroke="var(--border-color)" strokeWidth="1" />
                <text x="35" y="78" fill="var(--text-primary)" fontWeight="600" fontSize="10">POS Terminal</text>
                <text x="35" y="90" fill="var(--text-muted)" fontSize="8">Main Desk</text>
              </g>
              <g>
                <rect x="20" y="135" width="120" height="50" rx="4" fill="var(--bg-primary)" stroke="var(--border-color)" strokeWidth="1" />
                <text x="35" y="158" fill="var(--text-primary)" fontWeight="600" fontSize="10">Waiter App</text>
                <text x="35" y="170" fill="var(--text-muted)" fontSize="8">Mobile Tablet Web</text>
              </g>
              <g>
                <rect x="20" y="215" width="120" height="50" rx="4" fill="var(--bg-primary)" stroke="var(--border-color)" strokeWidth="1" />
                <text x="35" y="238" fill="var(--text-primary)" fontWeight="600" fontSize="10">Table UPI QR</text>
                <text x="35" y="250" fill="var(--text-muted)" fontSize="8">Customer Device</text>
              </g>

              <g>
                <rect x="200" y="125" width="130" height="70" rx="4" fill="var(--bg-primary)" stroke="var(--border-color)" strokeWidth="1" />
                <text x="215" y="148" fill="var(--text-primary)" fontWeight="600" fontSize="10">React Frontend</text>
                <text x="215" y="162" fill="var(--text-secondary)" fontSize="8">Next.js Client Engine</text>
                <text x="215" y="174" fill="var(--text-muted)" fontSize="8">State Machine / Sync</text>
              </g>

              <g>
                <rect x="370" y="125" width="120" height="70" rx="4" fill="var(--bg-primary)" stroke="var(--border-color)" strokeWidth="1" />
                <text x="385" y="148" fill="var(--text-primary)" fontWeight="600" fontSize="10">Supabase Gateway</text>
                <text x="385" y="162" fill="var(--text-secondary)" fontSize="8">WebSockets & Auth</text>
                <text x="385" y="174" fill="var(--text-muted)" fontSize="8">Edge API Router</text>
              </g>

              <g>
                <rect x="530" y="125" width="120" height="75" rx="4" fill="var(--bg-primary)" stroke="var(--border-color)" strokeWidth="1" />
                <text x="545" y="146" fill="var(--text-primary)" fontWeight="600" fontSize="10">PostgreSQL DB</text>
                <text x="545" y="160" fill="var(--text-primary)" fontSize="8" fontWeight="600">Row Level Sec (RLS)</text>
                <text x="545" y="172" fill="var(--text-secondary)" fontSize="8">ACID Transactions</text>
                <text x="545" y="184" fill="var(--text-muted)" fontSize="8">SQL Triggers/Views</text>
              </g>

              <g>
                <rect x="670" y="125" width="90" height="60" rx="4" fill="var(--bg-primary)" stroke="var(--border-color)" strokeWidth="1" />
                <text x="682" y="148" fill="var(--text-primary)" fontWeight="600" fontSize="10">Analytics</text>
                <text x="682" y="160" fill="var(--text-secondary)" fontSize="8">Live Dashboard</text>
                <text x="682" y="172" fill="var(--text-muted)" fontSize="8">Real-time charts</text>
              </g>
            </svg>
          </div>
        </section>

        {/* ENGINEERING DEEP DIVE */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xs font-mono text-(--text-muted) uppercase tracking-widest mb-2">Security & Isolation</h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-(--text-primary) tracking-tight">Database Engineering Highlights</h3>
          </div>

          <div className="bg-(--bg-secondary) border border-(--border-color) rounded-2xl overflow-hidden shadow-xl">
            <div className="flex border-b border-(--border-color) bg-(--bg-primary)/50">
              {(['rls', 'tx', 'schema'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedSqlTab(tab)}
                  className={`px-6 py-3.5 text-xs font-mono uppercase tracking-wider border-r border-(--border-color) transition-all cursor-pointer ${
                    selectedSqlTab === tab ? 'bg-(--bg-secondary) text-(--text-primary) font-bold border-b-2 border-b-(--accent)' : 'text-(--text-muted) hover:text-(--text-primary)'
                  }`}
                >
                  {tab === 'rls' ? 'Row Level Security' : tab === 'tx' ? 'ACID Transaction' : 'SQL Schema View'}
                </button>
              ))}
            </div>

            <div className="p-6 font-mono text-[11px] sm:text-xs text-(--text-secondary) leading-relaxed overflow-x-auto bg-(--bg-primary) max-h-[350px]">
              {selectedSqlTab === 'rls' && (
                <pre>{`-- Enable Row Level Security (RLS) on transactions
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Dynamic Tenant Access Isolation Policy
CREATE POLICY tenant_isolation_policy ON orders
    FOR ALL
    TO authenticated
    USING (
        tenant_id = (auth.jwt() ->> 'user_metadata')::jsonb ->> 'tenant_id'
    )
    WITH CHECK (
        tenant_id = (auth.jwt() ->> 'user_metadata')::jsonb ->> 'tenant_id'
    );`}</pre>
              )}
              {selectedSqlTab === 'tx' && (
                <pre>{`-- Atomic Billing & Inventory Deduction Transaction
CREATE OR REPLACE FUNCTION process_billing_and_deduct_inventory(
    p_order_id UUID,
    p_tenant_id VARCHAR
) RETURNS BOOLEAN AS $$
DECLARE
    item_record RECORD;
BEGIN
    -- 1. Verify and lock order status to prevent double billing
    IF NOT EXISTS (SELECT 1 FROM orders WHERE id = p_order_id AND status = 'Ready') THEN
        RAISE EXCEPTION 'Order not ready or already processed';
    END IF;

    -- 2. Loop menu items and deduct raw ingredients
    FOR item_record IN SELECT menu_item_id, quantity FROM order_items WHERE order_id = p_order_id LOOP
        UPDATE inventory 
        SET stock_quantity = stock_quantity - (recipe.required_qty * item_record.quantity)
        FROM recipe
        WHERE recipe.menu_item_id = item_record.menu_item_id
          AND inventory.tenant_id = p_tenant_id;
    END LOOP;

    -- 3. Set order status to complete
    UPDATE orders SET status = 'Delivered' WHERE id = p_order_id;
    
    RETURN TRUE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;`}</pre>
              )}
              {selectedSqlTab === 'schema' && (
                <pre>{`-- Multi-tenant schema snapshot: 20+ relational tables isolated under tenancy key
CREATE TABLE tenants (
    id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid()::text,
    company_name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE TABLE inventory (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id VARCHAR REFERENCES tenants(id) ON DELETE CASCADE,
    ingredient_name VARCHAR(100) NOT NULL,
    stock_quantity DECIMAL(10,2) NOT NULL
);`}</pre>
              )}
            </div>
          </div>
        </section>
      </div>

    </article>
  );
}
