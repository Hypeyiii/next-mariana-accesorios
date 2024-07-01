import { db } from "@vercel/postgres";
import { User } from "@/app/lib/types";

export default async function getLatestUsers(): Promise<User[]> {
  try {
    const client = await db.connect();

    const data = await client.query(
      "SELECT * FROM users ORDER BY create_at DESC LIMIT 5"
    );

    const users = data.rows as User[];

    return users;
  } catch (error) {
    return [];
  }
}
