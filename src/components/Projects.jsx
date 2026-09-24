import React from 'react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

const featured = [
  {
    title: "Quelvox CRM — Multi-Agent HCP Module",
    challenge: "Field reps needed one interface to log visits, search history, and get follow-up suggestions — without juggling five separate tools.",
    architecture: "LangGraph orchestrates 5 specialized agent tools (logging, editing, search, follow-up, sentiment) behind a single FastAPI backend, with a React/Redux frontend.",
    result: "Deployed, working system — solved real production issues along the way: dependency conflicts, Rust build failures, CORS misconfiguration.",
    tech: ["React", "Redux", "FastAPI", "LangGraph", "Groq API", "SQLite"],
    link: "https://github.com/Rosesharma13/Quelvox-CRM",
    live: "https://quelvox-crm.vercel.app"
  },
  {
    title: "Vyrora AI — Multi-Agent Platform",
    challenge: "Single-agent chatbots can't handle work that needs research, planning, and output generation as distinct coordinated steps.",
    architecture: "4 specialized agents (Research, Document, Planning, Presentation) coordinated through a FastAPI backend, React frontend, deployed across Render + Vercel.",
    result: "Rebuilt from empty scaffolding into a fully working, live multi-agent system.",
    tech: ["Python", "FastAPI", "React", "LangGraph", "Groq API"],
    link: "https://github.com/Rosesharma13/vyrora-ai-agent-platform",
    live: "https://vyrora-ai-agent-platform.vercel.app"
  },
  {
    title: "MIRA — Health Prediction Platform",
    challenge: "Applying a general-purpose LLM to a higher-stakes, domain-specific use case, where bad input handling has real consequences.",
    architecture: "Groq-served LLaMA 3.3 70B generates risk assessments from patient biomarker data, with strict input validation and SQLite storage.",
    result: "Fixed real production bugs surfaced by external review (invalid input, broken link) — now part of how every project gets tested.",
    tech: ["Python", "Streamlit", "SQLite", "Groq API", "LLaMA 3.3 70B", "FastAPI"],
    link: "https://github.com/Rosesharma13/MIRA-Medical-Automation",
    live: "https://mira-health-app.streamlit.app"
  },
];

const more = [
  {
    title: "AI Complaint Management System",
    desc: "LangGraph pipeline for pharma manufacturing complaint intake — completeness checking, risk classification, duplicate detection, CAPA recommendation.",
    tech: ["React", "FastAPI", "LangGraph", "PostgreSQL"],
    link: "https://github.com/Rosesharma13/aivoa-complaint-management-system",
    live: "https://aivoa-complaint-management-system.vercel.app"
  },
  {
    title: "LLM Retail Assistant — RAG Pipeline",
    desc: "RAG pipeline for natural language product queries using LangChain memory chains for multi-turn conversations.",
    tech: ["LangChain", "Groq API", "RAG", "Streamlit"],
    link: "https://github.com/Rosesharma13/LLM-retail-assistant",
    live: "https://llm-retail-assistant.streamlit.app"
  },
  {
    title: "LLM Data Pipeline",
    desc: "Modular ingestion pipeline for PDF/text/URL sources via direct LLM API calls, with Tenacity retry logic and no LangChain dependency.",
    tech: ["Python", "Groq API", "BeautifulSoup", "Tenacity"],
    link: "https://github.com/Rosesharma13/llm-data-pipeline",
    live: "https://llm-data-pipeline.streamlit.app"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto border-t border-paper-300">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl text-ink-900 mb-4"
      >
        Featured Work
      </motion.h2>
      <p className="text-sm text-ink-500 mb-12 max-w-2xl">Three systems, broken down by the problem, how it was built, and what happened.</p>

      <div className="grid grid-cols-1 gap-5 mb-16">
        {featured.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
          >
            <TiltCard className="bg-white border border-paper-300 hover:border-olive-400 p-7 rounded-lg transition-colors shadow-sm">
              <h3 className="text-xl font-semibold text-ink-900 mb-4">{proj.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-olive-600 mb-1">Challenge</div>
                  <p className="text-sm text-ink-500 leading-relaxed">{proj.challenge}</p>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-olive-600 mb-1">Architecture</div>
                  <p className="text-sm text-ink-500 leading-relaxed">{proj.architecture}</p>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-olive-600 mb-1">Result</div>
                  <p className="text-sm text-ink-500 leading-relaxed">{proj.result}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-5">
                {proj.tech.map((t, i) => (
                  <span key={i} className="font-mono text-[11px] text-olive-700 bg-olive-50 border border-olive-100 px-2 py-1 rounded">{t}</span>
                ))}
              </div>
              <div className="flex gap-5 font-mono text-xs uppercase tracking-wide">
                <a href={proj.link} target="_blank" rel="noreferrer" className="text-ink-700 hover:text-olive-600 transition-colors">Code</a>
                <a href={proj.live} target="_blank" rel="noreferrer" className="text-ink-500 hover:text-olive-600 transition-colors">Live</a>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      <h3 className="font-display text-xl text-ink-900 mb-6">More projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {more.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="border border-paper-300 hover:border-olive-400 rounded-lg p-5 transition-colors"
          >
            <h4 className="text-sm font-semibold text-ink-900 mb-2">{proj.title}</h4>
            <p className="text-xs text-ink-500 mb-3 leading-relaxed">{proj.desc}</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {proj.tech.map((t, i) => (
                <span key={i} className="font-mono text-[10px] text-olive-700 bg-olive-50 border border-olive-100 px-1.5 py-0.5 rounded">{t}</span>
              ))}
            </div>
            <div className="flex gap-4 font-mono text-[11px] uppercase tracking-wide">
              <a href={proj.link} target="_blank" rel="noreferrer" className="text-ink-700 hover:text-olive-600 transition-colors">Code</a>
              <a href={proj.live} target="_blank" rel="noreferrer" className="text-ink-500 hover:text-olive-600 transition-colors">Live</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
