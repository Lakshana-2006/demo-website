import React, { useState } from 'react';
import { Info, Sparkles, CheckCircle2, AlertCircle, X, ExternalLink } from 'lucide-react';

export default function ClientDemoNotice() {
  const [isOpen, setIsOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <>
      {bannerVisible && (
        <div className="bg-charcoal-950 border-b border-brand-orange/20 text-xs text-charcoal-300 py-2 px-4 sticky top-0 z-50 backdrop-blur-md">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-hidden">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-brand-orange/20 text-brand-orange border border-brand-orange/30 shrink-0">
                <Sparkles className="w-3 h-3" />
                CLIENT DEMO
              </span>
              <p className="truncate text-charcoal-200">
                <span className="font-semibold text-white">Commercial Proposal Concept:</span> Designed specifically for <strong className="text-brand-orange">ClusTea (Tiruppur)</strong>. Includes real photos, menu extracted from August 2025 board & 3 branch locations.
              </p>
            </div>
            
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setIsOpen(true)}
                className="text-brand-orange hover:text-white transition-colors underline font-medium text-xs flex items-center gap-1"
              >
                <Info className="w-3 h-3" />
                Demo Details
              </button>
              <button
                onClick={() => setBannerVisible(false)}
                className="text-gray-400 hover:text-white transition-colors p-1"
                aria-label="Dismiss banner"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Detail Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-charcoal-850 border border-charcoal-700 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative text-left">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-lg hover:bg-charcoal-750 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center text-brand-orange">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">ClusTea Pitch Prototype</h3>
                <p className="text-xs text-brand-cream/70">Client Acquisition & Digital Presence Concept</p>
              </div>
            </div>

            <div className="space-y-3.5 text-xs text-gray-300">
              <div className="p-3 rounded-xl bg-charcoal-900 border border-charcoal-750 space-y-1.5">
                <div className="flex items-center gap-2 font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Real Brand Assets Integrated</span>
                </div>
                <p className="text-gray-400 pl-6">
                  True circular white emblem with orange steaming tea glass, official tagline <em>"Tea clusters for all times"</em>, charcoal-and-orange theme, and authentic shop photographs from Tiruppur.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-charcoal-900 border border-charcoal-750 space-y-1.5">
                <div className="flex items-center gap-2 font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Verified 2025 Menu Architecture</span>
                </div>
                <p className="text-gray-400 pl-6">
                  Exact item prices (Milk ₹15-₹20, Black ₹15-₹20, Badam/Rose ₹30, Somabanam ₹20, Green ₹20-₹30, Herbal ₹15-₹20, Puffs ₹25) extracted from August 2025 in-store board. Unconfirmed items (Biscuits, add-ons) are clearly marked.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-charcoal-900 border border-brand-orange/20 space-y-1.5">
                <div className="flex items-center gap-2 font-semibold text-brand-orange">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Client Demo Protection Notice</span>
                </div>
                <p className="text-gray-400 pl-6">
                  This website is an independent design proposal crafted to demonstrate modern commercial web capabilities for ClusTea. All phone numbers and unconfirmed items are provisional placeholders ready to be officially customized upon project commission.
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 rounded-xl bg-brand-orange text-white font-semibold text-xs hover:bg-brand-orange-hover transition-colors shadow-glow-orange"
              >
                Explore Prototype
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

