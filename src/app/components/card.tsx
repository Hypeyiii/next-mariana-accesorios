/* eslint-disable @next/next/no-img-element */
"use client";

import { Product } from "@/app/lib/types";
import Link from "next/link";
// import UseCart from "../hooks/useCart";

export default function Card({
  image_url,
  name,
  price,
  description,
  product,
  colors,
  button,
}: Product & { product: Product, button: JSX.Element}) {

  // const { cartProducts } = UseCart();

  // const isOnCart = cartProducts.some((item: { id: number; }) => item.id === product.id);

  return (
    <>
      <span className="flex flex-col gap-2 items-start justify-start col-span-2 md:col-span-1 h-[250px] md:h-fit">
        <div className="bg-[#fffbf4] relative p-4 shadow-md w-full m-auto flex justify-center items-center h-[150px] md:h-[500px] hover:shadow-lg hover:shadow-black/50 transition-all group hover:translate-x-1 hover:-translate-y-1">
          <Link href={`/products/${product.id}`} className="w-[150px] md:w-[300px] h-auto">
            <img
              src={image_url}
              alt={name}
              className="w-full h-full object-cover"
            />
          </Link>
          <div className="absolute bottom-4 right-4 transition-all md:hidden group-hover:block">
            {button}
          </div>
        </div>
        <div className="p-2">
          <h3 className="text-xs md:text-base font-semibold">{name}</h3>
          <p className="text-xs text-gray-500">{description}</p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-xs md:text-sm font-semibold">${price}</span>
          </div>
        </div>
        {colors.length > 0 && (
          <div className="flex justify-center items-center cursor-pointer">
            {colors.map((color) => (
              <div
                key={color}
                style={{ backgroundColor: color }}
                className="size-3 md:size-4 rounded-full mx-1 border-[0.1px] border-black/50"
              ></div>
            ))}
          </div>
        )}
      </span>
    </>
  );
}
