'use client';

import React, { useState, useEffect } from 'react';
import { useStore } from '@/lib/store';
import { PRODUCTS, EDITORIAL_ITEMS, type EditorialGridItem } from '@/lib/data';

// ===== Pure Architectural Visual Canvas for Each Tile (Zero Text / Zero Pricing) =====
function CleanEditorialVisual({
  slot,
  isDark,
}: {
  slot: EditorialGridItem['slot'];
  isDark: boolean;
}) {
  const surface = isDark ? '#141412' : '#F4F1EA';
  const silhouette = isDark ? '#23221F' : '#E6E1D6';
  const hairline = '#9E8C63';

  if (slot === 'tall-left') {
    // Tile 1 — Tall Left Runway Drape Silhouette
    return (
      <svg
        viewBox="0 0 600 800"
        className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <rect width="600" height="800" fill={surface} />

        {/* Minimal Architectural Grid Pattern */}
        <defs>
          <pattern id="grid-pattern-tall-clean" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke={hairline} strokeWidth="0.5" opacity="0.1" />
          </pattern>
          <linearGradient id="silhouetteGradTallClean" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isDark ? '#2E2C28' : '#3E3B36'} />
            <stop offset="100%" stopColor={isDark ? '#1C1B19' : '#2A2825'} />
          </linearGradient>
          <radialGradient id="haloGlowTall" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor={hairline} stopOpacity="0.12" />
            <stop offset="100%" stopColor={hairline} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="600" height="800" fill="url(#grid-pattern-tall-clean)" />
        <rect width="600" height="800" fill="url(#haloGlowTall)" />

        {/* Architectural Framing Crosshairs */}
        <g stroke={hairline} strokeWidth="0.8" opacity="0.4">
          <line x1="32" y1="32" x2="48" y2="32" />
          <line x1="32" y1="32" x2="32" y2="48" />
          <line x1="568" y1="32" x2="552" y2="32" />
          <line x1="568" y1="32" x2="568" y2="48" />
          <line x1="32" y1="768" x2="48" y2="768" />
          <line x1="32" y1="768" x2="32" y2="752" />
          <line x1="568" y1="768" x2="552" y2="768" />
          <line x1="568" y1="768" x2="568" y2="752" />
          <circle cx="300" cy="380" r="170" fill="none" strokeDasharray="3 5" opacity="0.2" />
        </g>

        {/* Full-Length High-Fashion Model Silhouette */}
        <g transform="translate(160, 140)">
          {/* Head & Sculptural Hood Drape */}
          <path
            d="M 140 70 C 140 10, 80 10, 80 70 C 60 130, 160 130, 140 70 Z"
            fill={isDark ? '#3D3A35' : '#45423C'}
            stroke={hairline}
            strokeWidth="0.75"
          />
          {/* Dropped-Shoulder Heavyweight Hoodie Torso */}
          <path
            d="M 110 90 C 150 90, 210 130, 240 220 L 200 250 L 190 190 L 195 460 L 45 460 L 50 190 L 40 250 L 0 220 C 30 130, 90 90, 110 90 Z"
            fill="url(#silhouetteGradTallClean)"
            stroke={hairline}
            strokeWidth="0.5"
          />
          {/* Architectural Kangaroo Pocket */}
          <path
            d="M 70 340 L 170 340 L 190 415 L 50 415 Z"
            fill={isDark ? '#232220' : '#33312D'}
            stroke={hairline}
            strokeWidth="0.5"
            opacity="0.7"
          />
        </g>

        {/* Subtle Brand Watermark Calligraphy */}
        <text
          x="300"
          y="720"
          textAnchor="middle"
          fontFamily="var(--font-arabic-calligraphy)"
          fontSize="56"
          fill={hairline}
          opacity="0.22"
        >
          ارتديه
        </text>
      </svg>
    );
  }

  if (slot === 'top-middle') {
    // Tile 2 — Top-Middle Macro Fabric Weave Detail
    return (
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <rect width="400" height="400" fill={surface} />
        <defs>
          <pattern id="weave-pattern-clean" width="18" height="18" patternUnits="userSpaceOnUse">
            <rect width="9" height="9" fill={silhouette} opacity="0.6" />
            <rect x="9" y="9" width="9" height="9" fill={silhouette} opacity="0.6" />
            <path d="M 0 9 L 9 0 M 9 18 L 18 9" stroke={hairline} strokeWidth="0.5" opacity="0.25" />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#weave-pattern-clean)" />

        {/* Diagonal Light Beam */}
        <path d="M -50 450 L 450 -50 L 500 0 L 0 500 Z" fill={hairline} opacity="0.09" />

        {/* Concentric Macro Focus Rings */}
        <circle cx="200" cy="200" r="115" fill="none" stroke={hairline} strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
        <circle cx="200" cy="200" r="75" fill="none" stroke={hairline} strokeWidth="0.8" opacity="0.35" />
        <circle cx="200" cy="200" r="32" fill={hairline} opacity="0.18" />

        {/* Subtle Center Emblem */}
        <circle cx="200" cy="200" r="4" fill={hairline} opacity="0.6" />
      </svg>
    );
  }

  if (slot === 'top-right') {
    // Tile 3 — Top-Right Motion Study Angle
    return (
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <rect width="400" height="400" fill={surface} />

        {/* Motion Arc Lines */}
        <g stroke={hairline} strokeWidth="0.75" fill="none" opacity="0.35">
          <ellipse cx="200" cy="215" rx="145" ry="62" strokeDasharray="3 4" />
          <ellipse cx="200" cy="215" rx="100" ry="42" />
        </g>

        {/* Profile Silhouette in Warm Alabaster Tone */}
        <g transform="translate(110, 75)">
          <path
            d="M 90 40 C 90 0, 50 0, 50 40 C 40 80, 110 80, 90 40 Z"
            fill={isDark ? '#EFECE4' : '#FBFAF6'}
            stroke={hairline}
            strokeWidth="0.8"
          />
          <path
            d="M 65 50 C 95 60, 140 90, 160 160 L 130 180 L 120 135 L 125 285 L 35 285 L 40 135 L 30 180 L 0 160 C 20 90, 45 60, 65 50 Z"
            fill={isDark ? '#DFDACF' : '#EFECE4'}
            stroke={hairline}
            strokeWidth="0.5"
          />
        </g>

        {/* Minimal Film Viewfinder Brackets */}
        <g stroke={hairline} strokeWidth="0.8" opacity="0.45">
          <line x1="24" y1="24" x2="38" y2="24" />
          <line x1="24" y1="24" x2="24" y2="38" />
          <line x1="376" y1="24" x2="362" y2="24" />
          <line x1="376" y1="24" x2="376" y2="38" />
          <line x1="24" y1="376" x2="38" y2="376" />
          <line x1="24" y1="376" x2="24" y2="362" />
          <line x1="376" y1="376" x2="362" y2="376" />
          <line x1="376" y1="376" x2="376" y2="362" />
        </g>
      </svg>
    );
  }

  // Tile 4 — Bottom-Wide Horizon Panorama
  return (
    <svg
      viewBox="0 0 800 400"
      className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <rect width="800" height="400" fill={surface} />

      {/* Panorama Horizon and Golden Ratio Hairlines */}
      <line x1="0" y1="250" x2="800" y2="250" stroke={hairline} strokeWidth="0.75" opacity="0.3" />
      <line x1="494" y1="0" x2="494" y2="400" stroke={hairline} strokeWidth="0.6" strokeDasharray="4 4" opacity="0.25" />

      {/* Model Lookbook Profiles in Harmonious Silhouette */}
      <g transform="translate(190, 85)">
        <path
          d="M 80 50 C 110 50, 150 80, 170 150 L 145 165 L 140 120 L 145 255 L 60 255 L 65 120 L 55 165 L 30 150 C 50 80, 70 50, 80 50 Z"
          fill={isDark ? '#2C2A26' : '#45423C'}
          stroke={hairline}
          strokeWidth="0.5"
        />
      </g>

      <g transform="translate(430, 85)">
        <path
          d="M 80 50 C 110 50, 150 80, 170 150 L 145 165 L 140 120 L 145 255 L 60 255 L 65 120 L 55 165 L 30 150 C 50 80, 70 50, 80 50 Z"
          fill={isDark ? '#EFECE4' : '#FBFAF6'}
          stroke={hairline}
          strokeWidth="0.5"
        />
      </g>

      {/* Atmospheric Arabic Motif Watermark */}
      <text
        x="720"
        y="130"
        textAnchor="end"
        fontFamily="var(--font-arabic-calligraphy)"
        fontSize="64"
        fill={hairline}
        opacity="0.18"
      >
        ارتديه
      </text>
    </svg>
  );
}

