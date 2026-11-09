import React from 'react';
import ClientDemoNotice from './components/ClientDemoNotice';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandIntro from './components/BrandIntro';
import MenuSection from './components/MenuSection';
import SnacksShowcase from './components/SnacksShowcase';
import FlaskEstimator from './components/FlaskEstimator';
import BranchesSection from './components/BranchesSection';
import GallerySection from './components/GallerySection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import LivePitchCustomizer from './components/LivePitchCustomizer';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-charcoal-900 text-white flex flex-col font-sans selection:bg-brand-orange selection:text-white">
      {/* Client Demo Acquisition Banner & Protection Notice */}
      <ClientDemoNotice />

      {/* Main Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* Brand Highlights & Philosophy */}
        <BrandIntro />

        {/* 2. Menu Experience */}
        <MenuSection />

        {/* 3. Snacks & Bakery Showcase */}
        <SnacksShowcase />

        {/* 4. Daily Office & Mill Flask Order Estimator */}
        <FlaskEstimator />

        {/* 5. Our 3 Branches in Tiruppur */}
        <BranchesSection />

        {/* 6. Photo Gallery (Real Photographs) */}
        <GallerySection />

        {/* 7. In-Depth About ClusTea */}
        <AboutSection />

        {/* 8. Contact & Catering Inquiry Form */}
        <ContactSection />
      </main>

      {/* Owner Pitch Mode Live Customizer */}
      <LivePitchCustomizer />

      {/* Footer */}
      <Footer />
    </div>
  );
}
