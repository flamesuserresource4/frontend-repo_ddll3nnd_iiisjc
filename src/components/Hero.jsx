import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white" id="home">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/60 to-slate-950/90" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-20 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-4 py-2 text-xs font-medium uppercase tracking-wider text-slate-300 backdrop-blur">
          <Rocket size={16} className="text-fuchsia-400" /> Social Media & Marketplace Designer
        </span>

        <h1 className="font-display bg-gradient-to-br from-white via-fuchsia-200 to-pink-300 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Crafting playful, high‑conversion
          <br className="hidden sm:block" /> social experiences
        </h1>

        <p className="mt-5 max-w-2xl text-balance text-base text-slate-300 sm:text-lg">
          I design vibrant brand stories, social content systems, and user‑friendly marketplaces that feel delightful and drive growth.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110"
          >
            View Selected Work
            <ArrowRight className="transition group-hover:translate-x-0.5" size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700/70 bg-slate-900/60 px-5 py-3 text-sm font-semibold text-slate-200 backdrop-blur transition hover:bg-slate-800/70"
          >
            Let’s Collaborate
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
