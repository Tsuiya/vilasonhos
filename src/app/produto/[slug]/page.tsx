import { MOCK_PRODUCTS } from "@/lib/mock-data";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductClient from "./ProductClient";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = MOCK_PRODUCTS.find((p) => p.slug === slug);
  
  if (!product) {
    return {
      title: "Produto não encontrado | Vila dos Sonhos",
    };
  }

  return {
    title: `${product.name} | Moda Infantil em Ibitinga`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | Vila dos Sonhos`,
      description: product.shortDescription,
      images: [product.images[0]],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = MOCK_PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = MOCK_PRODUCTS.filter(
    (p) => p.categorySlug === product.categorySlug && p.id !== product.id
  ).slice(0, 4);

  return <ProductClient product={product} relatedProducts={relatedProducts} />;
}
