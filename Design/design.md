# Irtadihi (ارتديه) — Classic Minimalist Clothing Brand Design System (`design.md`)

## 1. Brand Essence & Aesthetic Direction Establish Quiet Luxury

**Irtadihi** (*ارتديه* — Arabic for *"Wear It"*) is a classic, minimalist clothing brand defined by architectural tailoring, organic warmth, and timeless restraint. Every visual decision on the website draws directly from the brand's calligraphic emblem: fluid yet disciplined strokes of **Deep Umber Charcoal** intertwined with **Antique Bronze Gold** resting on a tactile canvas of **Warm Alabaster**.

### Core Design Pillars
* **Editorial Restraint Over Visual Noise:** Strip away promotional pop-ups, countdown timers, heavy drop shadows, and cluttered badges. Let garment silhouettes, fabric texture, and negative space carry the visual weight.
* **Warm Monochromatic Harmony:** Reject stark clinical white (`#FFFFFF`) and harsh jet black (`#000000`). Use the three organic pigments from the Irtadihi emblem to create an inviting, gallery-like digital flagship store.
* **Tactile & Architectural Precision:** Pair razor-sharp `1px` structural hairlines and zero-radius (or `2px` micro-radius) containers with fluid editorial typography and slow, deliberate hover transitions that echo the drape of fine fabric.
* **Effortless Bilingual Grace:** Honor the Arabic calligraphic mark as the centerpiece of the visual identity while keeping Latin navigation, product taxonomy, and sizing controls crisp and immediately scannable.

---

## 2. Three-Color Brand Palette Anchors Every Surface and Interaction

The entire visual system is strictly governed by the three foundational colors extracted from the Irtadihi logo mark, supported by subtle opacity and tonal variations for interactive states and hierarchy.

### Primary Brand Pigments (Extracted from Logo)

| Color Role | Descriptive Name | Hex Code | RGB Value | HSL Value | Visual Usage & Proportion |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary Canvas** | **Warm Alabaster** | `#FBFAF6` | `rgb(251, 250, 246)` | `hsl(48, 45%, 97%)` | **75%–80% of viewport.** Page background, negative space, sticky navigation bar, and light button text. |
| **Primary Ink & Structure** | **Deep Umber Charcoal** | `#504D46` | `rgb(80, 77, 70)` | `hsl(42, 7%, 29%)` | **15%–20% of viewport.** Primary headings, body copy, primary CTA buttons, icons, and footer surface. |
| **Brand Accent & Highlight** | **Antique Bronze Gold** | `#9E8C63` | `rgb(158, 140, 99)` | `hsl(42, 24%, 50%)` | **5%–10% of viewport.** Active navigation indicators, secondary borders, calligraphic emblems, focus rings, and hover accents. |

### Derived Semantic Tokens & Surface Scale

To support e-commerce states (cards, dividers, disabled buttons, and form inputs) without introducing foreign hues, derive all secondary tokens directly from the three core pigments:

| CSS Custom Property | Value | Source Derivation | Designated UI Application |
| :--- | :--- | :--- | :--- |
| `--color-canvas` | `#FBFAF6` | Exact Logo Background | Main page background and modal surfaces |
| `--color-surface-subtle` | `#F4F1EA` | Alabaster tinted 4% with Bronze | Product card image placeholders, size-guide tables, and cart drawer backdrop |
| `--color-ink-primary` | `#504D46` | Exact Logo Dark Stroke | All primary headings, garment titles, prices, and primary button fills |
| `--color-ink-secondary` | `#736F66` | `rgba(80, 77, 70, 0.78)` on Alabaster | Product descriptions, fabric care notes, and metadata labels |
| `--color-ink-muted` | `#918C81` | `rgba(80, 77, 70, 0.56)` on Alabaster | Breadcrumbs, out-of-stock sizes, and input placeholders |
| `--color-accent-bronze` | `#9E8C63` | Exact Logo Gold Stroke | Calligraphic accents, active tab underlines, badge borders, and star ratings |
| `--color-accent-bronze-hover` | `#877650` | Bronze darkened 10% | Hover state for accent links, secondary buttons, and interactive borders |
| `--color-border-hairline` | `#E6E1D6` | `rgba(158, 140, 99, 0.22)` | Section dividers, table rules, size selector boxes, and header bottom border |
| `--color-border-focus` | `#9E8C63` | Exact Logo Gold Stroke | Active input borders, selected size swatch outline, and keyboard focus ring |

