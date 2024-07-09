"use server";

import { login, signUp } from "@/fetching/users/users";

export async function authenticate(formData: FormData): Promise<any> {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const authUser = await login(email, password);

    if (!authUser) {
      return { error: "Credenciales invalidas." };
    }

    return { user: authUser };
  } catch (error) {
    console.error("Failed to authenticate:", error);
    return { error: "Something went wrong." };
  }
}

export async function register(formData: FormData): Promise<any> {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const username = formData.get("username") as string;

    const registeredUser = await signUp(email, password, username);

    return { user: registeredUser };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "Something went wrong." };
  }
}
