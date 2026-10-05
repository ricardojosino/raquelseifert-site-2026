import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Heart } from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-muted/80 border-t border-border mt-auto pt-16 pb-24 sm:pb-12 transition-colors">
      <div className="box-container-boxed">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-border/70">
          {/* Coluna 1: Marca & Propósito */}
          <div className="space-y-4 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <Image
                src="/images/icone-raquel-seifert.png"
                alt="Ícone Raquel Seifert"
                width={40}
                height={40}
                className="h-9 w-auto object-contain"
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
            <p className="text-sm text-muted-foreground leading-relaxed">
              Equilíbrio duradouro entre corpo e mente com massagens terapêuticas personalizadas em Monção, Portugal. Cuidado, dedicação e acolhimento em cada sessão.
            </p>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="space-y-4">
            <h3 className="font-heading text-base font-semibold text-foreground">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href="#inicio" className="hover:text-brand-gold transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-brand-gold transition-colors">
                  Sobre Mim
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-brand-gold transition-colors">
                  Serviços Oferecidos
                </a>
              </li>
              <li>
                <a href="#espaco" className="hover:text-brand-gold transition-colors">
                  O Espaço Terapêutico
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-brand-gold transition-colors">
                  O que dizem sobre mim
                </a>
              </li>
              <li>
                <a href="#agendar" className="hover:text-brand-gold transition-colors">
                  Agendar Consulta
                </a>
              </li>
              <li>
                <Link href="/privacidade" className="hover:text-brand-gold transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Localização & Contacto */}
          <div className="space-y-4">
            <h3 className="font-heading text-base font-semibold text-foreground">
              Localização & Atendimento
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  Rua Gen. Pimenta de Castro, 38
                  <br />
                  Monção, Portugal
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" aria-hidden="true" />
                <a
                  href="https://api.whatsapp.com/send?phone=351926823317"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-brand-gold transition-colors"
                >
                  +351 926 823 317
                </a>
              </p>
            </div>
          </div>

          {/* Coluna 4: Redes Sociais & Agendamento */}
          <div className="space-y-4">
            <h3 className="font-heading text-base font-semibold text-foreground">
              Conecte-se
            </h3>
            <p className="text-sm text-muted-foreground">
              Acompanhe novidades sobre saúde, dicas de bem-estar e rotina no Instagram.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.instagram.com/raquelseifert.massoterapeuta/"
                target="_blank"
                rel="noopener"
                aria-label="Seguir no Instagram"
                className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-brand-gold hover:border-brand-gold/50 transition-all hover:scale-105"
              >
                <InstagramIcon className="w-4 h-4" />
                <span className="sr-only">Instagram de Raquel Seifert</span>
              </a>
              <a
                href="https://maps.app.goo.gl/Lf6t1wBocaZZSwjc8"
                target="_blank"
                rel="noopener"
                aria-label="Ver localização no Google Maps"
                className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-brand-gold hover:border-brand-gold/50 transition-all hover:scale-105"
              >
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span className="sr-only">Localização no Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Linha inferior de créditos */}
        <div className="pt-8 flex items-center justify-center text-xs text-muted-foreground text-center">
          <p className="leading-relaxed">
            Feito com{" "}
            <Heart
              className="w-3.5 h-3.5 text-brand-terracotta inline-block align-middle fill-brand-terracotta mx-0.5 -mt-0.5"
              aria-hidden="true"
            />{" "}
            <a
              href="https://boxpage.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-gold font-medium transition-colors"
            >
              BoxPage
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
