import React from "react";
import styles from "@/app/components/styles/infinite-slider.module.css";
import { teko, karla } from "@/app/ui/fonts";

const InfiniteSlider = ({ stores }: { stores: string[] }) => {
  return (
    <div className={`${styles.slider} my-16 md:my-32 border-y-[0.1px] border-black`}>
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
