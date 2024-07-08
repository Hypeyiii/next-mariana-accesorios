"use client";

import { Product } from "@/app/lib/types";
import UseCart from "@/app/hooks/useCart";
import { BiTrash } from "react-icons/bi";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

export function AddButtonCart({ product }: { product: Product }) {
  const { handleCart } = UseCart();
  return (
    <button
      onClick={() => handleCart(product)}
      className="text-[9px] md:text-base bg-black w-fit text-white px-1 md:px-2 py-1 rounded-full mt-0 md:mt-4"
    >
      <ShoppingBagIcon className="size-3 md:size-4" />
    </button>
  );
}

export function AddtoCartProduct({ product }: { product: Product }) {
  const { handleCart } = UseCart();
  return (
    <button
      onClick={() => handleCart(product)}
      className="text-[9px] md:text-base bg-black w-fit text-white px-1 md:px-2 py-1 rounded-full mt-0 md:mt-4 flex flex-row gap-1 items-center"
    >
      <ShoppingBagIcon className="size-3 md:size-4" />
      Añadir al carrito
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
