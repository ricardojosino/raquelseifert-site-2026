import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import CtaCareSection from "./CtaCareSection";
import SpaceSection from "./SpaceSection";
import TestimonialsSection from "./TestimonialsSection";
import BookingSection from "./BookingSection";
import { servicesData } from "@/data/services";

const siteUrl = "https://raquelseifert.pt";

export const metadata: Metadata = {
  title: "Raquel Seifert | Massoterapia e Bem-Estar em Monção, Portugal",
  description:
    "Massagens terapêuticas personalizadas em Monção: relaxamento, drenagem linfática, pedras quentes, desportiva e integrativa. Agende sua sessão com Raquel Seifert.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Raquel Seifert | Massoterapia e Bem-Estar em Monção, Portugal",
    description:
      "Encontre o equilíbrio entre corpo e mente com massagens terapêuticas personalizadas em Monção. Agende sua sessão.",
    url: siteUrl,
    siteName: "Raquel Seifert Massoterapeuta",
    locale: "pt_PT",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/banner-desktop.jpg`,
        width: 1200,
        height: 630,
        alt: "Raquel Seifert Massoterapia e Bem-Estar em Monção",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raquel Seifert | Massoterapia e Bem-Estar em Monção",
    description:
      "Massagens terapêuticas personalizadas em Monção: relaxamento, drenagem linfática, pedras quentes, desportiva e integrativa.",
    images: [`${siteUrl}/images/banner-desktop.jpg`],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["HealthAndBeautyBusiness", "ProfessionalService"],
    name: "Raquel Seifert - Massoterapeuta",
    description:
      "Massagens terapêuticas personalizadas em Monção: relaxamento, drenagem linfática, pedras quentes, desportiva e integrativa. Cuidado holístico e atendimento humanizado.",
    image: `${siteUrl}/images/bio-raquel-seifert.jpg`,
    telephone: "+351 926 823 317",
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Gen. Pimenta de Castro, 38",
      addressLocality: "Monção",
      addressCountry: "PT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 42.0725,
      longitude: -8.4811,
    },
    sameAs: [
      "https://www.instagram.com/raquelseifert.massoterapeuta/",
      "https://maps.app.goo.gl/Lf6t1wBocaZZSwjc8",
    ],
    priceRange: "€€",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tratamentos e Massagens Terapêuticas",
      itemListElement: servicesData.map((s, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CtaCareSection />
        <SpaceSection />
        <TestimonialsSection />
        <BookingSection />
      </main>
    </>
  );
}
