import React from 'react';
import { Coffee, MapPin, Sparkles, Clock, ArrowRight, ShieldCheck, Flame, Star } from 'lucide-react';

export default function Hero() {
  const quickHighlights = [
    { name: 'Ginger Chai', price: '₹20', category: 'Milk Tea', tag: 'Most Loved' },
    { name: 'Mushroom Puff', price: '₹25', category: 'Fresh Baked', tag: 'Oven Warm' },
    { name: 'Herbal Buster', price: '₹15', category: 'Wellness', tag: 'Immunity' },
    { name: 'Badam Milk', price: '₹30', category: 'Special', tag: 'Rich & Creamy' },
  ];

  return (
    <section id="home" className="relative pt-6 pb-20 lg:pt-12 lg:pb-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-orange/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-brand-cream/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-800/90 border border-brand-orange/30 text-xs font-semibold text-brand-orange">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span>Tiruppur’s Distinctive Tea Experience</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-charcoal-800/60 border border-charcoal-700 text-xs text-brand-cream/80">
            <Clock className="w-3.5 h-3.5 text-brand-orange" />
            <span>Serving from 6:00 AM across 3 Locations</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">
                  Welcome to ClusTea
                </span>
                <span className="h-px w-12 bg-brand-orange/40" />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1]">
                Tea clusters <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-amber-200">
                  for all times.
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
              Step into ClusTea — where Tiruppur gathers for authentic kettle-brewed milk chai, soothing herbal busters, aromatic black teas, and warm flaky bakery puffs. Handcrafted with farm-fresh milk and real natural spices.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#menu"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-sm shadow-glow-orange hover:shadow-glow-orange-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Coffee className="w-4 h-4" />
                <span>Explore Full Menu</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#branches"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-charcoal-800 hover:bg-charcoal-750 text-brand-cream font-semibold text-sm border border-charcoal-700 hover:border-brand-orange/40 transition-all transform hover:-translate-y-0.5"
              >
                <MapPin className="w-4 h-4 text-brand-orange" />
                <span>Find Our Branches (3)</span>
              </a>
            </div>

            {/* Featured Quick Bites / Highlights Pill Bar */}
            <div className="pt-4 border-t border-charcoal-800/80">
              <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold block mb-3">
                Featured Crowd Favorites
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {quickHighlights.map((item) => (
                  <a
                    key={item.name}
                    href="#menu"
                    className="p-3 rounded-xl bg-charcoal-850/80 hover:bg-charcoal-800 border border-charcoal-750/70 hover:border-brand-orange/30 transition-all group block text-left"
                  >
                    <div className="flex items-center justify-between text-[10px] text-brand-cream/60 mb-1">
                      <span>{item.category}</span>
                      <span className="text-brand-orange font-bold">{item.price}</span>
                    </div>
                    <div className="font-semibold text-xs text-white group-hover:text-brand-orange transition-colors truncate">
                      {item.name}
                    </div>
                    <span className="inline-block mt-1 text-[9px] px-1.5 py-0.2 rounded bg-charcoal-750 text-gray-300">
                      {item.tag}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Pure Farm Milk</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-brand-orange" />
                <span>Fresh Ground Whole Spices</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400" />
                <span>Authentic Tiruppur Hangout</span>
              </div>
            </div>

          </div>

          {/* Right Column: Real Storefront Photograph Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-orange/40 via-amber-500/20 to-brand-orange/10 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-700" />

              {/* Main Photo Card Container */}
              <div className="relative rounded-2xl overflow-hidden bg-charcoal-850 border border-charcoal-700/80 shadow-2xl">
                
                {/* Real Storefront Photograph */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-charcoal-950">
                  <img
                    src="/images/clustea-storefront.jpg"
                    alt="ClusTea Storefront in Tiruppur"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />

                  {/* Overlaid Storefront Location Tag */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md text-white border border-white/10 shadow-lg">
                      <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                      ClusTea Flagship Outlet
                    </span>
                  </div>

                  {/* Real Photo Notice Badge */}
                  <div className="absolute top-3.5 right-3.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-brand-orange text-white shadow-lg uppercase tracking-wide">
                      Actual Storefront
                    </span>
                  </div>

                  {/* Bottom overlay info */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between">
                    <div>
                      <div className="text-xs font-medium text-brand-cream/80">
                        Dark Charcoal Facade • Steaming Emblem
                      </div>
                      <div className="text-sm font-bold text-white tracking-wide">
                        ClusTea — Tiruppur, TN
                      </div>
                    </div>

                    <a
                      href="#gallery"
                      className="px-3 py-1.5 text-xs font-semibold bg-charcoal-800/90 hover:bg-brand-orange text-white rounded-lg border border-white/10 transition-colors backdrop-blur-sm"
                    >
                      View Gallery
                    </a>
                  </div>
                </div>

                {/* Card Sub-Info Bar */}
                <div className="p-4 bg-charcoal-850 border-t border-charcoal-750/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-white p-1 flex items-center justify-center shrink-0">
                      <img src="/images/clustea-logo.svg" alt="Emblem" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <div className="font-bold text-white">Tea clusters for all times</div>
                      <div className="text-[11px] text-gray-400">Open across PN Road • Kumaran Rd • Karuvampalayam</div>
                    </div>
                  </div>

                  <a
                    href="#branches"
                    className="text-brand-orange hover:text-white font-semibold transition-colors flex items-center gap-1"
                  >
                    <span>Visit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

