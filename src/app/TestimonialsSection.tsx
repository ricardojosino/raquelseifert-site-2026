import Image from "next/image";
import { testimonialsData } from "@/data/testimonials";
import { Star, Sparkles, Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="box-section bg-muted/40">
      <div className="box-container-boxed">
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-card border border-brand-gold/20 text-xs uppercase tracking-widest font-semibold text-brand-gold shadow-2xs">
            <Sparkles className="w-3 h-3" aria-hidden="true" />
            <span>Experiências Reais</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            O que dizem sobre mim
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg">
            A satisfação, o alívio e a transformação relatados por quem confia no meu toque terapêutico.
          </p>
        </div>

        {/* Grade de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-card p-8 sm:p-9 rounded-2xl border border-border/80 shadow-xs hover:shadow-lg transition-all duration-300 relative flex flex-col justify-between"
            >
              {/* Ícone de Aspas Sutil */}
              <div className="absolute top-6 right-6 text-brand-gold/15">
                <Quote className="w-10 h-10" aria-hidden="true" />
              </div>

              <div className="space-y-4">
                {/* Estrelas de Avaliação */}
                <div className="flex items-center gap-1 text-brand-gold" aria-label="Avaliação 5 de 5 estrelas">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" aria-hidden="true" />
                  ))}
                </div>

                {/* Texto do Depoimento */}
                <p className="text-foreground/85 text-base sm:text-lg leading-relaxed italic">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Autor */}
              <div className="pt-6 mt-6 border-t border-border/60 flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-brand-gold/40 shrink-0 bg-muted">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="56px"
                    className="object-cover object-center"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {item.name}
                  </h3>
                  <p className="text-xs text-brand-gold font-medium">
                    {item.highlight || "Avaliação verificada"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
