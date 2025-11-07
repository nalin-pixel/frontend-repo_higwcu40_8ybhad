import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 p-[1px]">
          <div className="rounded-2xl bg-white dark:bg-neutral-950 p-10">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Let’s build something delightful</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">Available for freelance and full-time roles. I typically reply within a day.</p>
            <a href="mailto:me@mem.dev" className="mt-6 inline-block px-6 py-3 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 transition-colors">Email me</a>
          </div>
        </div>
      </div>
    </section>
  );
}
