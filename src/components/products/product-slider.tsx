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
    <span className={`${concertOne.className} text-xl md:text-3xl uppercase text-black flex w-[95%] m-auto`}>
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
          gap={20}
        >
          {products.map((product: Product) => (
            <div className="flicking-panel" key={product.id}>
              <Card {...product} product={product} />
            </div>
          ))}
        </Flicking>
        <button
          className="slider-buttons invisible md:visible absolute left-0 top-1/2 transform bg-[#aaaa2f] text-white p-1 md:p-2 rounded-full"
          onClick={handlePrev}
        >
          <ChevronLeftIcon className="size-3 md:size-5" />
        </button>
        <button
          className="slider-buttons invisible md:visible absolute right-0 top-1/2 transform bg-[#aaaa2f] text-white p-1 md:p-2 rounded-full"
          onClick={handleNext}
        >
          <ChevronRightIcon className="size-3 md:size-5" />
        </button>
      </div>
    </>
  );
};

export default ProductSlider;
