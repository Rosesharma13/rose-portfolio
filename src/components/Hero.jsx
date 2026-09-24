import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "6", label: "shipped AI systems" },
  { value: "5", label: "agents in one LangGraph pipeline" },
  { value: "3", label: "live multi-agent platforms" },
];

export default function Hero() {
  return (
    <section className="pt-20 pb-24 px-6 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex-1 space-y-6 text-center md:text-left"
      >
        <span className="font-mono text-xs tracking-[0.2em] text-olive-600 uppercase">AI / ML Engineer</span>
        <h1 className="font-display text-5xl md:text-6xl text-ink-900 leading-[1.08]">
          I build multi-agent AI systems<br className="hidden md:block" /> that <em className="text-olive-600 not-italic font-medium">actually run in production.</em>
        </h1>
        <p className="text-ink-500 max-w-xl mx-auto md:mx-0 leading-relaxed">
          Not demos — deployed systems. A 5-tool LangGraph CRM, a Llama-powered health
          prediction platform, a 4-agent orchestration engine. Built end to end: model,
          backend, frontend, deployment.
        </p>
        <div className="flex gap-4 justify-center md:justify-start pt-2">
          <a href="#projects" className="bg-olive-600 hover:bg-olive-700 text-paper-50 px-6 py-3 rounded-md font-medium text-sm transition-colors">View Projects</a>
          <a href="#contact" className="border border-paper-300 hover:border-olive-500 text-ink-900 px-6 py-3 rounded-md font-medium text-sm transition-colors">Hire Me</a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="shrink-0 grid grid-cols-1 gap-3 w-full max-w-[220px]"
      >
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
            className="bg-white border border-paper-300 rounded-lg px-5 py-4"
          >
            <div className="font-display text-3xl text-olive-600">{s.value}</div>
            <div className="font-mono text-[11px] uppercase tracking-wide text-ink-500 mt-1">{s.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
