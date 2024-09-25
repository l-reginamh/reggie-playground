import type { Metadata, Viewport } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import "nes.css/css/nes.min.css";
import SiteMenu from "@/components/SiteMenu";
import { Providers } from "@/components/Providers";
import { cn } from "@/lib/utils";

const inter = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reggie's Playground!",
  description: "This is Regina's NextJs Playground!",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} className="scroll-pt-[3.5rem]">
      <head>
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <Providers>
          <div className="flex flex-col">
            <SiteMenu />
            <div className="w-full p-5">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
