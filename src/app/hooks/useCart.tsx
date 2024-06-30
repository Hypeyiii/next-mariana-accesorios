'use client';

import { Product } from "@/app/lib/types";
import { useEffect } from "react";
import { useCart } from "../context/CartContext";

export default function UseCart() {
  const { cartProducts, setCartProducts } = useCart();

  const getAllStorageProducts = (): Product[] => {
    try {
      const storedProducts = localStorage.getItem("cart");
      if (storedProducts) {
        return JSON.parse(storedProducts);
      } else {
        return [];
      }
    } catch (error) {
      console.error("Error retrieving products from localStorage:", error);
      return [];
    }
  };

  const updateLocalStorage = (products: Product[]): void => {
    localStorage.setItem("cart", JSON.stringify(products));
  };

  useEffect(() => {
    const storedProducts = getAllStorageProducts();
    setCartProducts(storedProducts);
  }, [setCartProducts]);

  const handleCart = (product: Product) => {
    setCartProducts((prev: Product[]) => {
      if (prev.some((item: Product) => item.id === product.id)) {
        return prev;
      }
      const newProducts = [...prev, product];
      updateLocalStorage(newProducts);
      return newProducts;
    });
  };

  const removeProduct = (productId: number) => {
    setCartProducts((prev: Product[]) => {
      const filteredProducts = prev.filter(
        (product: Product) => product.id !== productId
      );
      updateLocalStorage(filteredProducts);
      return filteredProducts;
    });
  };

  const clearCart = () => {
    setCartProducts([]);
    localStorage.removeItem("cart");
  };

  return {
    handleCart,
    removeProduct,
    clearCart,
    cartProducts,
  };
}
