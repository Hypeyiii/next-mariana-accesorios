import Image from "next/image";
import Link from "next/link";
import { teko } from "@/styles/fonts";
import styles from "@/app/components/button.module.css";
import { firstSection } from "@/data/ui";

export default function Home() {
  return (
    <>
      <main className="flex items-center justify-center relative mt-16">
        <Image
          src="/summer-desktop.jpg"
          alt="Summer Campaign"
          className="w-screen h-auto"
          width={768}
          height={432}
          sizes="(max-width: 768px) 100vw, 768px"
        />
        <span className="absolute bottom-0 w-full flex flex-col gap-2 items-center justify-center text-white p-8">
          <h1 className={`text-7xl uppercase font-bold ${teko.className}`}>
            Colección de verano
          </h1>
          <p className="text-lg">
            Descubre nuestra nueva colección de verano con los mejores
            accesorios para ti.
          </p>
          <Link href="/new-arrivals">
            <p className={`${styles.buttonHover}`}>Comprar ahora</p>
          </Link>
        </span>
      </main>
      <section className="grid grid-cols-6 w-full border-[1px] border-black">
        {firstSection.map((item) => (
          <Link
            href={item.href}
            key={item.name}
            className="col-span-1 relative [&>h2]:hover:bg-black [&>h2]:hover:text-white transition-all cursor-pointer border-r-[0.5px] border-black"
          >
            <img src={item.image} alt={item.name} />
            <h2
              className={`absolute bottom-0 left-0 p-4 uppercase w-full transition-all duration-300 font-bold`}
            >
              {item.name}
            </h2>
          </Link>
        ))}
      </section>
    </>
  );
}
