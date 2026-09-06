"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { privacyData } from "@/data/privacyData";

const STORAGE_KEY = `${privacyData.company.brandName.toLowerCase().replace(/\s+/g, "_")}_cookie_consent`;

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const consent = localStorage.getItem(STORAGE_KEY);
        if (!consent) {
          setIsVisible(true);
        }
      } catch {
        setIsVisible(true);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          accepted: true,
          timestamp: new Date().toISOString(),
        })
      );
    } catch (e) {
      console.error("Erro ao gravar consentimento:", e);
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          role="region"
          aria-label="Aviso de Cookies e Privacidade"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 z-50 max-w-sm w-[calc(100vw-2rem)] pointer-events-none"
        >
          <div className="bg-card/95 backdrop-blur-md text-foreground p-5 rounded-2xl shadow-2xl border border-border pointer-events-auto flex flex-col gap-4">
            <p className="text-xs sm:text-sm font-normal leading-relaxed text-muted-foreground">
              Utilizamos cookies essenciais para garantir o correto funcionamento do site e proporcionar a melhor experiência de navegação. Para mais detalhes, consulte a nossa{" "}
              <Link
                href="/privacidade"
                className="underline underline-offset-2 hover:text-brand-gold font-medium transition-colors text-foreground"
              >
                Política de Privacidade
              </Link>.
            </p>

            <div className="flex items-center justify-between gap-3 pt-1">
              <Link
                href="/privacidade"
                className="text-xs text-muted-foreground hover:text-foreground underline transition-colors"
              >
                Saber mais
              </Link>
              <button
                type="button"
                onClick={handleAccept}
                className="cursor-pointer bg-brand-gold hover:bg-brand-gold-hover text-white font-medium px-5 py-2 text-xs rounded-full shadow-sm hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Entendi
              </button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
