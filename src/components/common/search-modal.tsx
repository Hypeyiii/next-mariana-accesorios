/* eslint-disable @next/next/no-img-element */
import { teko, concertOne } from "@/lib/fonts";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";
import styles from "@/components/styles/search-modal.module.css";

export default function SearchModal({
  products,
  showSearch,
  setShowSearch,
}: {
  products: any[];
  showSearch: boolean;
  setShowSearch: (value: boolean) => void;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const randomNumber = Math.floor(Math.random() * products.length);

  useEffect(() => {
    setFilteredProducts(
      products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, products]);

  const topCategories = [
    { name: "Hoop Earrings", url: "/category/earrings" },
    { name: "Necklaces", url: "/category/necklace" },
    { name: "Bracelets", url: "/category/bracelets" },
    { name: "Rings", url: "/category/rings" },
    { name: "Anklets", url: "/category/anklets" },
  ];

  return (
    <div
      className={`${
        showSearch ? `${styles.fadeIn} visible` : `${styles.fadeOut} invisible`
      } fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[9999] mt-[60px] md:mt-[70px] border-t border-black transition-all duration-300`}
    >
      <div className="w-screen m-auto h-[92%] md:h-[75%] bg-white shadow-lg p-4 relative overflow-y-auto">
        <RxCross2
          onClick={() => setShowSearch(!showSearch)}
          className="absolute top-4 right-4 size-6 text-gray-500 cursor-pointer"
        />
        <div
          className="flex flex-col items-start justify-center mt-16 w-[80%] md:w-[50%] m-auto z-[9999]"
          onClick={() => setShowSearch(true)}
        >
          <input
            type="text"
            placeholder="Qué estás buscando?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`${teko.className} w-full h-12 border-b-[0.5px] border-black font-light text-2xl p-2 active:outline-none focus:outline-none`}
          />
          <p
            className={`${concertOne.className} text-xs font-normal text-black/50`}
          >
            Busca productos por su nombre o categoría.
          </p>
        </div>
        <div
          className={`${
            searchTerm.length === 0 ? "flex" : "hidden"
          } flex-col items-start justify-center mt-12 w-[80%] md:w-[50%] m-auto`}
        >
          <h2 className={`${teko.className} text-2xl font-thin`}>
            Categorías populares
          </h2>
          <div
            className="flex flex-col items-start justify-center mt-1 w-full"
            onClick={() => setShowSearch(!showSearch)}
          >
            {topCategories.map((category) => (
              <Link
                href={category.url}
                key={category.name}
                className={`${teko.className} hover:opacity-70 transition-all uppercase text-xl font-normal text-black/65`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
        <div
          onClick={() => setShowSearch(!showSearch)}
          className={`${
            searchTerm.length === 0 ? "hidden" : "grid"
          } grid-cols-4 gap-2 md:gap-4 items-start justify-start mt-12 w-[80%] md:w-[50%] m-auto`}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="col-span-2 md:col-span-1 flex flex-col gap-1 m-auto"
              >
                <div className="w-full h-[125px] md:h-[200px] m-auto p-2 bg-[#fffbf4]">
                  <Link
                    href={`/products/${product.route}`}
                    className="w-[100px] md:w-[300px] h-auto m-auto"
                  >
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-auto"
                    />
                  </Link>
                </div>
                <h3 className="text-[6px] md:text-xs font-semibold">
                  {product.name}
                </h3>
                <p className="text-[7px] text-gray-500">
                  {product.description}
                </p>
              </div>
            ))
          ) : (
            <div className="col-span-4 text-center flex flex-col items-center justify-center w-full">
              <h3 className="text-2xl font-thin">
                No se encontraron resultados
              </h3>
              <p className="text-xs text-black/50">
                Intenta buscar un producto.
              </p>
              Por ejemplo: {products[randomNumber].name}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
