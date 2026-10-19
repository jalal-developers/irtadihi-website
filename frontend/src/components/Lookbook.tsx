'use client';

import React from 'react';
import { useStore } from '@/lib/store';
import { PRODUCTS } from '@/lib/data';

export function Lookbook() {
  const { addToBag, openBag, showToast, state } = useStore();
  const isDark = state.theme === 'dark';

  const bgGrad0 = isDark ? '#161514' : '#FBFAF6';
  const bgGrad60 = isDark ? '#121110' : '#F4F1EA';
  const bgGrad100 = isDark ? '#0E0D0C' : '#EFECE4';
  const haloColor = isDark ? '#1C1B19' : '#FBFAF6';
  const badgeBg = isDark ? '#141414' : '#FBFAF6';
  const badgeText = isDark ? '#FBFAF6' : '#504D46';

  const handleAddEnsemble = () => {
    const hoodie = PRODUCTS.find((p) => p.id === 'hoodie-001') || PRODUCTS[0];
    const crewneck = PRODUCTS.find((p) => p.id === 'sweatshirt-001') || PRODUCTS[3];

    addToBag(hoodie, 'M', hoodie.colors[0]);
    addToBag(crewneck, 'M', crewneck.colors[0]);
    openBag();
    showToast('Ensemble 01 (Hoodie + Crewneck) added to your Bag');
  };

  return (
    <section id="lookbook" className="lookbook-section" aria-label="Editorial Lookbook">
      <div className="lookbook-grid">
        {/* Left Column: Large Editorial Visual Frame */}
        <div className="lookbook-visual-frame" aria-hidden="true">
          <svg
            viewBox="0 0 700 880"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            className="lookbook-svg"
            role="img"
            aria-label="Ensemble 01 Layered Editorial Study"
          >
            <defs>
              <linearGradient id="lookbookBg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor={bgGrad0} />
                <stop offset="60%" stopColor={bgGrad60} />
                <stop offset="100%" stopColor={bgGrad100} />
              </linearGradient>
              <linearGradient id="layerDrape" x1="0" y1="0" x2="0.8" y2="1">
                <stop offset="0%" stopColor="#504D46" />
                <stop offset="100%" stopColor="#35332E" />
              </linearGradient>
            </defs>

            {/* Architectural Canvas */}
            <rect width="700" height="880" fill="url(#lookbookBg)" />

            {/* Plinth Lines & Halo Frame */}
            <circle
              cx="350"
              cy="340"
              r="220"
              fill={haloColor}
              stroke="#9E8C63"
              strokeWidth="1.2"
              opacity={isDark ? '0.5' : '0.8'}
            />
            <line x1="90" y1="0" x2="90" y2="880" stroke="#9E8C63" strokeWidth="0.8" opacity="0.3" />
            <line x1="610" y1="0" x2="610" y2="880" stroke="#9E8C63" strokeWidth="0.8" opacity="0.3" />
            <line x1="0" y1="740" x2="700" y2="740" stroke="#9E8C63" strokeWidth="0.8" opacity="0.35" />

            {/* Layered Silhouette Composition */}
            <g transform="translate(110, 80)">
              {/* Outer Layer: Umber Heavyweight Hoodie */}
              <path
                d="M140 180 C200 130, 280 130, 340 180 L440 300 L380 360 L350 270 L370 650 L110 650 L130 270 L100 360 L40 300 Z"
                fill="url(#layerDrape)"
              />
              {/* Inner Layer Peeking: Warm Alabaster Crewneck Collar */}
              <ellipse
                cx="240"
                cy="195"
                rx="48"
                ry="24"
                fill={isDark ? '#262422' : '#FBFAF6'}
                stroke="#9E8C63"
                strokeWidth="2"
              />
              {/* Hood Volume Drape */}
              <path
                d="M170 170 C170 80, 310 80, 310 170 C290 230, 190 230, 170 170 Z"
                fill="#3D3A36"
                stroke="#9E8C63"
                strokeWidth="1"
              />
              {/* Antique Bronze Thread Highlight */}
              <path
                d="M210 320 Q 240 300, 270 320"
                fill="none"
                stroke="#9E8C63"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </g>

            {/* Lookbook Badge Tag */}
            <g transform="translate(40, 800)">
              <rect x="0" y="0" width="180" height="36" fill={badgeBg} stroke="#9E8C63" strokeWidth="1" />
              <text
                x="90"
                y="23"
                textAnchor="middle"
                fontFamily="var(--font-sans)"
                fontSize="11"
                fontWeight="600"
                fill={badgeText}
                letterSpacing="2"
              >
                ENSEMBLE 01 / AW26
              </text>
            </g>
          </svg>
        </div>

        {/* Right Column: Sticky Narrative & Shop Ensemble Card */}
        <div className="lookbook-narrative-col">
          <div className="lookbook-sticky-content">
            <span className="eyebrow">Lookbook Split — Ensemble 01</span>
            <h2 className="heading-section lookbook-title">
              Layering in Pure Form
            </h2>

            <p className="lookbook-description">
              Designed as an acoustic dampener to cold air. The Architectural Crewneck forms the interior foundation in brushed French terry, crowned by the Umber Heavyweight Hoodie cut with dropped shoulders to accommodate the layered drape without bulk.
            </p>

            <ul className="lookbook-specs">
              <li>
                <strong className="text-[var(--text-primary)]">Outerwear Layer:</strong>{' '}
                Umber Heavyweight Hoodie ($285)
              </li>
              <li>
                <strong className="text-[var(--text-primary)]">Base Layer:</strong>{' '}
                Architectural Crewneck ($245)
              </li>
              <li>
                <strong className="text-[var(--text-primary)]">Fabric Synergy:</strong>{' '}
                380gsm Fleece over 320gsm French Terry
              </li>
            </ul>

            {/* Shop the Ensemble Interactive Card */}
            <div className="shop-ensemble-card">
              <div className="ensemble-header">
                <div>
                  <h3 className="ensemble-name">The Layered Capsule Look</h3>
                  <p className="ensemble-sub">Umber Hoodie + Charcoal Crewneck (Size M)</p>
                </div>
                <div className="ensemble-price price-num">$530</div>
              </div>

              <div className="ensemble-perk">
                <span className="text-[var(--accent-primary)]">✓</span>
                <span>Includes complimentary silk garment envelope &amp; express courier delivery</span>
              </div>

              <button
                type="button"
                className="btn btn-primary w-full"
                onClick={handleAddEnsemble}
              >
                <span>Add Complete Ensemble to Bag</span>
                <span className="price-num">($530)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
