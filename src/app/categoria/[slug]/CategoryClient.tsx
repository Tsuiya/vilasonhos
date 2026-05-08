"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/lib/mock-data";
import { MessageCircle, SlidersHorizontal, ChevronDown, X, ShoppingBag } from "lucide-react";
import { trackViewCategory, trackWhatsAppClick } from "@/lib/tracking";
import { useEffect } from "react";

interface CategoryClientProps {
  category: { slug: string; name: string; description: string; image: string };
  initialProducts: Product[];
}

type SortOption = "recentes" | "menor-preco" | "maior-preco" | "populares";

export default function CategoryClient({ category, initialProducts }: CategoryClientProps) {
  const [products] = useState<Product[]>(initialProducts);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>("recentes");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const availableBrands = ["Kyly", "Malwee", "Elian", "ReiRex"];
  const availableSizes = ["1", "2", "3", "4", "6", "8", "10", "P", "M", "G"];
  const whatsappNumber = "5516991802984";

  useEffect(() => {
    trackViewCategory(category.name);
  }, [category]);

  const handleWhatsAppHelp = () => {
    trackWhatsAppClick("Category Help Button", { category: category.name });
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Preciso de ajuda para escolher roupinhas na categoria " + category.name + ".")}`, "_blank");
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]);
  };

  const toggleSize = (size: string) => {
    setSelectedSizes(prev => prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]);
  };

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    if (selectedBrands.length > 0) {
      result = result.filter(p => selectedBrands.includes(p.brand));
    }

    if (selectedSizes.length > 0) {
      result = result.filter(p => p.sizes.some(s => selectedSizes.includes(s)));
    }

    switch (sortBy) {
      case "menor-preco":
        result.sort((a, b) => a.price - b.price);
        break;
      case "maior-preco":
        result.sort((a, b) => b.price - a.price);
        break;
      case "populares":
        result.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
        break;
      case "recentes":
      default:
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }

    return result;
  }, [products, selectedBrands, selectedSizes, sortBy]);

  const formatPrice = (price: number) => price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <main className="flex flex-col min-h-screen bg-white pt-16">
      {/* HERO DA CATEGORIA */}
      <section className="relative w-full h-[30vh] min-h-[250px] flex items-center justify-center overflow-hidden bg-muted">
        <Image src={category.image} alt={category.name} fill className="object-cover opacity-60 mix-blend-multiply" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
        <motion.div 
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4 max-w-2xl mt-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{category.name}</h1>
          <p className="text-lg text-foreground/80 font-medium">{category.description}</p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 md:py-12 flex flex-col md:flex-row gap-8">
        
        {/* SIDEBAR DE FILTROS (Desktop) */}
        <aside className="hidden md:block w-64 shrink-0 space-y-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Filtros</h3>
            
            {/* Filtro Marca */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-muted-foreground">Marca</h4>
              <div className="space-y-2">
                {availableBrands.map(brand => (
                  <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedBrands.includes(brand) ? 'bg-primary border-primary' : 'border-muted-foreground/30 group-hover:border-primary'}`}>
                      {selectedBrands.includes(brand) && <CheckCircleIcon />}
                    </div>
                    <span className="text-foreground text-sm font-medium">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filtro Tamanho */}
            <div>
              <h4 className="font-semibold mb-3 text-muted-foreground">Tamanho</h4>
              <div className="flex flex-wrap gap-2">
                {availableSizes.map(size => (
                  <button
                    key={size}
                    onClick={() => toggleSize(size)}
                    className={`w-10 h-10 rounded-lg border font-bold text-sm transition-colors ${selectedSizes.includes(size) ? 'bg-primary text-primary-foreground border-primary' : 'bg-white text-foreground border-muted-foreground/30 hover:border-primary'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* CONTEÚDO PRINCIPAL */}
        <div className="flex-1">
          {/* TOPO: Ordenação e Botão de Filtro Mobile */}
          <div className="flex justify-between items-center mb-8">
            <span className="text-muted-foreground font-medium">{filteredAndSortedProducts.length} produtos encontrados</span>
            
            <div className="flex gap-4">
              <button 
                onClick={() => setIsFilterOpen(true)}
                className="md:hidden flex items-center gap-2 font-medium text-foreground bg-muted px-4 py-2 rounded-xl"
              >
                <SlidersHorizontal className="w-4 h-4" /> Filtros
              </button>
              
              <div className="relative group hidden sm:block">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="appearance-none bg-muted font-medium text-foreground pl-4 pr-10 py-2 rounded-xl outline-none cursor-pointer"
                >
                  <option value="recentes">Mais recentes</option>
                  <option value="menor-preco">Menor preço</option>
                  <option value="maior-preco">Maior preço</option>
                  <option value="populares">Mais populares</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-foreground/50" />
              </div>
            </div>
          </div>

          {/* GRID DE PRODUTOS */}
          {filteredAndSortedProducts.length > 0 ? (
            <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <AnimatePresence>
                {filteredAndSortedProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <ShoppingBag className="w-16 h-16 text-muted mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Nenhum produto encontrado</h3>
              <p className="text-muted-foreground">Tente alterar ou remover os filtros aplicados.</p>
              <button 
                onClick={() => { setSelectedBrands([]); setSelectedSizes([]); }}
                className="mt-6 text-primary-foreground font-bold hover:underline"
              >
                Limpar todos os filtros
              </button>
            </div>
          )}

          {/* BANNER INTERMEDIÁRIO (Apenas se tiver produtos suficientes) */}
          {filteredAndSortedProducts.length > 2 && (
            <div className="my-16 bg-accent/30 rounded-3xl p-8 md:p-12 text-center flex flex-col items-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Precisa de ajuda para escolher?</h3>
              <p className="text-foreground/80 mb-6 max-w-md">Nosso time está pronto para ajudar você a encontrar a roupinha perfeita para sua criança pelo WhatsApp!</p>
              <button
                onClick={handleWhatsAppHelp}
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-transform hover:scale-105 shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                Falar com Atendente
              </button>
            </div>
          )}

          {/* LOAD MORE / PAGINATION (Visual only for mock) */}
          {filteredAndSortedProducts.length > 0 && (
            <div className="mt-12 flex justify-center">
              <button className="border-2 border-foreground/10 hover:border-foreground/30 text-foreground font-bold px-8 py-3 rounded-xl transition-colors">
                Carregar mais
              </button>
            </div>
          )}
        </div>
      </div>

      {/* DRAWER DE FILTROS MOBILE */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 md:hidden backdrop-blur-sm"
            />
            <motion.div 
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 h-[85vh] bg-white rounded-t-3xl z-50 md:hidden flex flex-col overflow-hidden shadow-2xl"
            >
              <div className="p-4 border-b flex justify-between items-center bg-white">
                <h3 className="font-bold text-xl text-foreground">Filtros e Ordenação</h3>
                <button onClick={() => setIsFilterOpen(false)} className="p-2 bg-muted rounded-full">
                  <X className="w-5 h-5 text-foreground" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-white">
                <div>
                  <h4 className="font-semibold mb-3 text-muted-foreground">Ordenar por</h4>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="w-full bg-muted font-medium text-foreground px-4 py-3 rounded-xl outline-none"
                  >
                    <option value="recentes">Mais recentes</option>
                    <option value="menor-preco">Menor preço</option>
                    <option value="maior-preco">Maior preço</option>
                    <option value="populares">Mais populares</option>
                  </select>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-muted-foreground">Marca</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {availableBrands.map(brand => (
                      <button
                        key={brand}
                        onClick={() => toggleBrand(brand)}
                        className={`py-3 rounded-xl border font-semibold text-sm transition-colors ${selectedBrands.includes(brand) ? 'bg-primary/10 text-primary-foreground border-primary' : 'bg-white text-foreground border-muted-foreground/30'}`}
                      >
                        {brand}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-muted-foreground">Tamanho</h4>
                  <div className="flex flex-wrap gap-3">
                    {availableSizes.map(size => (
                      <button
                        key={size}
                        onClick={() => toggleSize(size)}
                        className={`w-12 h-12 rounded-xl border font-bold text-sm transition-colors ${selectedSizes.includes(size) ? 'bg-primary text-primary-foreground border-primary' : 'bg-white text-foreground border-muted-foreground/30'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 border-t bg-white flex gap-3">
                <button 
                  onClick={() => { setSelectedBrands([]); setSelectedSizes([]); setIsFilterOpen(false); }}
                  className="flex-1 font-bold text-foreground py-4 border-2 rounded-xl"
                >
                  Limpar
                </button>
                <button 
                  onClick={() => setIsFilterOpen(false)}
                  className="flex-[2] bg-foreground text-white font-bold py-4 rounded-xl shadow-lg"
                >
                  Ver Produtos
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* GLOBAL WHATSAPP FLOATING BUTTON */}
      <motion.button
        initial={{ scale: 1 }} animate={{ scale: 1 }} transition={{ delay: 1, type: "spring" }}
        onClick={handleWhatsAppHelp}
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-16 h-16 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-2xl z-40 transition-transform hover:scale-110"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping"></span>
      </motion.button>
    </main>
  );
}

// Mini Component para o Produto
function ProductCard({ product }: { product: Product }) {
  const formatPrice = (price: number) => price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <motion.div
      layout
      initial={{ opacity: 1, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-muted flex flex-col"
    >
      <Link href={`/produto/${product.slug}`} className="relative aspect-[3/4] overflow-hidden bg-muted block">
        <Image src={product.images[0]} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.isNew && <span className="bg-accent text-accent-foreground px-2 py-0.5 rounded text-[10px] font-bold">Novo</span>}
          {product.originalPrice && <span className="bg-primary/80 text-white px-2 py-0.5 rounded text-[10px] font-bold">Promoção</span>}
        </div>
      </Link>
      
      <div className="p-4 md:p-5 flex flex-col flex-1">
        <span className="text-accent-foreground text-xs font-bold uppercase mb-1">{product.brand}</span>
        <Link href={`/produto/${product.slug}`} className="font-bold text-foreground mb-1 line-clamp-2 hover:text-primary-foreground transition-colors text-sm md:text-base flex-1">
          {product.name}
        </Link>
        
        <div className="mt-2 mb-4">
          {product.originalPrice ? (
            <div className="flex items-end gap-2">
              <span className="text-accent-foreground font-extrabold text-lg">{formatPrice(product.price)}</span>
              <span className="text-xs text-muted-foreground line-through mb-0.5">{formatPrice(product.originalPrice)}</span>
            </div>
          ) : (
            <span className="text-foreground font-extrabold text-lg">{formatPrice(product.price)}</span>
          )}
        </div>

        <Link href={`/produto/${product.slug}`} className="w-full bg-secondary/50 text-secondary-foreground hover:bg-secondary hover:text-secondary-foreground py-2.5 rounded-xl font-bold flex justify-center items-center transition-colors text-sm">
          Ver Produto
        </Link>
      </div>
    </motion.div>
  );
}

function CheckCircleIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}
