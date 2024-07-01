"use client";
import { DashboardNav } from "../components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div className="w-full h-screen overflow-y-auto grid grid-cols-12 m-auto mt-16 text-black bg-white">
      <DashboardNav />
      {children}
    </div>
  );
}
