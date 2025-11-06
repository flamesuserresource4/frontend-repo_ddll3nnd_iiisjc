import React from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-20">
      <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 shadow-xl shadow-black/20 sm:p-10">
        <div className="mb-6 flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-pink-500 text-white">
            <Mail size={18} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Let’s collaborate</h2>
            <p className="text-sm text-slate-300">Share a bit about your project and I’ll get back within 24 hours.</p>
          </div>
        </div>

        <form className="grid gap-4">
          <div className="grid gap-2 sm:grid-cols-2">
            <input className="rounded-lg border border-white/10 bg-slate-800/60 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder="Your name" />
            <input type="email" className="rounded-lg border border-white/10 bg-slate-800/60 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder="Email address" />
          </div>
          <input className="rounded-lg border border-white/10 bg-slate-800/60 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder="Company / Brand (optional)" />
          <textarea rows={5} className="rounded-lg border border-white/10 bg-slate-800/60 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder="What are you building?" />
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110">
            Send message <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
