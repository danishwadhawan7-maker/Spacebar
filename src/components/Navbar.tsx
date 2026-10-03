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
    { name: 'Games', fullName: 'Gaming Zone & Attractions', href: '#gaming-zone' },
    { name: 'Menu', fullName: 'Food & Drinks Menu', href: '#menu-showcase' },
    { name: 'Passes', fullName: 'Passes & Hourly Rates', href: '#pricing' },
    { name: 'Reviews', fullName: 'Google Player Reviews', href: '#reviews' },
    { name: 'Location', fullName: 'Location, Map & FAQs', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs'
          : 'bg-white/90 backdrop-blur-xs border-b border-slate-100'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20 gap-2 sm:gap-4">
          
          {/* Zone 1: Official Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 shrink-0 group cursor-pointer"
          >
            <SpacebarLogo size="sm" className="h-7 sm:h-8 w-auto shrink-0 group-hover:scale-105 transition-transform duration-200" />
            <div className="flex flex-col shrink-0">
              <span className="font-display font-black tracking-tight text-base sm:text-lg text-slate-950 group-hover:text-rose-600 transition-colors whitespace-nowrap">
                SPACEBAR
              </span>
              <span className="text-[9px] text-slate-500 -mt-0.5 tracking-wider font-mono whitespace-nowrap hidden xs:inline">
                ਸਪੇਸਬਾਰ · LUDHIANA
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links - Visible on lg screens (1024px+) with compact, modern typography */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8 text-xs font-sans font-bold uppercase tracking-wider text-slate-700 shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-rose-600 transition-colors whitespace-nowrap py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-rose-600"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action Items */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* WhatsApp Direct */}
            <a
              href="https://wa.me/919877950582?text=Hello%20Spacebar%20Gaming%20Cafe%20Ludhiana!%20I%20want%20to%20inquire%20about%20a%20gaming%20desk%20slot."
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 sm:px-3 py-2 text-xs font-semibold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap shadow-2xs"
              title="Chat on WhatsApp (+91 98779 50582)"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="font-mono text-[11px] hidden sm:inline">WhatsApp</span>
            </a>

            {/* Quick Call - Shown only on wider screens to prevent crowding */}
            <a
              href="tel:+919877950582"
              className="hidden 2xl:flex px-3 py-2 text-xs font-semibold text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-colors items-center gap-1.5 whitespace-nowrap shadow-2xs"
              title="Call Spacebar Ludhiana"
            >
              <Phone className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              <span className="font-mono text-[11px]">+91 98779 50582</span>
            </a>

            {/* Cart / Food Tab button */}
            <button
              onClick={onOpenCart}
              className="relative p-2 sm:p-2.5 text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-colors cursor-pointer shrink-0 shadow-2xs"
              aria-label="View Order Tab"
            >
              <ShoppingBag className="w-4 h-4 text-slate-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-rose-600 text-[10px] font-bold text-white rounded-full flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Main Reservation CTA */}
            <button
              onClick={onOpenBooking}
              className="px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs font-display font-bold text-white bg-slate-900 hover:bg-black rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer shrink-0 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Book Slot</span>
            </button>

            {/* Mobile / Tablet Menu Button (shown below lg) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl cursor-pointer shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="text-xs font-mono text-slate-500 pb-2 border-b border-slate-100 flex items-center justify-between">
            <span>Sarabha Nagar, Ludhiana</span>
            <span className="text-emerald-600 font-semibold">● Open Daily till 11 PM</span>
          </div>
          <div className="flex flex-col gap-1.5 pt-1 text-sm font-sans font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-slate-800 hover:text-rose-600 hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.fullName}</span>
                <span className="text-xs font-mono text-slate-400">→</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <a
              href="https://wa.me/919877950582?text=Hello%20Spacebar%20Gaming%20Cafe%20Ludhiana!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-emerald-800 bg-emerald-50 rounded-xl border border-emerald-300"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp: +91 98779 50582</span>
            </a>

            <a
              href="tel:+919877950582"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 rounded-xl border border-slate-200"
            >
              <Phone className="w-3.5 h-3.5 text-slate-700" />
              <span>Call: +91 98779 50582</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-display font-bold text-white bg-slate-900 hover:bg-black rounded-xl shadow-md cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Reserve Gaming Desk / Table</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

