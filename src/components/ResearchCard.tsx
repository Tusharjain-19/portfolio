
import React from 'react';

interface ResearchProps {
  title: string;
  type: string;
  role: string;
  contributions: string[];
  technical_areas: string[];
  note: string;
}

export default function ResearchCard({ title, type, role, contributions, technical_areas, note }: ResearchProps) {
  return (
    <div className="border border-[var(--border-color)] bg-[var(--bg-secondary)] p-8 rounded-lg">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
        <div>
          <span className="inline-block px-2 py-1 bg-blue-900/20 text-blue-400 text-xs font-mono rounded border border-blue-900/30 mb-3">
            {type}
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] leading-tight mb-2">
            {title}
          </h3>
          <p className="text-[var(--text-muted)] font-mono text-sm">Role: <span className="text-[var(--text-secondary)]">{role}</span></p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-6">
        <div className="md:col-span-2">
            <h4 className="text-sm font-mono text-[var(--text-muted)] uppercase tracking-widest mb-4">Key Technical Contributions</h4>
            <ul className="space-y-3">
            {contributions.map((item, idx) => (
                <li key={idx} className="text-[var(--text-secondary)] text-sm flex gap-3">
                <span className="text-blue-500 mt-1">▹</span>
                <span className="leading-relaxed">{item}</span>
                </li>
            ))}
            </ul>
        </div>

        <div>
            <h4 className="text-sm font-mono text-[var(--text-muted)] uppercase tracking-widest mb-4">Core Areas</h4>
            <div className="flex flex-wrap gap-2">
                {technical_areas.map((area) => (
                <span key={area} className="px-2 py-1 bg-[var(--bg-tertiary)] text-[var(--text-muted)] text-xs rounded border border-[var(--border-color)]">
                    {area}
                </span>
                ))}
            </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-yellow-900/10 border border-yellow-700/30 rounded text-sm text-yellow-600 italic">
        <strong>Note:</strong> {note}
      </div>
    </div>
  );
}
