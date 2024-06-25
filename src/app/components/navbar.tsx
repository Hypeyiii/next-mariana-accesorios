import Link from "next/link";
import { roboto } from "../../styles/fonts";
import Image from "next/image";

export default function Navbar() {
  return (
    <section className="flex flex-row justify-between items-center px-8 py-4 border-b border-black w-screen h-auto">
      <Link href={"/"}>
        <Image
          src="/favicon.ico"
          width={100}
          height={50}
          alt="Mariana accesorios logo"
        />
      </Link>
      <div>
        <Link href={"/new-arrivals"}>
          <p className={roboto.className}>New</p>
        </Link>
      </div>
    </section>
  );
}
