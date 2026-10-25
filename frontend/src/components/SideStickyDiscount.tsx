'use client';

import React, { useState, useEffect } from 'react';
import { useStore } from '@/lib/store';

export function SideStickyDiscount() {
  const { state, openAuthModal } = useStore();
  const [isDismissed, setIsDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const dismissed = sessionStorage.getItem('irtadihi-side-sticky-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDismissed(true);
    sessionStorage.setItem('irtadihi-side-sticky-dismissed', 'true');
  };

  const handleTabClick = () => {
    openAuthModal();
  };

  if (!mounted || isDismissed) {
    return null;
  }

  return (
    <aside
      className="fixed left-0 top-1/2 -translate-y-1/2 z-40 select-none group"
      aria-label="Exclusive 10% Discount Promotion"
    >
      <div className="relative">
        {/* Close Button ("X" cross at the top corner, matching reference screenshot) */}
        <button
          type="button"
          onClick={handleDismiss}
          className="absolute -top-3.5 -right-3.5 z-50 w-6 h-6 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer border border-white/20"
          aria-label="Close 10% discount tab"
          title="Dismiss"
        >
          <svg
            className="w-3 h-3"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          >
            <path d="M2 2l10 10M12 2L2 12" />
          </svg>
        </button>

        {/* Vertical Sticky Tab (with generous padding and margin so text never touches borders) */}
        <button
          type="button"
          onClick={handleTabClick}
          className="flex items-center justify-center px-4 py-8 sm:px-5 sm:py-9 bg-[var(--bg-primary)] text-[var(--text-primary)] border border-l-0 border-[var(--border-hairline)] shadow-[0_6px_28px_rgba(0,0,0,0.14)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-300 hover:translate-x-1 cursor-pointer group-hover:border-[var(--accent-primary)] rounded-r-md"
          style={{
            minWidth: '46px',
            boxSizing: 'border-box',
          }}
          aria-label="Get 10% Off on Login"
        >
          <div
            className="text-[11.5px] sm:text-[12px] font-bold tracking-[0.2em] uppercase whitespace-nowrap"
            style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              padding: '6px 2px',
              margin: '0 auto',
            }}
          >
            {state.discountApplied ? (
              <span className="text-[var(--accent-primary)] font-semibold flex items-center gap-1.5">
                ● 10% Unlocked
              </span>
            ) : (
              <span>Get 10% Off</span>
            )}
          </div>
        </button>
      </div>
    </aside>
  );
}
