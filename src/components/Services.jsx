import React from 'react';
import { LayoutGrid, Paintbrush, ShoppingCart, Megaphone } from 'lucide-react';

const services = [
  {
    title: 'Marketplace UX',
    description: 'End‑to‑end flows for product discovery, checkout, and seller tools that feel effortless.',
    icon: ShoppingCart,
  },
  {
    title: 'Social Content Systems',
    description: 'Template libraries, brand kits, and posting frameworks to scale your presence.',
    icon: Megaphone,
  },
  {
    title: 'Visual Identity',
    description: 'Playful, vibrant branding with motion principles that translate across platforms.',
    icon: Paintbrush,
  },
  {
    title: 'Design Systems',
    description: 'Component libraries, tokens, and accessibility baked in for fast iteration.',
    icon: LayoutGrid,
  },
];

const Services = () => {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-3xl font-bold text-white sm:text-4xl">Services</h2>
      <p className="mt-2 max-w-2xl text-slate-300">I help brands turn social reach into revenue with crisp UX and friendly visuals.</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border border-white/10 bg-slate-900/40 p-5 shadow-xl shadow-black/20">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-pink-500 text-white">
              <s.icon size={18} />
            </div>
            <h3 className="text-lg font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
