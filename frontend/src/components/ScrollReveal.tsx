'use client';

import React, { useEffect, useRef, useState, type ReactNode } from 'react';

export type RevealDirection = 'left' | 'right' | 'bottom' | 'top' | 'zoom';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: RevealDirection;
  delay?: number; // milliseconds
  duration?: number; // milliseconds
  className?: string;
  threshold?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  direction = 'bottom',
  delay = 0,
  duration = 750,
  className = '',
  threshold = 0.15,
  once = true,
}: ScrollRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if element is already in viewport on mount (e.g. Hero section)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsRevealed(true);
      if (once) return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          if (once) {
            observer.unobserve(el);
          }
        } else if (!once) {
          setIsRevealed(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  // Initial transform state before revealing
  const getTransformStyles = (): { transform: string; opacity: number } => {
    if (isRevealed) {
      return { transform: 'translate3d(0, 0, 0) scale(1)', opacity: 1 };
    }

    switch (direction) {
      case 'left':
        return { transform: 'translate3d(-48px, 0, 0) scale(0.98)', opacity: 0 };
      case 'right':
        return { transform: 'translate3d(48px, 0, 0) scale(0.98)', opacity: 0 };
      case 'top':
        return { transform: 'translate3d(0, -36px, 0) scale(0.98)', opacity: 0 };
      case 'zoom':
        return { transform: 'translate3d(0, 16px, 0) scale(0.92)', opacity: 0 };
      case 'bottom':
      default:
        return { transform: 'translate3d(0, 48px, 0) scale(0.98)', opacity: 0 };
    }
  };

  const styleTransform = getTransformStyles();

  return (
    <div
      ref={ref}
      className={`scroll-reveal-container ${className}`}
      style={{
        ...styleTransform,
        transitionProperty: 'transform, opacity',
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </div>
  );
}
