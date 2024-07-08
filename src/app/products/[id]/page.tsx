/* eslint-disable @next/next/no-img-element */
import { getProductById } from "@/app/fetching/products/getProducts";
import { AddtoCartProduct } from "@/app/components/card-buttons";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const product = await getProductById(id);
  if (!product) {
    return (
      <div className="text-black mt-32">
        <h1>Product not found</h1>
      </div>
    );
  }

  return (
    <section className="w-screen md:w-[90%] grid grid-cols-12 gap-4 mt-[61px] md:mt-[73px] h-auto m-auto">
      <div className="flex w-full h-[300px] md:h-[700px] justify-center items-center col-span-12 md:col-span-8 bg-[#fffbf4] text-center">
        <img
          src={product.image_url}
          alt={`Imagen del producto ${product.name}`}
          className="w-[400px] h-auto"
        />
      </div>
      <div className="col-span-12 md:col-span-4 flex flex-col gap-2 h-full mt-12 p-4 md:p-0">
        <h1 className="text-base md:text-xl font-bold">{product.name}</h1>
        <p className="text-xs md:text-lg font-light">${product.price}</p>
        <hr />
        <p className="text-sm md:text-lg font-light">{product.description}</p>
        <span className="flex flex-row md:gap-2 items-center">
          {product.colors.map((color) => (
            <div
              key={color}
              style={{ backgroundColor: color }}
              className="w-4 h-4 rounded-full mx-1 border-[0.1px] border-black"
            ></div>
          ))}
        </span>
        <AddtoCartProduct product={product} />
      </div>
    </section>
  );
}
