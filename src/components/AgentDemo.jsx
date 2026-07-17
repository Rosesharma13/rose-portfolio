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
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="py-20 px-6 max-w-6xl mx-auto border-t border-paper-300"
    >
      <h2 className="font-display text-3xl text-ink-900 mb-2">See a multi-agent system think</h2>
      <p className="text-ink-500 text-sm mb-8 max-w-2xl">
        A simulated walkthrough of the LangGraph multi-agent architecture from the AIVOA CRM project — not a live call to the production backend.
      </p>

      <div className="flex gap-3 mb-6">
        {Object.entries(scenarios).map(([key, s]) => (
          <button
            key={key}
            onClick={() => switchScenario(key)}
            className={`font-mono text-xs uppercase tracking-wide px-3 py-1.5 rounded border transition-colors ${
              active === key
                ? 'border-olive-500 text-olive-700 bg-olive-50'
                : 'border-paper-300 text-ink-500 hover:border-olive-300'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="bg-ink-900 border border-ink-700 rounded-lg overflow-hidden shadow-md">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-ink-700 bg-black/20">
          <span className="w-2.5 h-2.5 rounded-full bg-ink-500/50" />
          <span className="w-2.5 h-2.5 rounded-full bg-ink-500/50" />
          <span className="w-2.5 h-2.5 rounded-full bg-ink-500/50" />
          <span className="font-mono text-[11px] text-ink-300 ml-2">aivoa-agent-trace</span>
        </div>

        <div className="p-5 min-h-[220px] font-mono text-sm">
          <p className="text-paper-200 mb-4">
            <span className="text-olive-400">$</span> {scenarios[active].query}
          </p>

          <div className="space-y-2">
            <AnimatePresence>
              {lines.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-olive-400">[{line.agent}]</span>{' '}
                  <span className="text-paper-200">{line.text}</span>
                </motion.p>
              ))}
            </AnimatePresence>
            {running && (
              <span className="inline-block w-2 h-4 bg-olive-400 animate-pulse align-middle" />
            )}
          </div>

          {lines.length === 0 && !running && (
            <p className="text-ink-500 text-xs">Press "Run Trace" to watch the agents coordinate.</p>
          )}
        </div>

        <div className="px-5 py-3 border-t border-ink-700 bg-black/20 flex justify-end">
          <button
            onClick={runDemo}
            disabled={running}
            className="bg-olive-600 hover:bg-olive-500 disabled:opacity-50 disabled:cursor-not-allowed text-paper-50 px-4 py-2 rounded-md font-mono text-xs uppercase tracking-wide transition-colors"
          >
            {running ? 'Running...' : 'Run Trace'}
          </button>
        </div>
      </div>
    </motion.section>
  );
}
