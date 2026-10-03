import React from 'react';
import { Check, Sparkles, Zap, Shield, Gift } from 'lucide-react';
import { PRICING_PASSES, PricingPass } from '../data/mockData';

interface PricingPassesProps {
  onSelectPass: (pass: PricingPass) => void;
}

export const PricingPasses: React.FC<PricingPassesProps> = ({ onSelectPass }) => {
  return (
    <section id="pricing" className="py-20 bg-[#0d0e17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-cyan-400">
            <span>03. TRANSPARENT PRICING</span>
            <span aria-hidden="true">·</span>
            <span>NO HIDDEN SURCHARGES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Gaming Passes & Group Packages
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
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
                  ? 'bg-gradient-to-b from-[#181a2e] to-[#121424] border-2 border-purple-500 shadow-xl shadow-purple-950/40 lg:-translate-y-2'
                  : 'bg-[#121422] border border-slate-800/80 hover:border-slate-700'
              }`}
            >
              {pass.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-md">
                  Most Popular Pass
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <div className="text-xs font-mono text-purple-400 uppercase tracking-wider">
                    {pass.tier}
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mt-1">
                    {pass.title}
                  </h3>
                </div>

                {/* Price Display */}
                <div className="pt-2 pb-4 border-b border-slate-800">
                  <div className="flex items-baseline gap-1 font-mono">
                    <span className="text-3xl font-extrabold text-white">₹{pass.price}</span>
                    <span className="text-xs text-slate-400">/{pass.period}</span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">Inclusive of all taxes & Wi-Fi</div>
                </div>

                {/* Features List */}
                <ul className="space-y-2.5 text-xs text-slate-300 pt-1">
                  {pass.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-800/60">
                <button
                  onClick={() => onSelectPass(pass)}
                  className={`w-full py-2.5 px-4 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                    pass.popular
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-500 hover:brightness-110 text-white shadow-lg shadow-purple-900/30'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700'
                  }`}
                >
                  Book This Pass
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Group & Corporate Event Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-[#131526] to-cyan-950/30 border border-purple-800/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-900/40 border border-purple-700/50 flex items-center justify-center shrink-0">
              <Gift className="w-6 h-6 text-purple-300" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-white">
                Planning a Birthday or College LAN Tournament?
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                We organize customized brackets, custom LED greetings, birthday cake tables, and discounted food towers.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/919877950582?text=Hi%20Spacebar%20team,%20I%20want%20to%20inquire%20about%20booking%20a%20birthday%20party%20or%20group%20event."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            Chat on WhatsApp (+91 98779 50582)
          </a>
        </div>

      </div>
    </section>
  );
};
