import { db } from "@vercel/postgres";
import { User } from "@/app/lib/types";

export default async function getUsers(): Promise<User[]> {
  try {
    const client = await db.connect();

    const data = await client.query("SELECT * FROM users");

    const users = data.rows as User[];

    return users;
  } catch (error) {
    return [];
  }
}
