"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Snowflake, ThermometerSun, Leaf, Star, ChevronRight, ShoppingBag } from "lucide-react";
import { Product } from "@/lib/mock-data";
import { trackViewCategory, trackWhatsAppClick, trackCtaClick } from "@/lib/tracking";

interface Props {
  products: Product[];
}

export default function OutonoInvernoClient({ products }: Props) {
  const whatsappNumber = "5516991802984";

  useEffect(() => {
    trackViewCategory("Outono-Inverno Sazonal");
  }, []);

  const openWhatsApp = (context: string) => {
    trackWhatsAppClick("Seasonal LP WhatsApp CTA", { context });
    const message = `Olá! Vi a página da Coleção Outono/Inverno e gostaria de saber mais.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const formatPrice = (price: number) => price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <main className="flex flex-col min-h-screen bg-[#FAF6F0] overflow-x-hidden w-full max-w-[100vw]">
      {/* HEADER MINIMALISTA */}
      <header className="fixed top-0 w-full bg-[#FAF6F0]/90 backdrop-blur-md z-50 border-b border-[#e8dfd3]">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl text-[#5c4a3d]">Vila dos Sonhos</Link>
          <button
            onClick={() => openWhatsApp("Header Sazonal")}
            className="bg-[#5c4a3d] hover:bg-[#4a3b31] text-white px-5 py-2 rounded-full font-medium flex items-center gap-2 transition-all shadow-sm text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Atendimento</span>
          </button>
        </div>
      </header>

      {/* HERO ACONCHEGANTE */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden flex items-center justify-center min-h-[85vh]">
        {/* Background Gradient & Blobs */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f2e7da] to-[#FAF6F0]"></div>
        <motion.div 
          animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-[#e6d0b3]/40 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, -2, 0] }} 
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -left-20 w-80 h-80 bg-[#d4e0e8]/50 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            <motion.div 
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <span className="bg-white/60 text-[#8c6b5d] px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 shadow-sm border border-[#e8dfd3] inline-flex items-center gap-2">
                <Leaf className="w-4 h-4" /> Nova Coleção
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#3a2e26] leading-[1.1] mb-6">
                Outono<br />
                <span className="text-[#8c6b5d]">Inverno</span>
              </h1>
              
              <p className="text-lg md:text-xl text-[#6b584d] mb-10 max-w-lg leading-relaxed">
                Roupinhas quentinhas, super macias e acessíveis para manter quem você ama protegido nos dias frios.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a
                  href="#colecao"
                  onClick={() => trackCtaClick("Ver Coleção", "Hero Sazonal", "Outono-Inverno")}
                  className="bg-[#5c4a3d] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#4a3b31] transition-colors shadow-lg shadow-[#5c4a3d]/20 text-center"
                >
                  Ver a Coleção
                </a>
                <button
                  onClick={() => openWhatsApp("Hero Sazonal")}
                  className="bg-white text-[#5c4a3d] border-2 border-[#e8dfd3] hover:border-[#c5b5a3] px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chamar no WhatsApp
                </button>
              </div>

              <div className="mt-10 flex items-center gap-6 text-sm font-medium text-[#8c6b5d]">
                <div className="flex items-center gap-2"><ThermometerSun className="w-5 h-5"/> Tecidos Térmicos</div>
                <div className="flex items-center gap-2"><Snowflake className="w-5 h-5"/> Super Macios</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 1, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto w-full max-w-md lg:max-w-full lg:h-[600px]"
            >
              <div className="absolute inset-0 bg-[#e8dfd3]/50 rounded-[3rem] rotate-3 scale-105 transition-transform"></div>
              <div className="absolute inset-0 bg-[#d4e0e8]/50 rounded-[3rem] -rotate-3 scale-105 transition-transform"></div>
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] lg:h-full border-8 border-white bg-white">
                {/* Imagem representativa para a hero (idealmente foto de crianca com roupa de frio) */}
                <Image src="/boys.png" alt="Crianças com roupas de frio" fill className="object-cover" priority />
              </div>

              {/* Floating Element */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-4 left-4 md:-bottom-6 md:-left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-[#f2e7da]"
              >
                <div className="bg-[#f2e7da] p-2 rounded-full text-[#8c6b5d]">
                  <Star className="w-6 h-6" fill="currentColor" />
                </div>
                <div>
                  <p className="font-bold text-sm text-[#5c4a3d]">Novidades toda semana</p>
                  <p className="text-xs text-[#8c6b5d]">Garantia de quentinho</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* BANNERS PROMOCIONAIS */}
      <section className="py-8 bg-[#8c6b5d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
            <div className="p-4 border border-white/20 rounded-2xl">
              <h3 className="font-bold text-xl mb-1">Conjuntos de Inverno</h3>
              <p className="text-white/80 text-sm">Praticidade e conforto pro dia a dia</p>
            </div>
            <div className="p-4 border border-white/20 rounded-2xl bg-white/10">
              <h3 className="font-bold text-xl mb-1">Moletons Peluciados</h3>
              <p className="text-white/80 text-sm">O abraço quente que eles precisam</p>
            </div>
            <div className="p-4 border border-white/20 rounded-2xl">
              <h3 className="font-bold text-xl mb-1">Jaquetas Corta Vento</h3>
              <p className="text-white/80 text-sm">Para os dias de frio mais intenso</p>
            </div>
          </div>
        </div>
      </section>

      {/* VITRINE DE PRODUTOS */}
      <section id="colecao" className="py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#3a2e26] mb-4">Destaques da Estação</h2>
            <p className="text-[#6b584d] text-lg max-w-2xl mx-auto">
              Separamos as peças mais amadas pelas mamães para proteger os pequenos neste inverno, com muito estilo e economia.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 1, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#e8dfd3] flex flex-col"
              >
                <Link href={`/produto/${product.slug}`} className="relative aspect-[4/5] overflow-hidden bg-[#f8f5f0] block">
                  <Image src={product.images[0]} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  
                  {product.originalPrice && (
                    <div className="absolute top-3 right-3 bg-[#c95a5a] text-white px-2 py-1 rounded-lg text-xs font-bold shadow-md">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </div>
                  )}
                </Link>
                
                <div className="p-4 md:p-6 flex flex-col flex-1">
                  <span className="text-[#8c6b5d] text-xs font-bold uppercase tracking-wider mb-1">{product.brand}</span>
                  <Link href={`/produto/${product.slug}`} className="font-bold text-[#3a2e26] mb-2 line-clamp-2 hover:text-[#8c6b5d] transition-colors flex-1 text-sm md:text-base">
                    {product.name}
                  </Link>
                  
                  <div className="flex items-end gap-2 mb-4">
                    <span className="text-[#5c4a3d] font-extrabold text-lg md:text-xl">{formatPrice(product.price)}</span>
                    {product.originalPrice && (
                      <span className="text-xs text-[#a09085] line-through mb-1">{formatPrice(product.originalPrice)}</span>
                    )}
                  </div>

                  <Link 
                    href={`/produto/${product.slug}`}
                    className="w-full bg-[#f2e7da] text-[#5c4a3d] hover:bg-[#5c4a3d] hover:text-white py-3 rounded-xl font-bold flex justify-center items-center transition-colors text-sm"
                  >
                    Ver Detalhes
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => openWhatsApp("Ver mais produtos de inverno")}
              className="inline-flex items-center gap-2 text-[#8c6b5d] font-bold text-lg hover:text-[#5c4a3d] transition-colors border-b-2 border-[#8c6b5d] pb-1 hover:border-[#5c4a3d]"
            >
              Gostou? Peça para ver o catálogo completo no WhatsApp <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION FINAL */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[#f2e7da]/30"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#3a2e26] mb-6">Pronta para o Inverno?</h2>
          <p className="text-lg text-[#6b584d] mb-10 max-w-2xl mx-auto leading-relaxed">
            Nossa equipe está pronta para te atender com carinho, separar os melhores tamanhos e entregar rapidinho na sua casa em Ibitinga.
          </p>
          <button
            onClick={() => openWhatsApp("CTA Final Sazonal")}
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-10 py-5 rounded-full font-bold text-xl inline-flex items-center gap-3 transition-all transform hover:scale-105 shadow-xl shadow-[#25D366]/30"
          >
            <MessageCircle className="w-7 h-7" />
            Falar com Atendente
          </button>
        </div>
      </section>
    </main>
  );
}
