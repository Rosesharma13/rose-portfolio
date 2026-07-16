import React from 'react';

const certifications = [
  { title: "Microsoft Azure Fundamentals (AZ-900)", issuer: "Microsoft", date: "December 2023" },
  { title: "Fundamentals of Large Language Models", issuer: "Hugging Face", date: "April 2026" },
  { title: "AI Skills Fest 2026", issuer: "Microsoft", date: "2026" }
];

export default function Certifications() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-900">
      <h2 className="text-2xl font-bold text-slate-100 mb-8">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {certifications.map((cert, idx) => (
          <div key={idx} className="bg-slate-900/50 border border-slate-800/80 p-5 rounded-lg">
            <span className="text-xs text-olive-500 font-semibold">{cert.date}</span>
            <h3 className="font-bold text-slate-200 mt-1 mb-2 text-base">{cert.title}</h3>
            <p className="text-xs text-slate-400">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
