import React from 'react';
import CursorTrail from './components/CursorTrail';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import ChatBot from './components/ChatBot';

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-blue-500/30 selection:text-blue-200">
      <CursorTrail />
      <Hero />
      <Projects />
      <Certifications />
      <ChatBot />
    </div>
  );
}
