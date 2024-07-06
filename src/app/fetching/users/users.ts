import { db } from "@vercel/postgres";
import { User } from "@/app/lib/types";
import bcrypt from "bcrypt";
import { randomUUID } from "crypto";

export async function getUsers(): Promise<User[]> {
  try {
    const client = await db.connect();

    const data = await client.query("SELECT * FROM users");

    const users = data.rows as User[];

    return users;
  } catch (error) {
    return [];
  }
}

export async function getLatestUsers(): Promise<User[]> {
  try {
    const client = await db.connect();

    const data = await client.query(
      "SELECT * FROM users ORDER BY created_at DESC LIMIT 5"
    );

    const users = data.rows as User[];

    return users;
  } catch (error) {
    return [];
  }
}

export async function getUserById(id: string): Promise<User | null> {
  try {
    const client = await db.connect();

    const result = await client.query("SELECT * FROM users WHERE id = $1", [
      id,
    ]);

    const user = result.rows[0] as User;

    return user;
  } catch (error) {
    return null;
  }
}

export async function login(email: string, password: string) {
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

export async function signUp(
  email: string,
  password: string,
  username: string
): Promise<User | null> {
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
      "INSERT INTO users (id, email, username, password, role) VALUES ($1, $2, $3, $4, $5)",
      [randomUUID(), email, username, hashedPassword, role]
    );

    const result = await client.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    const user = result.rows[0] as User;

    return user;
  } catch (error) {
    console.error("Error en el registro:", error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Algo salió mal.");
  }
}

export async function deleteUser(id: string): Promise<boolean> {
  try {
    const client = await db.connect();
    await client.query("DELETE FROM users WHERE id = $1", [id]);
    return true;
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    return false;
  }
}

export async function searchUsers({
  search,
}: {
  search: string;
}): Promise<User[]> {
  try {
    const client = await db.connect();
    const result = await client.query(
      "SELECT * FROM users WHERE username LIKE $1 OR email LIKE $1",
      [`%${search}%`]
    );
    const users = result.rows as User[];
    return users;
  } catch (error) {
    console.error("Error al buscar usuarios:", error);
    return [];
  }
}
