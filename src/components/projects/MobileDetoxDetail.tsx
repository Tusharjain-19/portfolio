"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Github } from '@/components/Icons';
import Link from 'next/link';

const STATS = [
  { label: "Participants", val: "22 Responses", highlight: "Primary Survey" },
  { label: "Detox Group", val: "5 Subjects", highlight: "Active Detox" },
  { label: "Non-Detox Group", val: "17 Subjects", highlight: "Control Group" },
  { label: "Mean SQI (Detox)", val: "6.92 / 10", highlight: "Higher Quality" },
  { label: "Mean SQI (Non-Detox)", val: "5.11 / 10", highlight: "Baseline" },
  { label: "t-Statistic", val: "3.18", highlight: "df = 20" },
];

const TIMELINE_STEPS = [
  { step: "01", title: "Survey Design", desc: "Crafted multi-variable questionnaire capturing digital usage before sleep & vital parameters." },
  { step: "02", title: "Data Collection", desc: "Gathered 22 primary student responses via structured Google Forms." },
  { step: "03", title: "Data Cleaning", desc: "Filtered missing data, normalized categorical ratings, and verified outlier distributions." },
  { step: "04", title: "SQI Construction", desc: "Built a custom weighted Sleep Quality Index combining latency, restfulness, and hours." },
  { step: "05", title: "Descriptive Analysis", desc: "Computed mean, variance, standard deviation, and sample distributions across groups." },
  { step: "06", title: "Hypothesis Testing", desc: "Executed Independent Two-Sample t-Test to evaluate null hypothesis (H₀: μ₁ = μ₂)." },
  { step: "07", title: "Conclusion", desc: "Rejected H₀ at 10%, 5%, and 1% significance levels (p < 0.01)." }
];

const CONTRIBUTIONS = [
  "Performed rigorous two-sample statistical calculations and t-test variance analysis.",
  "Engineered the multi-variable weighted Sleep Quality Index (SQI) formula.",
  "Formatted analytical charts and statistical summary tables for academic publication.",
  "Conducted final peer review and data validation check prior to submission.",
  "Collaborated with course team under Statistical Modeling for Business Systems."
];

const TECH_TOOLS = [
  "Google Forms", "Excel Data Engine", "Statistical Analysis",
  "Hypothesis Testing", "Data Cleaning", "Data Visualization", "Research Methods"
];

const LEARNING_OUTCOMES = [
  "Data Cleaning & Preprocessing", "Feature Engineering (Index Building)",
  "Statistical Thinking & Reasoning", "Hypothesis Testing (t-Test, p-values)",
  "Academic Research Methodology", "Data Visualization & Communication", "Experimental Design Controls"
];

