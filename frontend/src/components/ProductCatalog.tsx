'use client';

import React, { useState, useMemo } from 'react';
import type { ProductCategory, SortOption } from '@/lib/data';
import { PRODUCTS, CATEGORIES } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';
import { ComingSoonView } from '@/components/ComingSoonView';
import { ScrollReveal, type RevealDirection } from '@/components/ScrollReveal';

interface ProductCatalogProps {
  selectedCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
}

export function ProductCatalog({
  selectedCategory,
  onSelectCategory,
}: ProductCatalogProps) {
  const [sortOption, setSortOption] = useState<SortOption>('Featured');
  const [gridCols, setGridCols] = useState<2 | 3>(3);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (selectedCategory === 'Hoodies') {
      list = list.filter((p) => p.category === 'Hoodies');
    } else if (selectedCategory === 'Sweatshirts') {
      list = list.filter((p) => p.category === 'Sweatshirts');
    }

    if (sortOption === 'Price: Low to High') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'Price: High to Low') {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [selectedCategory, sortOption]);

  const isComingSoonCategory =
    selectedCategory === 'Outerwear' ||
    selectedCategory === 'Silk & Drape' ||
    selectedCategory === 'Tailored Separates';

  const [sortOpen, setSortOpen] = useState(false);
  const sortRef = React.useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  React.useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setSortOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section id="collection" className="collection-section" aria-label="Curated Wardrobe">
      {/* Section Header */}
      <ScrollReveal direction="top" duration={800} className="section-header-centered">
        <span className="eyebrow">Curated Wardrobe</span>
        <h2 className="heading-section">Architectural Essentials</h2>
        <p className="max-w-2xl mx-auto text-base text-[var(--text-secondary)]">
          Every garment is cut in limited batches from 380gsm GOTS organic cotton fleece and 320gsm French terry—tailored with dropped shoulders and weighted hemlines to hold form without stiffness.
        </p>
      </ScrollReveal>

      {/* Filter & Sort Bar */}
      <ScrollReveal direction="bottom" duration={700} delay={100} className="filter-strip">
        {/* Category Tabs */}
        <div className="filter-tabs" role="tablist" aria-label="Product categories">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.label;
            return (
              <button
                key={cat.label}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`filter-tab ${isActive ? 'active' : ''} inline-flex items-center`}
                onClick={() => onSelectCategory(cat.label)}
              >
                <span>{cat.label}</span>
                {cat.comingSoon && (
                  <span className="coming-soon-badge select-none">
                    Soon
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Controls Right: Custom Luxury Sort Dropdown & 2/3 Col Switcher */}
        <div className="filter-controls-right flex items-center gap-4 sm:gap-6">
          {/* Custom Luxury Sort Dropdown */}
          <div className="relative" ref={sortRef}>
            <button
              type="button"
              onClick={() => setSortOpen(!sortOpen)}
              className="inline-flex items-center gap-2 h-8 px-3 border border-[var(--border-hairline)] hover:border-[var(--accent-primary)] bg-[var(--bg-subtle)]/60 hover:bg-[var(--bg-subtle)] text-[10.5px] font-medium tracking-[0.15em] uppercase text-[var(--text-primary)] transition-all cursor-pointer select-none"
              aria-expanded={sortOpen}
              aria-haspopup="listbox"
              aria-label={`Sort products, currently ${sortOption}`}
            >
              <span className="text-[var(--text-muted)]">Sort:</span>
              <span className="font-semibold text-[var(--text-primary)]">{sortOption}</span>
              <svg
                className={`w-3 h-3 text-[var(--accent-primary)] transition-transform duration-200 ${
                  sortOpen ? 'rotate-180' : ''
                }`}
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M4 6l4 4 4-4" />
              </svg>
            </button>

            {sortOpen && (
              <div
                className="absolute right-0 top-full mt-1.5 w-52 bg-[var(--bg-primary)] border border-[var(--border-hairline)] shadow-xl z-50 py-1 backdrop-blur-md"
                role="listbox"
                aria-label="Sort options"
              >
                {(['Featured', 'Price: Low to High', 'Price: High to Low'] as SortOption[]).map((opt) => {
                  const isSelected = sortOption === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => {
                        setSortOption(opt);
                        setSortOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2.5 text-[10.5px] font-medium tracking-[0.14em] uppercase flex items-center justify-between transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-[var(--bg-subtle)] text-[var(--accent-primary)] font-semibold'
                          : 'text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]/70 hover:text-[var(--accent-primary)]'
                      }`}
                    >
                      <span>{opt}</span>
                      {isSelected && (
                        <span className="text-[var(--accent-primary)] text-xs font-bold" aria-hidden="true">
                          ✓
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Grid View Switcher */}
          {!isComingSoonCategory && (
            <div className="grid-switcher" role="group" aria-label="Grid layout switcher">
              <span className="grid-switcher-label hidden sm:inline text-[10.5px] tracking-[0.14em] uppercase text-[var(--text-muted)]">
                View:
              </span>
              <button
                type="button"
                className={`grid-switch-btn ${gridCols === 3 ? 'active' : ''}`}
                onClick={() => setGridCols(3)}
                aria-label="3 columns grid"
              >
                3 Col
              </button>
              <button
                type="button"
                className={`grid-switch-btn ${gridCols === 2 ? 'active' : ''}`}
                onClick={() => setGridCols(2)}
                aria-label="2 columns grid"
              >
                2 Col
              </button>
            </div>
          )}
        </div>
      </ScrollReveal>

      {/* Main Content: Either Product Grid or Coming Soon View */}
      {isComingSoonCategory ? (
        <ComingSoonView category={selectedCategory} />
      ) : (
        <div
          className={`product-grid ${gridCols === 2 ? 'cols-2' : ''}`}
          id="productGrid"
        >
          {filteredProducts.map((product, idx) => {
            const directions: RevealDirection[] = ['left', 'bottom', 'right'];
            const dir = directions[idx % 3];
            const delay = (idx % 3) * 120;
            return (
              <ScrollReveal
                key={product.id}
                direction={dir}
                delay={delay}
                duration={750}
              >
                <ProductCard product={product} />
              </ScrollReveal>
            );
          })}
        </div>
      )}
    </section>
  );
}
