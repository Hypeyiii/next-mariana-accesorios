"use client";

import { Product } from "@/lib/types";
import { useEffect, useCallback } from "react";
import { useCart } from "@/context/CartContext";

export default function UseCart() {
  const { cartProducts, setCartProducts, favProducts, setFavProducts } =
    useCart();

  const getStorageProducts = useCallback((key: string): Product[] => {
    try {
      const storedProducts = localStorage.getItem(key);
      return storedProducts ? JSON.parse(storedProducts) : [];
    } catch (error) {
      console.error(
        `Error retrieving products from localStorage (${key}):`,
        error
      );
      return [];
    }
  }, []);

  const updateLocalStorage = useCallback(
    (key: string, products: Product[]): void => {
      localStorage.setItem(key, JSON.stringify(products));
    },
    []
  );

  useEffect(() => {
    const storedCartProducts = getStorageProducts("cart");
    setCartProducts(storedCartProducts);
    const storedFavProducts = getStorageProducts("fav");
    setFavProducts(storedFavProducts);
  }, [getStorageProducts, setCartProducts, setFavProducts]);

  const handleCart = useCallback(
    (product: Product) => {
      setCartProducts((prev: Product[]) => {
        if (prev.some((item: Product) => item.id === product.id)) {
          return prev;
        }
        const newProducts = [...prev, product];
        updateLocalStorage("cart", newProducts);
        return newProducts;
      });
    },
    [setCartProducts, updateLocalStorage]
  );

  const removeProduct = useCallback(
    (productId: number) => {
      setCartProducts((prev: Product[]) => {
        const filteredProducts = prev.filter(
          (product: Product) => product.id !== productId
        );
        updateLocalStorage("cart", filteredProducts);
        return filteredProducts;
      });
    },
    [setCartProducts, updateLocalStorage]
  );

  const handleFavorite = useCallback(
    (product: Product) => {
      setFavProducts((prev: Product[]) => {
        if (prev.some((item: Product) => item.id === product.id)) {
          return prev;
        }
        const newProducts = [...prev, product];
        updateLocalStorage("fav", newProducts);
        return newProducts;
      });
    },
    [setFavProducts, updateLocalStorage]
  );

  const removeFavorite = useCallback(
    (productId: number) => {
      setFavProducts((prev: Product[]) => {
        const filteredProducts = prev.filter(
          (product: Product) => product.id !== productId
        );
        updateLocalStorage("fav", filteredProducts);
        return filteredProducts;
      });
    },
    [setFavProducts, updateLocalStorage]
  );

  const clearCart = useCallback(() => {
    setCartProducts([]);
    localStorage.removeItem("cart");
  }, [setCartProducts]);

  return {
    handleCart,
    removeProduct,
    clearCart,
    cartProducts,
    handleFavorite,
    removeFavorite,
    favProducts,
  };
}
