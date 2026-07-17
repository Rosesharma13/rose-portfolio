import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'assistant', text: "Hi, I'm here to answer recruiter questions about Rose — her experience, projects, or skills. Ask away." }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', text: data.reply || "Sorry, I couldn't process that." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', text: "Connection error — try again in a moment." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button onClick={() => setIsOpen(!isOpen)} className="bg-olive-600 hover:bg-olive-700 text-paper-50 px-5 py-3 rounded-full shadow-lg transition-colors font-mono text-xs uppercase tracking-wide">{isOpen ? '✕ Close' : '💬 Ask about Rose'}</button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className="absolute bottom-16 right-0 w-80 md:w-96 h-[420px] bg-white border border-paper-300 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            <div className="bg-olive-50 p-4 border-b border-paper-300"><h3 className="font-mono text-xs uppercase tracking-wide text-olive-700">Recruiter Q&A Assistant</h3></div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">
              {messages.map((m, idx) => (
                <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-xl px-3 py-2 ${m.role === 'user' ? 'bg-olive-600 text-paper-50' : 'bg-paper-100 text-ink-700'}`}>{m.text}</div>
                </div>
              ))}
              {loading && <div className="text-xs text-ink-300 italic">Thinking...</div>}
              <div ref={chatEndRef} />
            </div>
            <form onSubmit={handleSendMessage} className="p-3 bg-paper-50 border-t border-paper-300 flex gap-2">
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="e.g. What's her strongest project?" className="flex-1 bg-white border border-paper-300 rounded-lg px-3 py-1.5 text-sm text-ink-900 focus:outline-none" />
              <button type="submit" className="bg-olive-600 text-paper-50 px-3 py-1.5 text-sm rounded-lg font-medium">Send</button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
