import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageSquare, Navigation, ShieldCheck, Heart, Wifi, Car, ChevronDown } from 'lucide-react';
import { FAQS } from '../data/mockData';

export const LocationSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="location" className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-rose-600 font-semibold">
              <span>06. VISIT & CONNECT</span>
              <span aria-hidden="true">·</span>
              <span>HEART OF SARABHA NAGAR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-950 tracking-tight">
              Locate SPACEBAR Ludhiana
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl">
              Easy marketplace parking, vibrant Ludhiana hub, and open 7 days a week for gaming, dining, and squad celebrations.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-emerald-700">Open Daily until 11:00 PM</span>
          </div>
        </div>

        {/* Location & Interactive Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Business Details Card (Left 5 Cols) */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-xs">
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-mono font-bold text-rose-600 uppercase tracking-wider">LUDHIANA FLAGSHIP</span>
                <h3 className="text-2xl font-display font-black text-slate-950 mt-1">
                  SPACEBAR (ਸਪੇਸਬਾਰ)
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Video Arcade, Gaming Cafe & Food Lounge
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <MapPin className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-950">51, I - Block, Sarabha Nagar</div>
                  <div className="text-slate-600">Ludhiana, Punjab 141001</div>
                  <div className="text-[11px] font-mono text-slate-500 mt-1">
                    Plus Code: VRR8+XX Ludhiana
                  </div>
                </div>
              </div>

              {/* Phone & Contact */}
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <Phone className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-950 font-mono">+91 98779 50582</div>
                  <div className="text-slate-500 text-xs">Call or WhatsApp for immediate desk updates</div>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-950">Monday – Sunday: 11:00 AM – 11:00 PM</div>
                  <div className="text-slate-500 text-xs">Late evening gaming sessions available on booking</div>
                </div>
              </div>

              {/* Amenities Badges */}
              <div className="pt-4 border-t border-slate-200">
                <div className="text-[11px] font-mono font-semibold text-slate-500 mb-2">LOUNGE AMENITIES:</div>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-800">
                  <div className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 rounded-xl">
                    <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-100" />
                    <span className="font-medium">LGBTQ+ Friendly</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 rounded-xl">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="font-medium">Family Friendly</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 rounded-xl">
                    <Wifi className="w-3.5 h-3.5 text-sky-600" />
                    <span className="font-medium">Free 300Mbps Wi-Fi</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 rounded-xl">
                    <Car className="w-3.5 h-3.5 text-indigo-600" />
                    <span className="font-medium">Market Parking</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-2.5">
              <a
                href="https://maps.google.com/?q=SPACEBAR+51+I+Block+Sarabha+Nagar+Ludhiana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 text-xs font-semibold text-white bg-slate-950 hover:bg-black rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5 text-rose-400" />
                <span>Get Directions</span>
              </a>

              <a
                href="https://wa.me/919877950582?text=Hello%20Spacebar%20Ludhiana!%20I%20am%20heading%20over%20and%20want%20to%20check%20if%20desks%20are%20free."
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-300 transition-colors flex items-center justify-center gap-2 shadow-2xs"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>

              <a
                href="tel:+919877950582"
                className="py-3 px-4 text-xs font-medium text-slate-800 bg-white hover:bg-slate-100 rounded-xl border border-slate-300 transition-colors flex items-center justify-center gap-2 shadow-2xs"
              >
                <Phone className="w-3.5 h-3.5 text-slate-600" />
                <span>Call</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Visual Frame (Right 7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl overflow-hidden relative min-h-[380px] flex flex-col shadow-xs">
            {/* Embedded Google Maps View iframe */}
            <div className="w-full flex-1 relative bg-slate-100 min-h-[340px]">
              <iframe
                title="SPACEBAR Ludhiana Location Map"
                src="https://maps.google.com/maps?q=51,+I+-+Block,+Sarabha+Nagar,+Ludhiana,+Punjab+141001&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full min-h-[340px]"
              />
              
              {/* Overlay Pin Indicator */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-slate-200 px-3.5 py-2 rounded-xl text-xs flex items-center gap-2 shadow-md">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
                <span className="text-slate-900 font-bold font-display">SPACEBAR 🎮 Sarabha Nagar</span>
              </div>
            </div>

            {/* Bottom Map Bar */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <span className="font-mono">51, I - Block, Sarabha Nagar, Ludhiana</span>
              <a
                href="https://maps.google.com/?q=SPACEBAR+51+I+Block+Sarabha+Nagar+Ludhiana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 hover:text-rose-700 font-semibold hover:underline flex items-center gap-1 font-mono"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

        </div>

        {/* Frequently Asked Questions */}
        <div className="max-w-4xl mx-auto pt-8 border-t border-slate-200">
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-bold text-rose-600 uppercase tracking-widest">
              HELP & INFORMATION
            </span>
            <h3 className="text-2xl font-display font-black text-slate-950 mt-1">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-2xl overflow-hidden transition-colors shadow-2xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 text-sm font-bold text-slate-900 hover:text-rose-600 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                      openFaq === idx ? 'rotate-180 text-rose-600' : ''
                    }`}
                  />
                </button>

                {openFaq === idx && (
                  <div className="px-6 pb-4 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-200 leading-relaxed bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
