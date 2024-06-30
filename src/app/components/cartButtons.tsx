"use client";

import { Product } from "@/app/lib/types";
import UseCart from "@/app/hooks/useCart";
import { BiTrash } from "react-icons/bi";

export function AddButtonCart({ product }: { product: Product }) {
  const { handleCart } = UseCart();
  return (
    <button
      onClick={() => handleCart(product)}
      className="text-[9px] md:text-base bg-black text-white px-1 md:px-2 py-1 rounded-md mt-0 md:mt-4"
    >
      Add to Cart
    </button>
  );
}

export function DeleteButtonCart({ productId }: { productId: number }) {
  const { removeProduct } = UseCart();
  return (
    <button
      onClick={() => removeProduct(productId)}
      className="bg-black text-white px-2 py-1 rounded-md mt-4 hover:text-red-300"
    >
      <BiTrash />
    </button>
  );
}

export function RemoveAllButtonCart() {
  const { clearCart } = UseCart();
  return (
    <button
      onClick={() => clearCart()}
      className="bg-black text-white px-2 py-1 rounded-md mt-4"
    >
      Clear Cart
    </button>
  );
}