export default function MobileDetoxDetail() {
  const [activeChart, setActiveChart] = useState<'sqi' | 'age' | 'dist'>('sqi');

  return (
    <article className="min-h-screen text-(--text-primary) pb-20 selection:bg-(--accent)/20 selection:text-(--text-primary)">
      
      {/* HEADER SECTION */}
      <header className="relative py-16 md:py-24 border-b border-(--border-color) overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center md:text-left">
          <Link href="/#research" className="inline-flex items-center gap-1.5 text-xs font-mono text-(--text-muted) hover:text-(--text-primary) transition-colors mb-8 uppercase tracking-widest">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Research
          </Link>
          
          <div className="mb-4 inline-block px-3 py-1 bg-(--bg-secondary) border border-(--border-color) rounded-full">
            <span className="text-[10px] font-mono uppercase tracking-widest text-(--text-muted) font-semibold">
              Statistical Data Analysis • Research Project • Data Science
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight text-(--text-primary) font-heading">
            Does Mobile Detox Improve Sleep Quality?
          </h1>
          <p className="text-base sm:text-xl text-(--text-secondary) font-light leading-relaxed max-w-2xl">
            A research-driven statistical analysis based on primary survey data exploring how mobile detox habits influence sleep quality using primary survey data, custom index construction, descriptive statistics, and hypothesis testing.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-10">
            <a 
              href="/Statistical_Data_Analysis_Report_final (1).pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-(--text-primary) text-(--bg-primary) font-semibold rounded-lg hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group text-sm shadow-md"
            >
              <span>View Report (PDF)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a 
              href="https://github.com/Tusharjain-19" 
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
        
        {/* OVERVIEW & PROBLEM STATEMENT */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-(--bg-secondary) border border-(--border-color) rounded-2xl space-y-4">
            <span className="text-xs font-mono text-(--text-muted) uppercase tracking-widest block">Project Background</span>
            <h3 className="text-xl font-bold text-(--text-primary) tracking-tight">Academic Overview</h3>
            <p className="text-sm text-(--text-secondary) font-light leading-relaxed">
              This project was completed as part of the <span className="text-(--text-primary) font-medium">Statistical Modeling for Business Systems</span> course at <span className="text-(--text-primary) font-medium">BMS College of Engineering</span>. 
              The study collected and analyzed primary survey responses to determine whether practicing mobile detox before sleep leads to measurably better sleep quality.
            </p>
          </div>

          <div className="p-6 bg-(--bg-secondary) border border-(--border-color) rounded-2xl space-y-4">
            <span className="text-xs font-mono text-(--text-muted) uppercase tracking-widest block">Research Question</span>
            <h3 className="text-xl font-bold text-(--text-primary) tracking-tight">Core Problem Statement</h3>
            <div className="p-4 bg-(--bg-primary) border-l-2 border-(--text-primary) rounded-r text-sm text-(--text-secondary) italic leading-relaxed">
              "Does reducing mobile phone usage before sleep significantly improve overall sleep quality?"
            </div>
            <ul className="text-xs text-(--text-muted) space-y-1.5 pt-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-(--text-primary)" />
                Study the relationship between mobile detox and sleep.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-(--text-primary)" />
                Construct a weighted Sleep Quality Index (SQI).
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-(--text-primary)" />
                Perform Independent Two-Sample t-Test.
              </li>
            </ul>
          </div>
        </section>

        {/* INTERACTIVE STATS CARDS */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xs font-mono text-(--text-muted) uppercase tracking-widest mb-2">Key Metrics</h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-(--text-primary) tracking-tight">Interactive Statistics Dashboard</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {STATS.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                className="p-5 bg-(--bg-secondary) border border-(--border-color) hover:border-(--accent) rounded-xl flex flex-col justify-between transition-all group"
              >
                <div>
                  <span className="text-[10px] font-mono text-(--text-muted) uppercase tracking-wider block mb-1">{stat.label}</span>
                  <span className="text-xl sm:text-2xl font-bold font-mono text-(--text-primary) group-hover:text-(--accent) transition-colors">{stat.val}</span>
                </div>
                <span className="text-[9px] font-mono text-(--text-muted) bg-(--bg-primary) border border-(--border-color) px-2 py-0.5 rounded-full w-fit mt-3">
                  {stat.highlight}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* INTERACTIVE DATA VISUALIZATION SECTION */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <h2 className="text-xs font-mono text-(--text-muted) uppercase tracking-widest mb-2">Data Visualizations</h2>
              <h3 className="text-2xl sm:text-3xl font-bold text-(--text-primary) tracking-tight">Comparative Analytics</h3>
            </div>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={() => setActiveChart('sqi')}
                className={`px-3 py-1.5 rounded-lg border text-xs font-mono transition-all cursor-pointer ${
                  activeChart === 'sqi' ? 'bg-(--accent) text-(--bg-primary) font-bold' : 'bg-(--bg-secondary) border-(--border-color) text-(--text-muted) hover:text-(--text-primary)'
                }`}
              >
                SQI Comparison
              </button>
              <button
                onClick={() => setActiveChart('age')}
                className={`px-3 py-1.5 rounded-lg border text-xs font-mono transition-all cursor-pointer ${
                  activeChart === 'age' ? 'bg-(--accent) text-(--bg-primary) font-bold' : 'bg-(--bg-secondary) border-(--border-color) text-(--text-muted) hover:text-(--text-primary)'
                }`}
              >
                Group Ratio
              </button>
              <button
                onClick={() => setActiveChart('dist')}
                className={`px-3 py-1.5 rounded-lg border text-xs font-mono transition-all cursor-pointer ${
                  activeChart === 'dist' ? 'bg-(--accent) text-(--bg-primary) font-bold' : 'bg-(--bg-secondary) border-(--border-color) text-(--text-muted) hover:text-(--text-primary)'
                }`}
              >
                Sleep Rating
              </button>
            </div>
          </div>

          <div className="bg-(--bg-secondary) border border-(--border-color) rounded-2xl p-6 shadow-xl relative">
            <div className="px-4 py-3 bg-(--bg-primary)/50 border-b border-(--border-color) flex justify-between items-center mb-6 rounded-lg">
              <span className="text-xs font-mono text-(--text-muted)">Primary Survey Sample (N = 22)</span>
              <span className="text-xs font-mono text-(--text-primary) font-semibold">● Hypothesis Test Validated</span>
            </div>

            <div className="min-h-[220px] flex items-center justify-center">
              {activeChart === 'sqi' && (
                <div className="w-full space-y-6 max-w-lg mx-auto">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-(--text-primary) font-bold">Detox Group (n = 5)</span>
                      <span className="text-(--text-primary) font-bold">Mean SQI: 6.92 / 10</span>
                    </div>
                    <div className="h-6 w-full bg-(--bg-primary) rounded-lg overflow-hidden p-1 border border-(--border-color)">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "69.2%" }}
                        transition={{ duration: 0.8 }}
                        className="h-full bg-(--text-primary) rounded-md"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-(--text-muted)">Non-Detox Group (n = 17)</span>
                      <span className="text-(--text-secondary)">Mean SQI: 5.11 / 10</span>
                    </div>
                    <div className="h-6 w-full bg-(--bg-primary) rounded-lg overflow-hidden p-1 border border-(--border-color)">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "51.1%" }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="h-full bg-(--border-color) rounded-md"
                      />
                    </div>
                  </div>

                  <div className="p-3 bg-(--bg-primary) border border-(--border-color) rounded-lg text-center">
                    <span className="text-xs font-mono text-(--text-primary) font-medium">
                      Difference: +1.81 SQI Points (+35.4% improvement in sleep quality)
                    </span>
                  </div>
                </div>
              )}

              {activeChart === 'age' && (
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full py-4">
                  <div className="relative w-36 h-36 rounded-full border-8 border-(--border-color) flex items-center justify-center bg-(--bg-primary) shadow-inner">
                    <span className="text-xl font-bold font-mono text-(--text-primary)">N = 22</span>
                  </div>
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded bg-(--text-primary)" />
                      <span className="text-(--text-primary)">Detox Group: 5 (22.7%)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded bg-(--border-color)" />
                      <span className="text-(--text-muted)">Non-Detox Group: 17 (77.3%)</span>
                    </div>
                    <p className="text-[10px] text-(--text-muted) max-w-xs pt-2">
                      Age demographic primarily 18–22 undergraduate engineering students at BMSCE.
                    </p>
                  </div>
                </div>
              )}

              {activeChart === 'dist' && (
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  {[
                    { label: "Restfulness", detox: "7.8", control: "5.4" },
                    { label: "Sleep Latency", detox: "15 min", control: "42 min" },
                    { label: "Disruptions", detox: "0.8/night", control: "2.3/night" },
                    { label: "Morning Alert", detox: "8.2", control: "5.1" }
                  ].map((m, i) => (
                    <div key={i} className="p-3 bg-(--bg-primary) border border-(--border-color) rounded-xl space-y-1">
                      <span className="text-[10px] font-mono text-(--text-muted) block uppercase">{m.label}</span>
                      <span className="text-xs font-mono text-(--text-primary) font-bold block">Detox: {m.detox}</span>
                      <span className="text-[10px] font-mono text-(--text-muted) block">Control: {m.control}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* WORKFLOW TIMELINE */}
        <section className="space-y-8">
          <div>
            <h2 className="text-xs font-mono text-(--text-muted) uppercase tracking-widest mb-2">Process</h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-(--text-primary) tracking-tight">Research Workflow Timeline</h3>
          </div>

          <div className="relative border-l border-(--border-color) ml-4 pl-6 space-y-8">
            {TIMELINE_STEPS.map((item, idx) => (
              <div key={idx} className="relative group">
                <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-(--bg-primary) border-2 border-(--border-color) flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-(--text-primary)" />
                </span>
                <span className="text-[10px] font-mono text-(--text-muted) font-bold">STEP {item.step}</span>
                <h4 className="text-base font-bold text-(--text-primary) group-hover:text-(--accent) transition-colors">{item.title}</h4>
                <p className="text-xs text-(--text-secondary) font-light mt-1 max-w-xl">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* KEY FINDINGS BANNER */}
        <section className="p-8 bg-(--bg-secondary) border border-(--border-color) rounded-2xl shadow-lg space-y-4">
          <div className="flex items-center gap-2 text-(--text-primary)">
            <span className="w-2.5 h-2.5 rounded-full bg-(--text-primary) animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest font-bold">Key Statistical Result</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-(--text-primary) leading-tight">
            Significant Improvement Confirmed (p &lt; 0.01)
          </h3>
          <p className="text-sm text-(--text-secondary) font-light leading-relaxed">
            Participants practicing mobile detox displayed a significantly higher average Sleep Quality Index than the non-detox group (6.92 vs 5.11). 
            With a calculated <span className="font-mono text-(--text-primary) font-bold">t-statistic of 3.18</span> and <span className="font-mono text-(--text-primary) font-bold">20 degrees of freedom</span>, 
            the statistical test successfully rejected the null hypothesis at <span className="font-mono text-(--text-primary) font-bold">10%, 5%, and 1% significance levels</span>.
          </p>
        </section>

        {/* CONTRIBUTIONS & TOOLS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-(--bg-secondary) border border-(--border-color) rounded-2xl space-y-4">
            <h3 className="text-xs font-mono text-(--text-muted) uppercase tracking-widest">My Contributions</h3>
            <ul className="space-y-2.5 text-xs text-(--text-secondary) font-light">
              {CONTRIBUTIONS.map((c, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-(--text-primary) mt-0.5">✓</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-(--bg-secondary) border border-(--border-color) rounded-2xl space-y-6">
            <div>
              <h3 className="text-xs font-mono text-(--text-muted) uppercase tracking-widest mb-3">Tools & Techniques</h3>
              <div className="flex flex-wrap gap-2">
                {TECH_TOOLS.map((t, i) => (
                  <span key={i} className="px-2.5 py-1 bg-(--bg-primary) border border-(--border-color) text-(--text-secondary) text-xs font-mono rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono text-(--text-muted) uppercase tracking-widest mb-3">Learning Outcomes</h3>
              <div className="flex flex-wrap gap-2">
                {LEARNING_OUTCOMES.map((l, i) => (
                  <span key={i} className="px-2.5 py-1 bg-(--bg-primary) border border-(--border-color) text-(--text-secondary) text-xs font-mono rounded-md">
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER QUOTE */}
        <footer className="py-12 border-t border-(--border-color) text-center space-y-3">
          <blockquote className="text-lg sm:text-xl font-serif italic text-(--text-secondary)">
            "Good decisions are driven by data, not assumptions."
          </blockquote>
          <p className="text-xs font-mono text-(--text-muted) uppercase tracking-widest">
            Statistical Modeling • BMS College of Engineering
          </p>
        </footer>

      </div>
    </article>
  );
}
