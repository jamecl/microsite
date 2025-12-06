import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minus, AlertTriangle } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am the Macon Personal Injury Attorneys assistant. Ask me questions about personal injury claims or our service areas.' }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Filter history for context, excluding error messages if any
    const history = messages
        .filter(m => !m.isError)
        .map(m => ({ role: m.role, text: m.text }));

    const responseText = await sendMessageToGemini(userMessage.text, history);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button with CTA Bubble */}
      <div className={`fixed bottom-6 right-6 z-50 flex flex-col items-end transition-all duration-300 ${isOpen ? 'translate-y-[150%] opacity-0' : 'translate-y-0 opacity-100'}`}>
        
        {/* CTA Bubble */}
        <div className="bg-white text-navy-900 text-sm font-bold py-2 px-4 rounded-xl shadow-lg border border-gray-100 mb-3 mr-1 relative animate-bounce" style={{ animationDuration: '3s' }}>
          We're here to help! Chat now.
          {/* Arrow pointing down */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white transform rotate-45 border-b border-r border-gray-100"></div>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="bg-gold-600 hover:bg-gold-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
          aria-label="Open Chat"
        >
          <MessageCircle size={28} />
        </button>
      </div>

      {/* Chat Window */}
      <div className={`fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 w-full sm:w-96 bg-white sm:rounded-2xl shadow-2xl flex flex-col transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-[120%] opacity-0'}`} style={{ maxHeight: '650px', height: isOpen ? '85vh' : '0' }}>
        
        {/* Header */}
        <div className="bg-navy-900 text-white p-4 sm:rounded-t-2xl flex justify-between items-center shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <h3 className="font-serif font-bold">Ask an Attorney Assistant</h3>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">
            <Minus size={20} className="sm:hidden" /> {/* Minimize on mobile */}
            <X size={20} className="hidden sm:block" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                msg.role === 'user' 
                  ? 'bg-navy-800 text-white rounded-br-none' 
                  : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none p-3 shadow-sm">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-100 bg-white sm:rounded-b-2xl shrink-0">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about Macon injury law..."
              className="flex-1 bg-navy-800 text-white placeholder-gray-400 border border-navy-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-sm"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-gold-600 hover:bg-gold-500 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
          
          {/* Prominent Legal Disclaimer */}
          <div className="mt-3 bg-gray-50 border border-gray-200 rounded-md p-2.5 flex gap-2">
            <AlertTriangle size={16} className="text-gold-600 shrink-0 mt-0.5" />
            <p className="text-[10px] leading-tight text-gray-500">
              <span className="font-bold text-gray-700 block mb-0.5">IMPORTANT DISCLAIMER</span>
              This AI assistant is <strong>not an attorney</strong> and cannot provide legal advice. 
              Conversations are <strong>not privileged</strong> or confidential. Please consult a 
              human attorney for specific legal needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatAssistant;