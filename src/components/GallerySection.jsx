import React, { useState } from 'react';
import { Sparkles, Maximize2, X, Coffee, MapPin, Cookie, Image as ImageIcon } from 'lucide-react';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 'counter',
      title: 'The Artisanal Tea Counter & Barista Station',
      subtitle: 'Steaming stainless-brass samovars, traditional cutting chai glasses & amber cafe lighting',
      image: '/images/clustea-counter.jpg',
      category: 'Ambiance & Counter',
      tag: 'Featured Highlight',
      aspect: 'col-span-1 md:col-span-2 lg:col-span-2 aspect-[16/10]',
      desc: 'Inside ClusTea: A bustling traditional-meets-modern tea station where farm milk and crushed spices are combined with theatrical kettle pouring.'
    },
    {
      id: 'storefront',
      title: 'ClusTea Storefront & Architectural Facade',
      subtitle: 'Modern dark charcoal fascia, circular steaming tea glass emblem & warm glass windows',
      image: '/images/clustea-storefront.jpg',
      category: 'Storefront',
      tag: 'Tiruppur Flagship',
      aspect: 'col-span-1 aspect-[4/3]',
      desc: 'The iconic street facade in Tiruppur welcoming tea lovers, mill owners, workers, and families throughout the day.'
    },
    {
      id: 'snacks',
      title: 'Fresh Bakery Glass Showcase',
      subtitle: 'Warm golden flaky egg & mushroom puffs alongside jars of classic tea biscuits',
      image: '/images/clustea-snacks.jpg',
      category: 'Bakery & Snacks',
      tag: 'Fresh Daily',
      aspect: 'col-span-1 aspect-[4/3]',
      desc: 'The mouth-watering snack corner with fresh oven warm puffs and assorted bakery jar biscuits.'
    },
    {
      id: 'menu',
      title: 'Official In-Store Menu Board (August 2025)',
      subtitle: 'Direct photographic artifact showing Milk, Black, Green, Herbal and Special beverages',
      image: '/images/clustea-menu.jpg',
      category: 'Menu Board',
      tag: 'Original Source',
      aspect: 'col-span-1 md:col-span-2 lg:col-span-2 aspect-[16/9]',
      desc: 'The genuine chalk-slate menu board preserved as photographic documentation for menu authenticity.'
    }
  ];

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-charcoal-950 border-t border-charcoal-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-xs font-bold text-brand-orange tracking-wider uppercase">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Real Commercial Photographs</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            The ClusTea Experience in Frames
          </h2>

          <p className="text-sm sm:text-base text-gray-300">
            Unfiltered glimpses into ClusTea: from morning kettle steam to warm evening gatherings in Tiruppur.
          </p>
        </div>

        {/* Gallery Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className={`${item.aspect} relative rounded-2xl overflow-hidden bg-charcoal-900 border border-charcoal-750/90 shadow-xl group cursor-pointer`}
            >
              {/* Preserved Aspect Ratio Photo */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              {/* Gradient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Tag Pill */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-charcoal-900/80 text-brand-cream border border-charcoal-700 backdrop-blur-md">
                  {item.tag}
                </span>
              </div>

              {/* Expand Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-brand-orange" />
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase font-bold text-brand-orange tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 line-clamp-1 mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-charcoal-900 border border-charcoal-750 rounded-2xl overflow-hidden shadow-2xl">
            
            {/* Header bar */}
            <div className="p-4 bg-charcoal-850 border-b border-charcoal-750 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase text-brand-orange tracking-wider">
                  {selectedImage.category} • {selectedImage.tag}
                </span>
                <h4 className="text-base font-bold text-white">
                  {selectedImage.title}
                </h4>
              </div>

              <button
                onClick={() => setSelectedImage(null)}
                className="p-2 rounded-xl text-gray-400 hover:text-white bg-charcoal-800 hover:bg-charcoal-750 transition-colors"
                aria-label="Close image modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image in Native Aspect */}
            <div className="p-4 flex-1 flex items-center justify-center bg-black/50 overflow-auto">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[68vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Description Footer */}
            <div className="p-4 bg-charcoal-850 border-t border-charcoal-750 text-xs text-gray-300 flex items-center justify-between">
              <p className="max-w-3xl leading-relaxed">{selectedImage.desc}</p>
              <button
                onClick={() => setSelectedImage(null)}
                className="px-4 py-1.5 rounded-lg bg-brand-orange text-white text-xs font-bold shrink-0 ml-4 shadow-glow-orange"
              >
                Close View
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

