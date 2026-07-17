import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  { title: "Microsoft Azure Fundamentals (AZ-900)", issuer: "Microsoft", date: "Dec 2023" },
  { title: "Fundamentals of Large Language Models", issuer: "Hugging Face", date: "Apr 2026" },
  { title: "AI Skills Fest 2026 (Badge)", issuer: "Microsoft", date: "Jun 2026" }
];

export default function Certifications() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-t border-paper-300">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl text-ink-900 mb-12"
      >
        Certifications
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="bg-white border border-paper-300 p-5 rounded-lg shadow-sm"
          >
            <span className="font-mono text-[11px] text-olive-600 uppercase tracking-wide">{cert.date}</span>
            <h3 className="font-semibold text-ink-900 mt-2 mb-1 text-sm leading-snug">{cert.title}</h3>
            <p className="font-mono text-xs text-ink-300">{cert.issuer}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
