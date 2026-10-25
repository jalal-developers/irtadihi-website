// ===== Core Brand Types =====

export type Theme = 'light' | 'dark';

export type ProductCategory =
  | 'All'
  | 'Hoodies'
  | 'Sweatshirts'
  | 'Outerwear'
  | 'Silk & Drape'
  | 'Tailored Separates';

export function formatPKR(amount: number): string {
  return `PKR ${amount.toLocaleString()}`;
}

export type SortOption = 'Featured' | 'Price: Low to High' | 'Price: High to Low';

export type ProductSize = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface ColorSwatch {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Hoodies' | 'Sweatshirts';
  fabric: string;
  badge?: string;
  sizes: ProductSize[];
  outOfStockSizes?: ProductSize[];
  colors: ColorSwatch[];
  description: string;
  careInstructions: string;
  composition: string;
  shipping: string;
  // Gradient placeholders for front/back views
  frontGradient: string;
  backGradient: string;
  arabicLabel: string;
}

export interface BagItem {
  product: Product;
  size: ProductSize;
  color: ColorSwatch;
  quantity: number;
}

// ===== Product Catalog Data =====

export const PRODUCTS: Product[] = [
  {
    id: 'hoodie-001',
    name: 'Umber Heavyweight Hoodie',
    price: 28500,
    category: 'Hoodies',
    fabric: '380gsm Organic Cotton Fleece',
    badge: 'Capsule 01',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    outOfStockSizes: ['XS'],
    colors: [
      { name: 'Deep Umber Charcoal', hex: '#504D46' },
      { name: 'Warm Alabaster', hex: '#FBFAF6' },
      { name: 'Antique Bronze', hex: '#9E8C63' },
    ],
    description:
      'A heavyweight drop-shoulder hoodie cut from 380gsm organic cotton fleece. Garment-washed twice for a broken-in softness that only deepens over time. The interior is densely brushed, the exterior left raw. Minimal detailing: a single kangaroo pocket, ribbed cuffs, and a tonal embroidered calligraphic mark at the chest.',
    composition: '100% GOTS-certified organic ring-spun cotton, 380gsm fleece. Metal-free overdye. No blended synthetics.',
    careInstructions: 'Cold wash inside out, 30°C max. Line dry away from direct sunlight. Do not tumble dry. The fleece loft improves after the first three washes.',
    shipping: 'Complimentary express shipping on all orders. Returns accepted within 21 days in original condition.',
    frontGradient: 'linear-gradient(165deg, #504D46 0%, #3D3A35 100%)',
    backGradient: 'linear-gradient(165deg, #3D3A35 0%, #2A2826 100%)',
    arabicLabel: 'هود',
  },
  {
    id: 'hoodie-002',
    name: 'Alabaster Draped Hoodie',
    price: 28500,
    category: 'Hoodies',
    fabric: '380gsm Organic Cotton Fleece',
    badge: 'Capsule 01',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    outOfStockSizes: ['L'],
    colors: [
      { name: 'Warm Alabaster', hex: '#FBFAF6' },
      { name: 'Deep Umber Charcoal', hex: '#504D46' },
    ],
    description:
      'The same heavyweight silhouette in Warm Alabaster — a tone that photographs as cream in morning light and shifts toward ivory in the evening. Slightly elongated at the back hem for an asymmetric drape. Off-white metal-free eyelets at the hood.',
    composition: '100% GOTS-certified organic ring-spun cotton, 380gsm fleece. Pigment-free natural tone. Pre-shrunk.',
    careInstructions: 'Cold wash inside out, 30°C max. Line dry only. Avoid contact with colored garments during the first three washes.',
    shipping: 'Complimentary express shipping on all orders. Returns accepted within 21 days in original condition.',
    frontGradient: 'linear-gradient(165deg, #EFECE4 0%, #FBFAF6 100%)',
    backGradient: 'linear-gradient(165deg, #F4F1EA 0%, #EFECE4 100%)',
    arabicLabel: 'أبيض',
  },
  {
    id: 'hoodie-003',
    name: 'Bronze Archive Hoodie',
    price: 31000,
    category: 'Hoodies',
    fabric: '380gsm Organic Cotton Fleece',
    badge: 'Limited',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    outOfStockSizes: ['XS', 'XL'],
    colors: [
      { name: 'Antique Bronze', hex: '#9E8C63' },
      { name: 'Deep Umber Charcoal', hex: '#504D46' },
    ],
    description:
      'A limited-run hoodie in our signature Antique Bronze tonal wash — achieved through a three-stage dye bath that produces natural variation across pieces. Each garment emerges unique. The calligraphic mark at the chest is embroidered in Deep Umber thread, creating a tone-on-tone effect.',
    composition: '100% GOTS-certified organic ring-spun cotton, 380gsm fleece. Three-stage mineral dye process. Each piece uniquely toned.',
    careInstructions: 'Cold wash inside out, 30°C max. Line dry flat to preserve tonal gradation. The patina deepens with age.',
    shipping: 'Complimentary express shipping on all orders. Limited quantities — ships within 5 business days.',
    frontGradient: 'linear-gradient(165deg, #9E8C63 0%, #877650 100%)',
    backGradient: 'linear-gradient(165deg, #877650 0%, #6E6255 100%)',
    arabicLabel: 'ذهب',
  },
  {
    id: 'sweatshirt-001',
    name: 'Architectural Crewneck',
    price: 24500,
    category: 'Sweatshirts',
    fabric: '320gsm French Terry',
    badge: 'Capsule 01',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    outOfStockSizes: [],
    colors: [
      { name: 'Deep Umber Charcoal', hex: '#504D46' },
      { name: 'Warm Alabaster', hex: '#FBFAF6' },
      { name: 'Antique Bronze', hex: '#9E8C63' },
    ],
    description:
      'A drop-shoulder crewneck in 320gsm French terry. The silhouette is deliberately oversized at the shoulders while tapering through the body — architectural in proportion, austere in detail. Hemline falls below the hip. Double-needle stitching throughout.',
    composition: '100% GOTS-certified organic ring-spun cotton, 320gsm French terry. Single-loop construction. Pre-washed for immediate softness.',
    careInstructions: 'Machine wash cold, inside out. Tumble dry low or line dry. Best to wash with similar weights.',
    shipping: 'Complimentary express shipping on all orders. Returns accepted within 21 days.',
    frontGradient: 'linear-gradient(150deg, #504D46 0%, #3D3A35 100%)',
    backGradient: 'linear-gradient(150deg, #3A3733 0%, #504D46 100%)',
    arabicLabel: 'كريو',
  },
  {
    id: 'sweatshirt-002',
    name: 'Alabaster Crewneck',
    price: 24500,
    category: 'Sweatshirts',
    fabric: '320gsm French Terry',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    outOfStockSizes: ['XS'],
    colors: [
      { name: 'Warm Alabaster', hex: '#FBFAF6' },
      { name: 'Deep Umber Charcoal', hex: '#504D46' },
    ],
    description:
      'The Architectural Crewneck in Warm Alabaster. The same proportions, the same single-loop French terry — worn as a canvas-tone layer or styled as the focal point. Tonal self-fabric ribbing at cuffs and hem.',
    composition: '100% GOTS-certified organic ring-spun cotton, 320gsm French terry. Pigment-free natural tone.',
    careInstructions: 'Machine wash cold, inside out. Tumble dry low or line dry. Avoid colored garments in first wash.',
    shipping: 'Complimentary express shipping on all orders. Returns accepted within 21 days.',
    frontGradient: 'linear-gradient(150deg, #F4F1EA 0%, #FBFAF6 100%)',
    backGradient: 'linear-gradient(150deg, #EFECE4 0%, #F4F1EA 100%)',
    arabicLabel: 'أبيض',
  },
  {
    id: 'sweatshirt-003',
    name: 'Bronze Quarter-Zip',
    price: 26500,
    category: 'Sweatshirts',
    fabric: '300gsm Loopback Fleece',
    badge: 'New',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    outOfStockSizes: ['XL'],
    colors: [
      { name: 'Antique Bronze', hex: '#9E8C63' },
      { name: 'Deep Umber Charcoal', hex: '#504D46' },
    ],
    description:
      'A quarter-zip sweatshirt in loopback fleece with a bronze metal half-zip pull. The looser, loopback construction gives the fabric a subtly textured face with a smooth, warm interior. Designed for layering under our Hoodies or worn alone over a shirt collar.',
    composition: '100% GOTS-certified organic ring-spun cotton, 300gsm loopback fleece. Antique bronze YKK zipper.',
    careInstructions: 'Machine wash cold. Close zipper before washing. Tumble dry low.',
    shipping: 'Complimentary express shipping on all orders. Returns accepted within 21 days.',
    frontGradient: 'linear-gradient(150deg, #9E8C63 0%, #877650 100%)',
    backGradient: 'linear-gradient(150deg, #877650 0%, #9E8C63 100%)',
    arabicLabel: 'قيد',
  },
];