### Accessibility & Contrast Guardrails (WCAG 2.1)
* **Body Copy & Primary UI (`#504D46` on `#FBFAF6`):** Delivers an **8.15:1 contrast ratio**, exceeding **WCAG AAA** standards for both normal body copy and small micro-labels.
* **Inverted Dark Surfaces (`#FBFAF6` on `#504D46`):** Delivers **8.15:1 (WCAG AAA)** for primary button labels and the dark editorial footer.
* **Antique Bronze Gold Usage Rule (`#9E8C63` on `#FBFAF6`):** Yields a **3.15:1 contrast ratio** (passes WCAG AA for graphical objects, borders, and large display elements $\ge 24\text{px}$). **Never** use `#9E8C63` for small paragraph text on `#FBFAF6`; instead, use `#9E8C63` for borders, underlines, icons, dark-background typography (`#9E8C63` on `#504D46`), or pair it with `#504D46` text.

---

## 3. Editorial Serif and Geometric Sans Pairing Balances Heritage with Modernity

Typography creates the unmistakable voice of a classic minimalist fashion house. High-contrast editorial serifs evoke couture print magazines and echo the thick-to-thin modulation of the Irtadihi calligraphy mark, while an understated geometric sans-serif keeps sizing, pricing, and checkout effortless.

### Font Stack Specification

| Typographic Role | Recommended Font Family | Fallback Stack | Weight Range | Character & Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Display & Headings (`--font-serif`)** | `'Cormorant Garamond'` *(or `'Playfair Display'`)* | `Georgia, 'Times New Roman', serif` | `300` (Light), `400` (Regular), `500` (Medium) | High-contrast literary serif with graceful italics that mirror calligraphic strokes. |
| **Body & UI Controls (`--font-sans`)** | `'Plus Jakarta Sans'` *(or `'Inter'`)* | `-apple-system, BlinkMacSystemFont, sans-serif` | `400` (Regular), `500` (Medium) | Neutral, open-aperture sans-serif for crisp legibility at small sizes. |
| **Arabic Accent (`--font-arabic`)** | `'Amiri'` *(or `'Noto Naskh Arabic'`)* | `'Traditional Arabic', serif` | `400` (Regular), `700` (Bold) | Classical Naskh-inspired serif used when rendering bilingual collection titles alongside the brand mark. |

### Fluid Typographic Scale

| Token / Element | Font Family | Size (`clamp()`) | Weight | Line Height | Letter Spacing | Text Transform |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display (`h1`)** | `--font-serif` | `clamp(2.5rem, 5vw, 4.25rem)` (40–68px) | `300` (Light) | `1.08` | `-0.02em` | None (Sentence/Title case) |
| **Section Heading (`h2`)** | `--font-serif` | `clamp(1.875rem, 3.2vw, 2.75rem)` (30–44px) | `400` (Regular) | `1.15` | `-0.015em` | None |
| **Editorial Subhead (`h3`)** | `--font-serif` | `clamp(1.35rem, 2vw, 1.75rem)` (22–28px) | `400` (Italic/Reg) | `1.25` | `-0.01em` | None |
| **Product Card Title (`h4`)** | `--font-sans` | `0.9375rem` (15px) | `400` (Regular) | `1.4` | `0.02em` | None |
| **Body Copy (`p`)** | `--font-sans` | `1rem` (16px) | `400` (Regular) | `1.65` | `0.005em` | None |
| **Navigation & Eyebrow** | `--font-sans` | `0.75rem` (12px) | `500` (Medium) | `1.2` | `0.16em` | `UPPERCASE` |
| **Button Label** | `--font-sans` | `0.75rem` (12px) | `500` (Medium) | `1.0` | `0.14em` | `UPPERCASE` |
| **Price & Micro Meta** | `--font-sans` | `0.875rem` (14px) | `400` (Regular) | `1.4` | `0.04em` | Tabular numerals (`tabular-nums`) |

---

## 4. Architectural Grid and Generous Whitespace Frame Every Garment

A classic minimalist clothing store treats each viewport like an art gallery wall: garments never crowd the screen edges, and at least **35% of every viewport remains open Warm Alabaster (`#FBFAF6`) canvas**.

