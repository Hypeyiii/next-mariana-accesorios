/* eslint-disable @next/next/no-img-element */
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { lusitana, concertOne, teko } from "@/app/ui/fonts";
import styles from "@/app/components/styles/home.module.css";
import { dashboardNav, navIcons, navRoutes } from "@/app/lib/ui";
import UseCart from "../hooks/useCart";
import {
  Bars3Icon,
  ChartBarSquareIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useUsers } from "../hooks/useUser";
import Image from "next/image";
import SearchModal from "./search-modal";
import { BiSearchAlt } from "react-icons/bi";

export function Navbar({ products }: { products: any[] }) {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const currentPath = usePathname();
  const { cartProducts } = UseCart();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { user } = useUsers();

  return (
    <>
      <SearchModal
        products={products}
        showSearch={showSearch}
        setShowSearch={setShowSearch}
      />
      <section
        id="navbar"
        className="fixed top-0 duration-500 z-[9999] bg-white flex flex-row justify-between items-center px-3 md:px-8 py-2 shadow shadow-black/40 w-screen h-auto"
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
                  currentPath === item.url
                    ? "border-black"
                    : "border-transparent"
                }`}
              >
                <p
                  className={`text-sm md:text-xl uppercase font-bold ${styles.line} ${teko.className}`}
                >
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
        {/* MOBILE MENU */}
        <div
          className={`${
            menuOpen
              ? `${styles.slideInRight} visible`
              : `${styles.slideOutLeft} invisible`
          } absolute inset-0 h-screen w-screen bg-[#faf7f0] overflow-y-auto flex flex-col items-start justify-start p-5 z-[9999] transition-all duration-500`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <button className="absolute top-0 right-0 p-5">
            <RxCross1
              onClick={() => setMenuOpen(!menuOpen)}
              className="cursor-pointer size-6"
            />
          </button>
          <div className="flex flex-col gap-2 w-full items-start h-auto mt-12 pb-8 border-b-[0.1px] border-black">
            {navRoutes.map((item) => (
              <Link
                key={item.name}
                href={item.url}
                className={`flex flex-row justify-between items-center w-full ${
                  currentPath === item.url ? "opacity-100" : "opacity-65"
                }`}
              >
                <p
                  className={`text-2xl uppercase font-bold ${styles.line} ${concertOne.className}`}
                >
                  {item.name}
                </p>
                <ChevronRightIcon className="size-6" />
              </Link>
            ))}
          </div>
          <div className="flex gap-1 py-8 border-b-[0.1px] border-black w-full">
            <ul className={`${lusitana.className} flex flex-col gap-4 text-sm`}>
              <li>Stores & prices</li>
              <li>Contact us</li>
              <li>About us</li>
              <li>Join us</li>
            </ul>
          </div>
          <span className="py-8 w-full m-auto flex flex-col gap-2 justify-start items-center text-black">
            <div className="flex flex-col gap-2 justify-start items-start">
              <h1 className="font-bold text-xl uppercase">
                M+ Become a member
              </h1>
              <p className="text-xs font-light">
                Join Mariana Accesorios for free and discover exclusive access
                to our biggest drops, promotions, members-only products, and
                more
              </p>
            </div>
            <Link
              href="/account/login"
              className="bg-black text-white w-full px-2 md:px-4 py-2 text-xs md:text-base text-center text-nowrap"
            >
              Join now
            </Link>
            <p
              className={`${lusitana.className} flex flex-row justify-center items-center gap-1 w-full text-xs`}
            >
              Eres nuevo en Mariana Accesorios?{" "}
              <Link href="/account/singup" className="underline">
                {" "}
                Registrate{" "}
              </Link>
            </p>
          </span>
        </div>
        {/* MOBILE MENU END */}
        <div className="flex flex-row gap-2 items-center relative">
          <div
            onClick={() => setShowSearch(!showSearch)}
            className={`flex items-center rounded-full hover:opacity-75 cursor-pointer`}
          >
            <BiSearchAlt />
          </div>
          {navIcons.map((item) => (
            <Link key={item.url} href={item.url}>
              <div
                className={`flex items-center border rounded-full hover:opacity-75 ${
                  currentPath === item.url
                    ? "border-black"
                    : `border-transparent`
                }`}
              >
                {item.icon}
              </div>
            </Link>
          ))}
          {user?.role === "admin" && (
            <Link href={"/dashboard"}>
              <ChartBarSquareIcon className="cursor-pointer size-4" />
            </Link>
          )}
          <div className="absolute text-[10px] px-1 bg-black rounded-full text-white left-[60px] top-4">
            {cartProducts.length}
          </div>
        </div>
      </section>
    </>
  );
}

export function DashboardNav() {
  const currentPath = usePathname();
  return (
    <div className="w-screen md:w-[15%] p-5 text-black bg-gray-50 md:fixed top-0 md:bottom-0 z-50 left-0 md:mt-[62px]">
      <div className="md:flex m-auto w-full p-5 items-center justify-center hidden">
        <Image
          src="/favicon.ico"
          width={150}
          height={150}
          alt="Logo del negocio"
        />
      </div>
      <ul className="flex flex-col gap-0 md:gap-2 justify-start items-start">
        {dashboardNav.map((item, index) => (
          <Link
            href={item.url}
            key={index}
            className={`${
              currentPath === item.url && "bg-blue-100 text-blue-600"
            } flex items-center gap-2 cursor-pointer p-1 md:p-3 w-full hover:bg-blue-100 hover:text-blue-600 transition-all rounded-lg relative [&>#arrow]:hover:hidden`}
          >
            {item.icon}
            {item.name}
            <ChevronRightIcon
              id="arrow"
              className="absolute right-10 m-auto size-4"
            />
          </Link>
        ))}
      </ul>
    </div>
  );
}
