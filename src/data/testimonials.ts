export interface TestimonialItem {
  id: string;
  name: string;
  role?: string;
  content: string;
  image: string;
  rating: number;
  highlight?: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "diana-varandas",
    name: "Diana Varandas de Sá",
    role: "Cliente",
    content:
      "A Raquel é uma ótima profissional, ajudou-me com as minhas contraturas e consegui encontrar umas mãos que me ajudassem a relaxar. Tem um ambiente super acolhedor e relaxante. Eu tenho me sentido super bem e zero dores, recomendo cem por cento.",
    image: "/images/depoimento-diana-varandas-de-sa.jpg",
    rating: 5,
    highlight: "Zero dores e super acolhedor",
  },
  {
    id: "josaine-silva",
    name: "Josaine Silva",
    role: "Cliente",
    content:
      "Excelente profissional, ambiente aconchegante e lindo! Depois que comecei com as massagens não precisei mais tomar relaxante muscular e certamente voltarei mais vezes. Mãozinhas de fada.",
    image: "/images/depoimento-josaine-silva.jpg",
    rating: 5,
    highlight: "Mãozinhas de fada",
  },
];
