import Link from "next/link";
import { Sparkles, Home, MessageCircle } from "lucide-react";

export default function NotFound() {
  return (
    <main className="box-section flex-1 flex items-center justify-center min-h-[60vh] bg-background">
      <div className="box-container-boxed text-center max-w-xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-muted text-xs uppercase tracking-widest font-semibold text-brand-gold border border-brand-gold/20">
          <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Conteúdo Não Encontrado</span>
        </div>

        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
          Parece que este caminho mudou de lugar
        </h1>

        <p className="text-foreground/80 text-base sm:text-lg leading-relaxed">
          A página ou endereço que procura não está disponível no momento. Mas fique tranquilo: pode voltar à página principal e encontrar todos os nossos serviços e informações de bem-estar.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-brand-gold hover:bg-brand-gold-hover text-white text-sm font-semibold shadow-md transition-all active:scale-95"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            <span>Voltar ao Início</span>
          </Link>

          <a
            href="https://api.whatsapp.com/send?phone=351926823317"
            target="_blank"
            rel="noopener"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-card hover:bg-muted text-foreground border border-border text-sm font-semibold transition-all"
          >
            <MessageCircle className="w-4 h-4 text-brand-gold" aria-hidden="true" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </main>
  );
}