// ===== Clean Single Tile Component (Zero Pricing, Zero Details, Zero Broken Icons) =====
function CleanEditorialTile({
  item,
  onOpenProduct,
}: {
  item: EditorialGridItem;
  onOpenProduct?: (productId: string) => void;
}) {
  const { state } = useStore();
  const isDark = state.theme === 'dark';

  const [mediaAvailable, setMediaAvailable] = useState(false);
  const isVideo = item.mediaType === 'video';
  const hasProduct = Boolean(item.productId);

  // Check if real media is available in memory before rendering <img>
  // This completely prevents Chrome from rendering broken image icons or alt text
  useEffect(() => {
    if (!item.src) {
      setMediaAvailable(false);
      return;
    }

    if (item.mediaType === 'image') {
      const testImg = new Image();
      testImg.src = item.src;
      testImg.onload = () => setMediaAvailable(true);
      testImg.onerror = () => setMediaAvailable(false);
    }
  }, [item.src, item.mediaType]);

  const handleTileClick = () => {
    if (item.productId && onOpenProduct) {
      onOpenProduct(item.productId);
    }
  };

  // Asymmetric Geometry Classes:
  // Tile 1: Left tall (spans 50% width and 2 rows on desktop)
  // Tile 2: Top-middle cell
  // Tile 3: Top-right cell
  // Tile 4: Bottom-wide panorama
  const slotClasses = {
    'tall-left':
      'col-span-12 aspect-[4/5] lg:col-span-6 lg:row-span-2 lg:aspect-auto lg:h-full lg:w-full',
    'top-middle':
      'col-span-6 aspect-square lg:col-span-3 lg:row-span-1 lg:aspect-auto lg:h-full lg:w-full',
    'top-right':
      'col-span-6 aspect-square lg:col-span-3 lg:row-span-1 lg:aspect-auto lg:h-full lg:w-full',
    'bottom-wide':
      'col-span-12 aspect-[16/10] lg:col-span-6 lg:row-span-1 lg:aspect-auto lg:h-full lg:w-full',
  }[item.slot];

  return (
    <div
      onClick={handleTileClick}
      className={`group relative overflow-hidden rounded-none border border-[#E6E1D6] dark:border-[#262522] hover:border-[#9E8C63] dark:hover:border-[#9E8C63] transition-colors duration-400 bg-[var(--bg-subtle)] select-none h-full w-full ${slotClasses} ${
        hasProduct ? 'cursor-pointer' : ''
      }`}
      role={hasProduct ? 'button' : undefined}
      tabIndex={hasProduct ? 0 : undefined}
      onKeyDown={(e) => {
        if (hasProduct && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          handleTileClick();
        }
      }}
    >
      {/* Media Layer: Pure visuals without broken icons or text */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-[var(--bg-subtle)]">
        {mediaAvailable ? (
          isVideo ? (
            <video
              src={item.src}
              poster={item.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onError={() => setMediaAvailable(false)}
              className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
            />
          ) : (
            <img
              src={item.src}
              alt=""
              loading="lazy"
              onError={() => setMediaAvailable(false)}
              className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
            />
          )
        ) : (
          <CleanEditorialVisual slot={item.slot} isDark={isDark} />
        )}
      </div>

      {/* Subtle hover vignette effect */}
      <div
        className="absolute inset-0 pointer-events-none bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors duration-500"
        aria-hidden="true"
      />
    </div>
  );
}

// ===== Main Editorial Media Grid Section (True Viewport Screen-Fit & Full Width) =====
export function EditorialMediaGrid() {
  const { openPdp } = useStore();

  const handleOpenProduct = (productId: string) => {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (product) {
      openPdp(product);
    }
  };

  return (
    <section
      id="editorial-archive"
      className="editorial-media-section w-full lg:h-[calc(100vh-82px)] lg:min-h-[calc(100vh-82px)] lg:max-h-[calc(100vh-82px)] flex flex-col justify-between px-3 sm:px-6 md:px-8 py-2.5 sm:py-3 border-t border-b border-[var(--border-hairline)] bg-[var(--bg-primary)] transition-colors duration-400 box-border overflow-hidden scroll-mt-[82px]"
      aria-label="Editorial Visual Archive"
    >
      {/* Asymmetric 4-Tile Bento Media Grid — Proportionally Fills 100% of Screen Viewport */}
      <div
        className="w-full h-full flex-1 min-h-0 grid grid-cols-12 lg:grid-rows-2 gap-2.5 sm:gap-3"
        role="region"
        aria-label="Editorial Media Mosaic"
      >
        {EDITORIAL_ITEMS.map((item) => (
          <CleanEditorialTile
            key={item.id}
            item={item}
            onOpenProduct={handleOpenProduct}
          />
        ))}
      </div>
    </section>
  );
}
