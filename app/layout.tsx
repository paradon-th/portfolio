import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit", // ✅ เพิ่ม variable
});
 
const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo", // ✅ เพิ่ม variable
});

export const metadata: Metadata = {
  title: "Portfolio - Paradon",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${outfit.variable} ${ovo.variable} antialiased leading-8 overflow-x-hidden dark:bg-dark-theme dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
