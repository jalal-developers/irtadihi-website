'use client';

import React, { useState, useEffect } from 'react';
import { StoreProvider, useStore } from '@/lib/store';
import type { ProductCategory } from '@/lib/data';
import { Header } from '@/components/Header';
import { MobileNav } from '@/components/MobileNav';
import { Hero } from '@/components/Hero';
import { EditorialMediaGrid } from '@/components/EditorialMediaGrid';
import { ProductCatalog } from '@/components/ProductCatalog';
import { BrandHeritage } from '@/components/BrandHeritage';
import { Footer } from '@/components/Footer';
import { PDPModal } from '@/components/PDPModal';
import { BagDrawer } from '@/components/BagDrawer';
import { Toast } from '@/components/Toast';
import { SideStickyDiscount } from '@/components/SideStickyDiscount';
import { AuthModal } from '@/components/AuthModal';

function AtelierFlagship() {
  const { openAuthModal, state } = useStore();
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All');

  // Automatically pop up 10% off modal after 20 seconds on landing
  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('irtadihi-popup-shown');
    if (!alreadyShown && !state.user) {
      const timer = setTimeout(() => {
        const userSaved = localStorage.getItem('irtadihi-user');
        if (!userSaved) {
          openAuthModal();
          sessionStorage.setItem('irtadihi-popup-shown', 'true');
        }
      }, 20000); // exactly 20 seconds

      return () => clearTimeout(timer);
    }
  }, [openAuthModal, state.user]);

  const handleExploreCollection = (cat?: ProductCategory) => {
    if (cat) {
      setSelectedCategory(cat);
    }
    const target = document.getElementById('collection');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreHeritage = () => {
    const target = document.getElementById('heritage');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-400">
      {/* Sticky Header with Adaptive SVG Logo & Theme Toggle */}
      <Header onSelectCategory={setSelectedCategory} />

      {/* Slide-out Mobile Navigation Drawer */}
      <MobileNav onSelectCategory={setSelectedCategory} />

      {/* Main Flagship Content */}
      <main id="main-content" className="flex-1">
        {/* Editorial Hero Section */}
        <Hero
          onExploreCollection={handleExploreCollection}
          onExploreHeritage={handleExploreHeritage}
        />

        {/* Asymmetric 4-Tile Editorial Media & Motion Grid */}
        <EditorialMediaGrid />

        {/* Product Catalog with Hoodies/Sweatshirts & Coming Soon Waitlist */}
        <ProductCatalog
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Brand Heritage Interlude */}
        <BrandHeritage />
      </main>

      {/* Luxury Editorial Footer */}
      <Footer />

      {/* Interactive Product Detail Modal (PDP) */}
      <PDPModal />

      {/* Slide-Over Shopping Bag Drawer */}
      <BagDrawer />

      {/* 10% On Login Sticky Left Tab & Modal */}
      <SideStickyDiscount />
      <AuthModal />

      {/* Luxury Toast Notification */}
      <Toast />
    </div>
  );
}

export default function Home() {
  return (
    <StoreProvider>
      <AtelierFlagship />
    </StoreProvider>
  );
}
