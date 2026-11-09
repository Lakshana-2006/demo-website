import React from 'react';
import { Coffee, ShieldCheck, Heart, Sparkles, Award, Clock, Users, Flame } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    {
      title: 'Born in Tiruppur',
      desc: 'Inspired by the bustling rhythm of the knitwear city where hard work and high spirits demand hot, invigorating tea breaks at every hour.'
    },
    {
      title: 'Pure Dairy & Fresh Spices',
      desc: 'Simmered exclusively with farm-sourced whole milk, hand-crushed ginger root, cracked cardamom, and authentic spice blends.'
    },
    {
      title: 'Ayurvedic Herbal Heritage',
      desc: 'Formulated with traditional natural remedies — from Herbal Buster to Butterfly Pea Blue tea for stamina, focus, and holistic refreshment.'
    },
    {
      title: 'Community Clusters',
      desc: 'Whether stopping by for a brisk 5-minute cutting chai or unwinding after a shift, ClusTea is where the community connects.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-charcoal-900 border-t border-charcoal-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Storytelling */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden bg-charcoal-850 border border-charcoal-750 shadow-2xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/clustea-counter.jpg"
                  alt="ClusTea Barista Crafting Milk Tea"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="p-5 bg-charcoal-900 border-t border-charcoal-800 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-orange">
                  <Flame className="w-4 h-4" />
                  <span>The ClusTea Steaming Glass Ritual</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Every cup is served piping hot in our signature cutting chai glass, capped with a thick ring of creamy froth.
                </p>
              </div>
            </div>

            {/* Visual Brand Identity Box */}
            <div className="p-5 rounded-2xl bg-charcoal-850/80 border border-charcoal-750 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white p-1 shadow-lg shrink-0 flex items-center justify-center">
                <img src="/images/clustea-logo.svg" alt="ClusTea Emblem" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  The Circular White Emblem
                </div>
                <p className="text-[11px] text-gray-400 mt-0.5">
                  Symbolizing purity, wholeness, and the rising orange steam of honest Indian tea hospitality.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-xs font-bold text-brand-orange tracking-wider uppercase">
                <Users className="w-3.5 h-3.5" />
                <span>About ClusTea</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                Where Tiruppur Gathers, <br />
                <span className="text-brand-orange">One Cluster at a Time.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              In Tamil Nadu’s vibrant textile district, tea is more than a refreshment — it is the lifeblood of commerce, camaraderie, and creative hustle. <strong className="text-white">ClusTea</strong> was conceived with a clear vision: elevate the roadside cutting chai culture into a clean, modern, hygienic, and welcoming cafe environment without losing an ounce of authenticity or affordability.
            </p>

            <p className="text-sm text-gray-300 leading-relaxed">
              From our flagship outlet on PN Road to bustling counters in Kumaran Road and Karuvampalayam, we serve over 28 handcrafted beverages — from our ₹15 classic cutting chai to wellness-boosting herbal busters, soothing Badam Milk, and oven-fresh puffs.
            </p>

            {/* 4 Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              {highlights.map((h, i) => (
                <div key={i} className="p-4 rounded-xl bg-charcoal-850 border border-charcoal-750">
                  <h4 className="text-xs font-bold text-brand-orange uppercase tracking-wider mb-1">
                    {h.title}
                  </h4>
                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-6 text-xs text-brand-cream/80">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-orange" />
                <span>Open 365 Days a Year</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Hygienic Preparation Standards</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

