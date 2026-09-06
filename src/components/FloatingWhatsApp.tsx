"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Atendimento rápido pelo WhatsApp">
      <a
        href="https://api.whatsapp.com/send?phone=351926823317"
        target="_blank"
        rel="noopener"
        aria-label="Abrir conversa no WhatsApp com Raquel Seifert Massoterapeuta"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 text-white fill-white shrink-0" aria-hidden="true" />
        <span className="hidden sm:inline text-xs font-semibold tracking-wide pr-1">
          Agendar no WhatsApp
        </span>
        <span className="sr-only">Abrir conversa no WhatsApp para agendamento</span>
      </a>
    </aside>
  );
}
