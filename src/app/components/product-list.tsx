/* eslint-disable @next/next/no-img-element */
"use client";
import Card from "@/app/components/card";
import { AddButtonCart } from "@/app/components/card-buttons";
import Link from "next/link";
import { MdProductionQuantityLimits } from "react-icons/md";
import { categoryTitle } from "../lib/ui";
import { concertOne, teko } from "../ui/fonts";
import { Product } from "../lib/types";
import { useState, useEffect } from "react";

export function ProductList({
  Tcategory,
  products,
}: {
  category: string;
  Tcategory: string;
  products: Product[];
}) {
  const categoryHeader = categoryTitle.find(
    (header) => header.title === Tcategory
  );
  return products.length > 0 ? (
    <div className="w-[90%] m-auto items-center justify-center mt-12 grid grid-cols-4 gap-4">
      <div className="flex flex-col gap-2 col-span-4">
        <h1 className={`${concertOne.className} text-lg md:text-5xl font-bold`}>
          {categoryHeader?.title}
        </h1>
        <p className="text-xs md:text-lg">{categoryHeader?.description}</p>
      </div>
      {products.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          image_url={product.image_url}
          colors={product.colors}
          product={product}
          category={product.category}
          created_at={product.created_at}
          button={<AddButtonCart product={product} />}
          route={product.route}
        />
      ))}
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center h-[500px] gap-y-4 w-full col-span-4 mx-auto text-black">
      <MdProductionQuantityLimits className="size-32 opacity-20" />
      <h1 className="text-xl md:text-3xl font-bold mx-auto text-center">
        Lo sentimos!
      </h1>
      <p className="text-center">
        No se han encontrado productos para esta categoría
      </p>
      <Link
        href={"/"}
        className="py-2 px-5 border-[0.5px] border-black hover:bg-black hover:text-white transition flex justify-center uppercase font-bold text-center"
      >
        Seguir comprando
      </Link>
    </div>
  );
}

export function AllProducts({ products = [] }: { products: Product[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  useEffect(() => {
    setFilteredProducts(
      products.filter(
        (user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, products]);

  return (
    <div className="col-span-12 w-full flex flex-col gap-2">
      <span className="flex flex-row justify-between items-center">
        <h1
          className={`${teko.className} text-lg md:text-2xl font-bold uppercase`}
        >
          All Products
        </h1>
        <input
          type="text"
          placeholder="Busca productos por nombre y categoria"
          className={`${teko.className} px-4 py-2 rounded-lg border border-gray-100 text-gray-400 w-2/3 md:w-2/4`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </span>
      <div className="col-span-5 text-white bg-gray-50 rounded-lg p-2 md:p-5">
        <table className="min-w-full text-center bg-white p-5 rounded-lg">
          <thead>
            <tr className="text-black text-[8px] md:text-xs uppercase">
              <th className="py-4 px-4 border-b hidden md:table-cell">Id</th>
              <th className="py-4 px-4 border-b">Producto</th>
              <th className="py-4 px-4 border-b">Nombre</th>
              <th className="py-4 px-4 border-b">Categoria</th>
              <th className="py-4 px-4 border-b hidden md:table-cell">
                Creación
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product: Product) => (
              <tr
                key={product.id}
                className="border-b text-black hover:bg-gray-100 hover:text-black/70 cursor-pointer"
              >
                <td className="text-[10px] py-4 px-4 md:text-xs hidden md:table-cell">
                  {product.id}
                </td>
                <td className="py-4 px-4 flex items-center">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <div>
                    <p className="text-[9px] md:text-sm font-semibold hidden md:block">
                      {product.name}
                    </p>
                  </div>
                </td>
                <td className="text-[10px] py-4 px-4 md:text-xs">
                  {product.description}
                </td>
                <td className="text-[10px] py-4 px-4 md:text-xs">
                  {product.category}
                </td>
                <td className="text-[10px] py-4 px-4 md:text-xs hidden md:table-cell">
                  {product.created_at?.toString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}