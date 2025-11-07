import React from 'react';
import { Code, Sparkles, Layers } from 'lucide-react';

const skills = [
  {
    icon: Code,
    title: 'Frontend Craft',
    points: ['React + Vite', 'TypeScript', 'Tailwind CSS'],
  },
  {
    icon: Layers,
    title: 'UI Systems',
    points: ['Component Libraries', 'Design Tokens', 'Accessibility'],
  },
  {
    icon: Sparkles,
    title: 'Motion & 3D',
    points: ['Framer Motion', 'Spline', 'Micro-interactions'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Capabilities</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">Balanced focus on performance, polish, and developer experience.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {skills.map(({ icon: Icon, title, points }) => (
            <div key={title} className="rounded-xl border border-black/5 dark:border-white/10 p-6 bg-white/70 dark:bg-neutral-900/70 backdrop-blur">
              <Icon className="h-6 w-6 text-indigo-600" />
              <h3 className="mt-3 font-semibold text-neutral-900 dark:text-white">{title}</h3>
              <ul className="mt-3 space-y-1 text-sm text-neutral-700 dark:text-neutral-300 list-disc pl-5">
                {points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