// ===== Categories Config =====
export const CATEGORIES: { label: ProductCategory; comingSoon: boolean }[] = [
  { label: 'All', comingSoon: false },
  { label: 'Hoodies', comingSoon: false },
  { label: 'Sweatshirts', comingSoon: false },
  { label: 'Outerwear', comingSoon: true },
  { label: 'Silk & Drape', comingSoon: true },
  { label: 'Tailored Separates', comingSoon: true },
];

export const COMING_SOON_COPY: Record<string, { heading: string; body: string }> = {
  'Outerwear': {
    heading: 'The Outerwear Atelier',
    body:
      'Our outerwear collection is currently in its final stages of development — a range of structured overcoats, unlined bomber jackets, and field coats in wool-linen blends and waxed organic cotton. Each piece is designed to age visibly, developing a personal patina over seasons of wear.',
  },
  'Silk & Drape': {
    heading: 'Silk & Drape',
    body:
      'Fluid silk-linen tunics, wide-leg trousers, and draped shirts in natural undyed tones. Inspired by desert shadow play and the quiet luxury of unstructured fabric. This range is currently being sampled in collaboration with heritage Moroccan weavers.',
  },
  'Tailored Separates': {
    heading: 'Tailored Separates',
    body:
      'Precisely cut trousers, structured blazers, and tailored shirting — our most complex pieces. Construction is entirely hand-finished. Expected to launch in limited quantities by Spring Atelier season.',
  },
};
