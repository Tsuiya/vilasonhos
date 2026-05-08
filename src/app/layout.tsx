import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import TrackingProvider from "@/components/TrackingProvider";
import CookieBanner from "@/components/CookieBanner";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Vila dos Sonhos | Moda Infantil em Ibitinga",
  description: "Roupinhas infantis lindas, confortáveis e com preço que cabe no bolso. Moda do dia a dia para crianças de 1 a 10 anos em Ibitinga/SP.",
  keywords: ["moda infantil", "roupas para crianças", "Ibitinga", "Vila dos Sonhos", "roupas de bebê", "vestido infantil", "conjunto infantil"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${nunito.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground">
        <Suspense fallback={null}>
          <TrackingProvider />
        </Suspense>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
