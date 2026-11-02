import { renderHook, act } from '@testing-library/react';
import { StoreProvider, useStore } from './store';
import type { Product } from '@/lib/data';

const mockProduct: Product = {
  id: '1',
  name: 'Test Product',
  brand: 'Test Brand',
  price: 100,
  category: 'Men',
  subcategory: 'Shoes',
  colors: [{ name: 'Black', image: '/black.jpg', inStock: true }],
  sizes: ['M', 'L'],
  description: 'A test product',
  features: ['Feature 1'],
};

describe('Store Bag Calculations', () => {
  it('should calculate bag total correctly for empty bag', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <StoreProvider>{children}</StoreProvider>
    );

    const { result } = renderHook(() => useStore(), { wrapper });

    expect(result.current.bagTotal).toBe(0);
    expect(result.current.discountAmount).toBe(0);
    expect(result.current.finalTotal).toBe(0);
    expect(result.current.bagCount).toBe(0);
  });

  it('should calculate bag total correctly for single item', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <StoreProvider>{children}</StoreProvider>
    );

    const { result } = renderHook(() => useStore(), { wrapper });

    act(() => {
      result.current.addToBag(mockProduct, 'M', mockProduct.colors[0]);
    });

    expect(result.current.bagTotal).toBe(100);
    expect(result.current.bagCount).toBe(1);
    expect(result.current.discountAmount).toBe(0);
    expect(result.current.finalTotal).toBe(100);
  });

  it('should calculate bag total correctly for multiple items', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <StoreProvider>{children}</StoreProvider>
    );

    const { result } = renderHook(() => useStore(), { wrapper });

    const product2 = { ...mockProduct, id: '2', price: 50 };

    act(() => {
      result.current.addToBag(mockProduct, 'M', mockProduct.colors[0]);
      result.current.addToBag(product2, 'L', product2.colors[0]);
    });

    expect(result.current.bagTotal).toBe(150);
    expect(result.current.bagCount).toBe(2);
  });

  it('should correctly calculate quantity updates', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <StoreProvider>{children}</StoreProvider>
    );

    const { result } = renderHook(() => useStore(), { wrapper });

    act(() => {
      result.current.addToBag(mockProduct, 'M', mockProduct.colors[0]);
      result.current.updateQty(mockProduct.id, 'M', 'Black', 2);
    });

    // initial 1 + delta 2 = 3 items, price 100 each
    expect(result.current.bagTotal).toBe(300);
    expect(result.current.bagCount).toBe(3);
  });

  it('should calculate discount properly when applied', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <StoreProvider>{children}</StoreProvider>
    );

    const { result } = renderHook(() => useStore(), { wrapper });

    act(() => {
      result.current.addToBag(mockProduct, 'M', mockProduct.colors[0]);
      result.current.applyDiscount();
    });

    expect(result.current.bagTotal).toBe(100);
    expect(result.current.discountApplied).toBeUndefined(); // we didn't expose this, but we can check values
    expect(result.current.discountAmount).toBe(10); // 10% of 100
    expect(result.current.finalTotal).toBe(90);
  });

  it('should handle zero price products if any', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <StoreProvider>{children}</StoreProvider>
    );

    const { result } = renderHook(() => useStore(), { wrapper });

    const freeProduct = { ...mockProduct, id: 'free', price: 0 };

    act(() => {
      result.current.addToBag(freeProduct, 'M', freeProduct.colors[0]);
    });

    expect(result.current.bagTotal).toBe(0);
    expect(result.current.bagCount).toBe(1);
    expect(result.current.discountAmount).toBe(0);
    expect(result.current.finalTotal).toBe(0);
  });
});
