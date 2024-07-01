"use client";
import { DashboardNav } from "../components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div className="w-screen h-full md:h-screen md:overflow-auto grid grid-cols-12 m-auto mt-16 text-black bg-white">
      <DashboardNav />
      {children}
    </div>
  );
}
