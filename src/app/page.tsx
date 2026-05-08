"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, ShoppingBag, Truck, Tag, Clock, Star, MapPin, Moon } from "lucide-react";
import { trackWhatsAppClick, trackCtaClick } from "@/lib/tracking";

export default function Home() {
  const whatsappNumber = "5516991802984"; // Placeholder for Ibitinga number

  const openWhatsApp = (message = "Olá! Gostaria de saber mais sobre as roupinhas da Vila dos Sonhos.", buttonLocation = "Home") => {
    trackWhatsAppClick(buttonLocation);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden w-full max-w-[100vw]">
      {/* HEADER / NAVIGATION */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Moon className="w-6 h-6 text-accent-foreground" fill="currentColor" />
            <span className="font-bold text-xl text-foreground">Vila dos Sonhos</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-foreground/80">
            <a href="#categorias" className="hover:text-accent-foreground transition-colors">Categorias</a>
            <a href="#produtos" className="hover:text-accent-foreground transition-colors">Novidades</a>
            <a href="#sobre" className="hover:text-accent-foreground transition-colors">Sobre Nós</a>
          </nav>
          <button
            onClick={() => openWhatsApp(undefined, "Header Navbar")}
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-full font-medium flex items-center gap-2 transition-all shadow-sm hover:shadow-md text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center md:text-left"
            >
              <motion.div variants={fadeInUp} className="inline-block bg-accent/50 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium mb-6">
                Nova Coleção Chegou ✨
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                Moda infantil <span className="text-accent-foreground">linda e acessível</span> para o dia a dia.
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
                Roupinhas confortáveis, estilosas e com preço que cabe no bolso para crianças de 1 a 10 anos em Ibitinga/SP.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="/categoria/meninas"
                  onClick={() => trackCtaClick("Ver novidades", "Hero", "Home")}
                  className="bg-primary-foreground text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-foreground transition-colors shadow-lg shadow-primary-foreground/20 text-center"
                >
                  Ver novidades
                </Link>
                <button
                  onClick={() => openWhatsApp(undefined, "Hero CTA")}
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#25D366]/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chamar no WhatsApp
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 1, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" as const }}
              className="relative mx-auto w-full max-w-md md:max-w-none"
            >
              <div className="absolute inset-0 bg-primary/40 rounded-[3rem] rotate-3 scale-105 transition-transform"></div>
              <div className="absolute inset-0 bg-secondary/40 rounded-[3rem] -rotate-3 scale-105 transition-transform"></div>
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] border-8 border-white">
                <Image
                  src="/hero.png"
                  alt="Mãe e filho sorrindo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Element */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" as const }}
                className="absolute -bottom-4 left-4 md:-bottom-6 md:-left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="bg-accent p-2 rounded-full text-accent-foreground">
                  <Star className="w-6 h-6" fill="currentColor" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Avaliações</p>
                  <p className="font-bold text-sm">5.0 de 2.000+ mães</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { icon: Truck, title: "Entrega Rápida", desc: "Em Ibitinga e região" },
              { icon: Tag, title: "Preços Acessíveis", desc: "Que cabem no bolso" },
              { icon: Star, title: "Novidades", desc: "Toda semana na loja" },
              { icon: Clock, title: "Atendimento", desc: "Rápido no WhatsApp" },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex flex-col items-center text-center p-4 rounded-2xl hover:bg-muted transition-colors group"
              >
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4 text-primary-foreground group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categorias" className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">O que você procura?</h2>
            <p className="text-muted-foreground">Tudo organizado com muito carinho para facilitar sua busca.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 h-[600px] md:h-[500px]">
            {/* Meninas (Large) */}
            <Link href="/categoria/meninas" className="relative group overflow-hidden rounded-3xl col-span-2 row-span-2 md:col-span-2 md:row-span-2">
              <Image src="/girls.png" alt="Meninas" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold text-white mb-1">Meninas</h3>
                <p className="text-white/80 text-sm">Vestidos, conjuntos e mais</p>
              </div>
            </Link>

            {/* Meninos */}
            <Link href="/categoria/meninos" className="relative group overflow-hidden rounded-3xl col-span-1 row-span-1 md:col-span-1 md:row-span-2">
              <Image src="/boys.png" alt="Meninos" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-bold text-white mb-1">Meninos</h3>
                <p className="text-white/80 text-sm hidden md:block">Estilo e conforto</p>
              </div>
            </Link>

            {/* Bebês */}
            <Link href="/categoria/bebes" className="relative group overflow-hidden rounded-3xl col-span-1 row-span-1 md:col-span-1 md:row-span-1">
              <Image src="/babies.png" alt="Bebês" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-lg font-bold text-white mb-1">Bebês</h3>
              </div>
            </Link>

            {/* Promoções */}
            <Link href="/categoria/promocoes" className="relative group overflow-hidden rounded-3xl col-span-2 md:col-span-1 row-span-1 bg-accent flex items-center justify-center p-6 text-center hover:bg-accent/80 transition-colors">
              <div>
                <Tag className="w-8 h-8 text-accent-foreground mx-auto mb-2" />
                <h3 className="text-lg font-bold text-accent-foreground mb-1">Promoções</h3>
                <p className="text-accent-foreground/80 text-xs">Até 50% OFF</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS (NOVIDADES) */}
      <section id="produtos" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Novidades da Semana</h2>
              <p className="text-muted-foreground">As peças mais amadas que acabaram de chegar na loja.</p>
            </div>
            <button
              onClick={() => openWhatsApp("Quais são as outras novidades da semana?", "Novidades Header CTA")}
              className="hidden md:flex text-primary-foreground font-semibold items-center gap-2 hover:underline"
            >
              Ver todas as peças <ShoppingBag className="w-4 h-4" />
            </button>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { name: "Vestido Floral Primavera", price: "R$ 49,90", image: "/girls.png", id: "vestido-floral-primavera" },
              { name: "Conjunto Infantil Kyly Verão", price: "R$ 65,00", image: "/boys.png", id: "conjunto-infantil-kyly-verao" },
              { name: "Macacão Ursinho Baby", price: "R$ 39,90", image: "/babies.png", id: "macacao-ursinho-baby" },
              { name: "Vestido Festa Encanto", price: "R$ 89,90", image: "/girls.png", id: "vestido-festa-encanto" },
            ].map((product, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-muted"
              >
                <Link href={`/produto/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-muted">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
                <div className="p-5">
                  <Link href={`/produto/${product.id}`}><h3 className="font-bold text-foreground mb-1 truncate hover:text-primary-foreground transition-colors" title={product.name}>{product.name}</h3></Link>
                  <p className="text-accent-foreground font-bold text-lg mb-4">{product.price}</p>
                  <Link
                    href={`/produto/${product.id}`}
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary-foreground hover:text-white py-3 rounded-xl font-semibold flex justify-center items-center gap-2 transition-colors text-sm"
                  >
                    Ver Detalhes
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 text-center md:hidden">
            <button
              onClick={() => openWhatsApp("Quais são as outras novidades da semana?", "Novidades Mobile CTA")}
              className="text-primary-foreground font-semibold inline-flex items-center gap-2 hover:underline"
            >
              Ver todas as peças <ShoppingBag className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT & SOCIAL PROOF */}
      <section id="sobre" className="py-16 md:py-24 bg-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 1, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Sobre a Vila dos Sonhos</h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                A Vila dos Sonhos nasceu com um propósito especial: oferecer roupas infantis bonitas, super confortáveis e, acima de tudo, acessíveis para as famílias de Ibitinga.
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Nós sabemos que as crianças crescem rápido, e acreditamos que vestir bem o seu pequeno não precisa ser caro. Aqui você encontra aquele atendimento com carinho de mãe para mãe.
              </p>

              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm inline-flex">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-secondary border-2 border-white flex items-center justify-center overflow-hidden">
                      <Image src={`/babies.png`} alt="User" width={40} height={40} className="object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex text-amber-400">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4" fill="currentColor" />)}
                  </div>
                  <p className="text-sm font-bold mt-1">Mais de 2.000 mães atendidas</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 1, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-3xl shadow-lg relative z-10">
                <Star className="w-10 h-10 text-accent-foreground mb-6 opacity-20" fill="currentColor" />
                <p className="text-xl font-medium italic text-foreground mb-6">
                  "Sempre encontro as roupinhas mais lindas para a minha filha na Vila dos Sonhos! O atendimento pelo WhatsApp é maravilhoso e a entrega é super rápida. Recomendo de olhos fechados!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-primary-foreground">
                    M
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Mariana Silva</h4>
                    <p className="text-sm text-muted-foreground">Mãe da Alice, Ibitinga/SP</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 -right-2 md:top-6 md:-right-6 w-full h-full bg-accent/40 rounded-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 via-white to-accent/20"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 1, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Quer receber novidades e promoções exclusivas?</h2>
            <p className="text-xl text-muted-foreground mb-10">
              Mande um "Oi" no nosso WhatsApp e seja a primeira a saber quando chegam as novas coleções!
            </p>
            <button
              onClick={() => openWhatsApp("Olá! Quero receber as novidades e promoções da loja.", "Final CTA Section")}
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-10 py-5 rounded-full font-bold text-xl inline-flex items-center gap-3 transition-all transform hover:scale-105 shadow-xl shadow-[#25D366]/30"
            >
              <MessageCircle className="w-7 h-7" />
              Falar no WhatsApp
            </button>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Moon className="w-6 h-6 text-accent" fill="currentColor" />
              <span className="font-bold text-2xl">Vila dos Sonhos</span>
            </div>
            <p className="text-white/70 max-w-md mb-6">
              Roupinhas lindas, preço acessível e atendimento acolhedor. A moda infantil que acompanha o dia a dia do seu pequeno.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <button onClick={() => openWhatsApp(undefined, "Footer Social WhatsApp")} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white/90">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><Link href="/categoria/meninas" className="text-white/70 hover:text-white transition-colors">Meninas</Link></li>
              <li><Link href="/categoria/meninos" className="text-white/70 hover:text-white transition-colors">Meninos</Link></li>
              <li><Link href="/categoria/bebes" className="text-white/70 hover:text-white transition-colors">Bebês</Link></li>
              <li><button onClick={() => openWhatsApp(undefined, "Footer Quick Links")} className="text-white/70 hover:text-white transition-colors">Falar com Atendente</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white/90">Nossa Loja</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-white/70">
                <MapPin className="w-5 h-5 shrink-0 text-accent" />
                <span>Rua Cecília Casemiro de Amorim, 1266 - Maria Luiz II<br />Ibitinga - SP</span>
              </li>
              <li className="flex gap-3 text-white/70">
                <Clock className="w-5 h-5 shrink-0 text-accent" />
                <span>Seg a Sex: 09h às 18h<br />Sáb: 09h às 13h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Vila dos Sonhos. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <motion.button
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        onClick={() => openWhatsApp(undefined, "Floating Global Button")}
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-16 h-16 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-2xl z-50 transition-transform hover:scale-110"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        {/* Ping animation */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping"></span>
      </motion.button>
    </main>
  );
}
