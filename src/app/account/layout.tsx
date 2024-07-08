/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUsers } from "../hooks/useUser";
import { profileRoutes } from "../lib/ui";
import { teko } from "../ui/fonts";

export default function Layout({ children }: { children: React.ReactNode }) {
  const currentPath = usePathname();
  const { user } = useUsers();
  return (
    <>
      <div className="h-screen w-full m-auto flex flex-col gap-4 mt-[71px] px-20 py-10 bg-[#faf7f0]">
        <p className={`${teko.className} uppercase text-2xl md:text-5xl text-black`}>Mi perfil</p>
        <div className="w-full text-black border-b-[0.1px] border-black pb-12">
          <ul className="flex flex-row w-full gap-0 md:gap-2 justify-start items-start">
            {profileRoutes.map((item, index) => (
              <Link
                href={item.url}
                key={index}
                className={`${
                  currentPath === item.url ? "border-black" : "border-transparent"
                } flex items-center text-xs md:text-sm gap-2 cursor-pointer p-1 md:p-3 w-fit border bg-black/10 hover:bg-black/60 hover:text-white hover:border-gray-100 transition-all`}
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
