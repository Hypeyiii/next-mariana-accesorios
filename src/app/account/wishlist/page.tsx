'use client';

import Card from "@/app/components/card";
import { AddButtonCart } from "@/app/components/card-buttons";
import { useCart } from "@/app/context/CartContext";
import { Product } from "@/app/lib/types";

export default function Page() {
  const { favProducts } = useCart();
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
            />
          ))}
        </div>
      </span>
    </div>
  );
}
