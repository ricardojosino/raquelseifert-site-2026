import type { Metadata } from "next";
import Content from "./Content";
import { privacyData } from "@/data/privacyData";

export const metadata: Metadata = {
  title: `Política de Privacidade e Cookies | ${privacyData.company.brandName}`,
  description: `Conheça a Política de Privacidade e Tratamento de Dados de Raquel Seifert Massoterapia em Monção, em conformidade com o RGPD em Portugal e na União Europeia.`,
  alternates: {
    canonical: "/privacidade",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <main className="flex-1 bg-background">
      <Content data={privacyData} />
    </main>
  );
}
