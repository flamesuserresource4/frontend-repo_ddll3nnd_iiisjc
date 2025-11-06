import React from 'react';
import { Sparkles, Mail, Github, Linkedin } from 'lucide-react';

const NavBar = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2 text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-pink-500 text-white">
            <Sparkles size={18} />
          </span>
          <span className="font-semibold tracking-tight">Flames — Social & Marketplace Designer</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a className="hover:text-white" href="#projects">Projects</a>
          <a className="hover:text-white" href="#services">Services</a>
          <a className="hover:text-white" href="#about">About</a>
          <a className="hover:text-white" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a aria-label="LinkedIn" href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-md p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"><Linkedin size={18} /></a>
          <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="rounded-md p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"><Github size={18} /></a>
          <a href="#contact" className="hidden rounded-lg bg-white/90 px-3 py-2 text-sm font-semibold text-slate-900 transition hover:bg-white md:block"><Mail size={16} className="mr-1 inline"/> Hire Me</a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
