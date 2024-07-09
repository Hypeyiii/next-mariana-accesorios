import { teko, lusitana } from "@/lib/fonts";
import Link from "next/link";
import styles from "@/components/styles/search-modal.module.css";

export function NoLogin({
  showAccountModal,
  setShowAccountModal,
}: {
  showAccountModal: boolean;
  setShowAccountModal: (showAccount: boolean) => void;
}) {
  return (
    <div
      onMouseLeave={() => setShowAccountModal(false)}
      onClick={() => setShowAccountModal(false)}
      className={`${
        showAccountModal
          ? `${styles.fadeIn} visible`
          : `${styles.fadeOut} invisible`
      } absolute flex flex-col gap-3 right-0 top-[36px] md:top-[45px] w-[200px] md:w-[325px] p-4 md:p-8 bg-[#faf7f0] h-auto transition-all duration-400 shadow shadow-black/70`}
    >
      <h1
        className={`${teko.className} text-lg md:text-3xl text-black uppercase`}
      >
        Descubre todas las novedades de Mariana accesorios
      </h1>
      <h2 className={`${teko.className} text-black/70 text-base md:text-xl`}>
        One account to shop personalized recommendations and exclusive products.
        Plus, get priority sale access, free shipping every Monday, and more.
      </h2>
      <Link
        href="/login"
        className={`p-2 text-xs md:text-base flex justify-center items-center m-auto w-full text-center bg-black text-white transition-all uppercase`}
      >
        Sign in
      </Link>
      <p
        className={`${lusitana.className} text-xs md:text-base text-black/90 flex flex-row gap-1 text-center items-center`}
      >
        No tienes cuenta?{" "}
        <Link href={"/register"} className="underline">
          Registrare
        </Link>
      </p>
    </div>
  );
}

export function Login({
  showAccountModal,
  setShowAccountModal,
  user,
  clearUser,
}: {
  showAccountModal: boolean;
  setShowAccountModal: (showAccount: boolean) => void;
  user: { username: string };
  clearUser: () => void;
}) {
  return (
    <div
      onMouseLeave={() => setShowAccountModal(false)}
      onClick={() => setShowAccountModal(false)}
      className={`${
        showAccountModal
          ? `${styles.fadeIn} visible`
          : `${styles.fadeOut} invisible`
      } absolute flex flex-col gap-3 right-0 top-[36px] md:top-[45px] w-[200px] md:w-[325px] p-8 bg-[#faf7f0] h-auto transition-all duration-400 shadow shadow-black/70`}
    >
      <h1
        className={`${teko.className} text-xl md:text-3xl text-black uppercase`}
      >
        Welcome back {user.username}
      </h1>
      <Link
        href="/account"
        className={`${lusitana.className} text-sm text-black/90 flex flex-row gap-1 items-center w-full text-center transition-all`}
      >
        Mi perfil
      </Link>
      <Link
        href="/account/wishlist"
        className={`${lusitana.className} text-sm text-black/90 flex flex-row gap-1 items-center w-full text-center transition-all`}
      >
        Mi lista de deseos
      </Link>
      <Link
        href="/account/orders"
        className={`${lusitana.className} text-sm text-black/90 flex flex-row gap-1 items-center w-full text-center transition-all`}
      >
        Mis ordenes
      </Link>
      <button
        onClick={() => clearUser()}
        className={`${lusitana.className} text-sm text-black/90 flex flex-row gap-1 items-center w-full text-center transition-all`}
      >
        Cerrar sesión
      </button>
    </div>
  );
}
