# Irtadihi (ارتديه) — Next.js & Tailwind CSS Style Guide

This document defines the exact design tokens, typography scales, and component specifications extracted from the Irtadihi prototype[cite: 1]. It is structured for direct implementation in a Next.js environment, optimized for your `tailwind.config.ts` and `globals.css` files[cite: 1].

## 1. Core Design Tokens (Tailwind Configuration)

These core values must be configured in the Next.js theme settings to maintain the three-pigment brand heritage[cite: 1].

### Brand Color Palette
*   **Warm Alabaster (Canvas):** `#FBFAF6`[cite: 1]
*   **Deep Umber Charcoal (Ink/Dark Surfaces):** `#504D46`[cite: 1]
*   **Antique Bronze Gold (Accents/Borders):** `#9E8C63`[cite: 1]

### Semantic Color Mapping (`globals.css` variables)
*   `--bg-primary`: `#FBFAF6`[cite: 1]
*   `--bg-subtle`: `#F4F1EA`[cite: 1]
*   `--bg-elevated`: `#EFECE4`[cite: 1]
*   `--bg-inverse`: `#504D46`[cite: 1]
*   `--text-primary`: `#504D46`[cite: 1]
*   `--text-secondary`: `#736F66`[cite: 1]
*   `--text-muted`: `#918C81`[cite: 1]
*   `--text-on-dark`: `#FBFAF6`[cite: 1]
*   `--accent-hover`: `#877650`[cite: 1]
*   `--border-hairline`: `#E6E1D6`[cite: 1]
*   `--border-accent`: `#9E8C63`[cite: 1]

### Spacing & Layout Scale (8px Grid)
*   **Spacing Tokens:** `4px`, `8px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`, `128px`[cite: 1].
*   **Container Max Width:** `1440px` (`max-w-[1440px]`)[cite: 1].
*   **Container Padding:** `clamp(1.5rem, 5vw, 4.5rem)`[cite: 1].
*   **Default Grid Gap:** `24px`[cite: 1].

### Motion & Radii
*   **Border Radii:** Sharp (`0px`), Subtle (`2px`)[cite: 1].
*   **Easing Curve (`--ease-luxury`):** `cubic-bezier(0.22, 1, 0.36, 1)`[cite: 1].
*   **Transition Durations:** Fast (`200ms`), Medium (`400ms`), Slow (`700ms`)[cite: 1].

---

## 2. Typography System

**Global Application Rules:** 
*   Apply `-webkit-font-smoothing: antialiased` and `-moz-osx-font-smoothing: grayscale` to the `<html>` or `<body>` tag[cite: 1]. 
*   Base font size is `16px` with a line-height of `1.65`[cite: 1]. 
*   `::selection` state must use `#9E8C63` (Bronze) background with `#FBFAF6` (Alabaster) text[cite: 1].

| Style Role | Font Family | Size | Weight | Line Height | Letter Spacing | Color | Transform |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Eyebrow** | Plus Jakarta Sans[cite: 1] | `0.75rem`[cite: 1] | 500[cite: 1] | Normal | `0.16em`[cite: 1] | Bronze[cite: 1] | Uppercase[cite: 1] |
| **Heading Display**| Cormorant Garamond[cite: 1]| `clamp(2.5rem, 5vw, 4.25rem)`[cite: 1]| 300[cite: 1] | 1.08[cite: 1] | `-0.02em`[cite: 1] | Charcoal[cite: 1] | None |
| **Heading Section**| Cormorant Garamond[cite: 1]| `clamp(1.875rem, 3.2vw, 2.75rem)`[cite: 1]| 400[cite: 1] | 1.15[cite: 1] | `-0.015em`[cite: 1]| Charcoal[cite: 1] | None |
| **Heading Editorial**| Cormorant Garamond[cite: 1]| `clamp(1.35rem, 2vw, 1.75rem)`[cite: 1] | 400[cite: 1] | 1.25[cite: 1] | `-0.01em`[cite: 1] | Inherit[cite: 1] | None |
| **Body Lead** | Plus Jakarta Sans[cite: 1] | `1.0625rem`[cite: 1] | 400 | 1.75[cite: 1] | Normal | Secondary (`#736F66`)[cite: 1]| None (Max 44ch)[cite: 1] |
| **Body Default** | Plus Jakarta Sans[cite: 1] | `1rem`[cite: 1] | 400[cite: 1] | 1.65[cite: 1] | Normal | Charcoal[cite: 1] | None |
| **Price / Numbers**| Plus Jakarta Sans[cite: 1] | Inherits | Inherit | Inherit | `0.04em`[cite: 1] | Inherit | *Tabular-nums*[cite: 1]|
| **Arabic Text** | Amiri[cite: 1] | `1.35rem`[cite: 1] | 400[cite: 1] | Normal | `0.02em`[cite: 1] | Bronze[cite: 1] | None |
| **Brand Wordmark** | Plus Jakarta Sans[cite: 1] | `0.5625rem`[cite: 1] | 500[cite: 1] | Normal | `0.34em`[cite: 1] | Secondary (`#736F66`)[cite: 1]| Uppercase[cite: 1] |

---

## 3. Component Specifications

