"use server";

import login from "@/app/api/users/login";
import signUp from "@/app/api/users/signUp";

export async function authenticate(formData: FormData): Promise<string | null> {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const user = await login(email, password);

    if (!user) {
      return "Invalid credentials.";
    }

    return null;
  } catch (error) {
    console.error("Failed to authenticate:", error);
    return "Something went wrong.";
  }
}

export async function register(formData: FormData): Promise<string | null> {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Lógica para registrar un nuevo usuario
    await signUp(email, password);

    return null; // Registro exitoso
  } catch (error) {
    console.error("Failed to sign up:", error);
    return "Failed to sign up."; // Mensaje de error personalizado si falla el registro
  }
}
