"use client";

import React, { useRef, useState, useEffect } from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import Card from "../ui/card";
import { Product } from "@/lib/types";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { concertOne } from "@/lib/fonts";

const ProductSlider = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const flickingRef = useRef<Flicking | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div>Obteniendo productos destacados...</div>;
  }

  const handlePrev = () => {
    flickingRef.current?.prev();
  };

  const handleNext = () => {
    flickingRef.current?.next();
  };

  return (
    <>
    <span className={`${concertOne.className} mt-24 md:mt-32 text-xl md:text-3xl uppercase text-black flex w-[95%] m-auto p-[10px]`}>
      Productos destacados
    </span>
      <div className="slider-container relative">
        <Flicking
          ref={flickingRef}
          align="prev"
          circular={true}
          onMoveEnd={(e) => {
            console.log(e);
          }}
          gap={100}
        >
          {products.map((product: Product) => (
            <div className="w-[50%] md:w-[25%] px-2 md:px-5" key={product.id}>
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
