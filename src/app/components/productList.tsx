import Card from "@/app/components/card";
import fetchProducts from "@/app/api/products/fetchProducts";
import { AddButtonCart } from "@/app/components/cartButtons";
import Link from "next/link";
import { MdProductionQuantityLimits } from "react-icons/md";

export default function ProductList({ category }: { category: string }) {
  const getFilteredProducts = async () => {
    const allProducts = await fetchProducts();
    const Tcategory = category.toLowerCase();

    if (category === "new-arrivals") {
      const newProducts = allProducts.filter((product) => {
        const date = new Date(product.created_at);
        const today = new Date();
        const diffTime = Math.abs(today.getTime() - date.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays <= 7;
      });
      return newProducts;
    } else {
      const filteredProducts =
        Tcategory === "all"
          ? allProducts
          : allProducts.filter(
              (product: { category: string }) =>
                product.category.toLowerCase() === Tcategory
            );
      return filteredProducts;
    }
  };

  const renderProductList = async () => {
    try {
      const products = await getFilteredProducts();

      return products.length > 0 ? (
        <div className="w-[90%] m-auto items-center justify-center mt-12 grid grid-cols-4 gap-4">
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
    } catch (error) {
      console.error("Error fetching products:", error);
      return null;
    }
  };

  return renderProductList();
}
