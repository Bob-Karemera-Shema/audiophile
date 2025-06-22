import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Header from "@/components/sections/header";
import Footer from "@/components/shared/footer";
import "./globals.css";
import StoreProvider from "@/utils/store/storeProvider";

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap'
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
        <StoreProvider>
            <Header />
            <main className="max-w-6xl my-0 mx-6 lg:mx-auto">
              {children}
            </main>
            <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
