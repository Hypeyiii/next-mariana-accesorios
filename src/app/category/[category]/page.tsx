import ProductList from "@/app/components/productList";

export default function Page({ params }: { params: { category: string } }) {
  const { category } = params;
  const Tcategory = category.toUpperCase().replace("-", " ");

  return (
    <>
      <ProductList category={category} Tcategory={Tcategory} />
    </>
  );
}
