import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="flex-1 space-y-6 text-center md:text-left">
        <span className="text-sm font-semibold tracking-wider text-blue-500 uppercase">AI Systems & Automation Engineer</span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">Hi, I am <span className="text-blue-500">Rose Sharma</span></h1>
        <p className="text-slate-400 max-w-xl mx-auto md:mx-0">I build production-grade multi-agent architectures, neural pipeline wrappers, and auditable enterprise automation infrastructures.</p>
        <div className="flex gap-4 justify-center md:justify-start">
          <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-sm">View Architecture</a>
          <a href="https://github.com/Rosesharma13" target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-6 py-3 rounded-lg font-medium text-sm border border-slate-700">GitHub Core</a>
        </div>
      </motion.div>
      <div className="w-48 h-48 md:w-64 md:h-64 relative">
        <img src="/avatar.jpg" alt="Avatar" className="w-full h-full object-cover rounded-2xl border-2 border-slate-700 z-10 relative" />
      </div>
    </section>
  );
}
