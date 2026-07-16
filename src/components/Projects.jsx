import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "MIRA — Medical Intelligence Robotic Automation",
    desc: "Full-stack health prediction platform with Groq LLaMA 3.3 70B generating clinical risk assessments from patient biomarker data. SQLite storage, strict input validation, deployed live on Streamlit Cloud.",
    tech: ["Python", "Streamlit", "SQLite", "Groq API", "LLaMA 3.3 70B", "FastAPI"],
    link: "https://github.com/Rosesharma13/MIRA-Medical-Automation",
    live: "https://mira-health-app.streamlit.app"
  },
  {
    title: "AI-First CRM HCP Module — AIVOA",
    desc: "Production CRM for pharmaceutical field reps with a LangGraph multi-agent architecture — 5 specialized AI tools for logging, editing, search, follow-up, and sentiment analysis, orchestrated by Groq LLM.",
    tech: ["React", "Redux", "FastAPI", "LangGraph", "Groq API", "SQLite"],
    link: "https://github.com/Rosesharma13/aivoa-crm-hcp",
    live: "https://aivoa-crm-hcp-alpha.vercel.app"
  },
  {
    title: "Vyrora AI — Multi-Agent Platform",
    desc: "Multi-agent AI platform built with a FastAPI backend and React frontend, deployed across Render and Vercel.",
    tech: ["Python", "FastAPI", "React", "Multi-Agent Systems"],
    link: "https://github.com/Rosesharma13/vyrora-ai-agent-platform",
    live: "https://vyrora-ai-agent-platform.vercel.app"
  },
  {
    title: "LLM Retail Assistant — RAG Pipeline",
    desc: "Production RAG pipeline for natural language product queries, sub-2s latency across 500+ interactions. LangChain memory chains with Groq API for multi-turn conversations.",
    tech: ["LangChain", "Groq API", "Hugging Face", "RAG", "Streamlit"],
    link: "https://github.com/Rosesharma13/LLM-retail-assistant",
    live: "https://llm-retail-assistant.streamlit.app"
  },
  {
    title: "LLM Data Pipeline",
    desc: "Modular ingestion pipeline processing PDF, text, and live URLs via direct LLM API calls with no LangChain dependency. Tenacity retry logic with exponential backoff — 94.4% chunk success rate.",
    tech: ["Python", "Groq API", "FastAPI", "BeautifulSoup", "Pandas", "Tenacity"],
    link: "https://github.com/Rosesharma13/llm-data-pipeline",
    live: "https://llm-data-pipeline.streamlit.app"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto border-t border-ink-700">
      <h2 className="font-display text-3xl text-sand-100 mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            whileHover={{ y: -3 }}
            className="bg-ink-900 border border-ink-700 hover:border-moss-600 p-6 rounded-lg flex flex-col justify-between transition-colors"
          >
            <div>
              <h3 className="text-lg font-semibold text-sand-100 mb-2">{proj.title}</h3>
              <p className="text-sm text-sand-500 mb-4 leading-relaxed">{proj.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tech.map((t, i) => (
                  <span key={i} className="font-mono text-[11px] text-moss-400 border border-ink-700 px-2 py-1 rounded">{t}</span>
                ))}
              </div>
            </div>
            <div className="flex gap-5 font-mono text-xs uppercase tracking-wide">
              <a href={proj.link} target="_blank" rel="noreferrer" className="text-sand-300 hover:text-moss-400 transition-colors">Code ↗</a>
              <a href={proj.live} target="_blank" rel="noreferrer" className="text-sand-500 hover:text-moss-400 transition-colors">Live ↗</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
