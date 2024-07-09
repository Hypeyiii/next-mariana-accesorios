import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import "./globals.css";
import { Navbar } from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import { CartProvider } from "@/context/CartContext";
import { UserProvider } from "@/context/UserContext";
import getProducts from "@/fetching/products/getProducts";

export const metadata: Metadata = {
  title: "Mariana Accesorios",
  description:
    "Mariana Accesorios | Everyday Fine Jewelry | Online Jewelry Shop",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const products = await getProducts();
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <CartProvider>
            <Navbar products={products} />
            {children}
            <Footer />
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
