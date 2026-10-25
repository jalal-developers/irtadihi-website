'use client';

import React from 'react';
import { useStore } from '@/lib/store';
import { MainLogo } from '@/components/MainLogo';
import type { ProductCategory } from '@/lib/data';

interface MobileNavProps {
  onSelectCategory?: (cat: ProductCategory) => void;
}

export function MobileNav({ onSelectCategory }: MobileNavProps) {
  const { state, closeMobileNav, setTheme } = useStore();
  const isDark = state.theme === 'dark';

  // Close on ESC
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && state.mobileNavOpen) {
        closeMobileNav();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [state.mobileNavOpen, closeMobileNav]);

  if (!state.mobileNavOpen) return null;

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
    cat?: ProductCategory
  ) => {
    e.preventDefault();
    closeMobileNav();
    if (cat && onSelectCategory) {
      onSelectCategory(cat);
    }
    const target = document.getElementById(targetId);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  return (
    <div
      className="mobile-nav-backdrop open"
      onClick={closeMobileNav}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      <aside
        className="mobile-nav-drawer open"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mobile-nav-header">
          <MainLogo size="sm" />
          <button
            type="button"
            className="mobile-close-btn"
            onClick={closeMobileNav}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="mobile-nav-body">
          <ul className="mobile-nav-links">
            <li>
              <a
                href="#collection"
                className="mobile-nav-link"
                onClick={(e) => handleNavClick(e, 'collection', 'All')}
              >
                <span>Collections</span>
                <span className="mobile-nav-sub">AW 2026</span>
              </a>
            </li>
            <li>
              <a
                href="#collection"
                className="mobile-nav-link"
                onClick={(e) => handleNavClick(e, 'collection', 'Hoodies')}
              >
                <span>Hoodies</span>
                <span className="mobile-nav-tag">Active Capsule</span>
              </a>
            </li>
            <li>
              <a
                href="#collection"
                className="mobile-nav-link"
                onClick={(e) => handleNavClick(e, 'collection', 'Sweatshirts')}
              >
                <span>Sweatshirts</span>
                <span className="mobile-nav-tag">Active Capsule</span>
              </a>
            </li>
            <li>
              <a
                href="#collection"
                className="mobile-nav-link"
                onClick={(e) => handleNavClick(e, 'collection', 'Outerwear')}
              >
                <span>Outerwear</span>
                <span className="mobile-nav-badge">Coming Soon</span>
              </a>
            </li>

            <li>
              <a
                href="#heritage"
                className="mobile-nav-link"
                onClick={(e) => handleNavClick(e, 'heritage')}
              >
                <span>Philosophy</span>
                <span className="font-arabic text-[#9E8C63]">ارتديه</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="mobile-nav-footer">
          <div className="mobile-theme-row">
            <span className="text-xs uppercase tracking-widest text-[var(--text-muted)]">
              Atelier Theme
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                className={`theme-pill ${!isDark ? 'active' : ''}`}
                onClick={() => setTheme('light')}
              >
                Light
              </button>
              <button
                type="button"
                className={`theme-pill ${isDark ? 'active' : ''}`}
                onClick={() => setTheme('dark')}
              >
                Dark
              </button>
            </div>
          </div>
          <div className="mobile-atelier-meta">
            <p className="font-serif italic text-sm text-[var(--text-secondary)]">
              &ldquo;Silence in form, warmth in thread.&rdquo;
            </p>
            <p className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider mt-2">
              Limited Edition • Small-Batch Atelier
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
