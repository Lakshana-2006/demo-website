import React from 'react';
import { Coffee, Flame, HeartPulse, Sparkles, Users, Award, ShieldCheck, Clock } from 'lucide-react';

export default function BrandIntro() {
  const pillars = [
    {
      icon: Coffee,
      title: 'Farm-Fresh Milk Simmering',
      description: 'Slow-boiled with authentic whole tea leaves to achieve the signature creamy froth that defines true South Indian cutting chai.'
    },
    {
      icon: Flame,
      title: 'Real Spices & Crush Blends',
      description: 'Fresh cracked ginger, green cardamom pods, and Ceylon spices ground on-demand. Never synthetic syrups or powders.'
    },
    {
      icon: HeartPulse,
      title: 'Signature Herbal Busters',
      description: 'Indigenous wellness infusions like Herbal Buster, Herbal Milk, and Blue Butterfly Pea tea crafted for stamina and immunity.'
    },
    {
      icon: Sparkles,
      title: 'Oven Puffs & Vintage Biscuit Jars',
      description: 'Flaky mushroom and egg puffs hot from the warmer, paired with classic bakery jar cookies from coconut to cumin zeera.'
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-charcoal-950/60 border-y border-charcoal-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-xs font-bold text-brand-orange tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The ClusTea Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Crafted for Tiruppur. <br />
            <span className="text-brand-orange">Tea clusters for all times.</span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            In India’s knitwear capital, hustle never stops. From early morning textile mills to evening business catch-ups, <strong className="text-white">ClusTea</strong> was born to create friendly <em>tea clusters</em> — comfortable spaces where conversations brew effortlessly over steaming cups of freshly strained chai.
          </p>
        </div>

        {/* 4 Brand Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-charcoal-850/80 border border-charcoal-750/70 hover:border-brand-orange/40 hover:bg-charcoal-800 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-charcoal-900 border border-charcoal-700 flex items-center justify-center text-brand-orange group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all mb-5">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-brand-orange transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs text-gray-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Brand Identity Showcase Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-charcoal-850 via-charcoal-800 to-charcoal-850 border border-charcoal-700/80 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white p-1.5 shadow-xl shrink-0 flex items-center justify-center border-2 border-brand-orange/40">
              <img src="/images/clustea-logo.svg" alt="Emblem" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
                Authentic Brand Identity
              </div>
              <div className="font-bold text-base text-white">
                Steaming Glass Emblem
              </div>
              <p className="text-[11px] text-gray-400">
                Circular white badge, orange tea glass, dark charcoal foundation
              </p>
            </div>
          </div>

          <div className="border-t md:border-t-0 md:border-l border-charcoal-700/80 pt-4 md:pt-0 md:pl-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
              Provisional 2025 Menu Sync
            </div>
            <div className="font-bold text-base text-white">
              28 Distinct Items Listed
            </div>
            <p className="text-[11px] text-gray-400">
              Extracted directly from August 2025 store board across 6 categories
            </p>
          </div>

          <div className="border-t md:border-t-0 md:border-l border-charcoal-700/80 pt-4 md:pt-0 md:pl-6 flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
                Locally Rooted
              </div>
              <div className="font-bold text-base text-white">
                3 Branches in Tiruppur
              </div>
              <p className="text-[11px] text-gray-400">
                PN Road • Kumaran Road • Karuvampalayam
              </p>
            </div>

            <a
              href="#branches"
              className="px-4 py-2 text-xs font-bold bg-brand-orange text-white rounded-xl shadow-glow-orange hover:bg-brand-orange-hover transition-colors shrink-0"
            >
              Locations
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

