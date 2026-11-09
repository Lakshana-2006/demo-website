import React, { useState } from 'react';
import { BRANCHES_DATA } from '../data/branchesData';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  Copy, 
  Check, 
  ExternalLink, 
  ShieldAlert, 
  Sparkles, 
  Coffee 
} from 'lucide-react';

export default function BranchesSection() {
  const [copiedPhone, setCopiedPhone] = useState(null);

  const handleCopy = (phone, id) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(id);
    setTimeout(() => setCopiedPhone(null), 2500);
  };

  return (
    <section id="branches" className="py-16 lg:py-24 relative bg-charcoal-900">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-brand-orange/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-800 border border-brand-orange/30 text-xs font-bold text-brand-orange tracking-wider uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>3 Convenient Locations in Tiruppur</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Find Your Nearest ClusTea
          </h2>

          <p className="text-sm sm:text-base text-gray-300">
            Whether you are commuting through PN Road, shopping near Kumaran Road, or relaxing in Karuvampalayam, hot artisanal tea is always nearby.
          </p>
        </div>

        {/* 3 Branch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {BRANCHES_DATA.map((branch) => (
            <div
              key={branch.id}
              className={`p-6 sm:p-7 rounded-2xl bg-charcoal-850/95 border transition-all duration-300 flex flex-col justify-between shadow-xl relative group hover:-translate-y-1 ${
                branch.isFlagship
                  ? 'border-brand-orange/50 ring-1 ring-brand-orange/20'
                  : 'border-charcoal-750 hover:border-brand-orange/40'
              }`}
            >
              {/* Flagship Pill */}
              {branch.isFlagship && (
                <div className="absolute -top-3 left-6">
                  <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-[10px] font-bold bg-brand-orange text-white uppercase tracking-wider shadow-md">
                    <Sparkles className="w-3 h-3" /> Flagship Outlet
                  </span>
                </div>
              )}

              <div className="space-y-5">
                
                {/* Branch Name & Locality */}
                <div>
                  <div className="text-xs font-semibold text-brand-orange uppercase tracking-wider">
                    {branch.locality}
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1 group-hover:text-brand-orange transition-colors">
                    {branch.name}
                  </h3>
                  <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-950/60 text-emerald-400 text-xs font-semibold border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Open Now • {branch.hours}</span>
                  </div>
                </div>

                {/* Address Block */}
                <div className="space-y-1.5 text-xs text-gray-300">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-white">{branch.address}</p>
                      <p className="text-gray-400">{branch.city}, {branch.state} - {branch.pincode}</p>
                      <p className="text-[11px] text-brand-cream/60 mt-0.5 italic">Landmark: {branch.landmark}</p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-2.5 text-xs text-gray-300 pt-2 border-t border-charcoal-750/70">
                  <Clock className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">{branch.hours}</div>
                    <div className="text-[11px] text-gray-400">{branch.days}</div>
                  </div>
                </div>

                {/* Phone & Contact (with Editable Demo Placeholder notice) */}
                <div className="p-3 rounded-xl bg-charcoal-900 border border-charcoal-750 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-brand-orange" />
                      <span className="font-mono font-medium text-white tracking-wide">
                        {branch.phone}
                      </span>
                    </div>

                    <button
                      onClick={() => handleCopy(branch.phone, branch.id)}
                      className="p-1 rounded text-gray-400 hover:text-white transition-colors"
                      title="Copy placeholder number"
                    >
                      {copiedPhone === branch.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                  <div className="text-[10px] text-amber-300/80 font-medium">
                    * {branch.phoneNote}
                  </div>
                </div>

                {/* Branch Highlights / Features */}
                <div className="flex flex-wrap gap-1.5">
                  {branch.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-charcoal-800 text-gray-300 border border-charcoal-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-charcoal-750 flex items-center gap-3">
                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold transition-all shadow-glow-orange"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                </a>

                <a
                  href="#contact"
                  className="px-3.5 py-2.5 rounded-xl bg-charcoal-800 hover:bg-charcoal-750 text-gray-300 hover:text-white text-xs font-semibold border border-charcoal-700 transition-colors"
                  title="Inquire about this branch"
                >
                  Inquire
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Client Demo Notice for Branch Accuracy */}
        <div className="mt-12 p-4 rounded-xl bg-charcoal-850/80 border border-charcoal-750 text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-brand-orange shrink-0" />
            <span>
              <strong>Verified Commercial Localities:</strong> Addresses are mapped to actual commercial junctions in Tiruppur. Contact phone numbers are intentionally set to provisional demo placeholders.
            </span>
          </div>

          <span className="text-[11px] text-brand-cream/80 font-mono shrink-0">
            Editable dataset: src/data/branchesData.js
          </span>
        </div>

      </div>
    </section>
  );
}

