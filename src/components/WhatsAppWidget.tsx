import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, CheckCheck, Clock, ArrowRight } from 'lucide-react';
import { SpacebarLogo } from './SpacebarLogo';

interface WhatsAppWidgetProps {
  phoneNumber?: string;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({
  phoneNumber = '919877950582',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const quickPrompts = [
    {
      title: '🏎️ Racing Sim Booking',
      desc: 'Check slot availability for motion racing simulators',
      text: 'Hi Spacebar team! I would like to check availability and book a slot for the Racing Simulator today.',
    },
    {
      title: '🎮 PS5 / PC Battle Station',
      desc: 'Reserve consoles or 240Hz PC setups for my squad',
      text: 'Hello! I want to reserve gaming desks for my friends (PS5 / PC Arena). What slots are free today?',
    },
    {
      title: '🎂 Birthday / Squad Party',
      desc: 'Inquire about private lounge, catering & tournament',
      text: 'Hi Spacebar! We want to host a birthday party / group gaming session. Could you share details and packages?',
    },
    {
      title: '🍔 Cafe Food & Drinks',
      desc: 'Order gourmet burgers, tandoori or shakes to desk',
      text: 'Hi, I want to order food from the cafe menu to our gaming station.',
    },
  ];

  const handleSend = (customText?: string) => {
    const textToSend = customText || message || 'Hello Spacebar Gaming Cafe Ludhiana! I have an inquiry.';
    const encoded = encodeURIComponent(textToSend);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {!isOpen && (
          <div className="hidden md:flex items-center gap-2 bg-[#121422]/95 backdrop-blur-md border border-emerald-500/30 px-3.5 py-2 rounded-2xl shadow-xl shadow-black/50 text-xs animate-fade-in">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-white font-medium">Chat on WhatsApp</span>
            <span className="text-emerald-400 font-mono text-[11px]">+91 98779 50582</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-300 cursor-pointer ${
            isOpen
              ? 'bg-slate-800 text-slate-300 hover:text-white rotate-90'
              : 'bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 hover:brightness-110 text-white shadow-emerald-950/60 hover:scale-105'
          }`}
          aria-label="Open WhatsApp Chat Support"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <div className="relative">
              <MessageCircle className="w-7 h-7 fill-white/20 text-white" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              </span>
            </div>
          )}
        </button>
      </div>

      {/* WhatsApp Interactive Drawer / Popover */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 bg-[#10121d] border border-emerald-500/30 rounded-3xl shadow-2xl shadow-black/80 overflow-hidden animate-fade-in flex flex-col">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-950 via-[#0d1f18] to-[#121422] p-4 border-b border-emerald-900/40 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <SpacebarLogo size="sm" className="h-8 w-auto" />
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-bold text-white font-display">SPACEBAR Support</h4>
                  <CheckCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
                  <Clock className="w-3 h-3" />
                  <span>Online · Replies within 5 mins</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800/40 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Body */}
          <div className="p-4 space-y-3 max-h-[380px] overflow-y-auto">
            {/* Host Greeting Message */}
            <div className="bg-[#181b2a] border border-slate-800 p-3.5 rounded-2xl rounded-tl-sm text-xs text-slate-200 space-y-1.5 shadow-sm">
              <p className="font-medium text-white">
                Sat Sri Akal! Welcome to SPACEBAR Ludhiana 🎮
              </p>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Connect directly with our arena team on WhatsApp for desk bookings, party reservations, and kitchen orders.
              </p>
            </div>

            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider px-1 pt-1">
              Popular Quick Inquiries:
            </div>

            {/* Quick prompts buttons */}
            <div className="space-y-2">
              {quickPrompts.map((qp, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(qp.text)}
                  className="w-full text-left p-3 rounded-xl bg-slate-900/90 hover:bg-emerald-950/40 border border-slate-800 hover:border-emerald-600/40 transition-all group flex items-center justify-between cursor-pointer"
                >
                  <div className="space-y-0.5">
                    <div className="text-xs font-semibold text-white group-hover:text-emerald-300">
                      {qp.title}
                    </div>
                    <div className="text-[10px] text-slate-400 truncate max-w-[240px]">
                      {qp.desc}
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
                </button>
              ))}
            </div>

            {/* Custom message prompt */}
            <div className="pt-2">
              <div className="text-[10px] font-mono text-slate-400 mb-1.5 px-1">
                Or Type a Custom Message:
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g. Any slots open tonight at 8 PM?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSend();
                  }}
                  className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                />
                <button
                  onClick={() => handleSend()}
                  className="px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl transition-colors cursor-pointer flex items-center justify-center shrink-0"
                  title="Send message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-3 bg-[#0d0e17] border-t border-slate-800 text-[10px] text-center text-slate-500 flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>Direct WhatsApp: +91 98779 50582 · Sarabha Nagar, Ludhiana</span>
          </div>

        </div>
      )}
    </>
  );
};
