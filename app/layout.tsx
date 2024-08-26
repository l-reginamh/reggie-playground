import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import "nes.css/css/nes.min.css";

const inter = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reggie's Playground!",
  description: "This is Regina's NextJs Playground!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className }>
        <div className="bg-pixel bg-cover bg-center text-xs">
        {children}
        </div>
      </body>
    </html>
  );
}
