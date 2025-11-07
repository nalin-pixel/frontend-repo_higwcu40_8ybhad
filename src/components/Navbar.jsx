import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/60 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="font-extrabold tracking-tight text-xl sm:text-2xl flex items-center gap-2">
          <img src="/favicon.svg" alt="MEM.dev" className="h-6 w-6" />
          <span className="text-neutral-800 dark:text-white">MEM</span>
          <span className="text-indigo-600">.dev</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
          <a href="#work" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Work</a>
          <a href="#skills" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}
