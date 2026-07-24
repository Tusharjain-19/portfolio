
import React from 'react';

interface ProjectProps {
  name: string;
  tagline: string;
  description: string;
  challenge: string;
  tech: string[];
}

export default function ProjectCard({ name, tagline, description, challenge, tech }: ProjectProps) {
  return (
    <div className="border border-(--border-color) bg-(--bg-secondary) p-6 rounded-lg hover:border-(--text-muted) transition-colors duration-300">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
        <h3 className="text-xl font-bold text-(--text-primary) font-mono">{name}</h3>
        <span className="text-xs text-(--text-muted) font-mono mt-1 md:mt-0">{tagline}</span>
      </div>
      
      <p className="text-(--text-secondary) mb-4 text-sm leading-relaxed">
        {description}
      </p>

      <div className="mb-4 bg-red-900/5 border-l-2 border-red-500/30 p-3 rounded-r">
        <p className="text-xs font-mono text-(--text-muted) uppercase tracking-wider mb-1">core engineering challenge</p>
        <p className="text-(--text-secondary) text-sm">
          {challenge}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {tech.map((t) => (
          <span key={t} className="px-2 py-1 bg-(--bg-tertiary) text-(--text-muted) text-xs rounded border border-(--border-color) font-mono">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
