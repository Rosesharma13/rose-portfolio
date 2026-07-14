import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: "Project Constellation AI (AEGIS)", desc: "Autonomous multi-agent orchestration grid incorporating LangGraph, n8n events tracking and custom conditional HITL guardrails.", tech: ["Python", "FastAPI", "n8n", "LangGraph"], link: "#" },
  { title: "Twitter Sentiment Analysis Model", desc: "Custom support vector classifier evaluating and processing tokenized sentiment pipelines dynamically.", tech: ["Python", "Scikit-Learn", "NLP"], link: "https://github.com/Rosesharma13/sentiment-analysis-twitter" },
  { title: "Sales Insights Dashboard", desc: "End-to-end analytical data processing tracking key corporate performance operations and business metrics.", tech: ["Python", "Streamlit", "SQL"], link: "https://github.com/Rosesharma13/Sales-Insights-Dashboard" },
  { title: "DSA Progress Tracker", desc: "Clean interactive dashboard mapping algorithmic execution intervals and programmatic learning milestones.", tech: ["JavaScript", "React", "Tailwind"], link: "https://github.com/Rosesharma13/dsa-progress-tracker" },
  { title: "SaaS Churn Prediction Engine", desc: "Machine learning predictive module analyzing active engagement metrics to pinpoint target subscription drop risks.", tech: ["Python", "Scikit-Learn", "FastAPI"], link: "https://github.com/Rosesharma13" }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-100 mb-12 border-b border-slate-800 pb-4">Selected Systems & Research</h2>
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
            <a href={proj.link} target="_blank" rel="noreferrer" className="text-sm font-medium text-blue-400 hover:text-blue-300">Examine Source Code Engine ↗</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
