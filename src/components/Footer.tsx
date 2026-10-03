import React from 'react';
import { MapPin, Phone, Clock, Heart, ArrowUp } from 'lucide-react';
import { SpacebarLogo } from './SpacebarLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080e] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand info with SpacebarLogo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <SpacebarLogo size="md" className="h-9 w-auto" />
              <span className="text-xl font-display font-black text-white tracking-tight">
                SPACEBAR
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ludhiana’s premier video arcade, esports lounge & gourmet food cafe. Built for gamers, food lovers, and squad celebrations.
            </p>
            <div className="text-[11px] font-mono text-purple-400">
              ਸਪੇਸਬਾਰ ਆਰਕੇਡ ਅਤੇ ਕੈਫੇ • ਲੁਧਿਆਣਾ
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
              Explore Spacebar
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#gaming-zone" className="hover:text-cyan-400 transition-colors">
                  Motion Racing Simulators
                </a>
              </li>
              <li>
                <a href="#gaming-zone" className="hover:text-cyan-400 transition-colors">
                  PS5 & Xbox 4K Lounges
                </a>
              </li>
              <li>
                <a href="#gaming-zone" className="hover:text-cyan-400 transition-colors">
                  240Hz Esports PC Battle-Stations
                </a>
              </li>
              <li>
                <a href="#menu-showcase" className="hover:text-cyan-400 transition-colors">
                  Gourmet Smashed Burgers & Shakes
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-400 transition-colors">
                  Hourly Rates & Birthday Packages
                </a>
              </li>
            </ul>
          </div>

          {/* Business & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
              Hours & Location
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium">Monday – Sunday</span>
                  <div className="text-slate-400">11:00 AM – 11:00 PM Daily</div>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium">51, I - Block, Sarabha Nagar</span>
                  <div className="text-slate-400">Ludhiana, Punjab 141001</div>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
              Contact & Inquiries
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <a href="tel:+919877950582" className="text-white hover:text-cyan-400 font-mono">
                  +91 98779 50582
                </a>
              </div>
              <p className="text-slate-400 text-[11px]">
                Drop in or book a custom squad event with birthday cakes and party music.
              </p>
              <div className="pt-2">
                <a
                  href="https://wa.me/919877950582?text=Hello%20Spacebar%20Ludhiana!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/70 border border-emerald-600/50 text-emerald-300 hover:text-white transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} SPACEBAR Ludhiana. All rights reserved.</span>
            <span>·</span>
            <span className="flex items-center gap-1 text-slate-400">
              Made with <Heart className="w-3 h-3 text-rose-500 inline fill-rose-500" /> for Ludhiana gamers
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://maps.google.com/?q=SPACEBAR+51+I+Block+Sarabha+Nagar+Ludhiana"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300"
            >
              Google Maps (4.8 ★)
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
