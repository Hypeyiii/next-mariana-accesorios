"use client";

import { useRouter } from "next/navigation";
import { JSXElementConstructor, useEffect, useState } from "react";
import { useUsers } from "../hooks/useUser";
import { User } from "@/lib/types";

export function withAuth(Component: JSXElementConstructor<any>) {
  return function WithAuth(props: any) {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
      if (typeof window !== "undefined") {
        const storedUser = localStorage.getItem("user");
        setUser(storedUser as User | null);

        if (!storedUser) {
          router.push("/login");
        }
      }
    }, [router]);

    return <Component {...props} />;
  };
}

export function withoutAuth(Component: JSXElementConstructor<any>) {
  return function WithoutAuth(props: any) {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
      if (typeof window !== "undefined") {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
          router.push("/account");
        }
      }
    }, [router]);

    return user ? null : <Component {...props} />;
  };
}

export function forAdmin(Component: JSXElementConstructor<any>) {
  return function ForAdmin(props: any) {
    const router = useRouter();
    const { user } = useUsers();

    useEffect(() => {
      if (user?.role === "user") {
        router.push("/login");
      }
    }, [user, router]);

    return <Component {...props} />;
  };
}
