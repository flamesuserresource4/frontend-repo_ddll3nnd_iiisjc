import React from 'react';
import { ShoppingBag, Share2, BarChart3 } from 'lucide-react';

const projects = [
  {
    title: 'Inflatable Icons Marketplace',
    description:
      'Playful storefront for digital icon packs with conversion‑focused UX, checkout flows, and creator dashboard.',
    icon: ShoppingBag,
    tags: ['Marketplace UX', 'Checkout', 'Creator Tools'],
    image:
      'https://images.unsplash.com/photo-1611162618071-b39a2ec2cf87?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Social Launch System',
    description:
      'Reusable content engine for startups with templates, calendars, and multi‑platform scheduling.',
    icon: Share2,
    tags: ['Content System', 'Scheduling', 'Templates'],
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Growth Insights Dashboard',
    description:
      'Lightweight analytics for creators to track CTR, retention, and campaign performance.',
    icon: BarChart3,
    tags: ['Analytics', 'Dashboards', 'Creator Economy'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Selected Work</h2>
          <p className="mt-2 max-w-2xl text-slate-300">A few projects where playful visuals meet real business impact.</p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 shadow-xl shadow-black/20 transition hover:translate-y-[-2px] hover:shadow-black/30">
            <div className="relative h-48 w-full overflow-hidden">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            </div>
            <div className="p-5">
              <div className="mb-3 inline-flex items-center gap-2 rounded-md bg-white/10 px-2.5 py-1 text-xs text-white">
                <p.icon size={14} /> <span>{p.tags[0]}</span>
              </div>
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-slate-800/60 px-2.5 py-1 text-[11px] text-slate-200">{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
