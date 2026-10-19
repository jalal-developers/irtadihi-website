'use client';

import React, { useState } from 'react';
import { useStore } from '@/lib/store';
import { COMING_SOON_COPY } from '@/lib/data';

interface ComingSoonViewProps {
  category: string;
}

export function ComingSoonView({ category }: ComingSoonViewProps) {
  const { showToast } = useStore();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const info = COMING_SOON_COPY[category] || {
    heading: `${category} Atelier`,
    body: 'This capsule is currently in development at our small-batch atelier. Sign up below for private trunk show access and release dispatch.',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address');
      return;
    }
    setSubmitted(true);
    showToast(`You have joined the private waitlist for ${category}`);
    setEmail('');
  };

  return (
    <div className="coming-soon-panel" role="region" aria-label={`Coming soon for ${category}`}>
      <div className="coming-soon-badge-row">
        <span className="eyebrow">Private Atelier Release</span>
        <span className="bronze-dot">•</span>
        <span className="text-xs uppercase tracking-widest text-[var(--accent-primary)] font-medium">
          In Development
        </span>
      </div>

      <h3 className="heading-section coming-soon-title">{info.heading}</h3>
      <p className="coming-soon-body">{info.body}</p>

      {/* Interactive Email Waitlist Capture */}
      <div className="coming-soon-waitlist">
        {submitted ? (
          <div className="waitlist-success-banner">
            <svg
              className="w-5 h-5 text-[var(--accent-primary)]"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <p>
              Your invitation has been reserved. You will receive private trunk show access prior to public release.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="waitlist-form">
            <label htmlFor="waitlist-email-input" className="sr-only">
              Email Address for Private Waitlist
            </label>
            <input
              id="waitlist-email-input"
              type="email"
              placeholder="Enter your email for private waitlist..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="waitlist-input"
              required
            />
            <button type="submit" className="btn btn-primary">
              Join Waitlist
            </button>
          </form>
        )}
        <p className="waitlist-note">
          Complimentary priority allocation • No spam • Direct from the atelier desk
        </p>
      </div>
    </div>
  );
}
