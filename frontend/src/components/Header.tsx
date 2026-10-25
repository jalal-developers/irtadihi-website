'use client';

import React from 'react';
import { useStore } from '@/lib/store';
import { MainLogo } from '@/components/MainLogo';
import type { ProductCategory } from '@/lib/data';

interface HeaderProps {
  onSelectCategory?: (cat: ProductCategory) => void;
}

export function Header({ onSelectCategory }: HeaderProps) {
  const { state, setTheme, openBag, openMobileNav, bagCount } = useStore();
  const isDark = state.theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
    cat?: ProductCategory
  ) => {
    e.preventDefault();
    if (cat && onSelectCategory) {
      onSelectCategory(cat);
    }
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. Announcement Micro-Bar with Infinite Smooth Marquee Loop */}
      <div className="announcement-bar" role="region" aria-label="Announcement">
        <div className="announcement-ticker-track">
          <div className="announcement-ticker-item">
            <span>Complimentary Express Shipping on All Orders</span>
            <span className="bronze-dot" aria-hidden="true">•</span>
            <span>Autumn / Winter Atelier Collection</span>
            <span className="bronze-dot" aria-hidden="true">•</span>
            <span>Handcrafted in Limited Atelier Batches</span>
            <span className="bronze-dot" aria-hidden="true">•</span>
            <span>21-Day Complimentary Atelier Returns</span>
            <span className="bronze-dot" aria-hidden="true">•</span>
          </div>
          <div className="announcement-ticker-item" aria-hidden="true">
            <span>Complimentary Express Shipping on All Orders</span>
            <span className="bronze-dot" aria-hidden="true">•</span>
            <span>Autumn / Winter Atelier Collection</span>
            <span className="bronze-dot" aria-hidden="true">•</span>
            <span>Handcrafted in Limited Atelier Batches</span>
            <span className="bronze-dot" aria-hidden="true">•</span>
            <span>21-Day Complimentary Atelier Returns</span>
            <span className="bronze-dot" aria-hidden="true">•</span>
          </div>
        </div>
      </div>

      {/* 2. Sticky Navigation Header (style.md: 82px height, blur(12px), border-bottom 1px solid Hairline) */}
      <header className="site-header relative" role="banner">
        <div className="header-inner">
          
          {/* Left Column: Navigation Links (Desktop) & Menu Trigger (Mobile) */}
          <div className="flex items-center justify-start z-30">
            {/* Mobile Hamburger Button (3 distinct luxury bars) */}
            <button
              type="button"
              className="lg:hidden p-2 -ml-2 text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors flex flex-col justify-center items-center gap-[5px] w-10 h-10 cursor-pointer"
              onClick={openMobileNav}
              aria-label="Open Navigation Menu"
            >
              <span className="w-5 h-[1.5px] bg-current transition-all block" />
              <span className="w-5 h-[1.5px] bg-current transition-all block" />
              <span className="w-5 h-[1.5px] bg-current transition-all block" />
            </button>

            {/* Desktop Navigation (style.md: 0.75rem, 500 weight, 0.16em tracking, uppercase, Bronze hover with 350ms line reveal) */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7" aria-label="Primary Navigation">
              <a
                href="#collection"
                className="nav-link"
                onClick={(e) => handleNavClick(e, 'collection', 'All')}
              >
                Collections
              </a>
              <a
                href="#collection"
                className="nav-link"
                onClick={(e) => handleNavClick(e, 'collection', 'Hoodies')}
              >
                Hoodies
              </a>
              <a
                href="#collection"
                className="nav-link"
                onClick={(e) => handleNavClick(e, 'collection', 'Sweatshirts')}
              >
                Sweatshirts
              </a>
              <a
                href="#heritage"
                className="nav-link"
                onClick={(e) => handleNavClick(e, 'heritage')}
              >
                Philosophy
              </a>
            </nav>
          </div>

          {/* Center Column: Main Calligraphic Logo — Locked Dead Center in Viewport (style.md: scales to 1.03 over 400ms on hover) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-20 flex items-center justify-center">
            <a
              href="#hero"
              className="group block py-1 focus:outline-none transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
              aria-label="IRTADIHI Home"
              onClick={(e) => handleNavClick(e, 'hero')}
            >
              <MainLogo size="md" />
            </a>
          </div>

          {/* Right Column: Theme Toggle & Shopping Bag */}
          <div className="flex items-center justify-end gap-3 sm:gap-4 z-10 max-w-[calc(50%-100px)]">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex items-center gap-2 h-9 px-3 border border-[var(--border-hairline)] hover:border-[var(--accent-primary)] text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-all bg-[var(--bg-subtle)]/60 backdrop-blur-sm cursor-pointer select-none rounded-[var(--radius-sharp)]"
              aria-label={isDark ? 'Switch to Light Atelier Theme' : 'Switch to Dark High-Contrast Theme'}
              title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            >
              {isDark ? (
                <svg
                  className="w-3.5 h-3.5 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="M4.93 4.93l1.41 1.41" />
                  <path d="M17.66 17.66l1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="M6.34 17.66l-1.41 1.41" />
                  <path d="M19.07 4.93l-1.41 1.41" />
                </svg>
              ) : (
                <svg
                  className="w-3.5 h-3.5 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
              <span className="text-[11px] font-medium tracking-[0.16em] uppercase hidden sm:inline">
                {isDark ? 'Alabaster' : 'Obsidian'}
              </span>
            </button>

            {/* Shopping Bag Trigger Button */}
            <button
              type="button"
              onClick={openBag}
              className="inline-flex items-center gap-2 h-9 px-3 border border-[var(--border-hairline)] hover:border-[var(--accent-primary)] text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-all bg-[var(--bg-subtle)]/60 backdrop-blur-sm cursor-pointer select-none rounded-[var(--radius-sharp)]"
              aria-label={`Shopping Bag, ${bagCount} items`}
            >
              <svg
                className="w-3.5 h-3.5 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="text-[11px] font-medium tracking-[0.16em] uppercase hidden sm:inline">
                Bag
              </span>
              <span
                className="bag-count-pill"
                aria-live="polite"
              >
                {bagCount}
              </span>
            </button>
          </div>

        </div>
      </header>
    </>
  );
}
