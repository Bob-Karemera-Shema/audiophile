import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Header from "@/components/sections/header";
import "./globals.css";
import Footer from "@/components/shared/footer";
import Categories from "@/components/shared/categories";
import About from "@/components/sections/about";

const manrope = Manrope({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Audiophile Shop",
  description: "Bringing you the best audio gear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} antialiased`}
      >
        <Header />
        <main className="max-w-5xl my-0 mx-6 lg:mx-auto">
          {children}
          <About />
        </main>
        <Footer />
      </body>
    </html>
  );
}
