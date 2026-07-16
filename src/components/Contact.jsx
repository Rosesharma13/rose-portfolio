import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-900">
      <h2 className="text-3xl font-bold text-slate-100 mb-4 border-b border-slate-800 pb-4">Get In Touch</h2>
      <p className="text-slate-400 mb-8 max-w-xl">
        Immediate joiner, open to AI/ML Engineer and GenAI Developer roles anywhere in India.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <a href="mailto:rosesharmaa132003@gmail.com" className="bg-slate-900/50 border border-slate-800/80 p-5 rounded-lg hover:border-olive-500 transition-colors">
          <span className="text-xs text-olive-500 font-semibold uppercase">Email</span>
          <p className="text-slate-200 mt-1">rosesharmaa132003@gmail.com</p>
        </a>
        <a href="https://linkedin.com/in/rose-sharma13" target="_blank" rel="noreferrer" className="bg-slate-900/50 border border-slate-800/80 p-5 rounded-lg hover:border-olive-500 transition-colors">
          <span className="text-xs text-olive-500 font-semibold uppercase">LinkedIn</span>
          <p className="text-slate-200 mt-1">linkedin.com/in/rose-sharma13</p>
        </a>
        <a href="https://github.com/Rosesharma13" target="_blank" rel="noreferrer" className="bg-slate-900/50 border border-slate-800/80 p-5 rounded-lg hover:border-olive-500 transition-colors">
          <span className="text-xs text-olive-500 font-semibold uppercase">GitHub</span>
          <p className="text-slate-200 mt-1">github.com/Rosesharma13</p>
        </a>
      </div>
      <a href="mailto:rosesharmaa132003@gmail.com?subject=Hiring%20Inquiry" className="inline-block mt-8 bg-olive-600 hover:bg-olive-700 text-white px-6 py-3 rounded-lg font-medium text-sm">
        Hire Me
      </a>
    </section>
  );
}
