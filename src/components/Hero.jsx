import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[75vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 dark:bg-neutral-900/70 backdrop-blur border border-black/5 dark:border-white/10 text-xs text-neutral-700 dark:text-neutral-300">
          <span>Interactive • Playful • Modern</span>
        </div>
        <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          MEM — Frontend Developer
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-700 dark:text-neutral-300 text-lg">
          I craft fast, aesthetic interfaces with React, TypeScript, and delightful motion. Scroll to explore selected work and capabilities.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <a href="#work" className="px-5 py-2.5 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 transition-colors">View Work</a>
          <a href="#contact" className="px-5 py-2.5 rounded-md bg-white/70 dark:bg-neutral-900/70 backdrop-blur border border-black/5 dark:border-white/10 text-neutral-900 dark:text-white hover:bg-white/90 dark:hover:bg-neutral-800 transition-colors">Contact</a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/80 dark:from-neutral-950/30 dark:via-transparent dark:to-neutral-950/80" />
    </section>
  );
}
