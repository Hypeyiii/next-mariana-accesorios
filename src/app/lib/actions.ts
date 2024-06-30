"use server";

import login from "@/app/api/users/login";
import signUp from "@/app/api/users/signUp";

export async function authenticate(formData: FormData): Promise<string | null> {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const user = await login(email, password);

    if (!user) {
      return "Credenciales invalidas.";
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

    await signUp(email, password);

    return null;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    }
    return "Something went wrong.";
  }
}
