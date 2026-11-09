import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { BRANCHES_DATA } from '../data/branchesData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    inquiryType: 'general',
    branch: 'pn-road',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        inquiryType: 'general',
        branch: 'pn-road',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-charcoal-950 border-t border-charcoal-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-xs font-bold text-brand-orange tracking-wider uppercase">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Connect with ClusTea
          </h2>

          <p className="text-sm sm:text-base text-gray-300">
            Have a question, feedback, or need daily office tea flask deliveries for your factory or workplace in Tiruppur?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Branch Reference */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-2xl bg-charcoal-900 border border-charcoal-750 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-brand-orange" />
                <span>Visit Any of Our Outlets</span>
              </h3>

              <div className="space-y-4 pt-1">
                {BRANCHES_DATA.map((b) => (
                  <div key={b.id} className="p-3.5 rounded-xl bg-charcoal-850 border border-charcoal-800 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white">{b.name}</span>
                      <span className="text-[10px] text-emerald-400 font-semibold">Open Daily</span>
                    </div>
                    <p className="text-gray-400">{b.address}</p>
                    <div className="flex items-center justify-between pt-1 text-[11px] text-gray-400">
                      <span className="text-brand-orange font-mono">{b.phone}</span>
                      <span className="text-gray-500">{b.hours}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Corporate / Bulk Order Notice */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-charcoal-850 to-charcoal-900 border border-brand-orange/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-brand-orange uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Textile Mills & Corporate Flask Service</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                We supply piping hot ginger chai and herbal busters in thermal flasks for morning & evening shift breaks across Tiruppur garment units and offices.
              </p>
            </div>
          </div>

          {/* Right Column: Contact & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-charcoal-900 border border-charcoal-750 shadow-2xl relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Thank You for Reaching Out!</h3>
                  <p className="text-xs text-gray-300 max-w-md mx-auto">
                    This message has been captured in the prototype demo system. When officially deployed, this connects straight to ClusTea management WhatsApp and email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-4 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-750 text-white text-xs focus:border-brand-orange focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98430 00000"
                        className="w-full px-4 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-750 text-white text-xs focus:border-brand-orange focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Nature of Inquiry
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-750 text-white text-xs focus:border-brand-orange focus:outline-none"
                      >
                        <option value="general">General Inquiry / Feedback</option>
                        <option value="corporate">Office / Textile Mill Flask Delivery</option>
                        <option value="catering">Event / Wedding Tea Catering</option>
                        <option value="franchise">Franchise / Partnership</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Preferred Branch
                      </label>
                      <select
                        value={formData.branch}
                        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-750 text-white text-xs focus:border-brand-orange focus:outline-none"
                      >
                        <option value="pn-road">PN Road Branch (Laxmi Nagar)</option>
                        <option value="kumaran-road">Kumaran Road Branch</option>
                        <option value="karuvampalayam">Karuvampalayam Branch</option>
                        <option value="any">Any / General</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Your Message or Order Requirement
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you'd like to ask or require (e.g. 50 cups of ginger tea + egg puffs for evening shift)..."
                      className="w-full px-4 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-750 text-white text-xs focus:border-brand-orange focus:outline-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-gray-500">
                      * Live demo form: Ready for WhatsApp/SMS API integration
                    </span>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold transition-all shadow-glow-orange"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

