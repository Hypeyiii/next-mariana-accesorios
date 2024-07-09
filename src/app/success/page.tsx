import Link from "next/link";
import { teko } from "@/lib/fonts";
import styles from "@/app/components/styles/button.module.css";

export default function Page() {
  return (
    <div className="flex flex-col h-screen text-center items-center justify-center w-[90%] m-auto gap-2">
      <h1 className={`${teko.className} text-2xl md:text-5xl text-black`}>
        Hemos recibido tu compra con éxito 🎉
      </h1>
      <p className={`${teko.className} text-xl md:text-3xl text-black/80`}>
        Mariana accesorios te agradece por la compra en nuestra tienda
      </p>
      <h2 className={`${teko.className} text-base md:text-xl text-black`}>
        Puedes ver tu lista de ordenes en la sección de{" "}
        <Link href={"/account"} className="underline">
          cuenta
        </Link>
      </h2>
      <Link
        href="/"
        className={`${styles.buttonHover} border border-black text-xs`}
      >
        Volver al inicio
      </Link>
    </div>
  );
}
