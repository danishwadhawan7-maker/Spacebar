/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GamingZone } from './components/GamingZone';
import { FoodMenu } from './components/FoodMenu';
import { PricingPasses } from './components/PricingPasses';
import { Reviews } from './components/Reviews';
import { ReservationSection } from './components/ReservationSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { TabCartDrawer, CartItem } from './components/TabCartDrawer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { MenuItem, PricingPass } from './data/mockData';
import { Gamepad2, ShoppingBag, Sparkles } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<{ [key: string]: CartItem }>({});
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [selectedStation, setSelectedStation] = useState<string>('racing-sim');
  const [selectedPass, setSelectedPass] = useState<PricingPass | null>(null);

  const totalCartCount = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev[item.id];
      if (existing) {
        return {
          ...prev,
          [item.id]: {
            ...existing,
            quantity: existing.quantity + 1,
          },
        };
      }
      return {
        ...prev,
        [item.id]: {
          item,
          quantity: 1,
        },
      };
    });
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCart((prev) => {
      const existing = prev[itemId];
      if (!existing) return prev;
      const nextQty = existing.quantity + delta;
      if (nextQty <= 0) {
        const next = { ...prev };
        delete next[itemId];
        return next;
      }
      return {
        ...prev,
        [itemId]: {
          ...existing,
          quantity: nextQty,
        },
      };
    });
  };

  const handleRemoveItem = (itemId: string) => {
    setCart((prev) => {
      const next = { ...prev };
      delete next[itemId];
      return next;
    });
  };

  const handleClearCart = () => {
    setCart({});
  };

  const scrollToBooking = (stationId?: string) => {
    if (stationId) {
      setSelectedStation(stationId);
    }
    const elem = document.getElementById('reservation');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPass = (pass: PricingPass) => {
    setSelectedPass(pass);
    setSelectedStation(pass.stationType);
    const elem = document.getElementById('reservation');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMenu = () => {
    const elem = document.getElementById('menu-showcase');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Map of item counts for FoodMenu display
  const cartItemsCount: { [key: string]: number } = {};
  Object.values(cart).forEach((c) => {
    cartItemsCount[c.item.id] = c.quantity;
  });

  return (
    <div className="bg-white text-slate-900 min-h-screen flex flex-col font-sans selection:bg-rose-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenBooking={() => scrollToBooking()}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Body */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenBooking={() => scrollToBooking()}
          onExploreMenu={scrollToMenu}
        />

        {/* 2. Gaming Attractions & Setups */}
        <GamingZone onSelectStation={(stationId) => scrollToBooking(stationId)} />

        {/* 3. Cafe & Food Lounge Menu */}
        <FoodMenu
          onAddToCart={handleAddToCart}
          cartItemsCount={cartItemsCount}
        />

        {/* 4. Pricing Passes & Squad Rates */}
        <PricingPasses onSelectPass={handleSelectPass} />

        {/* 5. Google Reviews & Social Proof */}
        <Reviews />

        {/* 6. Instant Slot & Table Reservation */}
        <ReservationSection
          initialStation={selectedStation}
          initialPass={selectedPass}
        />

        {/* 7. Location, Google Map, Timings & FAQs */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Bottom Quick Action on Mobile */}
      <div className="fixed bottom-3 right-3 sm:hidden z-40 flex items-center gap-2">
        {totalCartCount > 0 && (
          <button
            onClick={() => setIsCartOpen(true)}
            className="p-3 bg-white border border-slate-300 text-slate-800 rounded-full shadow-lg"
            aria-label="View Food Tab"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5 text-slate-700" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-[9px] font-bold text-white rounded-full flex items-center justify-center">
                {totalCartCount}
              </span>
            </div>
          </button>
        )}
        <button
          onClick={() => scrollToBooking()}
          className="px-4 py-2.5 bg-slate-900 hover:bg-black text-white text-xs font-bold font-display rounded-full shadow-lg flex items-center gap-1.5 cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Book Slot</span>
        </button>
      </div>

      {/* Slide-over Food & Drinks Tab Drawer */}
      <TabCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating WhatsApp Quick Interaction Widget */}
      <WhatsAppWidget phoneNumber="919877950582" />
    </div>
  );
}
