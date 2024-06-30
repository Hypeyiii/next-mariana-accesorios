import { Product } from "@/app/lib/types";
import { db } from "@vercel/postgres";

export default async function fetchProductById(id: string): Promise<Product | null> {
  try {
    const client = await db.connect();

    const result = await client.query("SELECT * FROM products WHERE route = $1", [
      id,
    ]);

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
