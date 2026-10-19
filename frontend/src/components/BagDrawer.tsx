'use client';

import React, { useEffect } from 'react';
import { useStore } from '@/lib/store';

export function BagDrawer() {
  const {
    state,
    closeBag,
    updateQty,
    removeFromBag,
    bagTotal,
    bagCount,
    bagFreeShippingProgress,
    showToast,
  } = useStore();

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && state.bagOpen) {
        closeBag();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [state.bagOpen, closeBag]);

  if (!state.bagOpen) return null;

  const handleCheckout = () => {
    if (bagCount === 0) return;
    closeBag();
    showToast('Proceeding to Atelier Secure Checkout...');
  };

  return (
    <div
      className="bag-backdrop open"
      onClick={closeBag}
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Bag Drawer"
    >
      <aside className="bag-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="bag-header">
          <div className="flex items-center gap-2">
            <h3 className="heading-editorial text-xl">Your Shopping Bag</h3>
            <span className="text-sm font-mono text-[var(--accent-primary)]">
              ({bagCount})
            </span>
          </div>
          <button
            type="button"
            className="bag-close-btn"
            onClick={closeBag}
            aria-label="Close Shopping Bag"
          >
            ✕
          </button>
        </div>

        {/* Complimentary Shipping Progress Bar */}
        <div className="shipping-bar-wrap">
          <div className="shipping-text-row">
            <span>
              {bagTotal >= 300 ? (
                <>
                  <strong className="text-[var(--accent-primary)]">Unlocked:</strong>{' '}
                  Complimentary Express Atelier Delivery
                </>
              ) : (
                <>
                  Add{' '}
                  <strong className="price-num font-semibold">
                    ${300 - bagTotal}
                  </strong>{' '}
                  for Complimentary Express Atelier Delivery
                </>
              )}
            </span>
          </div>
          <div
            className="shipping-progress-track"
            role="progressbar"
            aria-valuenow={bagFreeShippingProgress}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="shipping-progress-fill"
              style={{ width: `${bagFreeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Bag Items List */}
        <div className="bag-items">
          {state.bagItems.length === 0 ? (
            <div className="bag-empty-state">
              <p className="font-serif italic text-lg text-[var(--text-secondary)]">
                Your shopping bag is currently empty.
              </p>
              <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mt-2">
                Discover our debut Autumn / Winter Capsule 01
              </p>
              <button
                type="button"
                className="btn btn-secondary mt-6"
                onClick={closeBag}
              >
                Explore Hoodies &amp; Sweatshirts
              </button>
            </div>
          ) : (
            state.bagItems.map((item) => (
              <div
                key={`${item.product.id}-${item.size}-${item.color.name}`}
                className="bag-item"
              >
                {/* Thumb Visual */}
                <div
                  className="bag-item-thumb"
                  style={{ backgroundColor: item.color.hex }}
                >
                  <span className="bag-thumb-label font-arabic text-white/90 text-sm">
                    {item.product.arabicLabel}
                  </span>
                </div>

                {/* Info & Quantity Steppers */}
                <div className="bag-item-info">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h4 className="bag-item-title">{item.product.name}</h4>
                      <p className="bag-item-meta">
                        {item.color.name} • Size {item.size}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="bag-remove-btn"
                      onClick={() =>
                        removeFromBag(item.product.id, item.size, item.color.name)
                      }
                      title="Remove item"
                      aria-label="Remove item"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="bag-qty-row">
                    <div className="qty-stepper" role="group" aria-label="Item quantity">
                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() =>
                          updateQty(item.product.id, item.size, item.color.name, -1)
                        }
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="qty-val price-num">{item.quantity}</span>
                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() =>
                          updateQty(item.product.id, item.size, item.color.name, 1)
                        }
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <span className="bag-item-subtotal price-num">
                      ${item.product.price * item.quantity}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with Subtotal & Checkout */}
        {state.bagItems.length > 0 && (
          <div className="bag-footer">
            <div className="bag-subtotal-row">
              <span className="subtotal-label">Estimated Subtotal</span>
              <strong className="subtotal-num price-num">${bagTotal}</strong>
            </div>

            <p className="bag-note">
              Taxes and complimentary cotton garment packaging included at checkout.
            </p>

            <button
              type="button"
              className="btn btn-primary w-full"
              onClick={handleCheckout}
            >
              Proceed to Atelier Checkout
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
