import { db } from "@vercel/postgres";
import { Product } from "@/data/types";

export async function fetchProducts(): Promise<Product[]> {
  try {
    const client = await db.connect();

    const result = await client.query("SELECT * FROM products");

    const products = result.rows as Product[];

    return products;
  } catch (error) {
    return [];
  }
}

export async function fetchProductById(id: number): Promise<Product | null> {
  try {
    const client = await db.connect();

    const result = await client.query("SELECT * FROM products WHERE id = $1", [
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

// export async function fetchID(): Promise<Product | null> {
//   try {
//     const client = await db.connect();

//     const result = await client.query("SELECT * FROM products WHERE id = 1");

//     const product = result.rows[0] as Product;

//     if (!product) {
//       console.log("No product found with the given id");
//       return null;
//     }

//     return product;
//   } catch (error) {
//     console.error("Failed to fetch product:", error);
//     return null;
//   }
// }
