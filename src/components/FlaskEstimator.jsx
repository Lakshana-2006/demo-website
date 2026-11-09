import React, { useState } from 'react';
import { Coffee, Flame, Calculator, Send, Check, Sparkles, Building2, Clock, ShieldCheck } from 'lucide-react';
import { BRANCHES_DATA } from '../data/branchesData';

export default function FlaskEstimator() {
  const [beverage, setBeverage] = useState('ginger-tea');
  const [cups, setCups] = useState(20);
  const [puffType, setPuffType] = useState('mushroom'); // mushroom, egg, none
  const [puffCount, setPuffCount] = useState(10);
  const [branch, setBranch] = useState('branch-pn-road');
  const [copied, setCopied] = useState(false);

  const beverages = [
    { id: 'plain-tea', name: 'Plain Milk Tea', price: 15 },
    { id: 'ginger-tea', name: 'Ginger Tea (Customer Favorite)', price: 20 },
    { id: 'masala-tea', name: 'Masala Spiced Tea', price: 20 },
    { id: 'cardamom-tea', name: 'Cardamom Elaichi Tea', price: 20 },
    { id: 'herbal-buster', name: 'Herbal Buster Health Tonic', price: 15 },
    { id: 'black-lemon', name: 'Lemon Black Tea', price: 20 },
  ];

  const selectedBev = beverages.find((b) => b.id === beverage) || beverages[1];
  const selectedBranchObj = BRANCHES_DATA.find((b) => b.id === branch) || BRANCHES_DATA[0];

  const bevTotal = cups * selectedBev.price;
  const puffPrice = puffType === 'none' ? 0 : 25;
  const puffTotal = puffType === 'none' ? 0 : puffCount * puffPrice;
  const grandTotal = bevTotal + puffTotal;

  // Generate WhatsApp order message
  const generateOrderMessage = () => {
    let msg = `*ClusTea Order Inquiry - Flask Delivery*\n`;
    msg += `--------------------------\n`;
    msg += `📍 *Branch:* ${selectedBranchObj.name} (${selectedBranchObj.locality})\n`;
    msg += `☕ *Beverage:* ${selectedBev.name} x ${cups} cups = ₹${bevTotal}\n`;
    if (puffType !== 'none') {
      msg += `🥐 *Snack:* ${puffType === 'mushroom' ? 'Mushroom Puff (Veg)' : 'Egg Puff'} x ${puffCount} = ₹${puffTotal}\n`;
    }
    msg += `💰 *Estimated Total:* ₹${grandTotal}\n`;
    msg += `--------------------------\n`;
    msg += `Please confirm availability and flask dispatch timing for our office/mill in Tiruppur.`;
    return msg;
  };

  const handleCopyOrder = () => {
    navigator.clipboard.writeText(generateOrderMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-16 lg:py-24 bg-charcoal-900 border-t border-charcoal-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-xs font-bold text-brand-orange uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Tiruppur Workplace & Factory Service</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Daily Office & Mill Flask Order Estimator
          </h2>

          <p className="text-sm sm:text-base text-gray-300">
            Keep your production lines and office teams energized. Calculate your shift tea and warm snack requirements in seconds.
          </p>
        </div>

        {/* Interactive Estimator Box */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-charcoal-850 border border-charcoal-750/90 shadow-2xl p-6 sm:p-10 relative overflow-hidden">
          
          {/* Ambient corner glow */}
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-brand-orange/10 blur-[80px] pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Beverage Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  1. Select Beverage Variant
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {beverages.map((b) => (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setBeverage(b.id)}
                      className={`p-3 rounded-xl text-left border text-xs transition-all flex items-center justify-between ${
                        beverage === b.id
                          ? 'bg-charcoal-750 border-brand-orange text-white shadow-glow-orange'
                          : 'bg-charcoal-900 border-charcoal-800 text-gray-400 hover:text-white hover:border-charcoal-700'
                      }`}
                    >
                      <div className="font-semibold truncate">{b.name}</div>
                      <span className="text-brand-orange font-bold text-xs shrink-0 ml-2">₹{b.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Number of Cups Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-300">
                    2. Quantity (Cups / Thermal Flask)
                  </label>
                  <span className="text-sm font-extrabold text-brand-orange font-mono bg-charcoal-900 px-3 py-1 rounded-lg border border-charcoal-800">
                    {cups} Cups
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="150"
                  step="5"
                  value={cups}
                  onChange={(e) => setCups(parseInt(e.target.value))}
                  className="w-full h-2 bg-charcoal-900 rounded-lg appearance-none cursor-pointer accent-brand-orange"
                />
                <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                  <span>5 Cups (Desk Team)</span>
                  <span>50 Cups (Floor Shift)</span>
                  <span>150 Cups (Factory Batch)</span>
                </div>
              </div>

              {/* Snack Add-On */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  3. Add Fresh Bakery Puffs (Hot)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPuffType('none')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      puffType === 'none'
                        ? 'bg-charcoal-750 border-brand-orange text-white'
                        : 'bg-charcoal-900 border-charcoal-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    No Snacks
                  </button>
                  <button
                    type="button"
                    onClick={() => setPuffType('mushroom')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      puffType === 'mushroom'
                        ? 'bg-charcoal-750 border-emerald-500 text-emerald-400'
                        : 'bg-charcoal-900 border-charcoal-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    Mushroom (₹25)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPuffType('egg')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      puffType === 'egg'
                        ? 'bg-charcoal-750 border-amber-500 text-amber-400'
                        : 'bg-charcoal-900 border-charcoal-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    Egg Puff (₹25)
                  </button>
                </div>

                {puffType !== 'none' && (
                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-xs text-gray-400">Puff Quantity:</span>
                    <div className="flex items-center gap-2">
                      {[5, 10, 20, 50].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setPuffCount(num)}
                          className={`px-3 py-1 rounded-lg text-xs font-bold border ${
                            puffCount === num
                              ? 'bg-brand-orange text-white border-brand-orange'
                              : 'bg-charcoal-900 border-charcoal-800 text-gray-400 hover:text-white'
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Outlet Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  4. Dispatch Outlet in Tiruppur
                </label>
                <select
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-charcoal-900 border border-charcoal-750 text-white text-xs focus:border-brand-orange focus:outline-none"
                >
                  {BRANCHES_DATA.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.name} — {b.locality}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-charcoal-900 border border-charcoal-750 flex flex-col justify-between h-full space-y-5">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-charcoal-800 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                    Order Estimate
                  </span>
                  <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                    Same-Day Flask Delivery
                  </span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between text-gray-300">
                    <span>{selectedBev.name} ({cups} × ₹{selectedBev.price})</span>
                    <span className="font-semibold text-white">₹{bevTotal}</span>
                  </div>

                  {puffType !== 'none' && (
                    <div className="flex justify-between text-gray-300">
                      <span>
                        {puffType === 'mushroom' ? 'Mushroom Puff' : 'Egg Puff'} ({puffCount} × ₹25)
                      </span>
                      <span className="font-semibold text-white">₹{puffTotal}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-gray-400 text-[11px] pt-1">
                    <span>Dispatch Location</span>
                    <span className="text-right truncate max-w-[150px]">{selectedBranchObj.locality}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-charcoal-800 flex items-baseline justify-between">
                  <span className="text-sm font-bold text-white">Estimated Total</span>
                  <div className="text-right">
                    <span className="text-2xl font-display font-extrabold text-brand-orange">
                      ₹{grandTotal}
                    </span>
                    <div className="text-[10px] text-gray-500">Includes thermal flask packing</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={handleCopyOrder}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold transition-all shadow-glow-orange"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>Order Message Copied!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Copy WhatsApp Order Format</span>
                    </>
                  )}
                </button>

                <p className="text-[10px] text-center text-gray-500 leading-tight">
                  Copies a formatted text order ready to be sent to ClusTea branch managers on WhatsApp.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

