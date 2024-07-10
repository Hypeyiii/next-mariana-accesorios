/* eslint-disable @next/next/no-img-element */
"use client";

import { Product } from "@/lib/types";
import Link from "next/link";
import { useState } from "react";
import Cart from "@/components/cart/cart";
import UseCart from "@/hooks/useCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Card({
  image_url,
  name,
  price,
  description,
  product,
  colors,
  button,
  favButton,
}: Product & {
  product: Product;
  button?: JSX.Element;
  favButton?: JSX.Element;
}) {
  const [showCart, setShowCart] = useState<boolean>(false);
  const { cartProducts } = UseCart();

  const notify = () => {
    toast("Añadido a la lista de deseos!", {
      autoClose: 2000,
      style: {
        backgroundColor: "#faf7f0",
        color: "#000",
      },
      progressStyle: {
        backgroundColor: "#000",
      },
    });
  };

  return (
    <>
      <Cart
        products={cartProducts}
        showCart={showCart}
        setShowCart={setShowCart}
      />
      <span className="flex flex-col gap-2 items-start justify-start col-span-2 md:col-span-1 h-[300px] md:h-[600px]">
        <ToastContainer />
        <div className="bg-[#faf7f0] relative p-4 shadow-sm w-full m-auto flex justify-center items-center h-[200px] md:h-[400px] hover:shadow-lg hover:shadow-black/50 transition-all group hover:translate-x-1 hover:-translate-y-1">
          <Link
            href={`/products/${product.route}`}
            className="w-[150px] md:w-[300px] h-auto"
          >
            <img
              src={image_url}
              alt={name}
              className="w-full h-full object-cover"
            />
          </Link>
          <div
            className="absolute bottom-4 right-4 transition-all md:hidden group-hover:block active:scale-90"
            onClick={() => setShowCart(true)}
          >
            {button}
          </div>
          <div
            className="absolute bottom-4 right-10 md:right-14 transition-all md:hidden group-hover:block active:scale-90"
            onClick={notify}
          >
            {favButton}
          </div>
        </div>
        <div className="p-2 flex flex-col gap-2">
          <h3 className="text-[10px] md:text-base font-semibold text-pretty">{name}</h3>
          <p className="text-[10px] md:text-sm text-gray-500 text-pretty">{description}</p>
          <div className="flex justify-between items-center">
            <span className="text-[10px] md:text-sm font-semibold">${price}</span>
          </div>
          {colors.length > 0 && (
            <div className="flex justify-start items-center cursor-pointer">
              {colors.map((color) => (
                <div
                  key={color}
                  style={{ backgroundColor: color }}
                  className="size-3 md:size-4 rounded-full mx-1 border-[0.1px] border-black/50"
                ></div>
              ))}
            </div>
          )}
        </div>
      </span>
    </>
  );
}
