'use client';

import React from 'react';
import { useStore } from '@/lib/store';
import type { ProductCategory } from '@/lib/data';

interface HeroProps {
  onExploreCollection: (cat?: ProductCategory) => void;
  onExploreHeritage: () => void;
}

export function Hero({ onExploreCollection, onExploreHeritage }: HeroProps) {
  const { state } = useStore();
  const isDark = state.theme === 'dark';

  const bgGradStart = isDark ? '#161514' : '#F4F1EA';
  const bgGradEnd = isDark ? '#100F0E' : '#EFECE4';
  const circleHalo = isDark ? '#1C1B19' : '#FBFAF6';
  const secondaryBg = isDark ? '#141312' : '#F4F1EA';

  return (
    <section id="hero" className="hero-section" aria-label="Autumn Winter Atelier 2026">
      {/* Left Column: Editorial Narrative & CTAs */}
      <div className="hero-copy-col">
        <div className="flex flex-col gap-2">
          <span className="eyebrow">Autumn / Winter Atelier — 2026</span>
          {/* Prominent, Majestic Arabic Calligraphy Display */}
          <span
            className="hero-arabic-display"
            dir="rtl"
            aria-label="ارتديه (Irtadihi)"
          >
            ارتديه
          </span>
        </div>

        <h1 className="heading-display">
          Silence in Form,
          <br />
          <em className="font-serif italic font-light text-[var(--accent-primary)]">
            Warmth in Thread.
          </em>
        </h1>

        <p className="hero-lead">
          <strong className="text-[var(--text-primary)] font-medium">Irtadihi</strong>{' '}
          (Arabic for &ldquo;Wear It&rdquo;) is an invitation to inhabit clothing rather than merely put it on. Our debut capsule distills architectural drop-shoulder proportions into 380gsm organic fleece hoodies and French terry crewnecks—crafted in Deep Umber Charcoal, Warm Alabaster, and Antique Bronze.
        </p>

        <div className="hero-cta-group">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onExploreCollection('All Pieces')}
          >
            <span>Explore Collection</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={onExploreHeritage}
          >
            <span>The Meaning of Irtadihi</span>
          </button>
        </div>

        {/* 3-Column Trust Metrics Bar */}
        <div className="hero-metrics">
          <div>
            <span className="metric-label">Craftsmanship</span>
            <span className="metric-val">100% Organic</span>
            <span className="block text-[11px] text-[var(--text-muted)] mt-1">
              GOTS Ring-Spun Cotton
            </span>
          </div>
          <div>
            <span className="metric-label">House Palette</span>
            <span className="metric-val">3 Tonal Hues</span>
            <span className="block text-[11px] text-[var(--text-muted)] mt-1">
              Alabaster, Umber, Bronze
            </span>
          </div>
          <div>
            <span className="metric-label">Limited Edition</span>
            <span className="metric-val">Small-Batch</span>
            <span className="block text-[11px] text-[var(--text-muted)] mt-1">
              Numbered Atelier Runs
            </span>
          </div>
        </div>
      </div>

      {/* Right Column: Asymmetric Two-Frame Visual Showcase */}
      <div className="hero-visual-col" aria-hidden="true">
        {/* Primary Frame: Flagship Hoodie Silhouette */}
        <div className="hero-main-frame">
          <svg
            viewBox="0 0 600 750"
            width="100%"
            height="100%"
            className="hero-frame-art"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Flagship Umber Heavyweight Hoodie"
          >
            <defs>
              <linearGradient id="heroBgGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={bgGradStart} />
                <stop offset="100%" stopColor={bgGradEnd} />
              </linearGradient>
              <linearGradient id="hoodieFleeceGrad" x1="0.2" y1="0" x2="0.8" y2="1">
                <stop offset="0%" stopColor="#504D46" />
                <stop offset="50%" stopColor="#3D3A35" />
                <stop offset="100%" stopColor="#2A2825" />
              </linearGradient>
            </defs>

            <rect width="600" height="750" fill="url(#heroBgGrad)" />
            <circle
              cx="300"
              cy="280"
              r="180"
              fill={circleHalo}
              stroke="#9E8C63"
              strokeWidth="1"
              opacity={isDark ? '0.6' : '0.85'}
            />
            <line x1="80" y1="0" x2="80" y2="750" stroke="#9E8C63" strokeWidth="0.8" opacity="0.3" />
            <line x1="520" y1="0" x2="520" y2="750" stroke="#9E8C63" strokeWidth="0.8" opacity="0.3" />
            <line x1="0" y1="620" x2="600" y2="620" stroke="#9E8C63" strokeWidth="0.8" opacity="0.3" />

            <g transform="translate(60, 40)">
              <path
                d="M140 180 C180 140, 300 140, 340 180 L420 280 L370 330 L350 250 L360 560 L120 560 L130 250 L110 330 L60 280 Z"
                fill="url(#hoodieFleeceGrad)"
              />
              <path
                d="M170 170 C170 90, 310 90, 310 170 C300 230, 180 230, 170 170 Z"
                fill="#35332F"
                stroke="#9E8C63"
                strokeWidth="0.75"
              />
              <path
                d="M205 170 C205 130, 275 130, 275 170 Z"
                fill={isDark ? '#242321' : '#FBFAF6'}
                opacity="0.9"
              />
              <path
                d="M170 410 L310 410 L335 490 L145 490 Z"
                fill="#2E2C29"
                stroke="#9E8C63"
                strokeWidth="0.8"
                opacity="0.7"
              />
              <path
                d="M225 280 Q 240 260, 255 280 T 270 275"
                fill="none"
                stroke="#9E8C63"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </g>
          </svg>
          <div className="hero-frame-caption">
            <span className="look-num">Look 01</span>
            <span>Umber Heavyweight Hoodie — $285</span>
          </div>
        </div>

        {/* Secondary Frame: Fleece Weave Study */}
        <div className="hero-secondary-frame">
          <svg
            viewBox="0 0 420 520"
            width="100%"
            height="100%"
            className="hero-frame-art"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Atelier Fabric Weave Study"
          >
            <rect width="420" height="520" fill={secondaryBg} />
            <path
              d="M-20 120 Q 140 60, 260 170 T 440 150 L 440 520 L -20 520 Z"
              fill={isDark ? '#22201D' : '#EFECE4'}
            />
            <path
              d="M-20 220 Q 120 165, 240 260 T 440 240 L 440 520 L -20 520 Z"
              fill="#9E8C63"
              opacity="0.25"
            />
            <path
              d="M-20 320 Q 160 260, 280 350 T 440 330 L 440 520 L -20 520 Z"
              fill={isDark ? '#33302C' : '#504D46'}
              opacity="0.9"
            />
            <path
              d="M40 210 Q 160 140, 280 240 T 390 220"
              fill="none"
              stroke="#9E8C63"
              strokeWidth="2.5"
              strokeDasharray="5 3"
            />
            <circle
              cx="100"
              cy="110"
              r="32"
              fill={circleHalo}
              stroke="#9E8C63"
              strokeWidth="1"
            />
            <text
              x="100"
              y="115"
              textAnchor="middle"
              fontFamily="var(--font-serif)"
              fontSize="12"
              fill={isDark ? '#FBFAF6' : '#504D46'}
              fontStyle="italic"
            >
              380gsm
            </text>
          </svg>
          <div className="hero-frame-caption">
            <span className="look-num">Atelier Study</span>
            <span>Organic Fleece Weave</span>
          </div>
        </div>
      </div>
    </section>
  );
}
