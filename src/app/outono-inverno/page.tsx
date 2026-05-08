import { Metadata } from "next";
import OutonoInvernoClient from "./OutonoInvernoClient";
import { WINTER_PRODUCTS } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Coleção Outono Inverno | Vila dos Sonhos",
  description: "Roupinhas quentinhas, lindas e acessíveis para os dias frios. Compre pijamas, moletons e jaquetas infantis em Ibitinga/SP.",
  openGraph: {
    title: "Coleção Outono Inverno | Vila dos Sonhos",
    description: "Roupinhas quentinhas e acessíveis para os dias frios.",
    images: ["/hero-inverno.png"],
  }
};

export default function OutonoInvernoPage() {
  // Passamos os produtos sazonais como prop
  return <OutonoInvernoClient products={WINTER_PRODUCTS} />;
}