### Grid & Container Standards
* **Max Container Width:** `1440px` centered with fluid horizontal padding (`clamp(1.5rem, 5vw, 4.5rem)`).
* **Desktop Grid (`>= 1024px`):** 12-column CSS Grid, `24px` column gap, `64px` vertical row gap for product listings.
* **Tablet Grid (`768px – 1023px`):** 8-column CSS Grid, `20px` column gap, 2 products per row.
* **Mobile Grid (`< 768px`):** 4-column CSS Grid, `16px` column gap; toggleable between 1-column full-editorial view and 2-column compact catalog view.
* **Section Vertical Rhythm:** `clamp(5rem, 10vw, 8.5rem)` (`80px` to `136px`) top and bottom padding between major homepage blocks.

### 8-Point Spatial Scale
Use strict multiples of `8px` (with `4px` reserved for tight inline icon-to-label alignment):
* `--space-1`: `4px` (Inline badge/tag padding)
* `--space-2`: `8px` (Tight stack between product title and price)
* `--space-3`: `16px` (Gap between product image and card metadata)
* `--space-4`: `24px` (Grid gutter and card internal padding)
* `--space-5`: `32px` (Sub-section spacing)
* `--space-6`: `48px` (Header-to-grid clearance)
* `--space-7`: `64px` (Product row vertical gap)
* `--space-8`: `96px` (Editorial section separation)
* `--space-9`: `128px` (Hero and lookbook vertical breathing room)

---

## 5. UI Components Emphasize Tailored Hairlines and Subtle Transitions

### Navigation Header
* **Layout:** Three-column balanced bar (`height: 80px` desktop, `64px` mobile).
  * **Left:** Primary category links (`Collections`, `New Arrivals`, `Tailoring`, `Atelier`) in `12px` uppercase `--font-sans` with `0.16em` tracking and `#504D46` color.
  * **Center:** The **Irtadihi** Arabic calligraphic mark (`height: 38px`) paired optionally with a subtle Latin wordmark below on initial scroll, collapsing cleanly to the calligraphic emblem on scroll.
  * **Right:** `Search`, `Account`, and `Bag (0)` in `#504D46`.
* **Surface Behavior:** Transparent over full-bleed hero imagery or solid `rgba(251, 250, 246, 0.92)` with `backdrop-filter: blur(12px)` and a `1px solid #E6E1D6` bottom hairline on scroll.
* **Active & Hover State:** Links transition smoothly to `#9E8C63`, accompanied by a `1px` bottom underline in `#9E8C63` that expands from left to right (`transform: scaleX(1)` over `350ms`).

### Buttons & Call-to-Action Controls
Buttons use sharp `0px` corners (or a barely perceptible `2px` radius) to evoke woven clothing labels.

| Button Variant | Default Background | Default Text | Border | Hover State | Primary Use Case |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary Solid** | `#504D46` | `#FBFAF6` | `1px solid #504D46` | Background shifts to `#3D3A35`; subtle bottom border or inset highlight in `#9E8C63` | `Add to Bag`, `Proceed to Checkout` |
| **Secondary Outline** | `transparent` | `#504D46` | `1px solid #9E8C63` | Background fills with `#9E8C63`; text transitions to `#FBFAF6` | `Explore Collection`, `Size Guide` |
| **Editorial Text Link** | `transparent` | `#504D46` | Bottom rule `1px solid #9E8C63` (`padding-bottom: 4px`) | Text and rule shift to `#877650`; rule offset increases by `2px` | `Discover the Craft`, `View Lookbook` |

### Product Cards (Catalog & Featured Grid)
* **Aspect Ratio:** Strict `3:4` vertical portrait ratio (`aspect-ratio: 3 / 4`) with `overflow: hidden` and background placeholder `#F4F1EA`.
* **Card Chrome:** Zero outer border, zero box-shadow, zero rounded corners.
* **Hover Interaction:**
  * Primary studio look cross-fades (`450ms ease`) to a secondary image showing fabric drape or detail close-up, while scaling gently (`transform: scale(1.025)` over `700ms cubic-bezier(0.22, 1, 0.36, 1)`).
  * A discreet quick-add bar (`rgba(251, 250, 246, 0.94)`) slides up at the bottom of the image displaying available sizes (`XS  S  M  L  XL`) in `#504D46`, with hover highlight in `#9E8C63`.
* **Metadata Block:** Left-aligned `16px` below the image.
  * Line 1: Garment Title in `15px` `#504D46` (`--font-sans`).
  * Line 2: Fabric descriptor (e.g., *100% Organic Mulberry Silk — Sand*) in `13px` `#736F66`.
  * Line 3: Price in `14px` `#504D46` (`tabular-nums`).
  * Optional Badge: Minimalist text tag (`NEW SEASON` or `LIMITED EDITION`) in `10px` uppercase `#9E8C63` with `0.18em` tracking — never a solid neon sticker.

