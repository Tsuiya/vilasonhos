"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/lib/mock-data";
import { MessageCircle, Truck, Clock, Star, Heart, CheckCircle2, ChevronRight, AlertCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ProductClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductClient({ product, relatedProducts }: ProductClientProps) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [activeImage, setActiveImage] = useState(0);
  const [showError, setShowError] = useState(false);

  const whatsappNumber = "5516991802984";

  const handleWhatsApp = () => {
    if (!selectedSize) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }
    
    const message = `Olá! Tenho interesse no produto ${product.name} no tamanho ${selectedSize}.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <main className="flex flex-col min-h-screen bg-white pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 w-full text-sm text-muted-foreground flex items-center gap-2">
        <Link href="/" className="hover:text-accent-foreground transition-colors flex items-center gap-1"><ArrowLeft className="w-4 h-4"/> Voltar</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href={`/categoria/${product.categorySlug}`} className="hover:text-accent-foreground transition-colors">{product.categoryName}</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-foreground truncate">{product.name}</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 md:py-10">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          
          {/* GALERIA DE IMAGENS */}
          <div className="flex flex-col gap-4">
            <motion.div 
              initial={{ opacity: 1, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-muted group shadow-md"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={product.images[activeImage] || "/babies.png"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && (
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    Novo
                  </span>
                )}
                {product.availability === "Últimas unidades" && (
                  <span className="bg-amber-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    Últimas unidades
                  </span>
                )}
              </div>
              
              <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:text-accent-foreground hover:bg-white transition-colors shadow-sm">
                <Heart className="w-5 h-5" />
              </button>
            </motion.div>
            
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative w-20 h-24 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${activeImage === idx ? 'border-primary' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <Image src={img} alt={`Miniatura ${idx + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* INFORMAÇÕES DO PRODUTO */}
          <motion.div 
            initial={{ opacity: 1, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col"
          >
            <span className="text-accent-foreground font-bold text-sm tracking-wider uppercase mb-2">{product.brand}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-end gap-2">
                <span className="text-3xl font-extrabold text-foreground">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through mb-1">{formatPrice(product.originalPrice)}</span>
                )}
              </div>
              {product.originalPrice && (
                <span className="bg-primary/20 text-primary-foreground px-2 py-1 rounded text-xs font-bold">
                  -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                </span>
              )}
            </div>

            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              {product.shortDescription}
            </p>

            {/* SELETOR DE TAMANHO */}
            <div className="mb-8">
              <div className="flex justify-between items-end mb-4">
                <h3 className="font-bold text-foreground">Tamanho</h3>
                <button className="text-sm text-primary-foreground hover:underline font-medium">Guia de medidas</button>
              </div>
              
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`
                      py-3 rounded-xl border-2 font-bold transition-all flex items-center justify-center
                      ${selectedSize === size 
                        ? 'border-primary bg-primary/10 text-primary-foreground shadow-sm' 
                        : 'border-muted bg-white text-foreground hover:border-primary/50'
                      }
                    `}
                  >
                    {size}
                  </button>
                ))}
              </div>
              
              {/* Aviso de erro */}
              <AnimatePresence>
                {showError && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-3 flex items-center gap-2 text-amber-600 bg-amber-50 p-3 rounded-xl"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-medium text-sm">Por favor, selecione um tamanho antes de continuar.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* BOTÃO WHATSAPP */}
            <button
              onClick={handleWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] shadow-xl shadow-[#25D366]/20 mb-8 sticky bottom-4 z-40 md:relative md:bottom-0"
            >
              <MessageCircle className="w-6 h-6" />
              Tenho Interesse
            </button>

            {/* MINI BENEFÍCIOS */}
            <div className="grid grid-cols-2 gap-4 py-6 border-y border-muted">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary-foreground">
                  <Truck className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-foreground">Entrega rápida<br/>em Ibitinga</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary-foreground">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-foreground">Atendimento<br/>ágil no WhatsApp</span>
              </div>
            </div>

            {/* DESCRIÇÃO COMPLETA */}
            <div className="mt-8">
              <h3 className="font-bold text-xl text-foreground mb-4">Detalhes do Produto</h3>
              <ul className="space-y-3">
                {product.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent-foreground shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </motion.div>
        </div>
      </div>

      {/* PROVA SOCIAL */}
      <section className="bg-muted/30 py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">O que as mães dizem</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: "Qualidade incrível, o tecido é super macio. Minha filha amou!", author: "Amanda G." },
              { text: "Chegou super rápido aqui no centro de Ibitinga. Recomendo muito.", author: "Juliana F." },
              { text: "O tamanho ficou certinho, as medidas ajudaram bastante na escolha.", author: "Camila R." }
            ].map((review, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-muted/50">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4" fill="currentColor" />)}
                </div>
                <p className="text-foreground/80 mb-4 font-medium italic">"{review.text}"</p>
                <p className="text-sm font-bold text-foreground">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUTOS RELACIONADOS */}
      {relatedProducts.length > 0 && (
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="text-2xl font-bold text-foreground mb-8">Você também pode gostar</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <Link href={`/produto/${p.slug}`} key={p.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-muted block">
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <Image
                    src={p.images[0]}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-foreground mb-1 truncate text-sm" title={p.name}>{p.name}</h3>
                  <p className="text-accent-foreground font-bold text-lg">{formatPrice(p.price)}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
