/* eslint-disable @next/next/no-img-element */
"use client";

import { Product } from "@/lib/types";
import Link from "next/link";

export default function CartCard({
  image_url,
  name,
  description,
  product,
  button,
  price,
}: Product & { product: Product, button: JSX.Element}) {

  return (
    <>
      <span className="flex flex-col gap-2 items-start justify-start col-span-2 md:col-span-1 h-[250px] md:h-fit">
        <div className="bg-[#fffbf4] relative p-4 shadow-md w-full m-auto flex justify-center items-center h-[150px] md:h-[500px] hover:shadow-lg hover:shadow-black/50 transition-all group hover:translate-x-1 hover:-translate-y-1">
          <Link href={`/products/${product.route}`} className="w-[150px] md:w-[300px] h-auto">
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
          <h3 className="text-xs md:text-base font-semibold">${price}.00 MX</h3>
        </div>
      </span>
    </>
  );
}
