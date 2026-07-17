import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-20 pb-24 px-6 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex-1 space-y-6 text-center md:text-left"
      >
        <span className="font-mono text-xs tracking-[0.2em] text-olive-600 uppercase">AI / ML Engineer — GenAI Systems</span>
        <h1 className="font-display text-5xl md:text-7xl text-ink-900 leading-[1.05]">
          Rose <em className="text-olive-600 not-italic font-medium">Sharma</em>
        </h1>
        <p className="text-ink-500 max-w-xl mx-auto md:mx-0 leading-relaxed">
          I build production-grade LLM applications, RAG pipelines, and multi-agent systems.
          Core stack: Python, LangChain, LangGraph, Groq API, FastAPI, React, Streamlit.
          Azure AZ-900 certified. Immediate joiner, open to relocation anywhere in India.
        </p>
        <div className="flex gap-4 justify-center md:justify-start pt-2">
          <a href="#projects" className="bg-olive-600 hover:bg-olive-700 text-paper-50 px-6 py-3 rounded-md font-medium text-sm transition-colors">View Projects</a>
          <a href="#contact" className="border border-paper-300 hover:border-olive-500 text-ink-900 px-6 py-3 rounded-md font-medium text-sm transition-colors">Hire Me</a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, rotate: -6, scale: 0.95 }}
        animate={{ opacity: 1, rotate: -3, scale: 1 }}
        whileHover={{ rotate: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-48 h-48 md:w-60 md:h-60 relative shrink-0"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
          <defs>
            <linearGradient id="seal-border" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#a3b169" />
              <stop offset="100%" stopColor="#4f5a2b" />
            </linearGradient>
          </defs>
          <rect x="3" y="3" width="194" height="194" rx="20" fill="none" stroke="url(#seal-border)" strokeWidth="2" />
          <rect x="16" y="16" width="168" height="168" rx="14" fill="#f4f5ec" stroke="#e4e0cd" strokeWidth="1" />
          <text x="100" y="122" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="68" fontWeight="600" fill="#4f5a2b">RS</text>
          <text x="100" y="164" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="11" letterSpacing="2" fill="#6b6b5c">AI/ML · 2026</text>
        </svg>
      </motion.div>
    </section>
  );
}
