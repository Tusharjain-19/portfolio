
import React from 'react';

export default function Skills({ skills }: { skills: string[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {skills.map((skill) => (
        <div key={skill} className="flex items-center space-x-2 text-sm text-[var(--text-secondary)]">
            <span className="text-green-500">➜</span>
            <span className="font-mono">{skill}</span>
        </div>
      ))}
    </div>
  );
}
