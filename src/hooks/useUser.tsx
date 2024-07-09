"use client";

import { useEffect } from "react";
import { UseUser } from "@/context/UserContext";
import { User } from "@/lib/types";
import { useRouter } from "next/navigation";

export const useUsers = () => {
  const { user, setUser } = UseUser();
  const router = useRouter();

  const setUserWithLocalStorage = (newUser: User | null) => {
    setUser(newUser);
    if (typeof window !== "undefined") {
      if (newUser) {
        localStorage.setItem("user", JSON.stringify(newUser));
      } else {
        localStorage.removeItem("user");
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser && !user) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, [user, setUser]);

  const clearUser = () => {
    router.push("/login");
    setUserWithLocalStorage(null);
  };

  return {
    user,
    setUser: setUserWithLocalStorage,
    clearUser,
  };
};
