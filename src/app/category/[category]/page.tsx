import ProductList from "@/app/components/productList";

export default function Page({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;

  return <ProductList category={category} />;
}
