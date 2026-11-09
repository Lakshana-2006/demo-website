import React from 'react';
import { Cookie, Sparkles, Flame, CheckCircle, Info, Clock, ArrowRight } from 'lucide-react';

export default function SnacksShowcase() {
  const biscuits = [
    { name: 'Coconut Biscuits', note: 'Toasted coconut flakes & golden edges', favorite: true },
    { name: 'Zeera Biscuits', note: 'Crisp savory roasted cumin seeds', favorite: true },
    { name: 'Chocolate Biscuits', note: 'Rich cocoa crunch for sweet cravings', favorite: false },
    { name: 'Pineapple Biscuits', note: 'Fruity bakery aroma with delicate snap', favorite: false },
    { name: 'Peanut Biscuits', note: 'Wholesome roasted peanut crunch', favorite: false },
    { name: 'Fruit Biscuits', note: 'Studded with sweet tutti-frutti candied bites', favorite: false },
  ];

  return (
    <section id="snacks" className="py-16 lg:py-24 bg-charcoal-950/70 border-t border-charcoal-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-xs font-bold text-brand-orange uppercase tracking-wider">
            <Cookie className="w-3.5 h-3.5" />
            <span>Bakery Counter Special</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Crisp Puffs & Vintage Biscuit Jars
          </h2>

          <p className="text-sm sm:text-base text-gray-300">
            A hot cutting chai in Tiruppur is incomplete without a fresh flaky puff or a crisp dip biscuit straight from the glass jar.
          </p>
        </div>

        {/* Main Grid: Real Photograph & Snacks Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Real Snacks Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden bg-charcoal-850 border border-charcoal-750 shadow-2xl group">
              
              {/* Photograph Aspect Ratio */}
              <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-charcoal-900">
                <img
                  src="/images/clustea-snacks.jpg"
                  alt="ClusTea Fresh Bakery Snacks and Glass Biscuit Jars"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Real Photo Badge */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-black/70 backdrop-blur-md text-white border border-white/10 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                  Actual Shop Snacks Counter
                </span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="p-4 bg-charcoal-900/95 border-t border-charcoal-800 text-xs flex items-center justify-between">
                <div>
                  <div className="font-bold text-white">Daily Oven-Fresh Delivery</div>
                  <div className="text-[11px] text-gray-400">Glass display case with warm puffs & classic biscuits</div>
                </div>

                <span className="px-2.5 py-1 rounded bg-brand-orange/20 text-brand-orange text-[10px] font-bold uppercase tracking-wider border border-brand-orange/30">
                  Visible in Store
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hot Puffs & Biscuits Cards */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* The Famous Puffs */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Flame className="w-4 h-4 text-brand-orange" />
                  <span>Golden Flaky Puffs (Hot)</span>
                </h3>
                <span className="text-[11px] text-emerald-400 font-medium">₹25 Verified Price</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Mushroom Puff */}
                <div className="p-4 rounded-xl bg-charcoal-850 border border-charcoal-750 hover:border-brand-orange/40 transition-all group">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                        100% Veg
                      </span>
                      <h4 className="text-base font-bold text-white mt-2 group-hover:text-brand-orange transition-colors">
                        Mushroom Puff
                      </h4>
                    </div>
                    <span className="text-xl font-display font-extrabold text-white">₹25</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    Tender diced mushrooms sauteed in caramelized onions and aromatic spices wrapped in ultra-crisp layers.
                  </p>
                </div>

                {/* Egg Puff */}
                <div className="p-4 rounded-xl bg-charcoal-850 border border-charcoal-750 hover:border-brand-orange/40 transition-all group">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
                        Contains Egg
                      </span>
                      <h4 className="text-base font-bold text-white mt-2 group-hover:text-brand-orange transition-colors">
                        Egg Puff
                      </h4>
                    </div>
                    <span className="text-xl font-display font-extrabold text-white">₹25</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    Hard-boiled farm egg coated with spicy onion-pepper masala inside buttery golden pastry.
                  </p>
                </div>
              </div>
            </div>

            {/* Vintage Glass Jar Biscuits */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Cookie className="w-4 h-4 text-brand-orange" />
                  <span>Artisanal Jar Biscuits</span>
                </h3>
                <span className="text-[11px] text-amber-400/90 font-medium">Price on enquiry</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {biscuits.map((b) => (
                  <div
                    key={b.name}
                    className="p-3 rounded-xl bg-charcoal-850/80 border border-charcoal-750/70 hover:border-brand-orange/30 transition-all"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-xs text-white truncate">{b.name}</span>
                      {b.favorite && (
                        <span className="text-[9px] text-brand-orange font-bold">★</span>
                      )}
                    </div>
                    <p className="text-[10px] text-gray-400 leading-snug line-clamp-2">
                      {b.note}
                    </p>
                  </div>
                ))}
              </div>

              {/* Biscuit Pricing Note */}
              <div className="p-3 rounded-xl bg-charcoal-900 border border-charcoal-800 text-[11px] text-gray-400 flex items-start gap-2">
                <Info className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                <span>
                  <strong>Client Demo Note:</strong> Biscuit prices are intentionally unconfirmed to maintain accuracy. Editable whenever the shop management updates per-piece or pack prices.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

