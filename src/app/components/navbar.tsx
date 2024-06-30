"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { karla } from "@/app/ui/fonts";
import styles from "@/app/components/styles/home.module.css";
import Image from "next/image";
import { navIcons, navRoutes } from "@/app/lib/ui";
import UseCart from "../hooks/useCart";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

export default function Navbar() {
  const currentPath = usePathname();
  const { cartProducts } = UseCart();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <section
      id="navbar"
      className="fixed top-0 duration-500 z-[9999] bg-white flex flex-row justify-between items-center px-3 md:px-8 py-2 border-b border-black w-screen h-auto"
    >
      <div className="flex flex-row gap-4 md:gap-20 items-center">
        <Bars3Icon
          onClick={() => setMenuOpen(!menuOpen)}
          className="cursor-pointer md:hidden size-6"
        />
        <Link href={"/"}>
          <img
            src="/favicon.ico"
            alt="Mariana accesorios logo"
            className="w-20 md:w-24 h-auto"
          />
        </Link>
        <div className="hidden md:flex flex-row gap-4 items-center uppercase font-semibold">
          {navRoutes.map((item) => (
            <Link
              key={item.name}
              href={item.url}
              className={`border-b-[1px] ${
                currentPath === item.url ? "border-black" : "border-transparent"
              }`}
            >
              <p
                className={`text-sm md:text-base uppercase font-bold ${styles.line} ${karla.className}`}
              >
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div
        className={`${
          menuOpen ? "visible" : "invisible"
        } absolute inset-0 h-screen w-screen bg-[#faf7f0] flex items-start justify-start p-5 z-[9999]`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <button className="absolute top-0 right-0 p-5">
          <RxCross1
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer size-6"
          />
        </button>
        <div className="flex flex-col gap-2 items-start h-auto mt-12">
          {navRoutes.map((item) => (
            <Link
              key={item.name}
              href={item.url}
              className={`border-b-[1px] ${
                currentPath === item.url ? "border-black" : "border-transparent"
              }`}
            >
              <p
                className={`text-lg uppercase font-semibold ${styles.line} ${karla.className}`}
              >
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-1 md:gap-2 items-center relative">
        {navIcons.map((item) => (
          <Link key={item.url} href={item.url}>
            <div
              className={`flex items-center border rounded-full p-1 md:p-2 hover:opacity-75 ${
                currentPath === item.url ? "border-black" : `border-transparent`
              }`}
            >
              {item.icon}
            </div>
          </Link>
        ))}
        <div className="absolute text-[10px] px-1 bg-black rounded-full text-white left-[75px] md:left-[110px] top-5">
          {cartProducts.length}
        </div>
      </div>
    </section>
  );
}
