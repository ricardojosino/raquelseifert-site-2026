import { Heart, Sparkles, ArrowDown } from "lucide-react";

export default function CtaCareSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-brand-sage/15 via-background to-brand-gold/15 border-y border-border/70 relative overflow-hidden">
      <div className="box-container-boxed relative z-10 text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-brand-gold/30 text-xs uppercase tracking-widest font-semibold text-brand-gold shadow-xs">
          <Heart className="w-3.5 h-3.5 fill-brand-gold" aria-hidden="true" />
          <span>Momento de Autocuidado</span>
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
          Cuide de Você!
        </h2>

        <p className="text-foreground/85 text-base sm:text-lg md:text-xl leading-relaxed font-normal">
          Não deixe para depois o cuidado e o alívio que o seu corpo e mente merecem. Seja para relaxar profundamente, aliviar tensões crônicas ou renovar as suas energias, estou aqui para acompanhar o seu processo de bem-estar.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#agendar"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-brand-gold hover:bg-brand-gold-hover text-white text-base font-semibold shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <Sparkles className="w-5 h-5" aria-hidden="true" />
            <span>Quero Minha Sessão</span>
            <ArrowDown className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