### Form Inputs, Filters & Size Selectors
* **Size Swatches:** `44px × 44px` square tiles on `#FBFAF6` with `1px solid #E6E1D6` border and `#504D46` label.
  * **Selected State:** `1.5px solid #9E8C63` border, `#504D46` background fill, and `#FBFAF6` text.
  * **Out of Stock:** Diagonal `1px` hairline across tile, `#918C81` text at `45%` opacity.
* **Text Inputs (Newsletter & Checkout):** Bottom-border-only style (`border: none; border-bottom: 1px solid #9E8C63; background: transparent`) on editorial sections, and full `1px solid #E6E1D6` bordered boxes on checkout forms with `#9E8C63` focus rings.

---

## 6. Page-by-Page Blueprint Guides Customer Journey from Discovery to Checkout

### 1. Home Page (Digital Flagship)
1. **Announcement Micro-Bar (`32px` height):** Deep Umber Charcoal (`#504D46`) background with Warm Alabaster (`#FBFAF6`) centered `11px` uppercase text (*"Complimentary Express Shipping on All Orders — Autumn / Winter Atelier"*).
2. **Editorial Hero Section (`90vh`):**
   * Split or full-bleed layout featuring warm, natural-light photography of a signature garment against stone or raw linen.
   * Overlays or adjacent Warm Alabaster column containing an eyebrow in `#9E8C63` (`AUTUMN / WINTER COLLECTION`), a declarative serif headline in `#504D46` (*"Silence in Form, Warmth in Thread"*), and a Secondary Outline CTA (`Explore the Collection`).
3. **Curated Three-Column Capsule Grid:** 3 flagship garments with generous `24px` gutters and `64px` top/bottom margin.
4. **Brand Heritage Interlude ("The Meaning of Irtadihi"):**
   * Centered single-column block (`max-width: 680px`) on `#F4F1EA` surface.
   * Displays the Arabic calligraphic emblem at `72px` height above an editorial serif quote explaining the philosophy of *ارتديه* (*"To wear with intention"*), framed by `1px solid #9E8C63` vertical hairline dividers (`height: 48px`).
5. **Asymmetric Editorial Lookbook Split:**
   * Left 7 columns: Large portrait campaign photograph.
   * Right 4 columns (offset by 1 column): Sticky narrative block with a shoppable "Shop the Look" mini-card.
6. **Minimalist Footer:**
   * Background in Deep Umber Charcoal (`#504D46`), typography in Warm Alabaster (`#FBFAF6`), section headers and horizontal rules in Antique Bronze Gold (`#9E8C63`).
   * Includes newsletter sign-up, client care links, sustainability pledge, and a large watermarked silhouette of the Irtadihi calligraphy mark at `6%` opacity.

### 2. Collection / Catalog Page (PLP)
* **Minimalist Collection Header:** Centered serif title (`Tailored Outerwear`) with a concise 1-sentence curatorial note in `#736F66`.
* **Refined Filter Strip:** Horizontal sticky bar with `Filter +` and `Sort By` triggers on the left, and a `View: 2 | 4` column switcher on the right, separated by a `1px solid #E6E1D6` rule.
* **Rhythmic Grid:** Every 8 products, insert an optional 2-column-wide editorial lookbook card to break visual monotony and maintain luxury pacing.

### 3. Product Detail Page (PDP)
* **Desktop Two-Column Split (`60%` Media / `40%` Details):**
  * **Left Column (60%):** Vertical stacked gallery of high-resolution `3:4` images (full silhouette, back drape, collar/cuff tailoring macro, fabric weave close-up) that scroll naturally with the page.
  * **Right Column (40% — Sticky at `top: 112px`):**
    1. Breadcrumb in `11px` uppercase `#918C81`.
    2. Product Title in `32px` `--font-serif` (`#504D46`) and Price in `18px` `--font-sans` (`#504D46`).
    3. Colorway selector with circular `24px` fabric swatches ringed by `#9E8C63` when active.
    4. Size selector row with a right-aligned `Size & Fit Guide` link underlined in `#9E8C63`.
    5. Full-width Primary Solid CTA (`Add to Bag` — `height: 52px`, `#504D46` fill, `#FBFAF6` text).
    6. Minimalist Accordion Sections (`border-top: 1px solid #E6E1D6`) with `+ / −` icons in `#9E8C63` for:
       * *Composition & Craftsmanship*
       * *Measurements & Model Fit*
       * *Care & Longevity*
       * *Shipping & Complimentary Returns*

