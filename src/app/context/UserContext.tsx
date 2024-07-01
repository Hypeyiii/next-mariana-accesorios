"use client";

import React, { createContext, useContext, useState } from "react";
import { User } from "@/app/lib/types";

const UserContext = createContext<any>(null);

export const UseUser = () => useContext(UserContext);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
