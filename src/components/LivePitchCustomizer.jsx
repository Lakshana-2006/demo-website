import React, { useState } from 'react';
import { Sliders, X, Sparkles, Check, RotateCcw, Copy, ExternalLink, Save } from 'lucide-react';

export default function LivePitchCustomizer({ onUpdatePrice, onUpdatePhone, currentData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Local state for interactive test adjustments
  const [gingerPrice, setGingerPrice] = useState(20);
  const [plainPrice, setPlainPrice] = useState(15);
  const [puffPrice, setPuffPrice] = useState(25);
  const [pnPhone, setPnPhone] = useState('+91 98420 XXXXX');
  const [biscuitNote, setBiscuitNote] = useState('₹10 per piece (Confirmed)');

  const handleApply = () => {
    if (onUpdatePrice) {
      onUpdatePrice({
        'milk-ginger': gingerPrice,
        'milk-plain': plainPrice,
        'snack-mushroom-puff': puffPrice,
        'snack-egg-puff': puffPrice,
      });
    }
    if (onUpdatePhone) {
      onUpdatePhone({
        'branch-pn-road': pnPhone,
      });
    }
  };

  const handleCopyConfig = () => {
    const config = {
      brand: 'ClusTea',
      tagline: 'Tea clusters for all times',
      verifiedPrices: {
        'Ginger Tea': gingerPrice,
        'Plain Tea': plainPrice,
        'Puffs': puffPrice,
      },
      flagshipPhone: pnPhone,
      status: 'Ready for official production launch'
    };
    navigator.clipboard.writeText(JSON.stringify(config, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Floating Pitch Mode Button */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-charcoal-850 hover:bg-charcoal-800 text-brand-orange border border-brand-orange/40 shadow-2xl shadow-black/80 text-xs font-bold transition-all hover:scale-105 active:scale-95 group"
        >
          <Sliders className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          <span className="hidden sm:inline">Owner Pitch Mode:</span>
          <span>Live Editor</span>
        </button>
      </div>

      {/* Slide-over Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-charcoal-900 border-l border-charcoal-750 w-full max-w-md h-full overflow-y-auto p-6 shadow-2xl flex flex-col justify-between">
            
            <div className="space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-charcoal-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center text-brand-orange">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Live Client Presentation Panel</h3>
                    <p className="text-[11px] text-gray-400">Demonstrate instant content updates to the shop owner</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-white bg-charcoal-800 hover:bg-charcoal-750"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Explanatory Pitch Note */}
              <div className="p-3.5 rounded-xl bg-charcoal-850 border border-brand-orange/20 text-xs text-gray-300">
                <p className="font-semibold text-brand-orange mb-1">Presentation Tip for the Owner:</p>
                <p className="text-gray-400 text-[11px] leading-relaxed">
                  "Mr. Owner, whenever menu prices change or new biscuit varieties arrive, your site is built to update in seconds without paying for recurring redesigns."
                </p>
              </div>

              {/* Live Price Adjustments */}
              <div className="space-y-3.5">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center justify-between">
                  <span>1. Test Dynamic Menu Pricing</span>
                  <span className="text-[10px] text-gray-500 font-normal">Live on page</span>
                </h4>

                <div className="space-y-2.5">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-charcoal-850 border border-charcoal-800 text-xs">
                    <div>
                      <div className="font-semibold text-white">Ginger Tea (Milk)</div>
                      <div className="text-[10px] text-gray-400">Current board price: ₹20</div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-gray-400">₹</span>
                      <input
                        type="number"
                        value={gingerPrice}
                        onChange={(e) => setGingerPrice(parseInt(e.target.value) || 0)}
                        className="w-16 px-2 py-1 bg-charcoal-900 border border-charcoal-700 text-white rounded font-mono font-bold text-right"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-charcoal-850 border border-charcoal-800 text-xs">
                    <div>
                      <div className="font-semibold text-white">Plain Tea (Milk)</div>
                      <div className="text-[10px] text-gray-400">Current board price: ₹15</div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-gray-400">₹</span>
                      <input
                        type="number"
                        value={plainPrice}
                        onChange={(e) => setPlainPrice(parseInt(e.target.value) || 0)}
                        className="w-16 px-2 py-1 bg-charcoal-900 border border-charcoal-700 text-white rounded font-mono font-bold text-right"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-charcoal-850 border border-charcoal-800 text-xs">
                    <div>
                      <div className="font-semibold text-white">Mushroom & Egg Puffs</div>
                      <div className="text-[10px] text-gray-400">Current board price: ₹25</div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-gray-400">₹</span>
                      <input
                        type="number"
                        value={puffPrice}
                        onChange={(e) => setPuffPrice(parseInt(e.target.value) || 0)}
                        className="w-16 px-2 py-1 bg-charcoal-900 border border-charcoal-700 text-white rounded font-mono font-bold text-right"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Branch Contact Editor */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  2. Update Official Branch Phone
                </h4>
                <div className="p-3 rounded-xl bg-charcoal-850 border border-charcoal-800 text-xs space-y-1.5">
                  <label className="text-[11px] text-gray-400 block">PN Road Flagship Line:</label>
                  <input
                    type="text"
                    value={pnPhone}
                    onChange={(e) => setPnPhone(e.target.value)}
                    placeholder="+91 98420 XXXXX"
                    className="w-full px-3 py-1.5 bg-charcoal-900 border border-charcoal-700 text-white rounded font-mono text-xs focus:border-brand-orange focus:outline-none"
                  />
                  <p className="text-[10px] text-gray-500 italic">Replaces the demo placeholder with real store line</p>
                </div>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-charcoal-800 space-y-2.5">
              <button
                type="button"
                onClick={handleCopyConfig}
                className="w-full py-2.5 px-4 rounded-xl bg-charcoal-800 hover:bg-charcoal-750 text-gray-200 text-xs font-bold border border-charcoal-700 flex items-center justify-center gap-2 transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Config Copied to Clipboard!' : 'Copy Deployment Settings (JSON)'}</span>
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-full py-2.5 px-4 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold shadow-glow-orange transition-colors"
              >
                Close & Return to Presentation
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

