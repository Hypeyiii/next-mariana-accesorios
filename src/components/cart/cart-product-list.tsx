"use client";

import CartCard from "@/components/cart/cart-card";
import { Product } from "@/lib/types";
import UseCart from "@/hooks/useCart";
import { DeleteButtonCart } from "@/components/ui/card-buttons";
import { IoBagAdd } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";

export default function CartProductsList() {
  const { cartProducts } = UseCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    <div className="w-[90%] m-auto items-center justify-center mt-12 grid grid-cols-4 gap-4">
      {cartProducts.length ? (
        cartProducts.map((product: Product) => (
          <CartCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            image_url={product.image_url}
            colors={product.colors}
            product={product}
            category={product.category}
            created_at={product.created_at}
            button={<DeleteButtonCart productId={product.id} />}
            route={product.route}
            sales={product.sales}
          />
        ))
      ) : (
        <div className="flex flex-col items-center justify-center col-span-4 h-[500px] gap-y-5 w-[50%] md:w-[20%] mx-auto text-black">
          <IoBagAdd className="size-32  opacity-20" />
          <h1 className="text-xl md:text-3xl font-bold  mx-auto text-center">
            Tu carrito parecer estar vacío
          </h1>
          <p className="text-center">Agregue articulos a su carrito</p>
          <Link
            href={"/"}
            className="py-2 px-5 border-[0.5px] border-black hover:bg-black hover:text-white
          transition flex justify-center uppercase font-bold text-center"
          >
            Seguir comprando
          </Link>
        </div>
      )}
      {cartProducts.length > 0 && (
        <div className="col-span-4 flex justify-end mt-4">
          <button
            onClick={() => handlePay(cartProducts)}
            className="py-2 px-5 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Procesando..." : "Pagar ahora"}
          </button>
        </div>
      )}
      {error && (
        <p className="col-span-4 text-red-500 text-center mt-4">{error}</p>
      )}
    </div>
  );
}
