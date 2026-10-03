import React, { useState } from 'react';
import { Star, ShieldCheck, MapPin, Clock, Flame, ChevronRight, Gamepad2, Trophy, Car } from 'lucide-react';
import { SpacebarLogo } from './SpacebarLogo';
import realRacersImg from '../assets/images/spacebar_real_racers_1791026764179.jpg';
import realArcadeImg from '../assets/images/spacebar_real_arcade_1791026738292.jpg';
import realStorefrontImg from '../assets/images/spacebar_real_storefront_1791026751442.jpg';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreMenu }) => {
  const [activePhoto, setActivePhoto] = useState<'racers' | 'arcade' | 'storefront'>('racers');

  const photoMap = {
    racers: {
      src: realRacersImg,
      label: 'Motion Sim Cockpits',
      caption: 'Real dual racing cockpits with direct-drive wheels & illuminated marquees',
    },
    arcade: {
      src: realArcadeImg,
      label: 'Arcade & PS5 Pods',
      caption: 'Custom SPACEBAR cabinet pods running PS5 hardware & fighting games',
    },
    storefront: {
      src: realStorefrontImg,
      label: 'Sarabha Nagar Storefront',
      caption: 'Flagship entrance with comic art glass doors & 3D sign',
    },
  };
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Logo Badge & Location Line */}
            <div className="flex flex-wrap items-center gap-3">
              <SpacebarLogo size="sm" className="h-7 w-auto" />
              <div className="h-4 w-px bg-slate-300" />
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-slate-600">
                <span className="flex items-center gap-1 text-slate-900 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  Sarabha Nagar, Ludhiana
                </span>
                <span aria-hidden="true" className="text-slate-400">·</span>
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  Open Daily till 11:00 PM
                </span>
              </div>
            </div>

            {/* Catchy Main Headline - Crisp, bold, no awkward wrapping or overlap on white background */}
            <h1 className="font-display font-black tracking-tight text-slate-950 leading-[1.08] text-3xl sm:text-5xl lg:text-[52px] max-w-2xl">
              Level Up Your Chill –{' '}
              <span className="text-rose-600">Gaming Zone</span>{' '}
              & <span className="text-sky-600">Gourmet Cafe</span> in Ludhiana
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl font-normal">
              Experience Punjab’s premier esports arcade. Direct-drive motion racing simulators, 
              4K 120Hz PS5 lounges, zero-lag 240Hz PC battlestations, and artisan smashed burgers with loaded milkshakes.
            </p>

            {/* Action Buttons with WhatsApp Integration */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-5 py-3 text-xs sm:text-sm font-display font-bold text-white bg-slate-950 hover:bg-black rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <Gamepad2 className="w-4 h-4 text-rose-400" />
                <span>Reserve Gaming Desk / Table</span>
                <ChevronRight className="w-4 h-4 ml-0.5" />
              </button>

              <a
                href="https://wa.me/919877950582?text=Hi%20Spacebar%20Ludhiana!%20I%20would%20like%20to%20book%20a%20gaming%20slot%20or%20inquire%20about%20availability."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 text-xs sm:text-sm font-display font-semibold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition-all flex items-center gap-2 shadow-2xs"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>WhatsApp Desk</span>
              </a>

              <button
                onClick={onExploreMenu}
                className="px-4 py-3 text-xs sm:text-sm font-display font-semibold text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-2xs"
              >
                <Flame className="w-4 h-4 text-orange-500" />
                <span>Explore Menu</span>
              </button>
            </div>

            {/* Key stats counter bar */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="flex items-center gap-1 text-slate-950 font-display font-black text-2xl tabular-nums">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-500 inline" />
                  <span>4.8</span>
                  <span className="text-sm text-slate-500 font-normal">/ 5.0</span>
                </div>
                <div className="text-xs text-slate-500 mt-0.5">191+ Google Reviews</div>
              </div>

              <div>
                <div className="text-slate-950 font-display font-black text-2xl tabular-nums flex items-center gap-1.5">
                  <Car className="w-5 h-5 text-sky-600" />
                  <span>Sim Rigs</span>
                </div>
                <div className="text-xs text-slate-500 mt-0.5">Triple Curved 165Hz</div>
              </div>

              <div>
                <div className="text-slate-950 font-display font-black text-2xl tabular-nums flex items-center gap-1.5">
                  <Trophy className="w-5 h-5 text-rose-600" />
                  <span>240 Hz</span>
                </div>
                <div className="text-xs text-slate-500 mt-0.5">Zero-Lag Fiber Net</div>
              </div>
            </div>

            {/* Inclusive & Safe statement */}
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Family-Friendly & LGBTQ+ Inclusive Space · Sanitized Controllers & Headsets</span>
            </div>
          </div>

          {/* Right Column: Authentic Venue Showcase */}
          <div className="lg:col-span-5 relative space-y-3">
            {/* Photo Category Selector */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 text-[11px] font-mono">
              <button
                type="button"
                onClick={() => setActivePhoto('racers')}
                className={`flex-1 py-1.5 px-2 rounded-lg font-bold transition-all cursor-pointer truncate ${
                  activePhoto === 'racers'
                    ? 'bg-white text-slate-950 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                🏎️ Sim Cockpits
              </button>
              <button
                type="button"
                onClick={() => setActivePhoto('arcade')}
                className={`flex-1 py-1.5 px-2 rounded-lg font-bold transition-all cursor-pointer truncate ${
                  activePhoto === 'arcade'
                    ? 'bg-white text-slate-950 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                🎮 Arcade Pods
              </button>
              <button
                type="button"
                onClick={() => setActivePhoto('storefront')}
                className={`flex-1 py-1.5 px-2 rounded-lg font-bold transition-all cursor-pointer truncate ${
                  activePhoto === 'storefront'
                    ? 'bg-white text-slate-950 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                📍 Storefront
              </button>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 group">
              {/* Media image */}
              <img
                src={photoMap[activePhoto].src}
                alt={photoMap[activePhoto].label}
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Overlay gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

              {/* Caption Overlay */}
              <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md border border-white/20 text-white px-3 py-1 rounded-lg text-[10px] font-mono flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>AUTHENTIC SPACEBAR LUDHIANA</span>
              </div>

              {/* Live Status Overlay in bottom container */}
              <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 font-display">{photoMap[activePhoto].label}</h4>
                      <p className="text-[10px] text-slate-500 truncate max-w-[200px] sm:max-w-xs">{photoMap[activePhoto].caption}</p>
                    </div>
                  </div>
                  <button
                    onClick={onOpenBooking}
                    className="px-3 py-1.5 text-xs font-bold font-display text-white bg-slate-950 hover:bg-black rounded-lg transition-colors cursor-pointer shrink-0 shadow-xs"
                  >
                    Book Slot →
                  </button>
                </div>
              </div>
            </div>

            {/* Accent Floating Badge for Racing & Simulators */}
            <div className="hidden sm:flex items-center justify-between px-1 text-xs text-slate-500">
              <span className="flex items-center gap-1 text-[11px] font-mono">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                Actual venue photos · Sarabha Nagar, Ludhiana
              </span>
              <span className="text-[11px] font-mono text-emerald-700 font-semibold">● 100% Real Hardware</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
