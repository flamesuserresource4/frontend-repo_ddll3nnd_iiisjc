import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <NavBar />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-slate-950/80 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-sm text-slate-400">
            © {new Date().getFullYear()} Flames — Social Media & Marketplace Designer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
