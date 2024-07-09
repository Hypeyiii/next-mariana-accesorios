import { Order } from "@/lib/types";
import { db } from "@vercel/postgres";

export async function getOrders(): Promise<Order[]> {
  try {
    const client = await db.connect();

    const data = await client.query(`SELECT * FROM orders`);

    const orders = data.rows as Order[];

    return orders;
  } catch (err) {
    return [];
  }
}

export async function getOrderByUserId(id: string) {
  try {
    const client = await db.connect();

    const data = await client.query(`SELECT * FROM orders WHERE user_id = $1`, [
      id,
    ]);

    const orders = data.rows as Order[];

    return orders;
  } catch (err) {
    return [];
  }
}
