'use client';

import React, { useState, useRef, useEffect } from 'react';
import type { Product, ProductSize, ColorSwatch } from '@/lib/data';
import { useStore } from '@/lib/store';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { openPdp, addToBag, showToast, state } = useStore();
  const isDark = state.theme === 'dark';
  const [activeColor, setActiveColor] = useState<ColorSwatch>(product.colors[0]);
  const [viewAngle, setViewAngle] = useState<'front' | 'back'>('front');
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Desktop hover delay: 150ms debounce before triggering visual transformation
  const handleMouseEnter = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(true);
      setViewAngle('back');
    }, 160);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setIsHovered(false);
    setViewAngle('front');
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const handleCardClick = () => {
    openPdp(product);
  };

  const handleQuickAdd = (e: React.MouseEvent, size: ProductSize) => {
    e.stopPropagation();
    const isOos = product.outOfStockSizes?.includes(size);
    if (isOos) return;
    addToBag(product, size, activeColor);
    showToast(`Added ${product.name} (${size} • ${activeColor.name}) to Bag`);
  };

  const toggleMobileAngle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setViewAngle((prev) => (prev === 'front' ? 'back' : 'front'));
  };

  const handleColorSelect = (e: React.MouseEvent, color: ColorSwatch) => {
    e.stopPropagation();
    setActiveColor(color);
  };

  const cardBg = isDark ? '#141312' : '#F4F1EA';
  const cardCircle = isDark ? '#1A1917' : '#FBFAF6';
  const garmentStroke =
    isDark && activeColor.hex === '#504D46'
      ? 'rgba(158, 140, 99, 0.45)'
      : !isDark && activeColor.hex === '#FBFAF6'
      ? '#E6E1D6'
      : 'none';

  return (
    <article
      className={`product-card ${isHovered ? 'hovered' : ''}`}
      onClick={handleCardClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick();
        }
      }}
      aria-label={`${product.name}, $${product.price}. Click to view details.`}
    >
      {/* Product Media Container */}
      <div className="product-media">
        {/* Badge */}
        {product.badge && <span className="product-badge">{product.badge}</span>}

        {/* Mobile Angle Toggle Pill (style.md: discrete front/back toggle pill) */}
        <button
          type="button"
          className="mobile-toggle-pill"
          onClick={toggleMobileAngle}
          aria-label="Toggle front or back garment view"
          title="Toggle view"
        >
          {viewAngle === 'front' ? 'View Back' : 'View Front'}
        </button>

        {/* Primary Front View (style.md: fades to opacity 0 and scales 1.025 over 450ms) */}
        <div
          className={`product-art-primary ${
            viewAngle === 'back' ? 'opacity-0' : ''
          }`}
        >
          <svg
            viewBox="0 0 450 560"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={`${product.name} Front View`}
          >
            <rect width="450" height="560" fill={cardBg} />
            {/* Ambient Background Circle */}
            <circle
              cx="225"
              cy="210"
              r="110"
              fill={cardCircle}
              stroke="#9E8C63"
              strokeWidth="0.75"
              opacity={isDark ? '0.5' : '0.8'}
            />
            {/* Garment Front Silhouette */}
            <g transform="translate(45, 30)">
              {product.category === 'Hoodies' ? (
                <>
                  {/* Heavyweight Hoodie Silhouette */}
                  <path
                    d="M100 140 C140 100, 220 100, 260 140 L330 220 L290 260 L270 200 L280 440 L80 440 L90 200 L70 260 L30 220 Z"
                    fill={activeColor.hex}
                    stroke={garmentStroke}
                    strokeWidth="1"
                  />
                  {/* Hood */}
                  <path
                    d="M130 130 C130 65, 230 65, 230 130 C220 180, 140 180, 130 130 Z"
                    fill={activeColor.hex}
                    stroke="#9E8C63"
                    strokeWidth="0.8"
                    opacity="0.9"
                  />
                  {/* Kangaroo Pocket */}
                  <path
                    d="M120 320 L240 320 L260 390 L100 390 Z"
                    fill={activeColor.hex}
                    stroke="#9E8C63"
                    strokeWidth="0.6"
                    opacity="0.8"
                  />
                  {/* Tonal Chest Mark */}
                  <path
                    d="M165 220 Q 180 205, 195 220"
                    fill="none"
                    stroke="#9E8C63"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </>
              ) : (
                <>
                  {/* Crewneck / Quarter-Zip Silhouette */}
                  <path
                    d="M90 130 C140 110, 220 110, 270 130 L330 220 L290 255 L270 195 L280 440 L80 440 L90 195 L70 255 L30 220 Z"
                    fill={activeColor.hex}
                    stroke={garmentStroke}
                    strokeWidth="1"
                  />
                  {/* Collar Band */}
                  <ellipse
                    cx="180"
                    cy="130"
                    rx="45"
                    ry="20"
                    fill="none"
                    stroke="#9E8C63"
                    strokeWidth="2"
                  />
                  {/* Chest Mark */}
                  <circle cx="180" cy="210" r="3" fill="#9E8C63" />
                  <path
                    d="M168 220 Q 180 215, 192 220"
                    fill="none"
                    stroke="#9E8C63"
                    strokeWidth="1.5"
                  />
                </>
              )}
            </g>
            {/* Arabic Identifier watermark */}
            <text
              x="225"
              y="520"
              textAnchor="middle"
              fontFamily="var(--font-arabic)"
              fontSize="20"
              fill="#9E8C63"
              opacity="0.85"
            >
              {product.arabicLabel}
            </text>
          </svg>
        </div>

        {/* Secondary Back / Detail View (style.md: fades in to opacity 1 over 450ms) */}
        <div
          className={`product-art-secondary ${
            viewAngle === 'back' ? 'opacity-100' : ''
          }`}
        >
          <svg
            viewBox="0 0 450 560"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={`${product.name} Reverse View`}
          >
            <rect width="450" height="560" fill={cardBg} />
            {/* Reverse Garment Silhouette */}
            <g transform="translate(45, 30)">
              <path
                d="M90 130 C140 110, 220 110, 270 130 L330 220 L290 255 L270 195 L280 440 L80 440 L90 195 L70 255 L30 220 Z"
                fill={activeColor.hex}
                stroke={garmentStroke}
                strokeWidth="1"
                opacity="0.95"
              />
              {/* Back Yoke & Center Seam */}
              <line
                x1="180"
                y1="130"
                x2="180"
                y2="440"
                stroke="#9E8C63"
                strokeWidth="1"
                opacity="0.4"
                strokeDasharray="4 3"
              />
              {/* Back Neck Heritage Label Bar */}
              <rect
                x="140"
                y="155"
                width="80"
                height="22"
                fill={isDark ? '#0A0A0A' : '#FBFAF6'}
                stroke="#9E8C63"
                strokeWidth="0.8"
              />
              <text
                x="180"
                y="170"
                textAnchor="middle"
                fontFamily="var(--font-sans)"
                fontSize="9"
                fontWeight="600"
                fill={isDark ? '#FBFAF6' : '#504D46'}
                letterSpacing="2"
              >
                IRTADIHI
              </text>
            </g>
            <text
              x="225"
              y="520"
              textAnchor="middle"
              fontFamily="var(--font-sans)"
              fontSize="10"
              fill={isDark ? '#8A857B' : '#736F66'}
              letterSpacing="2"
              className="uppercase"
            >
              Architectural Back Drape
            </text>
          </svg>
        </div>

        {/* Quick Add Size Bar (Slides up on desktop hover) */}
        <div
          className={`quick-add-bar ${isHovered ? 'visible' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <span className="quick-add-label">Quick Add Size</span>
          <div className="quick-size-row" role="group" aria-label="Available sizes">
            {(['XS', 'S', 'M', 'L', 'XL'] as ProductSize[]).map((sz) => {
              const isOos = product.outOfStockSizes?.includes(sz);
              return (
                <button
                  key={sz}
                  type="button"
                  className={`quick-size-btn ${isOos ? 'oos' : ''}`}
                  disabled={isOos}
                  onClick={(e) => handleQuickAdd(e, sz)}
                  aria-label={isOos ? `Size ${sz} Out of stock` : `Add size ${sz}`}
                  title={isOos ? 'Out of stock' : `Add size ${sz}`}
                >
                  {sz}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Product Metadata */}
      <div className="product-meta">
        <div className="product-meta-top">
          <h3 className="product-title">{product.name}</h3>
          <span className="product-price price-num">${product.price}</span>
        </div>
        <p className="product-fabric">{product.fabric}</p>

        {/* Color Swatch Dots */}
        <div className="product-swatches" role="group" aria-label="Color options">
          {product.colors.map((c) => {
            const isSelected = activeColor.name === c.name;
            return (
              <button
                key={c.name}
                type="button"
                className={`swatch-dot ${isSelected ? 'active' : ''}`}
                style={{ backgroundColor: c.hex }}
                onClick={(e) => handleColorSelect(e, c)}
                title={c.name}
                aria-label={c.name}
              />
            );
          })}
        </div>
      </div>
    </article>
  );
}
