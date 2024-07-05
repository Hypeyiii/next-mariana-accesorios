"use client";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { karla, teko } from "../ui/fonts";

export default function Filters({ filters, setFilters }: any) {
  const [showSort, setShowSort] = useState<boolean>(false);

  const sortFilters = [
    "Top Match",
    "Best sellers",
    "New arrivals",
    "Price: Low to High",
    "Price: High to Low",
  ];

  return (
    <div className="flex flex-row justify-between w-full items-center col-span-4 my-6 md:my-12">
      <span></span>
      <span
        className="relative flex flex-row gap-1 items-center cursor-pointer"
        onClick={() => setShowSort(!showSort)}
      >
        <p className={`${teko.className} font-bold text-base md:text-2xl`}>
          Ordenar por: {filters.sort}
        </p>
        <ChevronDownIcon
          className={`${showSort ? "rotate-180" : ""} size-3 md:size-5 transition-all`}
        />
        <div
          className={`${
            showSort ? "block" : "hidden"
          } absolute bg-white w-fit h-auto uppercase shadow shadow-black top-10 right-0 z-10`}
        >
          {sortFilters.map((filter) => (
            <p
              key={filter}
              onClick={() => {
                setFilters({ ...filters, sort: filter });
                setShowSort(false);
              }}
              className={`${
                filters.sort === filter
                  ? "bg-gray-200 font-extrabold opacity-100"
                  : "opacity-60"
              } ${
                karla.className
              } flex flex-row justify-between items-center text-nowrap text-xs md:text-base p-2 md:p-3 hover:bg-gray-200 hover:opacity-100 cursor-pointer`}
            >
              {filter}
              <CheckIcon
                className={`${
                  filters.sort === filter ? "block" : "hidden"  
                } size-3 md:size-5 inline ml-2`}
              />
            </p>
          ))}
        </div>
      </span>
    </div>
  );
}
