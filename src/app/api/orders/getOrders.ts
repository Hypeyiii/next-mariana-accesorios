import { db } from "@vercel/postgres";

export async function getOrders() {
  const client = await db.connect();
  try {
    const result = await client.query(`SELECT * FROM orders`);
    return result.rows;
  } catch (err) {
    throw err;
  } finally {
    client.release();
  }
}
