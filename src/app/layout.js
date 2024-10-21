import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Promo Car",
  description: "Regístrate y participa en nuestro sorteo exclusivo para clientes en Bogotá",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col items-center justify-center p-2 pb-20 gap-16 sm:p-12 font-[family-name:var(--font-geist-sans)]">
          <Header />
          <main className="flex gap-8 justify-center items-center w-full sm:items-start">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
