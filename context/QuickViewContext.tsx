"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  sale_price?: number;
  front_image: string;
  short_description?: string;
};

type QuickViewContextType = {
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product) => void;
};

const QuickViewContext = createContext<
  QuickViewContextType | undefined
>(undefined);

export function QuickViewProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  return (
    <QuickViewContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
      }}
    >
      {children}
    </QuickViewContext.Provider>
  );
}

export function useQuickView() {

  const context = useContext(QuickViewContext);

  if (!context) {
    throw new Error(
      "useQuickView must be used inside provider"
    );
  }

  return context;
}