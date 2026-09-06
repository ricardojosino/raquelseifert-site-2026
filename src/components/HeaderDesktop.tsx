"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

interface HeaderDesktopProps {
  onNavigate?: (id: string) => void;
}

export default function HeaderDesktop({ onNavigate }: HeaderDesktopProps) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="hidden xl:block fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-b border-border/60 transition-all duration-300">
      <div className="box-container-boxed h-20 flex items-center justify-between">
        {/* Logotipo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/icone-raquel-seifert.png"
            alt="Ícone Raquel Seifert"
            width={42}
            height={42}
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="flex flex-col">
            <span className="font-heading text-xl font-bold tracking-tight text-foreground group-hover:text-brand-gold transition-colors">
              Raquel Seifert
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-brand-gold">
              Massoterapeuta
            </span>
          </div>
        </Link>

        {/* Menu de Navegação */}
        <nav className="flex items-center gap-7 text-sm font-medium text-foreground/80">
          <a
            href="#inicio"
            onClick={(e) => handleScroll(e, "inicio")}
            className="hover:text-brand-gold transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-gold hover:after:w-full after:transition-all after:duration-300"
          >
            Início
          </a>
          <a
            href="#sobre"
            onClick={(e) => handleScroll(e, "sobre")}
            className="hover:text-brand-gold transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-gold hover:after:w-full after:transition-all after:duration-300"
          >
            Sobre Mim
          </a>
          <a
            href="#servicos"
            onClick={(e) => handleScroll(e, "servicos")}
            className="hover:text-brand-gold transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-gold hover:after:w-full after:transition-all after:duration-300"
          >
            Serviços
          </a>
          <a
            href="#espaco"
            onClick={(e) => handleScroll(e, "espaco")}
            className="hover:text-brand-gold transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-gold hover:after:w-full after:transition-all after:duration-300"
          >
            O Espaço
          </a>
          <a
            href="#depoimentos"
            onClick={(e) => handleScroll(e, "depoimentos")}
            className="hover:text-brand-gold transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-gold hover:after:w-full after:transition-all after:duration-300"
          >
            Depoimentos
          </a>
          <a
            href="#agendar"
            onClick={(e) => handleScroll(e, "agendar")}
            className="hover:text-brand-gold transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-gold hover:after:w-full after:transition-all after:duration-300"
          >
            Contato
          </a>
        </nav>

        {/* CTA Principal WhatsApp */}
        <div className="flex items-center gap-4">
          <a
            href="https://api.whatsapp.com/send?phone=351926823317"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-gold hover:bg-brand-gold-hover text-white text-sm font-medium tracking-wide shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>Agendar Sessão</span>
          </a>
        </div>
      </div>
    </header>
  );
}
