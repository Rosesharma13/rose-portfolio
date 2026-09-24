import React from 'react';
import CursorTrail from './components/CursorTrail';
import NetworkBackground from './components/NetworkBackground';
import ScrollProgress from './components/ScrollProgress';
import StatusBar from './components/StatusBar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import AgentDemo from './components/AgentDemo';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';

export default function App() {
  return (
    <div className="relative min-h-screen bg-paper-50 selection:bg-olive-300 selection:text-ink-900">
      <NetworkBackground />
      <CursorTrail />
      <ScrollProgress />
      <StatusBar />
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <AgentDemo />
      <Certifications />
      <Contact />
      <ChatBot />
    </div>
  );
}
