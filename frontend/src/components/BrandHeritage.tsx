'use client';

import React from 'react';
import { MainLogo } from '@/components/MainLogo';

export function BrandHeritage() {
  return (
    <section id="heritage" className="heritage-section" aria-label="Brand Philosophy">
      <div className="heritage-inner">
        {/* Vertical Bronze Rule */}
        <div className="vertical-bronze-rule" aria-hidden="true" />

        <span className="eyebrow">The Philosophy of ارتديه</span>

        {/* Centered Main Calligraphic Brand Mark */}
        <div className="my-8 flex justify-center">
          <MainLogo size="lg" />
        </div>

        {/* Editorial House Narrative Quote */}
        <blockquote className="heritage-quote">
          &ldquo;Irtadihi — <em className="font-serif not-italic text-[var(--accent-primary)]">&lsquo;Wear It&rsquo;</em> in Arabic — is an invitation to inhabit clothing rather than merely put it on. In an era of disposable velocity, we cut garments that breathe quietly, drape with architectural weight, and age toward character.&rdquo;
        </blockquote>

        <p className="heritage-signature">
          — The Atelier Founders, Autumn / Winter Atelier 2026
        </p>
      </div>
    </section>
  );
}
