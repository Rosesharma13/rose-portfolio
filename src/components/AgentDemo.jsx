import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const scenarios = {
  log: {
    label: "Log HCP Interaction",
    query: "Log a positive interaction with Dr. Mehta about the new dosing protocol.",
    trace: [
      { agent: "Orchestrator", text: "Parsing intent from natural language input..." },
      { agent: "Orchestrator", text: "→ Routing to: log_interaction agent" },
      { agent: "log_interaction", text: "Extracting entities — HCP: Dr. Mehta · Topic: dosing protocol" },
      { agent: "analyse_sentiment", text: "Sentiment score: +0.82 (positive)" },
      { agent: "log_interaction", text: "Writing structured record to database... done" },
      { agent: "suggest_follow_up", text: "Recommended follow-up window: 14 days" },
      { agent: "Orchestrator", text: "✓ Task complete — 4 agents coordinated" },
    ]
  },
  search: {
    label: "Search HCP History",
    query: "Show me the last 3 interactions with cardiology specialists in Mumbai.",
    trace: [
      { agent: "Orchestrator", text: "Parsing intent from natural language input..." },
      { agent: "Orchestrator", text: "→ Routing to: search_hcp agent" },
      { agent: "search_hcp", text: "Filtering records — specialty: cardiology · region: Mumbai" },
      { agent: "search_hcp", text: "3 matching interactions found, sorted by recency" },
      { agent: "analyse_sentiment", text: "Average sentiment across results: +0.61" },
      { agent: "Orchestrator", text: "✓ Task complete — 3 agents coordinated" },
    ]
  }
};

export default function AgentDemo() {
  const [active, setActive] = useState('log');
  const [lines, setLines] = useState([]);
  const [running, setRunning] = useState(false);
  const timeouts = useRef([]);

  const runDemo = () => {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
    setLines([]);
    setRunning(true);
    const trace = scenarios[active].trace;
    trace.forEach((line, i) => {
      const t = setTimeout(() => {
        setLines(prev => [...prev, line]);
        if (i === trace.length - 1) setRunning(false);
      }, (i + 1) * 550);
      timeouts.current.push(t);
    });
  };

  const switchScenario = (key) => {
    timeouts.current.forEach(clearTimeout);
    setActive(key);
    setLines([]);
    setRunning(false);
  };

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-t border-ink-700">
      <h2 className="font-display text-3xl text-sand-100 mb-2">See a multi-agent system think</h2>
      <p className="text-sand-500 text-sm mb-8 max-w-2xl">
        A simulated walkthrough of the LangGraph multi-agent architecture from the AIVOA CRM project — not a live call to the production backend.
      </p>

      <div className="flex gap-3 mb-6">
        {Object.entries(scenarios).map(([key, s]) => (
          <button
