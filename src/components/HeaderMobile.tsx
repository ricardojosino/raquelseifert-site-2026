"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle, MapPin, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  return (
    <header className="block xl:hidden fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-b border-border/60 transition-all">
      <div className="box-container-boxed h-18 flex items-center justify-between">
        {/* Logotipo */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2.5 group"
        >
          <Image
            src="/images/icone-raquel-seifert.png"
            alt="Ícone Raquel Seifert"
            width={36}
            height={36}
            className="h-9 w-auto object-contain"
            priority
          />
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold tracking-tight text-foreground">
              Raquel Seifert
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-brand-gold">
              Massoterapeuta
            </span>
          </div>
        </Link>

        {/* Botão Hambúrguer */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          className="p-2.5 rounded-xl border border-border/80 bg-card text-foreground hover:text-brand-gold hover:border-brand-gold/50 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold/40"
        >
          {isOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
          <span className="sr-only">Menu de navegação</span>
        </button>
      </div>

      {/* Painel do Menu Mobile com Animação */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-[72px] bg-background/98 backdrop-blur-xl z-50 flex flex-col justify-between px-6 py-8 overflow-y-auto"
          >
            <nav className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold px-2">
                Navegação
              </span>
              <button
                type="button"
                onClick={() => handleNavClick("inicio")}
                className="text-left px-3 py-2 text-xl font-heading font-medium text-foreground hover:text-brand-gold transition-colors"
              >
                Início
              </button>
              <button
                type="button"
                onClick={() => handleNavClick("sobre")}
                className="text-left px-3 py-2 text-xl font-heading font-medium text-foreground hover:text-brand-gold transition-colors"
              >
                Sobre Mim
              </button>
              <button
                type="button"
                onClick={() => handleNavClick("servicos")}
                className="text-left px-3 py-2 text-xl font-heading font-medium text-foreground hover:text-brand-gold transition-colors"
              >
                Serviços de Massoterapia
              </button>
              <button
                type="button"
                onClick={() => handleNavClick("espaco")}
                className="text-left px-3 py-2 text-xl font-heading font-medium text-foreground hover:text-brand-gold transition-colors"
              >
                O Espaço
              </button>
              <button
                type="button"
                onClick={() => handleNavClick("depoimentos")}
                className="text-left px-3 py-2 text-xl font-heading font-medium text-foreground hover:text-brand-gold transition-colors"
              >
                Depoimentos
              </button>
              <button
                type="button"
                onClick={() => handleNavClick("agendar")}
                className="text-left px-3 py-2 text-xl font-heading font-medium text-foreground hover:text-brand-gold transition-colors"
              >
                Como Agendar
              </button>
            </nav>

            <div className="flex flex-col gap-5 pt-6 border-t border-border">
              {/* Informações Rápidas */}
              <div className="space-y-2 text-xs text-muted-foreground">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-gold shrink-0" aria-hidden="true" />
                  <span>Rua Gen. Pimenta de Castro, 38 Monção, Portugal</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand-gold shrink-0" aria-hidden="true" />
                  <span>+351 926 823 317</span>
                </p>
              </div>

              {/* Botão de Agendamento */}
              <a
                href="https://api.whatsapp.com/send?phone=351926823317"
                target="_blank"
                rel="noopener"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-brand-gold hover:bg-brand-gold-hover text-white text-base font-medium shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                <span>Agendar no WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
