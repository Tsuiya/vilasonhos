import { CATEGORIES, MOCK_PRODUCTS } from "@/lib/mock-data";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryClient from "./CategoryClient";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);
  
  if (!category) {
    return {
      title: "Categoria não encontrada | Vila dos Sonhos",
    };
  }

  return {
    title: `${category.name} | Moda Infantil em Ibitinga | Vila dos Sonhos`,
    description: category.description,
    openGraph: {
      title: `${category.name} | Moda Infantil em Ibitinga`,
      description: category.description,
      images: [category.image],
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  // Filter products by this category
  // For 'promocoes', we might filter differently, but for simplicity here we assume categorySlug logic
  const products = slug === 'promocoes' 
    ? MOCK_PRODUCTS.filter(p => p.originalPrice) 
    : MOCK_PRODUCTS.filter((p) => p.categorySlug === slug);

  return <CategoryClient category={category} initialProducts={products} />;
}
