'use client';

import React from 'react';
import { useStore } from '@/lib/store';

export function Toast() {
  const { state } = useStore();

  if (!state.toast) return null;

  return (
    <div
      className="toast-notice show"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <span className="toast-dot" aria-hidden="true">•</span>
      <span>{state.toast}</span>
    </div>
  );
}