### 3.1 Buttons & Links
All standard buttons use `Plus Jakarta Sans`, `0.75rem` size, `500` weight, `0.14em` letter spacing, and uppercase text. They have a sharp `0px` border-radius and `200ms` luxury-ease transitions[cite: 1].
*   **Base `.btn`:** Height `50px`, padding `0 32px`, gap `10px`, inline-flex centered[cite: 1].
*   **Primary Button:** Background `Charcoal`, Text `Alabaster`, Border `1px solid Charcoal`[cite: 1]. On hover: Background `#3D3A35`, Border `Bronze`, Box-shadow `inset 0 -2px 0 Bronze`[cite: 1].
*   **Secondary Button:** Background `transparent`, Text `Charcoal`, Border `1px solid Bronze`[cite: 1]. On hover: Background `Bronze`, Text `Alabaster`[cite: 1].
*   **Editorial Link:** Text `Charcoal`, padding-bottom `5px`, border-bottom `1px solid Bronze`[cite: 1]. On hover: Text and border shift to `#877650`, transform `translateY(-1px)`[cite: 1].

### 3.2 Navigation & Header
*   **Announcement Bar:** Height `34px`, Background `Charcoal`, Text `Alabaster`, `0.6875rem` font, `0.16em` tracking, uppercase, centered[cite: 1]. Bottom border: `1px solid rgba(158, 140, 99, 0.28)`[cite: 1]. Separator dots are `Bronze` with `12px` margin[cite: 1].
*   **Sticky Header:** Height `82px`[cite: 1]. Background `rgba(251, 250, 246, 0.93)` with `backdrop-filter: blur(12px)`[cite: 1]. Bottom border `1px solid #E6E1D6`[cite: 1].
*   **Navigation Links:** `0.75rem`, `500` weight, `0.16em` tracking, uppercase[cite: 1]. Hover state applies `Bronze` color and triggers a `1px` absolute bottom line growing from `scaleX(0)` to `scaleX(1)` over `350ms`[cite: 1].
*   **Logo Hover:** Logo image scales to `1.03` over `400ms` on hover[cite: 1].

### 3.3 Product Grid & Cards
*   **Collection Grid:** Default 3 columns, `24px` column gap, `64px` row gap. Toggles to 2 columns on mobile/tablet[cite: 1].
*   **Filter Tabs:** `0.75rem` font, `500` weight, uppercase, `Muted` color. Active state changes text to `Charcoal` and bottom border to `Bronze`[cite: 1].
*   **Product Media Hover:** Primary image fades to `opacity: 0` and scales `1.025` over `450ms`[cite: 1]. Secondary image fades in to `opacity: 1`[cite: 1].
*   **Quick Add Bar:** Absolute bottom. Slides up from `translateY(100%)` to `translateY(0)` over `350ms` on card hover[cite: 1]. Background `rgba(251, 250, 246, 0.95)` with `8px` blur[cite: 1]. Quick size buttons have `1px solid Hairline` borders, turning `Charcoal` background and `Alabaster` text on hover[cite: 1].
*   **Product Badge:** Positioned `16px` from top/left. `0.625rem` font, `500` weight, `0.18em` tracking, uppercase. Text `Bronze`, Background `rgba(251, 250, 246, 0.92)`, Border `1px solid rgba(158, 140, 99, 0.35)`[cite: 1].
*   **Color Swatch Dots:** `12x12px` rounded completely (`50%`), border `1px solid rgba(80, 77, 70, 0.25)`[cite: 1]. Active dot utilizes `box-shadow: 0 0 0 1.5px #FBFAF6, 0 0 0 3px #9E8C63`[cite: 1].

### 3.4 Modals & Drawers (PDP & Shopping Bag)
*   **Backdrop Overlay:** Fixed, `rgba(80, 77, 70, 0.45)` (PDP) or `rgba(80, 77, 70, 0.35)` (Bag), with `6px` or `4px` backdrop-filter blur[cite: 1]. Fades in over `400ms`[cite: 1].
*   **PDP Modal:** Max-width `1120px`, 2-column grid (`6fr 5fr`). Slides in from `translateY(16px)` to `0`[cite: 1].
*   **Bag Drawer:** Fixed right, width `440px` (max `100vw`), background `Alabaster`, left border `1px solid Hairline`. Slides from `translateX(100%)` to `0` over `400ms`[cite: 1].
*   **Size Selection Tiles (PDP):** `46x46px`, background `Alabaster`, border `1px solid Hairline`[cite: 1]. Selected state uses `1.5px solid Bronze` border, `Charcoal` background, `Alabaster` text[cite: 1]. Out-of-stock state uses `0.45` opacity and diagonal linear-gradient strikethrough[cite: 1].
*   **Accordions (PDP):** Triggers are `16px 0` padding, `0.75rem`, uppercase, `0.14em` tracking[cite: 1]. Content is `0.875rem` Secondary text with `1.65` line height[cite: 1].

### 3.5 Footer
*   **Footer Wrapper:** Background `Charcoal`, Text `Alabaster`. Top padding `96px`, bottom padding `48px`[cite: 1].
*   **Layout Grid:** 4 columns (`5fr 2fr 2fr 3fr`), bottom border `1px solid rgba(158, 140, 99, 0.3)`, padding-bottom `64px`, gap `48px`[cite: 1].
*   **Links:** Default `rgba(251, 250, 246, 0.8)`, `0.875rem`. Hover color `Bronze`[cite: 1].
*   **Newsletter Input:** Transparent background, `border-bottom: 1px solid Bronze`, `0.875rem` font, Text `Alabaster`. Placeholder is `rgba(251, 250, 246, 0.5)`[cite: 1].