import Image from "next/image";
import { MessageCircle, Sparkles, ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex items-center justify-center pt-3 pb-10 sm:pt-10 sm:pb-16 lg:pt-16 lg:pb-20 min-h-[calc(100svh-4.5rem)] lg:min-h-[90vh] overflow-hidden bg-background"
    >
      {/* Imagem de Fundo Responsiva Otimizada para LCP */}
      <div className="absolute inset-0 z-0">
        {/* Imagem Desktop */}
        <div className="hidden lg:block relative w-full h-full">
          <Image
            src="/images/banner-desktop.jpg"
            alt="Ambiente sereno e relaxante de massoterapia com Raquel Seifert"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Imagem Tablet */}
        <div className="hidden sm:block lg:hidden relative w-full h-full">
          <Image
            src="/images/banner-tablet.jpg"
            alt="Ambiente sereno e acolhedor de massagem"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Imagem Mobile */}
        <div className="block sm:hidden relative w-full h-full">
          <Image
            src="/images/banner-mobile.jpg"
            alt="Toque terapêutico e bem-estar com massagem"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Gradiente Overlay Suave e Quente (Preserva atmosfera Maia e garante alto contraste) */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/40 md:from-background/95 md:via-background/70 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Conteúdo Central da Hero */}
      <div className="box-container-boxed relative z-10 w-full py-3 sm:py-8 lg:py-16">
        <div className="max-w-2xl lg:max-w-3xl space-y-4 sm:space-y-6 lg:space-y-8">
          {/* Badge Suave de Boas-Vindas */}
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-card/85 backdrop-blur-md border border-brand-gold/30 text-xs sm:text-sm font-medium text-foreground shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" aria-hidden="true" />
            <span>Massoterapia & Bem-Estar em Monção</span>
          </div>

          {/* Headline H1 */}
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.18]">
            Relaxe, Revitalize e <br />
            <span className="text-brand-gold italic">Sinta-se Bem.</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-sm sm:text-base md:text-lg text-foreground/80 leading-relaxed font-normal max-w-xl">
            Encontre o equilíbrio perfeito entre corpo e mente com massagens terapêuticas personalizadas, feitas sob medida para melhorar a sua qualidade de vida e proporcionar um bem-estar duradouro.
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 pt-1 sm:pt-2">
            <a
              href="https://api.whatsapp.com/send?phone=351926823317"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:py-3.5 rounded-full bg-brand-gold hover:bg-brand-gold-hover text-white text-sm sm:text-base font-medium shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              <span>Agendar Minha Sessão</span>
            </a>

            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-full bg-card/85 hover:bg-card text-foreground border border-border hover:border-brand-gold/40 text-sm sm:text-base font-medium backdrop-blur-xs shadow-xs hover:shadow-sm transition-all duration-200"
            >
              <span>Conhecer Serviços</span>
              <ArrowDown className="w-4 h-4 text-brand-gold" aria-hidden="true" />
            </a>
          </div>

          {/* Destaques Rápidos */}
          <div className="pt-4 sm:pt-6 lg:pt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 border-t border-border/60">
            <div>
              <p className="font-heading text-base sm:text-lg font-bold text-foreground">Atendimento</p>
              <p className="text-xs text-muted-foreground">100% Individualizado</p>
            </div>
            <div>
              <p className="font-heading text-base sm:text-lg font-bold text-foreground">Ambiente</p>
              <p className="text-xs text-muted-foreground">Sereno & Acolhedor</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="font-heading text-base sm:text-lg font-bold text-foreground">Localização</p>
              <p className="text-xs text-muted-foreground">Monção, Portugal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
