"use client";

import CartCard from "@/app/components/cart-card";
import { Product } from "@/app/lib/types";
import UseCart from "@/app/hooks/useCart";
import { DeleteButtonCart } from "./card-buttons";
import { IoBagAdd } from "react-icons/io5";
import Link from "next/link";

export default function CartProductsList() {
  const { cartProducts } = UseCart();

  return (
    <div className="w-[90%] m-auto items-center justify-center mt-12 grid grid-cols-4 gap-4">
      {cartProducts.length ? (
        cartProducts.map((product: Product) => (
          <CartCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            image_url={product.image_url}
            colors={product.colors}
            product={product}
            category={product.category}
            created_at={product.created_at}
            button={<DeleteButtonCart productId={product.id} />}
            route={product.route}
            sales={product.sales}
          />
        ))
      ) : (
        <div className="flex flex-col items-center justify-center col-span-4 h-[500px] gap-y-5 w-[50%] md:w-[20%] mx-auto text-black">
          <IoBagAdd className="size-32  opacity-20" />
          <h1 className="text-xl md:text-3xl font-bold  mx-auto text-center">
            Tu carrito parecer estar vacío
          </h1>
          <p className="text-center">Agregue articulos a su carrito</p>
          <Link
            href={"/"}
            className="py-2 px-5 border-[0.5px] border-black hover:bg-black hover:text-white
          transition flex justify-center uppercase font-bold text-center"
          >
            Seguir comprando
          </Link>
        </div>
      )}
    </div>
  );
}
