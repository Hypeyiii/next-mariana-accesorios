import React from "react";
import styles from "@/components/styles/infinite-slider.module.css";
import { teko, karla } from "@/lib/fonts";

const InfiniteSlider = ({ stores }: { stores: string[] }) => {
  return (
    <div className={`${styles.slider} flex items-center justify-center my-16 md:my-24 border-y-[0.1px] border-black`}>
      <div className={styles.sliderContent}>
        <div
          className={`${styles.item} ${teko.className} font-bold uppercase text-4xl`}
        >
          OUR STORES
        </div>
        {stores.map((store, index) => (
          <div
            className={`${styles.item} ${karla.className} font-medium text-xs md:text-base uppercase`}
            key={index}
          >
            {store}
          </div>
        ))}
      </div>
      <div className={styles.sliderContent}>
        <div
          className={`${styles.item} ${teko.className} font-bold uppercase text-4xl`}
        >
          OUR STORES
        </div>
        {stores.map((store, index) => (
          <div
            className={`${styles.item} ${karla.className} font-medium text-xs md:text-base uppercase`}
            key={index}
          >
            {store}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
