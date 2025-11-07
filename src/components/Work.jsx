import React from 'react';

const projects = [
  {
    title: 'Design System Playground',
    desc: 'Composable components and tokens for rapid product work.',
    tag: 'React • Tailwind • Accessibility',
  },
  {
    title: '3D Interactive Hero',
    desc: 'Spline + Framer Motion driven visuals and interactions.',
    tag: 'Spline • Framer Motion',
  },
  {
    title: 'Perf-First Dashboard',
    desc: 'Data-heavy UI optimized with memoization and code-split.',
    tag: 'React • Vite • ECharts',
  },
];

export default function Work() {
  return (
    <section id="work" className="py-16 bg-gradient-to-b from-white to-indigo-50/40 dark:from-neutral-950 dark:to-indigo-950/20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Selected Work</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="rounded-xl border border-black/5 dark:border-white/10 bg-white/80 dark:bg-neutral-900/70 backdrop-blur p-6">
              <div className="h-32 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-black/5 dark:border-white/10" />
              <h3 className="mt-4 font-semibold text-neutral-900 dark:text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">{p.desc}</p>
              <p className="mt-3 text-xs text-neutral-500">{p.tag}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
