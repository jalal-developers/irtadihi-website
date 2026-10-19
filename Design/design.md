# GSD CORE EXECUTION RULES
- Bias toward action: Write complete, working code files; never leave `// TODO` placeholders.
- Atomic execution: Build one component group at a time (1. Setup & Theme -> 2. Header/Hero -> 3. Catalog/Cards -> 4. Modals/Bag) and verify it compiles before moving to the next.
- Zero fluff: Keep explanations brief and focus compute tokens on code quality and strict mobile responsiveness.
# IRTADIHI (ارتديه) — Frontend Architecture & Design Specification

## 1. Brand Identity & Philosophy
**Irtadihi** (*ارتديه* — Arabic for "Wear It") is a luxury minimalist clothing atelier[cite: 1]. The digital flagship must embody "silence in form, warmth in thread"—prioritizing architectural layouts, unhurried editorial pacing, and zero visual clutter[cite: 1].

## 2. Existing Workspace Reference Assets
Before generating components, inspect the existing workspace directories:
* `/Prototypes/irtadihi_prototype.html`: Reference this file for exact CSS custom properties, spacing tokens, typography scales, editorial copy, interactive drawer/modal mechanics, and layout proportions[cite: 1, 3].
* `/Logos/` (and `irtadihi_svg_logo_kit (1).html`): Extract the pure editable `<svg>` vector paths for the calligraphic mark, primary stacked lockup, horizontal header lockup, and circular medallion submark across light, dark, and transparent modes[cite: 2, 3].

## 3. Tech Stack & Core Engineering Standards
* **Framework:** Next.js (App Router) with React Server and Client Components.
* **Styling:** Tailwind CSS configured with custom CSS variables (`globals.css`) mapped to the house color tokens and fluid `clamp()` typography[cite: 1].
* **Scope:** Pure frontend implementation with rich client-side state management (Shopping Bag, Product Detail Modals, Filters, Waitlist UI, Theme Toggle)[cite: 1].

## 4. Dual Theme System (LightAtelier & Dark / B&W Mode)
Implement a persistent, zero-flicker theme toggle in the sticky navigation header that switches between two curated palettes:

### Light Mode (Default Atelier Canvas)
* **Primary Background Canvas:** Warm Alabaster (`#FBFAF6`)[cite: 1]
* **Subtle / Elevated Surfaces:** `#F4F1EA` / `#EFECE4`[cite: 1]
* **Primary Ink & Structure:** Deep Umber Charcoal (`#504D46`)[cite: 1]
* **Secondary / Muted Text:** `#736F66` / `#918C81`[cite: 1]
* **Calligraphic Accent & Hairlines:** Antique Bronze Gold (`#9E8C63`) and `#E6E1D6` borders[cite: 1]

### Dark Mode (Black & White High-Contrast Editorial)
* **Primary Background Canvas:** Deep Obsidian Black (`#0A0A0A`)
* **Subtle / Elevated Surfaces:** `#121212` / `#1A1A1A`
* **Primary Ink & Typography:** Crisp Alabaster White (`#FBFAF6`)[cite: 1]
* **Secondary / Muted Text:** `#A39E93` / `#6E6A61`
* **Calligraphic Accent & Hairlines:** Antique Bronze Gold (`#9E8C63`) remains the constant luxury anchor alongside subtle `#262522` hairlines[cite: 1].
* **Logo Switching:** Automatically swap header/footer SVG logos between light and dark vector variants based on active theme[cite: 2].

## 5. Typography & Scannability
* **Display & Editorial Headings (`--font-serif`):** `'Cormorant Garamond'`, weight 300/400, tight tracking (`-0.02em`)[cite: 1].
* **UI, Navigation & Body (`--font-sans`):** `'Plus Jakarta Sans'`, weights 300–600, wide uppercase tracking (`0.14em–0.16em`) for eyebrows, buttons, and navigation links[cite: 1].
* **Arabic Calligraphic Accents (`--font-arabic`):** `'Amiri'`, regular/italic[cite: 1].
* **Numeric Formatting:** Enforce `font-variant-numeric: tabular-nums` on all prices, bag counts, and subtotals[cite: 1].

## 6. Strict Multi-Device Responsiveness
* **Zero Layout Collisions:** Elements must never overlap, clip, or crowd across mobile (`< 680px`), tablet (`680px–1024px`), or desktop (`> 1024px`, max-width `1440px`)[cite: 1].
* **Responsive Grids:**
  * *Desktop:* 12-column editorial hero and lookbook splits; 3-column (or user-toggleable 2-column) product catalog grid[cite: 1].
  * *Tablet:* Stacked hero/lookbook columns with generous vertical rhythm; 2-column product grid[cite: 1].
  * *Mobile:* Clean single-column product feed, collapsible mobile navigation drawer, full-bleed slide-over cart drawer, and thumb-friendly `44px+` touch targets for size tiles and color swatches[cite: 1].

## 7. Motion & Scroll Animation Guidelines
* **Luxury Easing Curve:** Use `cubic-bezier(0.22, 1, 0.36, 1)` for all UI transitions[cite: 1].
* **No Hero Load Delay:** The Hero section must render immediately at full visibility without waiting for scroll triggers.
* **Subtle Viewport Reveals:** As the user scrolls down, apply gentle opacity fade-ins (`opacity: 0 -> 1`) paired with a minimal upward glide (`translateY(16px -> 0)`) over `400ms–600ms` for product rows, the Brand Heritage interlude, and the Lookbook split.
* **Mobile Performance:** Keep animations GPU-accelerated (`transform`, `opacity`) so mobile scrolling never drops frames.

