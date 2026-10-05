import Image from "next/image";
import { servicesData } from "@/data/services";
import { MessageCircle, Sparkles } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="servicos" className="box-section bg-muted/40">
      <div className="box-container-boxed">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-card border border-brand-gold/20 text-xs uppercase tracking-widest font-semibold text-brand-gold shadow-2xs">
            <Sparkles className="w-3 h-3" aria-hidden="true" />
            <span>Massagens Especializadas</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            O que eu ofereço?
          </h2>

          <p className="text-foreground/80 text-base sm:text-lg leading-relaxed">
            Cada pessoa tem as suas próprias necessidades, e é por isso que ofereço diferentes tipos de massagens para ajudar sentir-se renovado. Seja para relaxar depois de um dia estressante, aliviar aquela dor incômoda ou simplesmente cuidar de si, cada técnica é aplicada de maneira refinada, com carinho e atenção.
          </p>
        </div>

        {/* Grade de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const encodedMsg = encodeURIComponent(service.whatsappMessage);
            const whatsappUrl = `https://api.whatsapp.com/send?phone=351926823317&text=${encodedMsg}`;

            return (
              <article
                key={service.id}
                className="group bg-card rounded-2xl overflow-hidden border border-border/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
              >
                {/* Imagem do Serviço */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                  <Image
                    src={service.image}
                    alt={`Sessão de ${service.title} com Raquel Seifert`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Badge */}
                  {service.badge && (
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-card/90 backdrop-blur-md text-brand-gold shadow-xs border border-brand-gold/20">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-5">
                  <div className="space-y-2.5">
                    <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-brand-gold transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Ação de Agendamento */}
                  <div className="pt-2 border-t border-border/50">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-background hover:bg-brand-gold hover:text-white text-foreground font-medium text-sm border border-border group-hover:border-brand-gold/50 transition-all duration-200"
                    >
                      <MessageCircle className="w-4 h-4 text-brand-gold group-hover:text-white transition-colors" aria-hidden="true" />
                      <span>Agendar este Tratamento</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Mensagem Final de Conexão */}
        <div className="text-center pt-12">
          <p className="text-sm sm:text-base text-muted-foreground">
            Tem dúvidas sobre qual a massagem ideal para você?{" "}
            <a
              href="https://api.whatsapp.com/send?phone=351926823317&text=Ol%C3%A1%20Raquel!%20Gostaria%20de%20ajuda%20para%20escolher%20a%20massagem%20ideal."
              target="_blank"
              rel="noopener"
              className="text-brand-gold font-semibold underline underline-offset-4 hover:text-brand-gold-hover"
            >
              Fale diretamente comigo pelo WhatsApp
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
