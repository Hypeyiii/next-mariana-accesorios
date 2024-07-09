"use client";

import React, { useRef, useState, useEffect } from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import Card from "../ui/card";
import { AddButtonCart, RemoveFavoriteButton } from "../ui/card-buttons";
import { Product } from "@/lib/types";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

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
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#91911c] text-white p-2 rounded-full"
        onClick={handlePrev}
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#91911c] text-white p-2 rounded-full"
        onClick={handleNext}
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default ProductSlider;
