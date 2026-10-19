'use client';

import React, {
  createContext,
  useContext,
  useReducer,
  useCallback,
  useEffect,
  type ReactNode,
} from 'react';
import type { BagItem, Product, ProductSize, ColorSwatch, Theme } from '@/lib/data';

// ===== State =====
interface StoreState {
  theme: Theme;
  bagOpen: boolean;
  bagItems: BagItem[];
  pdpProduct: Product | null;
  pdpOpen: boolean;
  mobileNavOpen: boolean;
  toast: string | null;
}

// ===== Actions =====
type Action =
  | { type: 'SET_THEME'; theme: Theme }
  | { type: 'OPEN_BAG' }
  | { type: 'CLOSE_BAG' }
  | { type: 'ADD_TO_BAG'; item: BagItem }
  | { type: 'REMOVE_FROM_BAG'; productId: string; size: ProductSize; colorName: string }
  | { type: 'UPDATE_QTY'; productId: string; size: ProductSize; colorName: string; delta: number }
  | { type: 'OPEN_PDP'; product: Product }
  | { type: 'CLOSE_PDP' }
  | { type: 'OPEN_MOBILE_NAV' }
  | { type: 'CLOSE_MOBILE_NAV' }
  | { type: 'SHOW_TOAST'; message: string }
  | { type: 'HIDE_TOAST' };

function reducer(state: StoreState, action: Action): StoreState {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.theme };
    case 'OPEN_BAG':
      return { ...state, bagOpen: true };
    case 'CLOSE_BAG':
      return { ...state, bagOpen: false };
    case 'ADD_TO_BAG': {
      const existing = state.bagItems.findIndex(
        (i) =>
          i.product.id === action.item.product.id &&
          i.size === action.item.size &&
          i.color.name === action.item.color.name
      );
      if (existing >= 0) {
        const items = [...state.bagItems];
        items[existing] = {
          ...items[existing],
          quantity: items[existing].quantity + 1,
        };
        return { ...state, bagItems: items };
      }
      return { ...state, bagItems: [...state.bagItems, action.item] };
    }
    case 'REMOVE_FROM_BAG':
      return {
        ...state,
        bagItems: state.bagItems.filter(
          (i) =>
            !(
              i.product.id === action.productId &&
              i.size === action.size &&
              i.color.name === action.colorName
            )
        ),
      };
    case 'UPDATE_QTY': {
      const items = state.bagItems
        .map((i) => {
          if (
            i.product.id === action.productId &&
            i.size === action.size &&
            i.color.name === action.colorName
          ) {
            return { ...i, quantity: i.quantity + action.delta };
          }
          return i;
        })
        .filter((i) => i.quantity > 0);
      return { ...state, bagItems: items };
    }
    case 'OPEN_PDP':
      return { ...state, pdpOpen: true, pdpProduct: action.product };
    case 'CLOSE_PDP':
      return { ...state, pdpOpen: false };
    case 'OPEN_MOBILE_NAV':
      return { ...state, mobileNavOpen: true };
    case 'CLOSE_MOBILE_NAV':
      return { ...state, mobileNavOpen: false };
    case 'SHOW_TOAST':
      return { ...state, toast: action.message };
    case 'HIDE_TOAST':
      return { ...state, toast: null };
    default:
      return state;
  }
}

// ===== Context =====
interface StoreContextValue {
  state: StoreState;
  setTheme: (theme: Theme) => void;
  openBag: () => void;
  closeBag: () => void;
  addToBag: (product: Product, size: ProductSize, color: ColorSwatch) => void;
  removeFromBag: (productId: string, size: ProductSize, colorName: string) => void;
  updateQty: (productId: string, size: ProductSize, colorName: string, delta: number) => void;
  openPdp: (product: Product) => void;
  closePdp: () => void;
  openMobileNav: () => void;
  closeMobileNav: () => void;
  showToast: (message: string) => void;
  bagTotal: number;
  bagCount: number;
  bagFreeShippingProgress: number;
}

const StoreContext = createContext<StoreContextValue | null>(null);

const FREE_SHIPPING_THRESHOLD = 300;

const INITIAL_STATE: StoreState = {
  theme: 'light',
  bagOpen: false,
  bagItems: [],
  pdpProduct: null,
  pdpOpen: false,
  mobileNavOpen: false,
  toast: null,
};

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  // Hydrate theme from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('irtadihi-theme') as Theme | null;
    if (saved && (saved === 'light' || saved === 'dark')) {
      dispatch({ type: 'SET_THEME', theme: saved });
    }
  }, []);

  // Sync theme to DOM and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', state.theme);
    localStorage.setItem('irtadihi-theme', state.theme);
  }, [state.theme]);

  // Lock body scroll when overlays open
  useEffect(() => {
    const locked = state.bagOpen || state.pdpOpen || state.mobileNavOpen;
    document.body.style.overflow = locked ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [state.bagOpen, state.pdpOpen, state.mobileNavOpen]);

  // Auto-dismiss toast
  useEffect(() => {
    if (state.toast) {
      const timer = setTimeout(() => dispatch({ type: 'HIDE_TOAST' }), 3500);
      return () => clearTimeout(timer);
    }
  }, [state.toast]);

  const setTheme = useCallback((theme: Theme) => {
    dispatch({ type: 'SET_THEME', theme });
  }, []);

  const openBag = useCallback(() => dispatch({ type: 'OPEN_BAG' }), []);
  const closeBag = useCallback(() => dispatch({ type: 'CLOSE_BAG' }), []);

  const addToBag = useCallback(
    (product: Product, size: ProductSize, color: ColorSwatch) => {
      dispatch({ type: 'ADD_TO_BAG', item: { product, size, color, quantity: 1 } });
    },
    []
  );

  const removeFromBag = useCallback(
    (productId: string, size: ProductSize, colorName: string) => {
      dispatch({ type: 'REMOVE_FROM_BAG', productId, size, colorName });
    },
    []
  );

  const updateQty = useCallback(
    (productId: string, size: ProductSize, colorName: string, delta: number) => {
      dispatch({ type: 'UPDATE_QTY', productId, size, colorName, delta });
    },
    []
  );

  const openPdp = useCallback((product: Product) => {
    dispatch({ type: 'OPEN_PDP', product });
  }, []);

  const closePdp = useCallback(() => dispatch({ type: 'CLOSE_PDP' }), []);

  const openMobileNav = useCallback(() => dispatch({ type: 'OPEN_MOBILE_NAV' }), []);
  const closeMobileNav = useCallback(() => dispatch({ type: 'CLOSE_MOBILE_NAV' }), []);

  const showToast = useCallback((message: string) => {
    dispatch({ type: 'SHOW_TOAST', message });
  }, []);

  const bagTotal = state.bagItems.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0
  );
  const bagCount = state.bagItems.reduce((sum, i) => sum + i.quantity, 0);
  const bagFreeShippingProgress = Math.min(
    (bagTotal / FREE_SHIPPING_THRESHOLD) * 100,
    100
  );

  return (
    <StoreContext.Provider
      value={{
        state,
        setTheme,
        openBag,
        closeBag,
        addToBag,
        removeFromBag,
        updateQty,
        openPdp,
        closePdp,
        openMobileNav,
        closeMobileNav,
        showToast,
        bagTotal,
        bagCount,
        bagFreeShippingProgress,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('useStore must be used within StoreProvider');
  return ctx;
}
