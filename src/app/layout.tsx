import type { Metadata } from "next";
import "./globals.css";
import { Archivo } from "next/font/google"

const archivo = Archivo({
  display: "swap",
  weight: 'variable',
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "HeatBlastee",
  description: "Blaze Fire from Within",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-stone-200 text-stone-900 ${archivo.variable} font-sans`}>{children}</body>
    </html>
  );
}
