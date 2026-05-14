"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

const QuickViewContext =
  createContext<any>(null);

export const QuickViewProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  const [
    quickViewProduct,
    setQuickViewProduct,
  ] = useState<any>(null);

  return (

    <QuickViewContext.Provider
      value={{
        quickViewProduct,
        setQuickViewProduct,
      }}
    >

      {children}

    </QuickViewContext.Provider>

  );
};

export const useQuickView = () => {

  const context =
    useContext(QuickViewContext);

  if (!context) {

    throw new Error(
      "useQuickView must be used inside provider"
    );

  }

  return context;
};