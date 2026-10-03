import React, { useState } from 'react';
import { Utensils, Flame, Leaf, Plus, Sparkles, Coffee, Wine, Check } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../data/mockData';
import gourmetBurgerImg from '../assets/images/spacebar_gourmet_burger_food_1791021278283.jpg';
import cocktailShakesImg from '../assets/images/spacebar_cocktail_shakes_1791021290452.jpg';

interface FoodMenuProps {
  onAddToCart: (item: MenuItem) => void;
  cartItemsCount: { [key: string]: number };
}

export const FoodMenu: React.FC<FoodMenuProps> = ({ onAddToCart, cartItemsCount }) => {
  const [activeCategory, setActiveCategory] = useState<'burgers' | 'tandoori' | 'shakes' | 'drinks'>('burgers');
  const [dietFilter, setDietFilter] = useState<'all' | 'veg' | 'nonveg' | 'special'>('all');
  const [addedAnimationId, setAddedAnimationId] = useState<string | null>(null);

  const categories = [
    { id: 'burgers', label: 'Gourmet Burgers' },
    { id: 'tandoori', label: 'Tandoori Delights & Starters' },
    { id: 'shakes', label: 'Cold Brews & Thickshakes' },
    { id: 'drinks', label: 'Mocktails & Coolers' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    if (item.category !== activeCategory) return false;
    if (dietFilter === 'veg') return item.isVeg;
    if (dietFilter === 'nonveg') return !item.isVeg;
    if (dietFilter === 'special') return item.isSpecial;
    return true;
  });

  const handleAddWithFeedback = (item: MenuItem) => {
    onAddToCart(item);
    setAddedAnimationId(item.id);
    setTimeout(() => {
      setAddedAnimationId(null);
    }, 1200);
  };

  return (
    <section id="menu-showcase" className="py-20 bg-[#0a0b12] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-900/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span>02. GOURMET CAFE & LOUNGE</span>
              <span aria-hidden="true">·</span>
              <span>SERVED FRESH IN LUDHIANA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Fuel Your High Score
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              Not your typical arcade snacks. Freshly smashed gourmet burgers, Punjabi smoked tandoori delights, artisan cold coffee, and electric mocktails.
            </p>
          </div>

          {/* Quick Quality Note */}
          <div className="mt-4 md:mt-0 text-xs text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Separate Pure Veg Preparation · 100% Fresh Daily Ingredients</span>
          </div>
        </div>

        {/* Featured Visual Spotlights (Burgers & Shakes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#121422] group h-56 sm:h-64">
            <img
              src={gourmetBurgerImg}
              alt="Spacebar Gourmet Smashed Burgers"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e17] via-[#0d0e17]/50 to-transparent" />
            <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
              <div>
                <span className="text-[11px] font-mono text-cyan-400">CHEF’S SPECIALTY</span>
                <h3 className="text-xl font-display font-bold text-white">Artisan Smash Burgers & Tandoor</h3>
                <p className="text-xs text-slate-300 mt-1 max-w-md">Double stacked patties, molten cheddar, toasted brioche and smoked skewers.</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#121422] group h-56 sm:h-64">
            <img
              src={cocktailShakesImg}
              alt="Loaded Oreo Shakes and Neon Mocktails"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e17] via-[#0d0e17]/50 to-transparent" />
            <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
              <div>
                <span className="text-[11px] font-mono text-purple-400">SIGNATURE BEVERAGES</span>
                <h3 className="text-xl font-display font-bold text-white">Loaded Shakes & Glowing Coolers</h3>
                <p className="text-xs text-slate-300 mt-1 max-w-md">Belgian Lotus Biscoff, Nutella Brownie, and Neon Blue Lagoon mocktails.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800/80 pb-4 mb-8">
          {/* Main Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Diet Sub-Filters */}
          <div className="flex items-center gap-1 text-xs">
            <button
              onClick={() => setDietFilter('all')}
              className={`px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                dietFilter === 'all'
                  ? 'bg-slate-800 text-white border-slate-600'
                  : 'text-slate-400 border-transparent hover:text-slate-200'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setDietFilter('veg')}
              className={`px-3 py-1.5 rounded-lg border transition-colors flex items-center gap-1 cursor-pointer ${
                dietFilter === 'veg'
                  ? 'bg-emerald-950/70 text-emerald-300 border-emerald-700/60'
                  : 'text-slate-400 border-transparent hover:text-emerald-400'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              Veg Only
            </button>
            <button
              onClick={() => setDietFilter('nonveg')}
              className={`px-3 py-1.5 rounded-lg border transition-colors flex items-center gap-1 cursor-pointer ${
                dietFilter === 'nonveg'
                  ? 'bg-rose-950/70 text-rose-300 border-rose-700/60'
                  : 'text-slate-400 border-transparent hover:text-rose-400'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" />
              Non-Veg
            </button>
            <button
              onClick={() => setDietFilter('special')}
              className={`px-3 py-1.5 rounded-lg border transition-colors flex items-center gap-1 cursor-pointer ${
                dietFilter === 'special'
                  ? 'bg-amber-950/70 text-amber-300 border-amber-700/60'
                  : 'text-slate-400 border-transparent hover:text-amber-400'
              }`}
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              Chef’s Picks
            </button>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredItems.map((item) => {
            const countInCart = cartItemsCount[item.id] || 0;
            const isJustAdded = addedAnimationId === item.id;

            return (
              <div
                key={item.id}
                className="bg-[#121422] border border-slate-800/80 hover:border-slate-700 p-5 rounded-2xl transition-all duration-200 flex flex-col justify-between group hover:shadow-lg hover:shadow-black/40"
              >
                <div className="space-y-2">
                  {/* Top line: Name, Veg Indicator, Price */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      {/* Dietary dot icon */}
                      <span
                        className={`w-3.5 h-3.5 border flex items-center justify-center p-[2px] rounded-xs shrink-0 ${
                          item.isVeg ? 'border-emerald-500' : 'border-rose-500'
                        }`}
                        title={item.isVeg ? 'Pure Vegetarian' : 'Non-Vegetarian'}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            item.isVeg ? 'bg-emerald-500' : 'bg-rose-500'
                          }`}
                        />
                      </span>

                      <h4 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {item.name}
                      </h4>

                      {item.badge && (
                        <span className="text-[10px] font-mono text-purple-300 bg-purple-950/80 border border-purple-800/50 px-2 py-0.5 rounded">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <div className="text-base font-bold font-mono text-cyan-400 shrink-0 tabular-nums">
                      ₹{item.price}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed pl-5.5">
                    {item.description}
                  </p>
                </div>

                {/* Bottom line: Specs + Add to Tab Button */}
                <div className="pt-4 mt-3 border-t border-slate-800/60 flex items-center justify-between pl-5.5">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    {item.calories && <span>{item.calories}</span>}
                    {item.calories && item.isSpicy && <span>·</span>}
                    {item.isSpicy && (
                      <span className="text-rose-400 flex items-center gap-0.5">
                        <Flame className="w-3 h-3" /> Spicy
                      </span>
                    )}
                  </div>

                  {/* Add to order / tab */}
                  <button
                    onClick={() => handleAddWithFeedback(item)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                      isJustAdded
                        ? 'bg-emerald-600 text-white'
                        : countInCart > 0
                        ? 'bg-purple-900/80 text-purple-200 border border-purple-600'
                        : 'bg-slate-800 hover:bg-purple-600 text-slate-200 hover:text-white border border-slate-700'
                    }`}
                  >
                    {isJustAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added!</span>
                      </>
                    ) : countInCart > 0 ? (
                      <>
                        <Plus className="w-3 h-3" />
                        <span>In Tab ({countInCart})</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3 h-3" />
                        <span>Add to Bill</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
