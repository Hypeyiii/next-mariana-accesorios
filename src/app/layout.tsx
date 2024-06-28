import type { Metadata } from "next";
import { inter } from "@/styles/fonts";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: "Mariana Accesorios",
  description:
    "Mariana Accesorios | Everyday Fine Jewelry | Online Jewelry Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
