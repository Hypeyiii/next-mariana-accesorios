import Card from "@/app/components/card";
import { AddButtonCart } from "@/app/components/card-buttons";
import Link from "next/link";
import { MdProductionQuantityLimits } from "react-icons/md";
import { categoryTitle } from "../lib/ui";
import { concertOne } from "../ui/fonts";
import { Product } from "../lib/types";

export default function ProductList({
  category,
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
