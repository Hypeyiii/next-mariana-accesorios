/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { teko } from "@/app/ui/fonts";
import styles from "@/app/components/styles/button.module.css";
import { firstSection } from "@/app/lib/ui";

export default function Home() {
  return (
    <>
      <main className="flex items-center justify-center relative mt-[61px] md:mt-0">
        <img
          src="/summer-desktop.jpg"
          alt="Summer Campaign"
          className="w-screen h-[400px] md:h-screen object-cover"
        />
        <span className="absolute bottom-0 w-full flex flex-col gap-2 items-center justify-center text-white p-8 text-center">
          <h1 className={`text-3xl md:text-7xl uppercase font-bold ${teko.className}`}>
            Colección de verano
          </h1>
          <p className="text-sm md:text-lg">
            Descubre nuestra nueva colección de verano con los mejores
            accesorios para ti.
          </p>
          <Link href="/category/new-arrivals">
            <p className={`${styles.buttonHover}`}>Comprar ahora</p>
          </Link>
        </span>
      </main>
      <section className="grid grid-cols-6 w-full border-0 border-t-[0.1px] md:border-t-0 md:border-[1px] border-black">
        {firstSection.map((item) => (
          <Link
            href={item.href}
            key={item.name}
            className="col-span-3 md:col-span-1 relative [&>h2]:hover:bg-black [&>h2]:hover:text-white transition-all cursor-pointer border-b-[0.5px] md:border-b-0 border-r-[0.5px] border-black"
          >
            <img src={item.image} alt={item.name} />
            <h2
              className={`absolute text-xs md:text-base bottom-0 left-0 p-2 md:p-4 uppercase w-full transition-all duration-300 font-medium md:font-bold`}
            >
              {item.name}
            </h2>
          </Link>
        ))}
      </section>
    </>
  );
}
