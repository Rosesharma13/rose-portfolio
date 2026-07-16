import React from 'react';

const experience = [
  {
    role: "Generative AI & Agentic Systems Engineering Intern",
    org: "Lenovo LEAP NextGen Scholar",
    meta: "Remote · AICTE Recognized",
    date: "June 2026 – July 2026",
    points: [
      "Selected for Lenovo-BharatCares CSR program under AICTE and Skill India, covering RAG pipelines, autonomous AI agents, and GenAI development with Skill India certification."
    ]
  },
  {
    role: "Machine Learning Intern",
    org: "CodeAlpha",
    meta: "Remote",
    date: "April 2026 – July 2026",
    points: [
      "Built a Credit Scoring model (XGBoost), a Customer Churn Predictor (82.6% accuracy, AUC 0.795), and a Heart Disease classifier evaluated across 4 ML algorithms."
    ]
  },
  {
    role: "Artificial Intelligence Intern",
    org: "Codec Technologies Pvt. Ltd.",
    meta: "Remote · AICTE & ICAC Approved · Certificate & LOR",
    date: "April 2026 – May 2026",
    points: [
      "Built a Twitter Sentiment Analysis tool (Naive Bayes + SVM, TF-IDF) achieving 100% accuracy on a 3-class NLP task, and developed an end-to-end Customer Churn pipeline."
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-900">
      <h2 className="text-3xl font-bold text-slate-100 mb-12 border-b border-slate-800 pb-4">Experience</h2>
      <div className="space-y-8">
        {experience.map((job, idx) => (
          <div key={idx} className="bg-slate-900/50 border border-slate-800/80 p-6 rounded-lg">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
              <h3 className="text-lg font-bold text-slate-100">{job.role}</h3>
              <span className="text-xs text-blue-500 font-semibold">{job.date}</span>
            </div>
            <p className="text-sm text-slate-300 font-medium">{job.org}</p>
            <p className="text-xs text-slate-500 mb-3">{job.meta}</p>
            <ul className="list-disc list-inside space-y-1">
              {job.points.map((p, i) => (
                <li key={i} className="text-sm text-slate-400">{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
