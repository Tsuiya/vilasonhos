"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Verifica se já existe uma escolha
    const consent = localStorage.getItem("vila_sonhos_cookie_consent");
    if (!consent) {
      // Pequeno atraso para não atrapalhar o LCP da página
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("vila_sonhos_cookie_consent", "granted");
    setShow(false);
    // Recarrega a página para inicializar os scripts (ou podemos despachar um evento customizado)
    window.location.reload();
  };

  const handleReject = () => {
    localStorage.setItem("vila_sonhos_cookie_consent", "denied");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-muted flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-foreground font-bold text-lg mb-2">Usamos cookies para melhorar sua experiência 🍪</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Nós e nossos parceiros usamos cookies para analisar nosso tráfego, personalizar anúncios e proporcionar a melhor experiência possível. Ao continuar navegando, você concorda com nossa política de privacidade.
              </p>
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
              <button 
                onClick={handleReject}
                className="flex-1 md:flex-none px-6 py-3 rounded-xl border-2 border-muted hover:border-foreground/30 text-foreground font-bold transition-colors text-sm"
              >
                Recusar
              </button>
              <button 
                onClick={handleAccept}
                className="flex-1 md:flex-none px-6 py-3 rounded-xl bg-foreground text-white font-bold hover:bg-foreground/80 transition-colors text-sm shadow-md"
              >
                Aceitar Cookies
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