## 8. Core Page Sections & Component Specifications

### 8.1 Announcement Micro-Bar & Sticky Header
* **Micro-Bar:** `34px` height bar displaying *"Complimentary Express Shipping on All Orders • Autumn / Winter Atelier Collection"*[cite: 1].
* **Sticky Header:** `82px` height with `backdrop-filter: blur(12px)`[cite: 1]. Contains navigation links (`Collections`, `Hoodies`, `Sweatshirts`, `Outerwear`, `Lookbook`, `Philosophy`), centered SVG brand emblem + wordmark, Theme Toggle button (Light/Dark), and Shopping Bag trigger with live item count pill[cite: 1].

### 8.2 Editorial Hero Section (The Main Hook)
* **Left Column:** Eyebrow (`Autumn / Winter Atelier — 2026`), Display Heading (*"Silence in Form, Warmth in Thread."*), lead narrative introducing the **Hoodies & Sweatshirts Capsule** rooted in the meaning of *Irtadihi*, dual CTAs (`Explore the Collection` primary button + `The Meaning of Irtadihi` secondary button), and the 3-column trust metrics bar (`100% Organic`, `3 Tonal Hues`, `Small-Batch Atelier`)[cite: 1].
* **Right Column:** Asymmetric two-frame visual showcase featuring primary editorial artwork/photography of the flagship heavyweight hoodie/sweatshirt alongside a macro fabric/fleece weave study, complete with frosted caption bars (`Look 01`, price, and fabric title)[cite: 1].

### 8.3 Product Catalog & Smart Card Interactions (Hoodies & Sweatshirts Capsule)
* **Inventory Strategy:** Active purchasable products are strictly **Hoodies** and **Sweatshirts** (e.g., heavyweight organic cotton-fleece hoodies, architectural drop-shoulder crewnecks in Deep Umber Charcoal, Warm Alabaster, and Antique Bronze).
* **Filter & Sort Bar:** Category tabs (`All Pieces`, `Hoodies`, `Sweatshirts`, plus `Outerwear`, `Silk & Drape`, `Tailored Separates` marked with subtle *Coming Soon* indicators), price sorting dropdown (`Featured`, `Price: Low to High`, `Price: High to Low`), and 3-Col / 2-Col view switcher[cite: 1].
* **Desktop Card Hover (150ms Debounce Delay):**
  * When a user's cursor enters a product card, apply a **150ms–200ms hover delay** before triggering the visual change so rapid scrolling never causes accidental flickering.
  * Once triggered, smoothly scale the media container (`scale(1.03)`) and crossfade from the primary front view to the secondary back/detail view (or video loop if provided), while sliding up the `Quick Add Size` bar (`XS, S, M, L, XL`)[cite: 1].
* **Mobile / Touch Card Interaction:**
  * Since touch devices cannot hover, include a clean touch-friendly angle toggle (a subtle swipeable carousel or a discrete front/back toggle pill on the corner of the product media) so mobile shoppers can inspect both front and back views effortlessly before opening the modal.

### 8.4 "Coming Soon" Category Views & Private Release Email Waitlist
* When a user selects an upcoming category tab (`Outerwear`, `Silk & Drape`, `Tailored Separates`) or navigates to a non-capsule category:
  * Render an elegant, editorial **"Coming Soon — Private Atelier Release"** panel instead of an empty grid.
  * Include a brief narrative on the upcoming garments and an interactive **Email Waitlist Capture Form** (*"Enter your email address to join the private release waitlist and receive early trunk show access"*)[cite: 1].
  * Submitting the form validates the email on the client side, clears the input, and triggers a luxury toast notification confirming their spot on the waitlist[cite: 1].

### 8.5 Brand Heritage Interlude & Interactive Palette Inspector
* Centered editorial section featuring the vertical bronze rule, the calligraphic emblem, the house quote, and the interactive 3-Color Palette Inspector cards (`#FBFAF6`, `#504D46`, `#9E8C63`) with click-to-copy hex functionality[cite: 1].

### 8.6 Asymmetric Editorial Lookbook Split
* 12-column asymmetric split pairing a sticky narrative column on the right with a large editorial visual frame on the left, featuring a "Shop the Ensemble" card that lets users add a complete Hoodie + Sweatshirt layered capsule look to their bag in one click[cite: 1].

### 8.7 Interactive Product Detail Modal (PDP) & Slide-Over Shopping Bag
* **PDP Modal:** Opens on product card click with a frosted backdrop[cite: 1]. Displays front/back gallery switcher, category breadcrumb, title, price, description, interactive colorway swatches, size selector grid (`XS–XL` with out-of-stock diagonal strikethrough styling), `Add to Bag` button, and collapsible accordions (`Composition & Craftsmanship`, `Care & Longevity`, `Complimentary Express Shipping & Returns`)[cite: 1].
* **Slide-Over Bag Drawer:** Slides in from the right (`440px` max width on desktop, `100vw` on mobile) showing complimentary shipping progress bar, line items with quantity steppers (`- / +`), automatic removal at `0`, live subtotal calculation, and checkout trigger with toast feedback[cite: 1].