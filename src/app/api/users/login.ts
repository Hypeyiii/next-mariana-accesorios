import { db } from "@vercel/postgres";
import bcrypt from "bcrypt";

export default async function login(email: string, password: string) {
  try {
    const client = await db.connect();
    const result = await client.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    const user = result.rows[0];
    if (!user) return null;
    const passwordsMatch = await bcrypt.compare(password, user.password);

    if (passwordsMatch) return user;
  } catch (error) {
    console.error("Failed to log in:", error);
    throw new Error("Failed to log in.");
  }
}
