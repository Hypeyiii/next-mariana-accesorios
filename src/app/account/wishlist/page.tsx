"use client";

import Card from "@/components/ui/card";
import {
  AddButtonCart,
  RemoveFavoriteButton,
} from "@/components/ui/card-buttons";
import { useCart } from "@/context/CartContext";
import { Product } from "@/lib/types";
import Link from "next/link";
import styles from "@/components/styles/button.module.css"
import { teko } from "@/lib/fonts";

export default function Page() {
  const { favProducts } = useCart();

  if (favProducts.length === 0) {
    return (
      <div>
        <h1 className="text-2xl font-semibold">Wishlist</h1>
        <span className="flex flex-col gap-2 justify-center items-center w-full m-auto text-center">
          <h1 className={`${teko.className} text-3xl text-black`}>No tienes productos en tu lista de deseos.</h1>
          <p>Visita nuestros productos mas recientes</p>
          <Link href="/category/new-arrivals">
            <p className={`${styles.buttonHover} border border-black/70`}> Visitar </p>
          </Link>
        </span>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
      <span className="col-span-1">
        <h1 className="text-2xl font-semibold">Wishlist</h1>
      </span>
      <span className="col-span-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {favProducts.map((product: Product) => (
            <Card
              key={product.id}
              {...product}
              product={product}
              button={<AddButtonCart product={product} />}
              favButton={<RemoveFavoriteButton id={product.id} />}
            />
          ))}
        </div>
      </span>
    </div>
  );
}
