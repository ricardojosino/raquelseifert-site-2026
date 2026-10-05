import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import HeaderDesktop from "@/components/HeaderDesktop";
import HeaderMobile from "@/components/HeaderMobile";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://raquelseifert.com"),
  title: {
    default: "Raquel Seifert | Massoterapia e Bem-Estar em Monção, Portugal",
    template: "%s | Raquel Seifert Massoterapia",
  },
  description:
    "Massagens terapêuticas personalizadas em Monção: relaxamento, drenagem linfática, pedras quentes, desportiva e integrativa. Agende sua sessão com Raquel Seifert.",
  keywords: [
    "Massoterapia Monção",
    "Massagem Monção Portugal",
    "Raquel Seifert",
    "Drenagem Linfática Monção",
    "Massagem Terapêutica",
    "Massagem de Relaxamento",
    "Massagem Pedras Quentes",
    "Massagem Desportiva Monção",
    "Bem-estar Monção",
  ],
  authors: [{ name: "Raquel Seifert" }],
  creator: "Raquel Seifert",
  publisher: "Raquel Seifert",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/icone-raquel-seifert.png",
    shortcut: "/images/icone-raquel-seifert.png",
    apple: "/images/icone-raquel-seifert.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-PT"
      className={`${montserrat.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans antialiased">
        <HeaderDesktop />
        <HeaderMobile />
        <div className="flex-1 flex flex-col pt-18 xl:pt-20">
          {children}
        </div>
        <Footer />
        <CookieBanner />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
