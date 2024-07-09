/* eslint-disable @next/next/no-img-element */
import { RxCross1 } from "react-icons/rx";
import { concertOne, teko } from "@/lib/fonts";
import Link from "next/link";
import { Product } from "@/lib/types";
import styles from "@/components/styles/cart.module.css";
import { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import useCart from "@/hooks/useCart";

export default function Cart({
  products,
  showCart,
  setShowCart,
}: {
  products: Product[];
  showCart: boolean;
  setShowCart: (value: boolean) => void;
}) {
  const total = products.reduce(
    (acc, product) => acc + Number(product.price),
    0
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { removeProduct } = useCart();

  const handlePay = async (cartProducts: Product[]) => {
    setLoading(true);
    setError("");
    try {
      const user = localStorage.getItem("user");
      const userid = user ? JSON.parse(user).id : null;
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartProducts, userid }),
      });

      if (!response.ok) {
        throw new Error("Payment failed");
      }

      const data = await response.json();
      console.log(data);
      window.location.href = data.url;
    } catch (err) {
      console.error(err);
      setError("There was an error processing your payment. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div
        onClick={() => setShowCart(!showCart)}
        className={`${
          showCart ? "visible" : "invisible"
        } fixed flex inset-0 h-screen w-screen bg-black/45 z-[99999] transition-all duration-300`}
      ></div>
      <div
        className={` ${
          showCart
            ? `${styles.slideInLeft} visible`
            : `${styles.slideOutRight} invisible`
        } fixed top-0 bottom-0 right-0 h-screen w-screen md:w-[30%] bg-white z-[99999] p-5 transition-all duration-300 overflow-y-auto`}
      >
        <RxCross1
          className="absolute top-0 right-0 m-4 cursor-pointer size-6"
          onClick={() => setShowCart(!showCart)}
        />
        <h1
          className={`${concertOne.className} flex text-center justify-center items-center text-base font-bold mt-5 uppercase py-2 border-b-[1px] border-black/50`}
        >
          Your cart ({products.length})
        </h1>
        {products.length > 0 ? (
          <div className="flex flex-col w-full gap-2 mt-5">
            {products.map((product) => (
              <span
                key={product.id}
                className="grid grid-cols-12 gap-3 justify-start items-start w-full py-3 border-b-[1px] border-black/10"
              >
                <Link
                  onClick={() => setShowCart(!showCart)}
                  href={`/products/${product.route}`}
                  className="col-span-3 size-20 p-2 bg-[#faf7f0] flex justify-center items-center m-auto"
                >
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-full"
                  />
                </Link>
                <div className="col-span-9 flex flex-col gap-1">
                  <div className="flex flex-row justify-between items-center">
                    <p className={`${teko.className} text-lg font-bold`}>
                      {product.name}
                    </p>
                    <p className={`${concertOne.className} text-xs font-thin`}>
                      ${product.price}.00
                    </p>
                  </div>
                  <p
                    className={`${concertOne.className} text-black/60 text-xs font-thin`}
                  >
                    {product.description}
                  </p>

                  <div className="flex flex-row justify-between items-center">
                    <p className={`${concertOne.className} text-xs font-thin`}>
                      Cantidad: 1
                    </p>
                    <button
                      className="text-red-500 text-xs font-bold"
                      onClick={() => removeProduct(product.id)}
                    >
                      <TrashIcon className="size-3 md:size-4" />
                    </button>
                  </div>
                </div>
              </span>
            ))}
            <h1
              className={`${teko.className} flex flex-row gap-1 justify-center text-center items-center text-xl uppercase`}
            >
              Total a pagar: <span className="font-bold">${total}.00</span>
            </h1>
            <button
              onClick={() => handlePay(products)}
              className="py-2 px-5 bg-[#faf7f0] text-black border border-black/40 font-bold rounded hover:bg-[#fff7e4] transition"
              disabled={loading}
            >
              {loading ? "Procesando..." : "Pagar ahora"}
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <p className={`${concertOne.className} text-xl text-center`}>
              Tu carrito está vacío
            </p>
            <Link href="/category/new-arrivals" onClick={() => setShowCart(false)}>
              <button className="py-2 px-5 bg-[#faf7f0] text-black border border-black/40 font-bold rounded hover:bg-[#fff7e4] transition mt-5">
                Ver productos
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
