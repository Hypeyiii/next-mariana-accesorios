import { footerData } from "@/app/lib/ui";
import styles from "@/app/components/styles/home.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      {" "}
      <section className="grid grid-cols-12 justify-center w-[100%] m-auto items-center border-t-[0.1px] border-black/30 py-10 md:py-20 gap-5 md:gap-2">
        {footerData.map((section) => (
          <section
            key={section.title}
            className="flex flex-col gap-4 justify-start h-full items-start m-auto col-span-4 md:col-span-2"
          >
            <h2 className="text-sm uppercase font-bold">{section.title}</h2>
            <div className={`flex flex-col gap-2 md:gap-3`}>
              {section.links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className={`${styles.line} text-xs w-fit`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </section>
        ))}
      </section>
      <span className="border-t-[0.1px] border-black/30 py-10 w-[90%] m-auto flex flex-row gap-2 justify-start items-center text-black">
        <div className="flex flex-col gap-2 justify-start items-start w-[80%] md:w-[30%]">
          <h1 className="font-bold text-xl uppercase">M+ Become a member</h1>
          <p className="text-xs font-light">
            Join Mariana Accesorios for free and discover exclusive access to
            our biggest drops, promotions, members-only products, and more
          </p>
        </div>
        <Link
          href="/account/login"
          className="bg-black text-white px-2 md:px-4 py-2 text-xs md:text-base text-center text-nowrap rounded-md"
        >
          Join now
        </Link>
      </span>
    </>
  );
}
