/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from "react";
import styles from "@/app/components/styles/product-slider.module.css";
import { Product } from "../lib/types";

const ProductSlider = ({ products }: { products: Product[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < products.length - 5) {
      setCurrentIndex(currentIndex + 5);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        {products
          .slice(currentIndex, currentIndex + 5)
          .map((product, index) => (
            <div className={styles.product} key={index}>
              <img
                src={product.image_url}
                alt={product.name}
                className={styles.productImage}
              />
              <p>{product.name}</p>
            </div>
          ))}
      </div>
      <button className={styles.nextButton} onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default ProductSlider;
