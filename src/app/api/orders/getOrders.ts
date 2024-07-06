import { Order } from "@/app/lib/types";
import { db } from "@vercel/postgres";

export async function getOrders() {
  try {
    const client = await db.connect();

    const data = await client.query(`SELECT * FROM orders`);

    const orders = data.rows as Order[];

    return orders;
  } catch (err) {
    return [];
  }
}
