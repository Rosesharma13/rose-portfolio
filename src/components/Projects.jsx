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
    link: "https://github.com/Rosesharma13/aivoa-crm-hcp"
  },
  {
    title: "Vyrora AI — Multi-Agent Platform",
    desc: "Multi-agent AI platform built with a FastAPI backend and React frontend, deployed across Render and Vercel.",
    tech: ["Python", "FastAPI", "React", "Multi-Agent Systems"],
    link: "https://github.com/Rosesharma13/vyrora-ai-agent-platform"
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
    link: "https://github.com/Rosesharma13/llm-data-pipeline"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-100 mb-12 border-b border-slate-800 pb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <motion.div key={idx} whileHover={{ y: -4 }} className="bg-slate-900 border border-slate-800 p-6 rounded-xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">{proj.title}</h3>
              <p className="text-sm text-slate-400 mb-4">{proj.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tech.map((t, i) => <span key={i} className="bg-slate-800 text-slate-300 text-xs px-2.5 py-1 rounded-md">{t}</span>)}
              </div>
            </div>
            <div className="flex gap-4">
              <a href={proj.link} target="_blank" rel="noreferrer" className="text-sm font-medium text-blue-400 hover:text-blue-300">View Code ↗</a>
              {proj.live && (
                <a href={proj.live} target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-400 hover:text-slate-300">Live Demo ↗</a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
