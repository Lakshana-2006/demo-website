import React, { useState, useMemo } from 'react';
import { 
  MENU_CATEGORIES, 
  MENU_ITEMS, 
  ADD_ONS, 
  MENU_METADATA 
} from '../data/menuData';
import { 
  Coffee, 
  CupSoda, 
  Star, 
  Leaf, 
  HeartPulse, 
  Cookie, 
  Sparkles, 
  Search, 
  Info, 
  Check, 
  Image as ImageIcon, 
  X, 
  Plus, 
  Clock, 
  AlertCircle 
} from 'lucide-react';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all'); // all, veg, popular
  const [showMenuPhotoModal, setShowMenuPhotoModal] = useState(false);

  // Icon mapper
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'milk': return Coffee;
      case 'black': return CupSoda;
      case 'special': return Star;
      case 'green': return Leaf;
      case 'herbal': return HeartPulse;
      case 'snacks': return Cookie;
      default: return Sparkles;
    }
  };

  // Filter items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;

      // Search query
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.category.toLowerCase().includes(searchQuery.toLowerCase());

      // Secondary filter
      let matchesFilter = true;
      if (selectedFilter === 'veg') matchesFilter = item.isVeg === true;
      if (selectedFilter === 'popular') matchesFilter = item.popular === true;
      if (selectedFilter === 'under25') matchesFilter = item.price && item.price <= 20;

      return matchesCategory && matchesSearch && matchesFilter;
    });
  }, [activeCategory, searchQuery, selectedFilter]);

  const activeCategoryMeta = MENU_CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <section id="menu" className="py-16 lg:py-24 relative bg-charcoal-900">
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-orange/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-800 border border-brand-orange/30 text-xs font-semibold text-brand-orange mb-3">
              <Coffee className="w-3.5 h-3.5" />
              <span>Authentic Brews & Bites</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Our Beverage & Snack Menu
            </h2>

            <p className="text-sm text-gray-400 mt-2 max-w-xl">
              Freshly strained milk chais, revitalizing herbal busters, artisanal teas, and crisp baked puffs.
            </p>
          </div>

          {/* Action / View Menu Photo Button */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowMenuPhotoModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-charcoal-800 hover:bg-charcoal-750 text-brand-cream border border-charcoal-700 hover:border-brand-orange/40 text-xs font-semibold transition-all shadow-md"
            >
              <ImageIcon className="w-4 h-4 text-brand-orange" />
              <span>View Original Menu Photo</span>
            </button>
          </div>
        </div>

        {/* Provisional Data Disclaimer Callout */}
        <div className="mb-8 p-3.5 sm:p-4 rounded-xl bg-charcoal-850 border border-brand-orange/25 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-start sm:items-center gap-2.5 text-gray-300">
            <Info className="w-4 h-4 text-brand-orange shrink-0 mt-0.5 sm:mt-0" />
            <span>
              <strong className="text-white">Provisional Menu Demo:</strong> Extracted from ClusTea’s in-store menu photograph (Dated August 2025). Prices and items are easily editable.
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-brand-cream/70 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Milk, Black, Special, Green, Herbal & Puffs confirmed</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none no-scrollbar">
          {MENU_CATEGORIES.map((cat) => {
            const Icon = getCategoryIcon(cat.id);
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 shrink-0 ${
                  isActive
                    ? 'bg-brand-orange text-white shadow-glow-orange'
                    : 'bg-charcoal-850 hover:bg-charcoal-800 text-gray-300 hover:text-white border border-charcoal-750'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-brand-orange'}`} />
                <span>{cat.name}</span>
                <span
                  className={`ml-1 text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-charcoal-750 text-gray-400'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search & Sub-Filter Bar */}
        <div className="mt-6 mb-8 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tea, ingredient (e.g. ginger, puff, rose)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-750 focus:border-brand-orange focus:outline-none text-xs text-white placeholder-gray-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedFilter === 'all'
                  ? 'bg-charcoal-750 text-white border border-brand-orange/40'
                  : 'bg-charcoal-850 text-gray-400 hover:text-white border border-charcoal-800'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedFilter('popular')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedFilter === 'popular'
                  ? 'bg-charcoal-750 text-brand-orange border border-brand-orange/40'
                  : 'bg-charcoal-850 text-gray-400 hover:text-white border border-charcoal-800'
              }`}
            >
              ★ Popular
            </button>
            <button
              onClick={() => setSelectedFilter('veg')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedFilter === 'veg'
                  ? 'bg-charcoal-750 text-emerald-400 border border-emerald-500/40'
                  : 'bg-charcoal-850 text-gray-400 hover:text-white border border-charcoal-800'
              }`}
            >
              Pure Veg Only
            </button>
            <button
              onClick={() => setSelectedFilter('under25')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedFilter === 'under25'
                  ? 'bg-charcoal-750 text-amber-300 border border-amber-400/40'
                  : 'bg-charcoal-850 text-gray-400 hover:text-white border border-charcoal-800'
              }`}
            >
              ₹20 & Under
            </button>
          </div>

        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-charcoal-850/60 rounded-2xl border border-charcoal-800 p-8">
            <Coffee className="w-12 h-12 text-gray-600 mx-auto mb-3" />
            <h4 className="text-base font-bold text-white">No items found</h4>
            <p className="text-xs text-gray-400 mt-1">Try resetting your search or filter</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedFilter('all'); setActiveCategory('all'); }}
              className="mt-4 px-4 py-2 text-xs font-semibold bg-brand-orange text-white rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-charcoal-850/90 hover:bg-charcoal-800 border border-charcoal-750 hover:border-brand-orange/40 transition-all duration-200 group flex flex-col justify-between shadow-md hover:shadow-xl"
              >
                <div>
                  
                  {/* Top Bar: Dietary dot, Badge & Price */}
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div className="flex items-center gap-2">
                      {/* Veg / Non-Veg Indicator */}
                      <span
                        className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 ${
                          item.isVeg
                            ? 'border-emerald-500 bg-emerald-950/40'
                            : 'border-red-500 bg-red-950/40'
                        }`}
                        title={item.isVeg ? 'Vegetarian' : 'Contains Egg'}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            item.isVeg ? 'bg-emerald-400' : 'bg-red-400'
                          }`}
                        />
                      </span>

                      {/* Item Badge */}
                      {item.badge && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-charcoal-750 text-brand-cream/80 border border-charcoal-700">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    {/* Price Tag */}
                    <div className="text-right shrink-0">
                      {item.priceConfirmed ? (
                        <div className="flex items-baseline gap-0.5">
                          <span className="text-sm font-semibold text-brand-orange">₹</span>
                          <span className="text-2xl font-display font-extrabold text-white">
                            {item.price}
                          </span>
                        </div>
                      ) : (
                        <span className="inline-block px-2 py-0.5 rounded text-[11px] font-medium bg-charcoal-750 text-amber-300 border border-amber-400/30">
                          {item.pricePlaceholder}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Item Name */}
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-brand-orange transition-colors">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Verified Note if applicable */}
                  {item.verifiedNote && (
                    <div className="mt-2 text-[10px] text-brand-orange/90 flex items-center gap-1">
                      <Check className="w-3 h-3" />
                      <span>{item.verifiedNote}</span>
                    </div>
                  )}
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-4 pt-3 border-t border-charcoal-750/70 flex items-center justify-between text-[11px] text-gray-400">
                  <span className="flex items-center gap-1 text-brand-cream/70">
                    <Clock className="w-3 h-3 text-brand-orange" />
                    <span>{item.servings}</span>
                  </span>

                  <span className="capitalize text-charcoal-600 font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add-ons & Sweetener Options Drawer */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-charcoal-850 border border-charcoal-750 relative overflow-hidden">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-orange mb-2">
              <Plus className="w-4 h-4" />
              <span>Custom Sweeteners & Add-Ons</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              Tailor Your ClusTea Just the Way You Like It
            </h3>

            <p className="text-xs text-gray-400 mb-6">
              Prefer unrefined cane sugar, hill honey, or calorie-conscious options? Request your preferred sweetener when ordering at the counter.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {ADD_ONS.map((addon) => (
                <div
                  key={addon.id}
                  className="p-3.5 rounded-xl bg-charcoal-900 border border-charcoal-750 flex flex-col justify-between"
                >
                  <div>
                    <div className="font-bold text-xs text-white mb-1">{addon.name}</div>
                    <p className="text-[11px] text-gray-400 leading-snug">{addon.description}</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-charcoal-800 text-[10px] text-amber-400/90 font-medium flex items-center justify-between">
                    <span>Charge:</span>
                    <span>{addon.priceStatus}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-[11px] text-gray-500 italic">
              * Note: Specific add-on surcharges are awaiting confirmation with shop management.
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal: Real Menu Photograph */}
      {showMenuPhotoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="bg-charcoal-900 border border-charcoal-700 rounded-2xl max-w-4xl w-full p-4 sm:p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setShowMenuPhotoModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-xl bg-charcoal-800 border border-charcoal-700 z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/15 px-2.5 py-1 rounded-full border border-brand-orange/30">
                In-Store Artifact
              </span>
              <h3 className="text-xl font-bold text-white mt-2">
                ClusTea Official In-Store Menu Board
              </h3>
              <p className="text-xs text-gray-400">
                Photographed in Tiruppur (Board dated August 2025). Used as direct reference for this demo.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden bg-charcoal-950 border border-charcoal-800">
              <img
                src="/images/clustea-menu.jpg"
                alt="ClusTea Official In-Store Menu Board (August 2025)"
                className="w-full h-auto max-h-[65vh] object-contain mx-auto"
              />
            </div>

            <div className="mt-4 p-3 rounded-xl bg-charcoal-850 text-xs text-gray-300 flex items-center justify-between">
              <span>All 28 beverages and snacks displayed on this site match the categories on this board.</span>
              <button
                onClick={() => setShowMenuPhotoModal(false)}
                className="px-4 py-1.5 rounded-lg bg-brand-orange text-white font-bold text-xs"
              >
                Done
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

