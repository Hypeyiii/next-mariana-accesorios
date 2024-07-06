import { db } from "@vercel/postgres";
import { Product } from "@/app/lib/types";

export default async function getProducts(): Promise<Product[]> {
  try {
    const client = await db.connect();

    const result = await client.query("SELECT * FROM products");

    const products = result.rows as Product[];

    return products;
  } catch (error) {
    return [];
  }
}

export async function getLatestProducts(): Promise<Product[]> {
  try {
    const client = await db.connect();

    const result = await client.query(
      "SELECT * FROM products ORDER BY created_at DESC LIMIT 12"
    );

    const products = result.rows as Product[];

    return products;
  } catch (error) {
    return [];
  }
}

export async function getBestSellerProducts(): Promise<Product[]> {
  try {
    const client = await db.connect();

    const result = await client.query(
      "SELECT * FROM products ORDER BY sales DESC LIMIT 12"
    );

    const products = result.rows as Product[];

    return products;
  } catch (error) {
    return [];
  }
}

export const getFilteredProducts = async ({
  category,
}: {
  category: string;
}) => {
  const allProducts = await getProducts();
  const Tcategory = category.toLowerCase();

  if (category === "new-arrivals") {
    const newProducts = await getLatestProducts();
    return newProducts;
  } else if (category === "best-seller") {
    const bestSellers = await getBestSellerProducts();
    return bestSellers;
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

export async function getProductById(id: string): Promise<Product | null> {
  try {
    const client = await db.connect();

    const result = await client.query(
      "SELECT * FROM products WHERE route = $1",
      [id]
    );

    const product = result.rows[0] as Product;

    if (!product) {
      console.log("No product found with the given id");
      return null;
    }

    console.log("Product received:", product);

    return product;
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return null;
  }
}
