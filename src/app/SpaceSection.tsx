import Image from "next/image";
import { Sparkles, Wind, Sun, ShieldCheck } from "lucide-react";

export default function SpaceSection() {
  return (
    <section id="espaco" className="box-section bg-background">
      <div className="box-container-boxed">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Coluna de Texto */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-muted text-xs uppercase tracking-widest font-semibold text-brand-gold border border-brand-gold/20">
                <Sparkles className="w-3 h-3" aria-hidden="true" />
                <span>O Nosso Espaço</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                Bem-estar começa aqui.
              </h2>
            </div>

            <p className="text-foreground/85 text-base sm:text-lg leading-relaxed">
              O meu espaço foi pensado com muito carinho para que você se sinta plenamente acolhido desde o primeiro instante. Cada detalhe foi planejado com rigor para proporcionar o máximo de conforto, relaxamento e privacidade durante todo o atendimento.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-card border border-border flex items-start gap-3">
                <div className="p-2 rounded-lg bg-brand-gold/10 text-brand-gold shrink-0">
                  <Sun className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-foreground">
                    Iluminação Suave
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Luz quente e difusa que induz a mente à desaceleração.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-card border border-border flex items-start gap-3">
                <div className="p-2 rounded-lg bg-brand-gold/10 text-brand-gold shrink-0">
                  <Wind className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-foreground">
                    Aromaterapia & Som
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Essências botânicas naturais e sonorização imersiva.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-card border border-border flex items-start gap-3 sm:col-span-2">
                <div className="p-2 rounded-lg bg-brand-gold/10 text-brand-gold shrink-0">
                  <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-foreground">
                    Higiene & Conforto Máximo
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Maca ergonômica acolchoada, lençóis esterilizados e toalhas de linho e algodão premium.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-xs text-muted-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-gold inline-block" />
                <span>Localizado no centro de Monção, com facilidade de acesso.</span>
              </p>
            </div>
          </div>

          {/* Coluna de Imagens do Espaço */}
          <div className="lg:col-span-6 relative">
            <div className="relative space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border bg-card">
                <Image
                  src="/images/raquel-seifert-massagem.jpg"
                  alt="Espaço terapêutico de massagem de Raquel Seifert em Monção"
                  width={640}
                  height={440}
                  className="w-full h-auto object-cover aspect-[4/3] hover:scale-102 transition-transform duration-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-xl overflow-hidden shadow-md border border-border bg-card aspect-square sm:aspect-[4/3]">
                  <Image
                    src="/images/espaco-foto-1.jpg"
                    alt="Ambiente de aromaterapia e velas Raquel Seifert em Monção"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-md border border-border bg-card aspect-square sm:aspect-[4/3]">
                  <Image
                    src="/images/espaco-foto-2.jpg"
                    alt="Espaço terapêutico com maca e ambiente acolhedor"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover object-bottom hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
