import { db } from "@vercel/postgres";
import bcrypt from "bcrypt";
import { randomUUID } from "crypto";

export default async function signUp(
  email: string,
  password: string,
  username: string
) {
  try {
    const client = await db.connect();
    const role = "user";
    const hashedPassword = await bcrypt.hash(password, 10);
    const emailExists = await client.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );
    if (emailExists.rows.length) {
      throw new Error("Este email ya está en uso.");
    }
    const usernameExists = await client.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );
    if (usernameExists.rows.length) {
      throw new Error("Este nombre de usuario ya está en uso.");
    }
    await client.query(
      "INSERT INTO users (id, email, username, password, role, create_at) VALUES ($1, $2, $3, $4, $5, NOW())",
      [randomUUID(), email, username, hashedPassword, role]
    );
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Algo salió mal.");
  }
}
