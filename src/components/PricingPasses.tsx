import React from 'react';
import { Check, Sparkles, Zap, Shield, Gift } from 'lucide-react';
import { PRICING_PASSES, PricingPass } from '../data/mockData';

interface PricingPassesProps {
  onSelectPass: (pass: PricingPass) => void;
}

export const PricingPasses: React.FC<PricingPassesProps> = ({ onSelectPass }) => {
  return (
    <section id="pricing" className="py-20 bg-slate-50/70 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-rose-600 font-semibold">
            <span>03. TRANSPARENT PRICING</span>
            <span aria-hidden="true">·</span>
            <span>NO HIDDEN SURCHARGES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-950 tracking-tight">
            Gaming Passes & Group Packages
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Praised across 190+ Google reviews for genuine, student-friendly rates. Pay by the hour or pick a value bundle with complimentary food & drinks.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_PASSES.map((pass) => (
            <div
              key={pass.id}
              className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative ${
                pass.popular
                  ? 'bg-white border-2 border-slate-900 shadow-xl lg:-translate-y-2'
                  : 'bg-white border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md'
              }`}
            >
              {pass.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-950 text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm font-display">
                  Most Popular Pass
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <div className="text-xs font-mono text-rose-600 font-bold uppercase tracking-wider">
                    {pass.tier}
                  </div>
                  <h3 className="text-lg font-display font-bold text-slate-950 mt-1">
                    {pass.title}
                  </h3>
                </div>

                {/* Price Display */}
                <div className="pt-2 pb-4 border-b border-slate-100">
                  <div className="flex items-baseline gap-1 font-mono">
                    <span className="text-3xl font-black text-slate-950">₹{pass.price}</span>
                    <span className="text-xs text-slate-500">/{pass.period}</span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 font-sans">Inclusive of all taxes & Wi-Fi</div>
                </div>

                {/* Features List */}
                <ul className="space-y-2.5 text-xs text-slate-600 pt-1">
                  {pass.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => onSelectPass(pass)}
                  className={`w-full py-2.5 px-4 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                    pass.popular
                      ? 'bg-slate-950 hover:bg-black text-white shadow-md'
                      : 'bg-slate-100 hover:bg-slate-950 text-slate-800 hover:text-white border border-slate-200'
                  }`}
                >
                  Book This Pass
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Group & Corporate Event Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center shrink-0">
              <Gift className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-950">
                Planning a Birthday or College LAN Tournament?
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                We organize customized brackets, custom LED greetings, birthday cake tables, and discounted food towers.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/919877950582?text=Hi%20Spacebar%20team,%20I%20want%20to%20inquire%20about%20booking%20a%20birthday%20party%20or%20group%20event."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors whitespace-nowrap cursor-pointer shrink-0 shadow-sm"
          >
            Chat on WhatsApp (+91 98779 50582)
          </a>
        </div>

      </div>
    </section>
  );
};
