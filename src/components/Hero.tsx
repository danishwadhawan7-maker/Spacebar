import React from 'react';
import { Star, ShieldCheck, MapPin, Clock, Flame, ChevronRight, Gamepad2, Trophy, Car } from 'lucide-react';
import { SpacebarLogo } from './SpacebarLogo';
import heroArcadeImg from '../assets/images/spacebar_hero_arcade_1791021226041.jpg';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreMenu }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Logo Badge & Location Line */}
            <div className="flex flex-wrap items-center gap-3">
              <SpacebarLogo size="sm" className="h-7 w-auto" />
              <div className="h-4 w-px bg-slate-700/80" />
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium tracking-wide text-slate-400">
                <span className="flex items-center gap-1 text-cyan-400">
                  <MapPin className="w-3.5 h-3.5" />
                  Sarabha Nagar, Ludhiana
                </span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <Clock className="w-3.5 h-3.5" />
                  Open Daily till 11:00 PM
                </span>
              </div>
            </div>

            {/* Catchy Main Headline - Exactly matching reference image typography & coloring */}
            <h1 className="font-display font-black tracking-tight text-white leading-[1.08] text-3xl sm:text-5xl lg:text-[54px] max-w-2xl">
              <div>Level Up Your</div>
              <div className="flex flex-wrap items-baseline gap-x-2">
                <span>Chill –</span>
                <span className="text-[#c084fc]">Gaming</span>
              </div>
              <div className="flex flex-wrap items-baseline gap-x-2">
                <span className="text-[#a855f7]">Zone</span>
                <span>&</span>
              </div>
              <div>
                <span className="text-[#38bdf8]">Gourmet Cafe</span>
              </div>
              <div>in Ludhiana</div>
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-normal">
              Experience Punjab’s premier esports arcade. Direct-drive motion racing simulators, 
              4K 120Hz PS5 lounges, zero-lag 240Hz PC battlestations, and artisan smashed burgers with loaded milkshakes.
            </p>

            {/* Action Buttons with WhatsApp Integration */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-5 py-3 text-xs sm:text-sm font-display font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:brightness-110 rounded-xl shadow-xl shadow-purple-600/30 hover:shadow-cyan-500/25 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Gamepad2 className="w-4 h-4" />
                <span>Reserve Gaming Desk / Table</span>
                <ChevronRight className="w-4 h-4 ml-0.5" />
              </button>

              <a
                href="https://wa.me/919877950582?text=Hi%20Spacebar%20Ludhiana!%20I%20would%20like%20to%20book%20a%20gaming%20slot%20or%20inquire%20about%20availability."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 text-xs sm:text-sm font-display font-semibold text-emerald-300 hover:text-white bg-emerald-950/70 hover:bg-emerald-900/90 border border-emerald-600/50 rounded-xl transition-all flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>WhatsApp Desk</span>
              </a>

              <button
                onClick={onExploreMenu}
                className="px-4 py-3 text-xs sm:text-sm font-display font-medium text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 rounded-xl transition-all flex items-center gap-2 cursor-pointer"
              >
                <Flame className="w-4 h-4 text-orange-400" />
                <span>Explore Menu</span>
              </button>
            </div>

            {/* Key stats counter bar */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="flex items-center gap-1 text-amber-400 font-display font-bold text-2xl tabular-nums">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400 inline" />
                  <span>4.8</span>
                  <span className="text-sm text-slate-400 font-normal">/ 5.0</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">191+ Google Reviews</div>
              </div>

              <div>
                <div className="text-white font-display font-bold text-2xl tabular-nums flex items-center gap-1.5">
                  <Car className="w-5 h-5 text-cyan-400" />
                  <span>Sim Rigs</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">Triple Curved 165Hz</div>
              </div>

              <div>
                <div className="text-white font-display font-bold text-2xl tabular-nums flex items-center gap-1.5">
                  <Trophy className="w-5 h-5 text-purple-400" />
                  <span>240 Hz</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">Zero-Lag Fiber Net</div>
              </div>
            </div>

            {/* Inclusive & Safe statement */}
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Family-Friendly & LGBTQ+ Inclusive Space · Sanitized Controllers & Headsets</span>
            </div>
          </div>

          {/* Right Column: High-Fidelity Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-950/50 bg-[#12131f] group">
              {/* Media image */}
              <img
                src={heroArcadeImg}
                alt="Inside Spacebar Gaming Cafe and Arcade in Ludhiana"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Overlay gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-[#0a0a12]/30 to-transparent" />

              {/* Live Status Overlay in bottom container */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0e101cf2] backdrop-blur-md border border-white/10 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Live Gaming Arena Open</h4>
                      <p className="text-xs text-slate-400">51, I - Block, Sarabha Nagar</p>
                    </div>
                  </div>
                  <button
                    onClick={onOpenBooking}
                    className="px-3 py-1.5 text-xs font-medium text-cyan-300 hover:text-white bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-700/50 rounded-lg transition-colors cursor-pointer"
                  >
                    Quick Slot →
                  </button>
                </div>
              </div>
            </div>

            {/* Accent Floating Badge for Racing & Simulators */}
            <div className="hidden sm:flex absolute -top-4 -right-4 bg-gradient-to-r from-purple-900/90 to-indigo-900/90 backdrop-blur-md border border-purple-500/40 px-3.5 py-2 rounded-xl shadow-lg items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-medium text-purple-200">
                Direct Drive Simulators Ready
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
