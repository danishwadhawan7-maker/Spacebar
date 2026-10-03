import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Phone, Sparkles, MessageCircle } from 'lucide-react';
import { SpacebarLogo } from './SpacebarLogo';

interface NavbarProps {
  onOpenBooking: () => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Gaming Zone', href: '#gaming-zone' },
    { name: 'Food & Drinks', href: '#menu-showcase' },
    { name: 'Passes & Rates', href: '#pricing' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location & FAQs', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#090a10]/95 backdrop-blur-md border-b border-purple-900/30 shadow-lg shadow-purple-950/20'
          : 'bg-transparent border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Zone 1: Official Logo with Unbounded font */}
          <a
            href="#"
            className="flex items-center gap-3 shrink-0 mr-4 xl:mr-8 group cursor-pointer"
          >
            <SpacebarLogo size="md" className="h-8 sm:h-9 w-auto shrink-0 group-hover:scale-105 transition-transform duration-200" />
            <div className="flex flex-col shrink-0">
              <span className="font-display font-black tracking-tight text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors whitespace-nowrap">
                SPACEBAR
              </span>
              <span className="text-[9px] text-purple-400 -mt-0.5 tracking-wider font-mono whitespace-nowrap">
                ਸਪੇਸਬਾਰ · LUDHIANA
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation links - hidden below xl (1280px) to prevent overlap on laptops */}
          <nav className="hidden xl:flex items-center gap-6 text-xs uppercase font-display font-medium tracking-wide text-slate-300 shrink-0 mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-cyan-400 transition-colors whitespace-nowrap py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-cyan-400"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions with WhatsApp integration */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0 ml-auto xl:ml-0">
            {/* WhatsApp Direct */}
            <a
              href="https://wa.me/919877950582?text=Hello%20Spacebar%20Gaming%20Cafe%20Ludhiana!%20I%20want%20to%20inquire%20about%20a%20gaming%20desk%20slot."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-xs font-medium text-emerald-300 hover:text-white bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-600/40 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap"
              title="Chat on WhatsApp (+91 98779 50582)"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="font-mono text-[11px]">WhatsApp</span>
            </a>

            {/* Quick Call - full text on 2xl, compact on smaller */}
            <a
              href="tel:+919877950582"
              className="hidden lg:flex px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 rounded-xl transition-colors items-center gap-1.5 whitespace-nowrap"
              title="Call Spacebar Ludhiana"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="font-mono text-[11px]">+91 98779 50582</span>
            </a>

            {/* Cart / Tab Estimator button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 rounded-xl transition-colors cursor-pointer shrink-0"
              aria-label="View Order Tab"
            >
              <ShoppingBag className="w-4 h-4 text-purple-400" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-gradient-to-r from-purple-600 to-pink-500 text-[10px] font-bold text-white rounded-full flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Main Reservation CTA */}
            <button
              onClick={onOpenBooking}
              className="px-4 py-2.5 text-xs font-display font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 rounded-xl hover:brightness-110 shadow-lg shadow-purple-600/25 transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Reserve a Slot</span>
            </button>
          </div>

          {/* Mobile Menu & Cart Button (shown below xl) */}
          <div className="flex xl:hidden items-center gap-2 ml-auto sm:ml-0">
            <a
              href="https://wa.me/919877950582?text=Hello%20Spacebar%20Gaming%20Cafe%20Ludhiana!"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-2 text-emerald-400 bg-emerald-950/60 border border-emerald-600/40 rounded-xl"
              aria-label="WhatsApp Chat"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenCart}
              className="sm:hidden relative p-2 text-slate-300 bg-slate-900 border border-slate-800 rounded-xl"
              aria-label="Order Tab"
            >
              <ShoppingBag className="w-4 h-4 text-purple-400" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-purple-600 text-[9px] font-bold text-white rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-xl cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0e101a] border-b border-purple-900/40 px-5 pt-3 pb-6 space-y-3">
          <div className="text-xs font-mono text-purple-400 pb-2 border-b border-white/5 flex items-center justify-between">
            <span>Sarabha Nagar, Ludhiana</span>
            <span className="text-emerald-400">● Open Daily till 11 PM</span>
          </div>
          <div className="flex flex-col gap-2 pt-1 font-display text-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 font-medium text-slate-200 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/5 space-y-2">
            <a
              href="https://wa.me/919877950582?text=Hello%20Spacebar%20Gaming%20Cafe%20Ludhiana!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-emerald-300 bg-emerald-950/70 rounded-xl border border-emerald-600/40"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp: +91 98779 50582</span>
            </a>

            <a
              href="tel:+919877950582"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-200 bg-slate-800/80 rounded-xl border border-slate-700"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Call: +91 98779 50582</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-display font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 rounded-xl shadow-md cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Reserve Gaming Desk / Table</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

