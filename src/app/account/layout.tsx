/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { ChevronRightIcon, ClockIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { useUsers } from "../hooks/useUser";
import { profileRoutes } from "../lib/ui";
import { teko } from "../ui/fonts";

export default function Layout({ children }: { children: React.ReactNode }) {
  const currentPath = usePathname();
  const { user } = useUsers();
  return (
    <>
      <div className="grid grid-cols-10 w-screen h-screen mt-[71px]">
        <section className="col-span-2"></section>
        <div className="w-[20%] p-5 text-black bg-gray-50 md:fixed top-0 md:bottom-0 z-50 left-0 md:mt-[62px]">
          <div className="md:flex flex-row gap-2 m-auto w-full p-5 items-center justify-center hidden shadow shadow-black/70 rounded-full mb-2">
            <img
              src={"https://avatar.iran.liara.run/public/34"}
              alt={`Avatar del usuario ${user?.username}`}
              className="size-10"
            />
            <span className={`${teko.className} text-sm md:text-xl flex flex-col items-center`}>
              {user?.username}
              <p className="text-xs md:text-base font-light text-black/60 flex flex-row gap-1 items-center">
                {/* <ClockIcon className="size-4" />
                {new Date().toLocaleTimeString()} */}
              </p>
            </span>
          </div>
          <ul className="flex flex-col gap-0 md:gap-2 justify-start items-start">
            {profileRoutes.map((item, index) => (
              <Link
                href={item.url}
                key={index}
                className={`${
                  currentPath === item.url && "bg-blue-100 text-blue-600"
                } flex items-center gap-2 cursor-pointer p-1 md:p-3 w-full hover:bg-blue-100 hover:text-blue-600 transition-all rounded-lg relative [&>#arrow]:hover:hidden`}
              >
                <span className="size-4">{item.icon}</span>
                {item.name}
                <ChevronRightIcon
                  id="arrow"
                  className="absolute right-10 m-auto size-4"
                />
              </Link>
            ))}
          </ul>
        </div>
        <div className="col-span-8">{children}</div>
      </div>
    </>
  );
}
