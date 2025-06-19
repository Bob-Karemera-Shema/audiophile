import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import NavigationWrapper from "@/components/shared/navigationWrapper";
import "./globals.css";

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
        <header className="bg-black">
          <NavigationWrapper />
        </header>
        {children}
      </body>
    </html>
  );
}
