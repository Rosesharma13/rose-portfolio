import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: "M.Tech, Data Science",
    org: "Bhilai Institute of Technology, Durg",
    date: "2026 – present",
    note: "In progress."
  },
  {
    degree: "B.Tech, Computer Science Engineering — AI Specialization",
    org: "Rungta College of Engineering and Technology, Bhilai",
    date: "Graduated 2025",
    note: "CGPA 7.09"
  },
];

export default function Education() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-t border-paper-300">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl text-ink-900 mb-12"
      >
        Education
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((ed, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="border border-paper-300 rounded-lg p-6"
          >
            <h3 className="text-lg font-semibold text-ink-900 mb-1">{ed.degree}</h3>
            <p className="text-sm text-ink-700">{ed.org}</p>
            <div className="flex justify-between items-center mt-3">
              <span className="font-mono text-[11px] text-olive-600 uppercase tracking-wide">{ed.date}</span>
              <span className="font-mono text-[11px] text-ink-500">{ed.note}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
