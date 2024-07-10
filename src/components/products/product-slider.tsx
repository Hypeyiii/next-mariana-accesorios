"use client";

import React, { useRef } from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import Card from "../ui/card";
import { Product } from "@/lib/types";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { concertOne } from "@/lib/fonts";

const ProductSlider = ({
  products,
  title,
}: {
  products: Product[];
  title: string;
}) => {
  const flickingRef = useRef<Flicking | null>(null);
  const handlePrev = () => {
    flickingRef.current?.prev();
  };

  const handleNext = () => {
    flickingRef.current?.next();
  };

  return (
    <>
      <span
        className={`${concertOne.className} mt-24 md:mt-32 text-xl md:text-3xl uppercase text-black flex w-[95%] m-auto p-[10px]`}
      >
        {title}
      </span>
      <div className="slider-container relative">
        <Flicking ref={flickingRef} align="prev" circular={true}>
          {products.map((product: Product) => (
            <div className="w-[50%] md:w-[25%] px-2" key={product.id}>
              <Card {...product} product={product} colors={[]} />
            </div>
          ))}
        </Flicking>
        <button
          className="hover:bg-gray-100 transition-all z-50 absolute left-4 md:left-10 top-1/3 transform bg-[#fff] text-black p-1 md:p-3 shadow-xl rounded-full"
          onClick={handlePrev}
        >
          <ChevronLeftIcon className="size-5 md:size-6" />
        </button>
        <button
          className="hover:bg-gray-100 transition-all z-50 absolute right-4 md:right-10 top-1/3 transform bg-[#fff] text-black p-1 md:p-3 shadow-xl rounded-full"
          onClick={handleNext}
        >
          <ChevronRightIcon className="size-5 md:size-6" />
        </button>
      </div>
    </>
  );
};

export default ProductSlider;
