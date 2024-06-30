import { db } from "@vercel/postgres";
import bcrypt from "bcrypt";
import { randomUUID } from "crypto";

export default async function signUp(email: string, password: string) {
  try {
    const client = await db.connect();
    const hashedPassword = await bcrypt.hash(password, 10);
    const emailExists = await client.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );
    if (emailExists.rows.length) {
      throw new Error("Este email ya está en uso.");
    }
    await client.query(
      "INSERT INTO users (id, email, password, created_at) VALUES ($1, $2, $3, NOW())",
      [randomUUID(), email, hashedPassword]
    );
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Algo salió mal.");
  }
}
