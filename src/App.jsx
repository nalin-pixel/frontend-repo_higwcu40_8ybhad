import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Navbar />
      <Hero />
      <Work />
      <Skills />
      <Contact />
      <footer className="py-8 text-center text-sm text-neutral-500">© {new Date().getFullYear()} MEM — Built with React & Spline</footer>
    </div>
  );
}

export default App;
