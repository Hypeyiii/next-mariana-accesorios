import { db } from "@vercel/postgres";
import { Product } from "@/data/types";

export default async function fetchProducts(): Promise<Product[]> {
  try {
    const client = await db.connect();

    const result = await client.query("SELECT * FROM products");

    const products = result.rows as Product[];

    return products;
  } catch (error) {
    return [];
  }
}
