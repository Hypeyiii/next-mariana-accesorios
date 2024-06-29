"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { karla } from "@/styles/fonts";
import styles from "@/app/components/styles/home.module.css";
import Image from "next/image";
import { navIcons, navRoutes } from "@/data/ui";
import UseCart from "../hooks/useCart";

export default function Navbar() {
  const currentPath = usePathname();
  const {cartProducts} = UseCart();
  return (
    <section
      id="navbar"
      className="fixed top-0 duration-500 z-[9999] bg-white flex flex-row justify-between items-center px-8 py-2 border-b border-black w-screen h-auto"
    >
      <Link href={"/"}>
        <Image
          src="/favicon.ico"
          width={100}
          height={50}
          alt="Mariana accesorios logo"
        />
      </Link>
      <div className="flex flex-row gap-4 items-center uppercase">
        {navRoutes.map((item) => (
          <Link
            key={item.name}
            href={item.url}
            className={`border-b-[1px] ${
              currentPath === item.url ? "border-black" : "border-transparent"
            }`}
          >
            <p
              className={`text-sm md:text-base uppercase font-semibold ${styles.line} ${karla.className}`}
            >
              {item.name}
            </p>
          </Link>
        ))}
      </div>
      <div className="flex flex-row gap-2 items-center relative">
        {navIcons.map((item) => (
          <Link key={item.url} href={item.url}>
            <div
              className={`flex items-center border rounded-full p-2 hover:opacity-75 ${
                currentPath === item.url
                  ? "border-black"
                  : `border-transparent`
              }`}
            >
              {item.icon}
            </div>
          </Link>
        ))}
        <div className="absolute text-[10px] px-1 bg-black rounded-full text-white left-[110px] top-5">
          {cartProducts.length}
        </div>
      </div>
    </section>
  );
}
