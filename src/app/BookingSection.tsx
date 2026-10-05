import Image from "next/image";
import { MessageCircle, Clock, MapPin, CalendarCheck, Sparkles } from "lucide-react";

export default function BookingSection() {
  return (
    <section id="agendar" className="box-section bg-background">
      <div className="box-container-boxed">
        <div className="relative rounded-3xl overflow-hidden border border-border bg-gradient-to-br from-card via-card to-muted/50 p-8 sm:p-12 lg:p-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Coluna de Texto e Ação */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/10 text-xs uppercase tracking-widest font-semibold text-brand-gold border border-brand-gold/20">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold" aria-hidden="true" />
                <span>Agende a sua Consulta</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
                Vamos Agendar?
              </h2>

              <div className="space-y-3.5 text-foreground/85 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  Cuidar de si mesmo é um gesto fundamental de amor próprio. Com minhas massagens personalizadas, irá sentir a diferença imediata no corpo.
                </p>
                <p className="font-medium text-foreground">
                  Não deixe para depois! Estou pronta para compreender as suas necessidades específicas e ajudar você a alcançar o bem-estar duradouro que merece.
                </p>
              </div>

              {/* Botão de Agendamento */}
              <div className="pt-3">
                <a
                  href="https://api.whatsapp.com/send?phone=351926823317&text=Ol%C3%A1%20Raquel!%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20massoterapia."
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-4.5 rounded-full bg-brand-gold hover:bg-brand-gold-hover text-white text-base sm:text-lg font-semibold shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
                >
                  <MessageCircle className="w-5 h-5 text-white group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <span>Agendar Sessão no WhatsApp</span>
                </a>
              </div>

              {/* Informações Práticas */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border/70 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center gap-2.5">
                  <CalendarCheck className="w-4 h-4 text-brand-gold shrink-0" aria-hidden="true" />
                  <span>Atendimento com marcação prévia</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-brand-gold shrink-0" aria-hidden="true" />
                  <span>Resposta rápida e personalizada</span>
                </div>
                <div className="flex items-center gap-2.5 sm:col-span-2">
                  <MapPin className="w-4 h-4 text-brand-gold shrink-0" aria-hidden="true" />
                  <span>Rua Gen. Pimenta de Castro, 38 Monção, Portugal</span>
                </div>
              </div>
            </div>

            {/* Coluna da Imagem */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-border aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/5]">
                <Image
                  src="/images/espaco-raquel-seifert.jpg"
                  alt="Espaço acolhedor de massoterapia em Monção"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center hover:scale-103 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
