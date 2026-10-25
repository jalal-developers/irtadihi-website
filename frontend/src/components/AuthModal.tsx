'use client';

import React, { useState } from 'react';
import { useStore } from '@/lib/store';

export function AuthModal() {
  const { state, closeAuthModal, loginUser, logoutUser } = useStore();
  const [isReturningUser, setIsReturningUser] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  if (!state.authModalOpen) return null;

  const isDark = state.theme === 'dark';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!password || password.length < 4) {
      setError('Password must be at least 4 characters.');
      return;
    }
    setError('');
    loginUser(email, name || undefined);
    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <div
      className="auth-modal-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 16px',
        backgroundColor: isDark ? 'rgba(0, 0, 0, 0.82)' : 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        overflowY: 'auto',
      }}
      onClick={closeAuthModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
    >
      {/* Modal Container: Theme-aware luxury card */}
      <div
        className="auth-modal-card"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '540px',
          maxHeight: 'calc(100vh - 48px)',
          overflowY: 'auto',
          backgroundColor: isDark ? '#121212' : '#FFFFFF',
          color: isDark ? '#FBFAF6' : '#1A1917',
          border: isDark ? '1px solid #262522' : '1px solid #E6E1D6',
          borderRadius: '18px',
          padding: '44px 44px 38px 44px',
          boxShadow: isDark
            ? '0 25px 60px -15px rgba(0, 0, 0, 0.85)'
            : '0 25px 60px -15px rgba(0, 0, 0, 0.35)',
          margin: 'auto',
          zIndex: 100000,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button: Delicate, crisp cross icon at top right */}
        <button
          type="button"
          onClick={closeAuthModal}
          className="auth-modal-close-btn"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            color: isDark ? '#71717A' : '#9CA3AF',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'all 0.2s ease',
          }}
          aria-label="Close dialog"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <path d="M1.5 1.5l11 11M12.5 1.5l-11 11" />
          </svg>
        </button>

        {/* Eyebrow: EXCLUSIVE PRIVILEGE */}
        <div style={{ textAlign: 'center', marginBottom: '8px' }}>
          <span
            style={{
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.26em',
              color: isDark ? '#9E8C63' : '#9CA3AF',
              textTransform: 'uppercase',
            }}
          >
            Exclusive Privilege
          </span>
        </div>

        {state.user ? (
          /* User Logged In State */
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <h3
              id="auth-modal-title"
              className="auth-modal-title"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '30px',
                fontWeight: 400,
                color: isDark ? '#FBFAF6' : '#111827',
                marginBottom: '8px',
                lineHeight: 1.2,
              }}
            >
              Welcome, {state.user.name || state.user.email}
            </h3>
            <p
              className="auth-modal-subtitle"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                color: isDark ? '#A39E93' : '#6B7280',
                marginBottom: '24px',
                lineHeight: 1.5,
                maxWidth: '380px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              Your <strong style={{ color: '#9E8C63', fontWeight: 600 }}>10% Welcome Privilege</strong> is active and automatically applied to your shopping bag.
            </p>

            <div
              className="auth-logged-card"
              style={{
                padding: '14px',
                backgroundColor: isDark ? '#1A1A1A' : '#F9FAFB',
                border: isDark ? '1px solid #262522' : '1px solid #E5E7EB',
                marginBottom: '24px',
                fontSize: '12px',
                color: isDark ? '#FBFAF6' : '#1F2937',
                fontFamily: 'monospace',
                letterSpacing: '0.08em',
                borderRadius: '8px',
              }}
            >
              PRIVILEGE CODE: <strong style={{ color: '#9E8C63', fontWeight: 700 }}>ATELIER10</strong> (10% OFF)
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <button
                type="button"
                className="auth-submit-btn"
                style={{
                  width: '100%',
                  height: '50px',
                  backgroundColor: isDark ? '#FBFAF6' : '#2D2A26',
                  color: isDark ? '#121212' : '#FFFFFF',
                  border: isDark ? '1px solid #FBFAF6' : '1px solid #2D2A26',
                  borderRadius: '8px',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                }}
                onClick={closeAuthModal}
              >
                Continue Shopping
              </button>
              <button
                type="button"
                style={{
                  fontSize: '12px',
                  color: isDark ? '#71717A' : '#9CA3AF',
                  textDecoration: 'underline',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px 0',
                }}
                onClick={logoutUser}
              >
                Sign out from {state.user.email}
              </button>
            </div>
          </div>
        ) : (
          /* Authentication Form */
          <div>
            {/* Main Headline */}
            <h3
              id="auth-modal-title"
              className="auth-modal-title"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '32px',
                fontWeight: 400,
                color: isDark ? '#FBFAF6' : '#111827',
                textAlign: 'center',
                marginTop: '4px',
                marginBottom: '8px',
                lineHeight: 1.2,
              }}
            >
              {isReturningUser
                ? 'Sign In For 10% Off'
                : `Welcome${name.trim() ? ` ${name.trim()}` : ''}. Enjoy 10% Off`}
            </h3>

            {/* Sub-headline */}
            <p
              className="auth-modal-subtitle"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                color: isDark ? '#A39E93' : '#6B7280',
                textAlign: 'center',
                marginBottom: '26px',
                marginTop: '0px',
                lineHeight: 1.5,
                maxWidth: '400px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              {isReturningUser
                ? 'Log in to instantly unlock an exclusive 10% discount on your order.'
                : 'Create an account to instantly unlock an exclusive 10% discount on your first order.'}
            </p>

            <div className="auth-form-wrapper">
              {/* Tabs: SIGN IN / CREATE ACCOUNT with full-width split */}
              <div
                className="auth-tabs-container"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  marginBottom: '26px',
                  borderBottom: isDark ? '1px solid #262522' : '1px solid #E5E7EB',
                }}
              >
                <button
                  type="button"
                  className={`auth-tab-btn ${isReturningUser ? 'active' : 'inactive'}`}
                  style={{
                    paddingBottom: '12px',
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    textAlign: 'center',
                    cursor: 'pointer',
                    color: isReturningUser
                      ? (isDark ? '#FBFAF6' : '#111827')
                      : (isDark ? '#71717A' : '#9CA3AF'),
                    borderBottom: isReturningUser
                      ? (isDark ? '2px solid #9E8C63' : '2px solid #111827')
                      : '2px solid transparent',
                    background: 'none',
                    borderTop: 'none',
                    borderLeft: 'none',
                    borderRight: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onClick={() => {
                    setIsReturningUser(true);
                    setError('');
                  }}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  className={`auth-tab-btn ${!isReturningUser ? 'active' : 'inactive'}`}
                  style={{
                    paddingBottom: '12px',
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    textAlign: 'center',
                    cursor: 'pointer',
                    color: !isReturningUser
                      ? (isDark ? '#FBFAF6' : '#111827')
                      : (isDark ? '#71717A' : '#9CA3AF'),
                    borderBottom: !isReturningUser
                      ? (isDark ? '2px solid #9E8C63' : '2px solid #111827')
                      : '2px solid transparent',
                    background: 'none',
                    borderTop: 'none',
                    borderLeft: 'none',
                    borderRight: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onClick={() => {
                    setIsReturningUser(false);
                    setError('');
                  }}
                >
                  Create Account
                </button>
              </div>

              {error && (
                <div
                  style={{
                    marginBottom: '18px',
                    padding: '12px 14px',
                    backgroundColor: isDark ? 'rgba(220, 38, 38, 0.15)' : '#FEF2F2',
                    border: isDark ? '1px solid rgba(220, 38, 38, 0.4)' : '1px solid #FECACA',
                    color: isDark ? '#F87171' : '#DC2626',
                    fontSize: '12px',
                    borderRadius: '8px',
                    textAlign: 'left',
                  }}
                >
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ textAlign: 'left', width: '100%' }}>
                {/* Optional Name for New User */}
                {!isReturningUser && (
                  <div
                    className="auth-field-group"
                    style={{
                      marginTop: '0px',
                      marginBottom: '22px',
                      width: '100%',
                    }}
                  >
                    <label
                      htmlFor="modal-name"
                      className="auth-field-label"
                      style={{
                        display: 'block',
                        fontSize: '11px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        color: isDark ? '#A39E93' : '#6B7280',
                        marginBottom: '8px',
                        paddingLeft: '2px',
                        textAlign: 'left',
                      }}
                    >
                      Your Name
                    </label>
                    <input
                      id="modal-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="auth-input-field"
                      style={{
                        width: '100%',
                        height: '48px',
                        padding: '0 16px',
                        backgroundColor: isDark ? '#1A1A1A' : '#FFFFFF',
                        border: isDark ? '1px solid #2E2D2A' : '1px solid #D6D3CD',
                        borderRadius: '8px',
                        fontSize: '14px',
                        color: isDark ? '#FBFAF6' : '#1A1917',
                        boxSizing: 'border-box',
                        outline: 'none',
                      }}
                    />
                  </div>
                )}

                {/* Email Field with explicit top and bottom margins */}
                <div
                  className="auth-field-group"
                  style={{
                    marginTop: '0px',
                    marginBottom: '22px',
                    width: '100%',
                  }}
                >
                  <label
                    htmlFor="modal-email"
                    className="auth-field-label"
                    style={{
                      display: 'block',
                      fontSize: '11px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: isDark ? '#A39E93' : '#6B7280',
                      marginBottom: '8px',
                      paddingLeft: '2px',
                      textAlign: 'left',
                    }}
                  >
                    Email Address <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="auth-input-field"
                    style={{
                      width: '100%',
                      height: '48px',
                      padding: '0 16px',
                      backgroundColor: isDark ? '#1A1A1A' : '#FFFFFF',
                      border: isDark ? '1px solid #2E2D2A' : '1px solid #D6D3CD',
                      borderRadius: '8px',
                      fontSize: '14px',
                      color: isDark ? '#FBFAF6' : '#1A1917',
                      boxSizing: 'border-box',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Password Field with explicit top and bottom margins */}
                <div
                  className="auth-field-group"
                  style={{
                    marginTop: '0px',
                    marginBottom: '24px',
                    width: '100%',
                  }}
                >
                  <label
                    htmlFor="modal-password"
                    className="auth-field-label"
                    style={{
                      display: 'block',
                      fontSize: '11px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: isDark ? '#A39E93' : '#6B7280',
                      marginBottom: '8px',
                      paddingLeft: '2px',
                      textAlign: 'left',
                    }}
                  >
                    Password <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input
                    id="modal-password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="auth-input-field"
                    style={{
                      width: '100%',
                      height: '48px',
                      padding: '0 16px',
                      backgroundColor: isDark ? '#1A1A1A' : '#FFFFFF',
                      border: isDark ? '1px solid #2E2D2A' : '1px solid #D6D3CD',
                      borderRadius: '8px',
                      fontSize: '14px',
                      color: isDark ? '#FBFAF6' : '#1A1917',
                      letterSpacing: '0.2em',
                      boxSizing: 'border-box',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Button Container with explicit top and bottom margins */}
                <div
                  className="auth-btn-container"
                  style={{
                    marginTop: '12px',
                    marginBottom: '20px',
                    width: '100%',
                  }}
                >
                  <button
                    type="submit"
                    className="auth-submit-btn"
                    style={{
                      width: '100%',
                      height: '50px',
                      backgroundColor: isDark ? '#FBFAF6' : '#2D2A26',
                      color: isDark ? '#121212' : '#FFFFFF',
                      border: isDark ? '1px solid #FBFAF6' : '1px solid #2D2A26',
                      borderRadius: '8px',
                      fontSize: '11.5px',
                      fontWeight: 700,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                      boxSizing: 'border-box',
                    }}
                  >
                    <span>
                      {isReturningUser ? 'Sign In & Apply 10% Off' : 'Create Account & Apply 10% Off'}
                    </span>
                  </button>
                </div>

                {/* Legal / Atelier Disclaimer Text with generous top and bottom spacing */}
                <p
                  className="auth-disclaimer-text"
                  style={{
                    fontSize: '11.5px',
                    textAlign: 'center',
                    color: isDark ? '#71717A' : '#9CA3AF',
                    fontWeight: 400,
                    lineHeight: '1.6',
                    marginTop: '12px',
                    marginBottom: '8px',
                    padding: '0 8px',
                  }}
                >
                  By continuing, you enjoy membership privileges and complimentary atelier updates.
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
