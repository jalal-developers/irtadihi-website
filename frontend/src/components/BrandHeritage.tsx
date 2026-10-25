'use client';

import React from 'react';
import { MainLogo } from '@/components/MainLogo';
import { ScrollReveal } from '@/components/ScrollReveal';

export function BrandHeritage() {
  return (
    <section id="heritage" className="heritage-section" aria-label="Brand Philosophy">
      <div className="heritage-inner">
        {/* Vertical Bronze Rule & Eyebrow */}
        <ScrollReveal direction="top" duration={700}>
          <div className="vertical-bronze-rule" aria-hidden="true" />
          <span className="eyebrow">The Philosophy of ارتديه</span>
        </ScrollReveal>

        {/* Centered Main Calligraphic Brand Mark */}
        <ScrollReveal direction="zoom" duration={800} delay={100} className="my-8 flex justify-center">
          <MainLogo size="lg" />
        </ScrollReveal>

        {/* Editorial House Narrative Quote */}
        <ScrollReveal direction="bottom" duration={850} delay={200}>
          <blockquote className="heritage-quote">
            &ldquo;Irtadihi — <em className="font-serif not-italic text-[var(--accent-primary)]">&lsquo;Wear It&rsquo;</em> in Arabic — is an invitation to inhabit clothing rather than merely put it on. In an era of disposable velocity, we cut garments that breathe quietly, drape with architectural weight, and age toward character.&rdquo;
          </blockquote>
        </ScrollReveal>

        <ScrollReveal direction="right" duration={700} delay={300}>
          <p className="heritage-signature">
            — The Atelier Founders, Autumn / Winter Atelier 2026
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
