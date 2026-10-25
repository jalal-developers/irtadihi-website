'use client';

import React, { useState, useEffect } from 'react';
import { useStore } from '@/lib/store';
import type { ProductSize, ColorSwatch } from '@/lib/data';

export function PDPModal() {
  const { state, closePdp, addToBag, showToast } = useStore();
  const product = state.pdpProduct;

  const [activeSize, setActiveSize] = useState<ProductSize>('M');
  const [activeColor, setActiveColor] = useState<ColorSwatch | null>(null);
  const [activeAngle, setActiveAngle] = useState<'front' | 'back'>('front');
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    composition: false,
    care: false,
    shipping: false,
  });

  // Sync default color and size when product changes
  useEffect(() => {
    if (product) {
      setActiveColor(product.colors[0]);
      const availableSize =
        product.sizes.find((s) => !product.outOfStockSizes?.includes(s)) || 'M';
      setActiveSize(availableSize);
      setActiveAngle('front');
      setOpenAccordions({ composition: false, care: false, shipping: false });
    }
  }, [product]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && state.pdpOpen) {
        closePdp();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [state.pdpOpen, closePdp]);

  if (!state.pdpOpen || !product || !activeColor) return null;

  const isOos = product.outOfStockSizes?.includes(activeSize);

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleAdd = () => {
    if (isOos) return;
    addToBag(product, activeSize, activeColor);
    showToast(`Added ${product.name} (${activeSize} • ${activeColor.name}) to Bag`);
    closePdp();
  };

  const isDark = state.theme === 'dark';
  const pdpBg = isDark ? '#141312' : '#F4F1EA';
  const pdpCircle = isDark ? '#1C1B19' : '#FBFAF6';
  const garmentStroke =
    isDark && activeColor.hex === '#504D46'
      ? 'rgba(158, 140, 99, 0.45)'
      : !isDark && activeColor.hex === '#FBFAF6'
      ? '#E6E1D6'
      : 'none';

  return (
    <div
      className="pdp-backdrop open"
      onClick={closePdp}
      role="dialog"
      aria-modal="true"
      aria-label={`${product.name} Overview`}
    >
      <div
        className="pdp-modal shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Exact Top Right Corner Border Box */}
        <button
          type="button"
          className="pdp-close-btn"
          onClick={closePdp}
          aria-label="Close product overview"
        >
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 1l12 12M13 1L1 13" />
          </svg>
        </button>

        {/* Left Column: Visual Showcase (6fr) */}
        <div className="pdp-gallery-col flex flex-col items-center justify-center relative">
          <div className="w-full aspect-[3/4] max-w-sm flex items-center justify-center relative">
            <svg
              viewBox="0 0 500 620"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label={`${product.name} ${activeAngle === 'front' ? 'Front' : 'Back'} View`}
              className="drop-shadow-sm"
            >
              <rect width="500" height="620" fill={pdpBg} />
              <circle
                cx="250"
                cy="230"
                r="130"
                fill={pdpCircle}
                stroke="#9E8C63"
                strokeWidth="0.8"
                opacity={isDark ? '0.6' : '0.8'}
              />

              <g transform="translate(65, 45)">
                {activeAngle === 'front' ? (
                  product.category === 'Hoodies' ? (
                    <>
                      <path
                        d="M100 140 C140 100, 230 100, 270 140 L340 230 L300 270 L280 205 L290 460 L80 460 L90 205 L70 270 L30 230 Z"
                        fill={activeColor.hex}
                        stroke={garmentStroke}
                        strokeWidth="1"
                      />
                      <path
                        d="M135 130 C135 60, 235 60, 235 130 C225 185, 145 185, 135 130 Z"
                        fill={activeColor.hex}
                        stroke="var(--accent-primary)"
                        strokeWidth="1"
                      />
                      <path
                        d="M125 330 L245 330 L265 410 L105 410 Z"
                        fill={activeColor.hex}
                        stroke="var(--accent-primary)"
                        strokeWidth="0.75"
                        opacity="0.8"
                      />
                      <path
                        d="M170 230 Q 185 215, 200 230"
                        fill="none"
                        stroke="var(--accent-primary)"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </>
                  ) : (
                    <>
                      <path
                        d="M100 140 C145 110, 225 110, 270 140 L340 230 L300 265 L280 200 L290 460 L80 460 L90 200 L70 265 L30 230 Z"
                        fill={activeColor.hex}
                        stroke={garmentStroke}
                        strokeWidth="1"
                      />
                      <ellipse
                        cx="185"
                        cy="130"
                        rx="48"
                        ry="22"
                        fill="none"
                        stroke="#9E8C63"
                        strokeWidth="2"
                      />
                      <circle cx="185" cy="215" r="3.5" fill="#9E8C63" />
                    </>
                  )
                ) : (
                  <>
                    <path
                      d="M95 130 C145 110, 225 110, 275 130 L340 230 L300 265 L280 200 L290 460 L80 460 L90 200 L70 265 L30 230 Z"
                      fill={activeColor.hex}
                      stroke={garmentStroke}
                      strokeWidth="1"
                    />
                    <line
                      x1="185"
                      y1="130"
                      x2="185"
                      y2="460"
                      stroke="#9E8C63"
                      strokeWidth="1"
                      opacity="0.4"
                      strokeDasharray="4 3"
                    />
                    <rect
                      x="145"
                      y="155"
                      width="80"
                      height="22"
                      fill={isDark ? '#0A0A0A' : '#FBFAF6'}
                      stroke="#9E8C63"
                      strokeWidth="1"
                    />
                    <text
                      x="185"
                      y="170"
                      textAnchor="middle"
                      fontFamily="var(--font-sans)"
                      fontSize="9"
                      fontWeight="600"
                      fill="var(--text-primary)"
                      letterSpacing="2"
                    >
                      IRTADIHI
                    </text>
                  </>
                )}
              </g>
            </svg>
          </div>

          {/* Front / Back Angle Switcher Controls */}
          <div className="flex items-center gap-2 mt-4 select-none">
            <button
              type="button"
              className={`px-3 py-1 text-[10px] font-medium tracking-[0.14em] uppercase border transition-all cursor-pointer ${
                activeAngle === 'front'
                  ? 'border-[var(--accent-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)] font-semibold'
                  : 'border-[var(--border-hairline)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
              onClick={() => setActiveAngle('front')}
            >
              Front Angle
            </button>
            <button
              type="button"
              className={`px-3 py-1 text-[10px] font-medium tracking-[0.14em] uppercase border transition-all cursor-pointer ${
                activeAngle === 'back'
                  ? 'border-[var(--accent-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)] font-semibold'
                  : 'border-[var(--border-hairline)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
              onClick={() => setActiveAngle('back')}
            >
              Reverse Drape
            </button>
          </div>
        </div>

        {/* Right Column: Product Details & Options (5fr) */}
        <div className="pdp-details-col flex flex-col justify-start relative">
          {/* Eyebrow / Breadcrumb */}
          <div className="eyebrow mb-2 select-none">
            IRTADIHI / {product.category.toUpperCase()}
          </div>

          {/* Product Name Title in Cormorant Garamond */}
          <h2 className="heading-section text-3xl sm:text-4xl lg:text-[2.65rem] leading-[1.12] mb-2">
            {product.name}
          </h2>

          {/* Price */}
          <div className="price-num text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4">
            PKR {product.price.toLocaleString()}
          </div>

          {/* Description */}
          <p className="body-lead mb-6 max-w-prose text-sm md:text-[15px] leading-relaxed">
            {product.description}
          </p>

          {/* Colorway Selection */}
          <div className="mb-6">
            <div className="text-[11px] font-medium tracking-[0.16em] uppercase text-[var(--text-primary)] mb-3 flex items-center gap-1.5 select-none">
              <span>COLORWAY:</span>
              <span className="font-semibold">{activeColor.name.toUpperCase()}</span>
            </div>
            <div className="flex items-center gap-3" role="group" aria-label="Available Colors">
              {product.colors.map((c) => {
                const isSelected = activeColor.name === c.name;
                return (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setActiveColor(c)}
                    className={`pdp-color-swatch ${isSelected ? 'active' : ''}`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                    aria-label={`Select color ${c.name}`}
                  />
                );
              })}
            </div>
          </div>

          {/* Size Selection (style.md: 46x46px, background Alabaster, border 1px solid Hairline, Selected: 1.5px solid Bronze, Charcoal bg, Alabaster text, Out of stock: 0.45 opacity + diagonal strikethrough) */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3 select-none">
              <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-[var(--text-primary)]">
                SELECT SIZE
              </span>
              <button
                type="button"
                className="link-editorial text-[10px] tracking-[0.14em] text-[var(--text-secondary)]"
              >
                TRUE TO TAILORED FIT
              </button>
            </div>
            <div className="size-swatches-grid select-none" role="group" aria-label="Available Sizes">
              {product.sizes.map((sz) => {
                const szOos = product.outOfStockSizes?.includes(sz);
                const isSelected = activeSize === sz;
                return (
                  <button
                    key={sz}
                    type="button"
                    disabled={szOos}
                    onClick={() => setActiveSize(sz)}
                    className={`size-tile ${isSelected ? 'selected' : ''} ${szOos ? 'oos' : ''}`}
                    aria-label={szOos ? `Size ${sz} Out of stock` : `Select size ${sz}`}
                  >
                    <span>{sz}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Add to Bag Button (style.md: Base .btn height 50px, padding 0 32px, gap 10px, 0.75rem, 500, uppercase, sharp 0px radius) */}
          <button
            type="button"
            className="btn btn-primary w-full h-[50px] mb-6"
            disabled={isOos}
            onClick={handleAdd}
          >
            {isOos ? 'SIZE OUT OF STOCK' : 'ADD TO BAG'}
          </button>

          {/* 3 Collapsible Feature Accordions (style.md: 16px 0 padding, 0.75rem, uppercase, 0.14em tracking; Content: 0.875rem Secondary text with 1.65 line height) */}
          <div className="accordion-list">
            {/* 1. Composition */}
            <div className={`accordion-item ${openAccordions.composition ? 'open' : ''}`}>
              <button
                type="button"
                className="accordion-trigger"
                onClick={() => toggleAccordion('composition')}
                aria-expanded={openAccordions.composition}
              >
                <span>COMPOSITION &amp; CRAFTSMANSHIP</span>
                <span className="accordion-icon">
                  {openAccordions.composition ? '−' : '+'}
                </span>
              </button>
              {openAccordions.composition && (
                <div className="accordion-body">
                  <p>{product.composition}</p>
                </div>
              )}
            </div>

            {/* 2. Care */}
            <div className={`accordion-item ${openAccordions.care ? 'open' : ''}`}>
              <button
                type="button"
                className="accordion-trigger"
                onClick={() => toggleAccordion('care')}
                aria-expanded={openAccordions.care}
              >
                <span>CARE &amp; LONGEVITY</span>
                <span className="accordion-icon">
                  {openAccordions.care ? '−' : '+'}
                </span>
              </button>
              {openAccordions.care && (
                <div className="accordion-body">
                  <p>{product.careInstructions}</p>
                </div>
              )}
            </div>

            {/* 3. Shipping & Returns */}
            <div className={`accordion-item ${openAccordions.shipping ? 'open' : ''}`}>
              <button
                type="button"
                className="accordion-trigger"
                onClick={() => toggleAccordion('shipping')}
                aria-expanded={openAccordions.shipping}
              >
                <span>COMPLIMENTARY SHIPPING &amp; RETURNS</span>
                <span className="accordion-icon">
                  {openAccordions.shipping ? '−' : '+'}
                </span>
              </button>
              {openAccordions.shipping && (
                <div className="accordion-body">
                  <p>{product.shipping}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
