import { ReactNode } from "react";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image_url: string;
  category: string;
  created_at: Date;
  colors: string[];
  route: string;
  sales: number;
}

export interface TBreadCrumbProps {
  homeElement: ReactNode;
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  capitalizeLinks?: boolean;
}

export interface User {
  id: string;
  email: string;
  password: string;
  username: string;
  role: string;
  created_at?: Date;
}

export interface Order {
  id: string;
  status: string;
  userid: string;
  amount: number;
  created_at?: Date;
}
