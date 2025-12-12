import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Loader2, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

export const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello. I am ChemBot. How can I assist with your research inquiries today?' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const response = await sendMessageToGemini(userMessage);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Action Button - Left Aligned, Clean Apple Style */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 left-8 flex items-center gap-3 pl-4 pr-6 py-3.5 bg-black/90 backdrop-blur-md text-white rounded-full shadow-2xl hover:scale-105 hover:bg-black transition-all duration-300 z-40 group ${isOpen ? 'hidden' : 'flex'}`}
      >
        <div className="bg-white/20 p-1.5 rounded-full">
            <Sparkles className="h-4 w-4" />
        </div>
        <span className="font-medium text-sm tracking-wide">ChemBot</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-8 left-8 w-[90vw] sm:w-[380px] bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 ring-1 ring-black/5 z-50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-500 h-[600px]">
          {/* Header */}
          <div className="bg-white/50 backdrop-blur-md p-4 flex justify-between items-center border-b border-black/5">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 bg-gradient-to-tr from-slate-200 to-slate-100 rounded-full flex items-center justify-center shadow-inner">
                <Sparkles className="h-4 w-4 text-slate-700" />
              </div>
              <div>
                <span className="font-semibold block text-sm text-slate-900">ChemBot</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">AI Assistant</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-black/5 transition-colors text-slate-500 hover:text-slate-900"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-5 py-3.5 text-[15px] leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-black text-white rounded-2xl rounded-tr-sm'
                      : 'bg-white text-slate-800 border border-slate-100 rounded-2xl rounded-tl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm border border-slate-100 flex items-center space-x-2">
                  <Loader2 className="h-3 w-3 animate-spin text-slate-400" />
                  <span className="text-xs text-slate-400 font-medium">Thinking...</span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white/50 backdrop-blur-md border-t border-black/5">
            <form onSubmit={handleSubmit} className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="w-full pl-5 pr-12 py-3.5 bg-white rounded-full border-none shadow-sm ring-1 ring-black/5 focus:ring-2 focus:ring-black/10 transition-all placeholder:text-slate-400 text-sm"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-2 p-2 bg-black text-white rounded-full hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <Send className="h-3 w-3" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};