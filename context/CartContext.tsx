"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext<any>(null);

export const CartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  const [cartItems, setCartItems] = useState<any[]>([]);

  /* Load Cart */
  useEffect(() => {

    const storedCart = localStorage.getItem("cart");

    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }

  }, []);

  /* Save Cart */
  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems)
    );

  }, [cartItems]);

  /* Add To Cart */
  const addToCart = (product: any) => {

    const existingItem = cartItems.find(
      (item) => item.id === product.id
    );

    if (existingItem) {

      const updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? {
              ...item,
              qty: item.qty + 1,
            }
          : item
      );

      setCartItems(updatedCart);

    } else {

      setCartItems([
        ...cartItems,
        {
          ...product,
          qty: 1,
        },
      ]);

    }

  };

  /* Remove */
  const removeFromCart = (id: number) => {

    setCartItems(
      cartItems.filter(
        (item) => item.id !== id
      )
    );

  };

  /* Increase */
  const increaseQty = (id: number) => {

    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: item.qty + 1,
            }
          : item
      )
    );

  };

  /* Decrease */
  const decreaseQty = (id: number) => {

    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              qty:
                item.qty > 1
                  ? item.qty - 1
                  : 1,
            }
          : item
      )
    );

  };

  return (

    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
      }}
    >

      {children}

    </CartContext.Provider>

  );
};

export const useCart = () =>
  useContext(CartContext);