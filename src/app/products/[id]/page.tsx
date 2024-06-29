/* eslint-disable @next/next/no-img-element */

import fetchProductById from "@/app/api/products/fetchProductById";
import { AddButtonCart } from "@/app/components/cartButtons";

export default async function Page({ params }: { params: { id: number } }) {
  const { id } = params;

  const product = await fetchProductById(id);
  if (!product) {
    return (
      <div className="text-black mt-32">
        <h1>Product not found</h1>
      </div>
    );
  }

  return (
    <section className="w-[90%] grid grid-cols-12 gap-4 mt-[73px] h-auto m-auto">
      <div className="flex w-full h-[700px] justify-center items-center col-span-8 bg-[#fffbf4] text-center">
        <img
          src={product.image_url}
          alt={`Imagen del producto ${product.name}`}
          className="w-[400px] h-auto"
        />
      </div>
      <div className="col-span-4 flex flex-col gap-2 h-full mt-12">
        <h1 className="text-xl font-bold">{product.name}</h1>
        <p className="text-lg font-light">${product.price}</p>
        <hr />
        <p className="text-lg font-light">{product.description}</p>
        <span className="flex flex-row gap-2 items-center">
          {product.colors.map((color) => (
            <div
              key={color}
              style={{ backgroundColor: color }}
              className="w-4 h-4 rounded-full mx-1 border-[0.1px] border-black"
            ></div>
          ))}
        </span>
        <AddButtonCart product={product} />
      </div>
    </section>
  );
}
