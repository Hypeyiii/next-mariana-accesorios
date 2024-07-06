import { ProductList } from "@/app/components/product-list";
import { getFilteredProducts } from "@/app/fetching/products/getProducts";

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;
  const Tcategory = category.toUpperCase().replace("-", " ");
  const filteredProducts = await getFilteredProducts({ category });

  return (
    <>
      <ProductList
        products={filteredProducts}
        category={category}
        Tcategory={Tcategory}
      />
    </>
  );
}
