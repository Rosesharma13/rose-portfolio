import React from 'react';
import CursorTrail from './components/CursorTrail';
import StatusBar from './components/StatusBar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import AgentDemo from './components/AgentDemo';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-950 selection:bg-moss-600 selection:text-ink-950">
      <CursorTrail />
      <StatusBar />
      <Hero />
      <Experience />
      <Projects />
      <AgentDemo />
      <Certifications />
      <Contact />
      <ChatBot />
    </div>
  );
}
