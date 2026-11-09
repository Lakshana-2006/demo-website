import React from 'react';
import { Coffee, MapPin, Clock, Heart, Shield, Sparkles, ChevronRight, Phone } from 'lucide-react';
import { BRANCHES_DATA } from '../data/branchesData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-950 border-t border-charcoal-800 text-gray-400 text-xs">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info & Emblem */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full bg-white p-1 shadow-md border border-brand-cream/60 flex items-center justify-center shrink-0">
                <img
                  src="/images/clustea-logo.svg"
                  alt="ClusTea Official Emblem"
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <span className="font-display font-extrabold text-2xl tracking-tight text-white">
                  Clus<span className="text-brand-orange">Tea</span>
                </span>
                <p className="text-xs text-brand-cream/80 font-medium">
                  Tea clusters for all times
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Tiruppur’s favorite tea lounges serving freshly steeped milk chai, soothing herbal busters, and fresh oven bakery puffs across 3 vibrant outlets.
            </p>

            <div className="pt-2 text-[11px] text-gray-500 space-y-1">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-brand-orange" />
                <span>Serving Daily from 6:00 AM – 9:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                <span>Tiruppur, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-brand-orange transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-orange transition-colors">About ClusTea</a></li>
              <li><a href="#menu" className="hover:text-brand-orange transition-colors">Beverage Menu</a></li>
              <li><a href="#snacks" className="hover:text-brand-orange transition-colors">Oven Puffs & Biscuits</a></li>
              <li><a href="#branches" className="hover:text-brand-orange transition-colors">Our 3 Branches</a></li>
              <li><a href="#gallery" className="hover:text-brand-orange transition-colors">Photo Gallery</a></li>
              <li><a href="#contact" className="hover:text-brand-orange transition-colors">Contact & Catering</a></li>
            </ul>
          </div>

          {/* Menu Categories */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Menu Specialties
            </h4>
            <ul className="space-y-2">
              <li><a href="#menu" className="hover:text-brand-orange transition-colors">Milk Teas (from ₹15)</a></li>
              <li><a href="#menu" className="hover:text-brand-orange transition-colors">Ginger & Masala Chai (₹20)</a></li>
              <li><a href="#menu" className="hover:text-brand-orange transition-colors">Badam & Rose Milk (₹30)</a></li>
              <li><a href="#menu" className="hover:text-brand-orange transition-colors">Somabanam Elixir (₹20)</a></li>
              <li><a href="#menu" className="hover:text-brand-orange transition-colors">Herbal Buster Tonic (₹15)</a></li>
              <li><a href="#snacks" className="hover:text-brand-orange transition-colors">Mushroom & Egg Puffs (₹25)</a></li>
            </ul>
          </div>

          {/* Outlets in Tiruppur */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Our 3 Branches
            </h4>
            <ul className="space-y-2.5">
              {BRANCHES_DATA.map((b) => (
                <li key={b.id} className="text-[11px]">
                  <div className="font-semibold text-white">{b.name}</div>
                  <div className="text-gray-500">{b.locality}</div>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Client Pitch & Demo Protection Callout Box */}
        <div className="mt-12 pt-8 border-t border-charcoal-800/80">
          <div className="p-4 rounded-xl bg-charcoal-900 border border-charcoal-800 text-[11px] text-gray-400 space-y-1.5">
            <div className="flex items-center gap-2 font-semibold text-brand-cream">
              <Shield className="w-4 h-4 text-brand-orange shrink-0" />
              <span>Independent Commercial Web Proposal Notice</span>
            </div>
            <p className="leading-relaxed">
              This website prototype is an independent presentation developed to demonstrate commercial website capabilities for <strong className="text-white">ClusTea, Tiruppur</strong>. It is not an officially commissioned web property until approved by the business owner. Unverified contact numbers and biscuit pricing are kept strictly provisional and ready for customization.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-charcoal-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <div>
            © {currentYear} ClusTea Prototype. Designed with passion for Tiruppur’s tea culture.
          </div>

          <div className="flex items-center gap-4 text-gray-400">
            <span>React + Vite + Tailwind CSS</span>
            <span>•</span>
            <span>Vercel Compatible</span>
          </div>
        </div>

      </div>

    </footer>
  );
}

