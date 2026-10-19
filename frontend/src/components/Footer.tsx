'use client';

import React, { useState } from 'react';
import { useStore } from '@/lib/store';
import { MainLogo } from '@/components/MainLogo';

export function Footer() {
  const { state, showToast } = useStore();
  const isDark = state.theme === 'dark';
  const [email, setEmail] = useState('');

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address');
      return;
    }
    showToast('Welcome to the Irtadihi Private Atelier Dispatch');
    setEmail('');
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-grid">
        {/* Col 1: 5fr - Brand Heritage & Philosophy */}
        <div className="footer-brand-col">
          <div className="mb-4 inline-block">
            <MainLogo size="sm" variant="alabaster" />
          </div>
          <p className="footer-tagline">
            Classic minimalist tailoring crafted in Warm Alabaster, Deep Umber Charcoal, and Antique Bronze Gold.
          </p>
        </div>

        {/* Col 2: 2fr - Atelier */}
        <div>
          <h4 className="footer-col-title">Atelier</h4>
          <ul className="footer-links">
            <li>
              <button type="button" onClick={() => scrollTo('collection')}>
                Autumn / Winter 2026
              </button>
            </li>
            <li>
              <button type="button" onClick={() => scrollTo('collection')}>
                Tailored Outerwear
              </button>
            </li>
            <li>
              <button type="button" onClick={() => scrollTo('collection')}>
                Mulberry Silk Capsule
              </button>
            </li>
            <li>
              <button type="button" onClick={() => scrollTo('heritage')}>
                House Philosophy
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: 2fr - Client Care */}
        <div>
          <h4 className="footer-col-title">Client Care</h4>
          <ul className="footer-links">
            <li>
              <button type="button" onClick={() => scrollTo('heritage')}>
                Bespoke Sizing &amp; Fit
              </button>
            </li>
            <li>
              <button type="button" onClick={() => scrollTo('heritage')}>
                Fabric Care &amp; Longevity
              </button>
            </li>
            <li>
              <button type="button" onClick={() => scrollTo('heritage')}>
                Complimentary Delivery
              </button>
            </li>
            <li>
              <a href="mailto:concierge@irtadihi.com">
                Private Inquiries
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: 3fr - Private Dispatch */}
        <div>
          <h4 className="footer-col-title">Private Dispatch</h4>
          <p style={{ fontSize: '0.8125rem', color: 'rgba(251, 250, 246, 0.75)', marginBottom: '16px', lineHeight: 1.6 }}>
            Receive invitations to private trunk shows and seasonal capsule releases.
          </p>
          <form onSubmit={handleNewsletter} className="newsletter-form">
            <label htmlFor="footer-newsletter-input" className="sr-only">
              Email address for atelier newsletter
            </label>
            <div className="newsletter-input-wrap">
              <input
                id="footer-newsletter-input"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-submit">
                Join
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom Section: Copyright & Palette Tokens */}
      <div className="footer-bottom">
        <span>&copy; 2026 IRTADIHI (ارتديه). All Rights Reserved.</span>
        <span>
          Designed with{' '}
          <span className="font-mono text-[var(--irtadihi-bronze)]">#FBFAF6</span> &bull;{' '}
          <span className="font-mono text-[var(--irtadihi-bronze)]">#504D46</span> &bull;{' '}
          <span className="font-mono text-[var(--irtadihi-bronze)]">#9E8C63</span>
        </span>
      </div>
    </footer>
  );
}
