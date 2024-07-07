'use client';

import React, { createContext, useContext, useState } from "react";
import { Product } from "@/app/lib/types";

const CartContext = createContext<any>(null);

export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);

  return (
    <CartContext.Provider value={{ cartProducts, setCartProducts, total, setTotal }}>
      {children}
    </CartContext.Provider>
  );
};
