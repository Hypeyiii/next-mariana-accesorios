import { db } from "@vercel/postgres";
import bcrypt from "bcrypt";
import { randomUUID } from "crypto";

export default async function signUp(email: string, password: string) {
  try {
    const client = await db.connect();
    const hashedPassword = await bcrypt.hash(password, 10);
    await client.query(
      "INSERT INTO users (id, email, password, created_at) VALUES ($1, $2, $3, NOW())",
      [randomUUID(), email, hashedPassword]
    );
  } catch (error) {
    console.error("Failed to sign up:", error);
    throw new Error("Failed to sign up.");
  }
}