### 4. Slide-Over Shopping Bag Drawer
* Opens from the right (`width: 440px` desktop, `100vw` mobile) over a `rgba(80, 77, 70, 0.35)` blurred backdrop.
* Displays a complimentary shipping progress bar filled with `#9E8C63` against a `#E6E1D6` track, thumbnail line items, quantity steppers, subtotal, and a pinned `#504D46` checkout button.

---

## 7. Photography Art Direction and Motion Rules Preserve Calm Cohesion

### Photography & Imagery Guidelines
Because photography occupies over half the visual area on a fashion site, all lookbook and studio images must harmonize with `#FBFAF6`, `#504D46`, and `#9E8C63`:
* **Studio Backdrops:** Shoot garments against warm limestone, raw unbleached plaster, travertine, or warm alabaster paper (`#F4F1EA` to `#EAE5DB`) — never cool blue-gray or pure `#FFFFFF` cycloramas.
* **Color Grading:** Maintain warm-neutral skin tones, soft diffused natural daylight, and rich shadow detail that blends effortlessly into Deep Umber Charcoal (`#504D46`).
* **Logo Placement on Imagery:** When placing the Irtadihi calligraphy logo over dark photography, render it in Warm Alabaster (`#FBFAF6`) and Antique Bronze (`#9E8C63`); on light photography, retain its original two-tone `#504D46` and `#9E8C63` palette.

### Motion & Micro-Interaction Specification
* **No Jarring Animations:** Avoid bounce effects, elastic springs, or fast parallax scrolling.
* **Standard Easing Curve:** `cubic-bezier(0.22, 1, 0.36, 1)` (smooth, decelerating luxury ease).
* **Timing Tokens:**
  * `--duration-fast`: `200ms` (Color and border transitions on links/buttons)
  * `--duration-medium`: `400ms` (Cart drawer slide, accordion expand, image cross-fade)
  * `--duration-slow`: `700ms` (Subtle product card image zoom and page-load reveal)

---

## 8. Production-Ready CSS Custom Properties (`:root` Starter Sheet)

Copy this foundational token block directly into your global stylesheet (`globals.css` or `variables.css`) to enforce the Irtadihi design system across all components:

```css
:root {
  /* === Core Brand Palette (Sampled from Irtadihi Emblem) === */
  --irtadihi-alabaster: #FBFAF6;       /* Primary Background Canvas */
  --irtadihi-charcoal:  #504D46;       /* Primary Ink, Typography & Dark Surfaces */
  --irtadihi-bronze:    #9E8C63;       /* Brand Calligraphic Accent & Borders */

  /* === Derived Semantic Surface & Text Tokens === */
  --bg-primary:         var(--irtadihi-alabaster);
  --bg-subtle:          #F4F1EA;
  --bg-inverse:         var(--irtadihi-charcoal);

  --text-primary:       var(--irtadihi-charcoal);
  --text-secondary:     #736F66;
  --text-muted:         #918C81;
  --text-on-dark:       var(--irtadihi-alabaster);

  --accent-primary:     var(--irtadihi-bronze);
  --accent-hover:       #877650;
  --border-hairline:    #E6E1D6;
  --border-accent:      var(--irtadihi-bronze);

  /* === Typography === */
  --font-serif:         'Cormorant Garamond', 'Playfair Display', Georgia, serif;
  --font-sans:          'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif;
  --font-arabic:        'Amiri', 'Noto Naskh Arabic', serif;

  /* === Layout & Spacing === */
  --container-max:      1440px;
  --container-pad:      clamp(1.5rem, 5vw, 4.5rem);
  --grid-gap:           24px;
  --radius-sharp:       0px;
  --radius-subtle:      2px;

  /* === Motion === */
  --ease-luxury:        cubic-bezier(0.22, 1, 0.36, 1);
  --transition-ui:      200ms var(--ease-luxury);
  --transition-image:   700ms var(--ease-luxury);
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-sans);
  font-weight: 400;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  margin: 0;
}

h1, h2, h3, .editorial-heading {
  font-family: var(--font-serif);
  font-weight: 400;
  color: var(--text-primary);
  margin-top: 0;
}
```
