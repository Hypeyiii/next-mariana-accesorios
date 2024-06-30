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
}