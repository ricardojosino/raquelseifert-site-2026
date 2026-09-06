import Image from "next/image";
import { Heart, Sparkles, UserCheck, ShieldCheck } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="sobre" className="box-section bg-background">
      <div className="box-container-boxed">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Coluna da Imagem */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Elemento Decorativo Orgânico de Fundo */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-brand-sage/20 via-brand-gold/15 to-brand-terracotta/20 blur-md transform -rotate-1" />

              {/* Moldura da Imagem */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border bg-card">
                <Image
                  src="/images/bio-raquel-seifert.jpg"
                  alt="Raquel Seifert, Terapeuta e Massoterapeuta"
                  width={520}
                  height={650}
                  className="w-full h-auto object-cover object-center aspect-[4/5] hover:scale-102 transition-transform duration-500"
                />
              </div>

              {/* Card Flutuante de Confiança */}
              <div className="absolute -bottom-6 -right-2 sm:-right-4 bg-card/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-lg border border-border max-w-[240px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                    <Heart className="w-5 h-5 fill-brand-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold text-foreground">
                      Cuidado Genuíno
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Toque terapêutico com amor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna de Texto */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-muted text-xs uppercase tracking-widest font-semibold text-brand-gold border border-brand-gold/20">
                <Sparkles className="w-3 h-3" aria-hidden="true" />
                <span>Sobre Mim</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                Olá, sou Raquel Seifert!
              </h2>
            </div>

            <div className="space-y-4 text-foreground/85 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                Tenho o privilégio de contar com o apoio da minha família para dedicar-me ao que mais amo fazer: <strong>ajudar pessoas através da massoterapia</strong>.
              </p>
              <p>
                Minha paixão é proporcionar <strong>qualidade de vida</strong> aos meus clientes, sempre com transparência, carinho e dedicação. Cada atendimento é único e individualizado, focado em alcançar os melhores resultados para o seu bem-estar físico e mental.
              </p>
              <p>
                Tratar cada cliente como único e respeitar a sua individualidade é exatamente o que me inspira diariamente. Meu objetivo é transformar a sua experiência com um toque terapêutico que vai além do corpo físico, trazendo profundo conforto e equilíbrio também para a sua mente.
              </p>
            </div>

            {/* Pilares de Atendimento */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-card border border-border/70 flex items-start gap-3 shadow-2xs">
                <UserCheck className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-heading text-sm font-semibold text-foreground">
                    Atendimento Individualizado
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Avaliação cuidadosa das suas queixas para uma sessão sob medida.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-card border border-border/70 flex items-start gap-3 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-heading text-sm font-semibold text-foreground">
                    Transparência & Dedicação
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Ambiente seguro, acolhedor e técnicas aplicadas com total ética.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#agendar"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-gold hover:text-brand-gold-hover hover:underline underline-offset-4 transition-colors"
              >
                <span>Conheça as opções de agendamento</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
