export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  badge?: string;
  duration?: string;
  whatsappMessage: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "massagem-relaxamento",
    title: "Massagem de Relaxamento",
    description: "Para aliviar o stress e promover um relaxamento profundo de corpo e mente.",
    longDescription: "Uma experiência revigorante através de movimentos suaves, contínuos e rítmicos que dissipam a tensão muscular acumulada, melhoram o sono e restauram a serenidade interior.",
    image: "/images/servico-massagem-relxamento.jpg",
    badge: "Mais Procurada",
    whatsappMessage: "Olá Raquel! Gostaria de agendar uma sessão de Massagem de Relaxamento.",
  },
  {
    id: "massagem-terapeutica",
    title: "Massagem Terapêutica",
    description: "Ideal para tratar dores musculares localizadas e melhorar a mobilidade funcional.",
    longDescription: "Técnica direcionada ao alívio de nós de tensão, contraturas e dores crônicas ou posturais. Trabalha camadas profundas do tecido muscular para devolver a liberdade de movimento.",
    image: "/images/servico-massagem-terapeutica.jpg",
    badge: "Alívio de Dores",
    whatsappMessage: "Olá Raquel! Gostaria de agendar uma sessão de Massagem Terapêutica.",
  },
  {
    id: "drenagem-linfatica",
    title: "Drenagem Linfática",
    description: "Para reduzir inchaços, melhorar a circulação e revitalizar o corpo com leveza.",
    longDescription: "Manobras suaves e precisas que estimulam o sistema linfático, auxiliando na eliminação de toxinas e líquidos retidos. Proporciona alívio imediato da sensação de peso nas pernas e revitalização geral.",
    image: "/images/servico-drenagem-linfatica.jpg",
    badge: "Desintoxicante",
    whatsappMessage: "Olá Raquel! Gostaria de agendar uma sessão de Drenagem Linfática.",
  },
  {
    id: "pedras-quentes",
    title: "Massagem com Pedras Quentes",
    description: "Uma experiência relaxante que harmoniza corpo e mente através do calor terapêutico.",
    longDescription: "A fusão perfeita entre a massoterapia e a energia geotermal de pedras vulcânicas aquecidas. O calor penetra profundamente na musculatura, aliviando o stress e proporcionando paz profunda.",
    image: "/images/servico-massagem-pedras-quentes.jpg",
    badge: "Experiência Sensorial",
    whatsappMessage: "Olá Raquel! Gostaria de agendar uma sessão de Massagem com Pedras Quentes.",
  },
  {
    id: "cranio-facial",
    title: "Massagem Crânio Facial",
    description: "Alívio imediato para tensões e dores na cabeça, pescoço, nuca e rosto.",
    longDescription: "Focada na libertação de tensões acumuladas na musculatura facial e couro cabeludo. Excelente para atenuar sintomas de stress, bruxismo, enxaquecas e cansaço visual.",
    image: "/images/servico-massagem-cranio-facial.jpg",
    badge: "Alívio Express",
    whatsappMessage: "Olá Raquel! Gostaria de agendar uma sessão de Massagem Crânio Facial.",
  },
  {
    id: "reflexologia-podal",
    title: "Reflexologia Podal",
    description: "Bem-estar e harmonia integral através de pontos reflexos e cuidado dedicado com os pés.",
    longDescription: "Estimulação dos pontos reflexos nos pés correspondentes a órgãos e sistemas do corpo humano. Desperta a autorregulação do organismo, alivia pés cansados e induz um relaxamento global.",
    image: "/images/servico-reflexologia-podal.jpg",
    badge: "Equilíbrio Integral",
    whatsappMessage: "Olá Raquel! Gostaria de agendar uma sessão de Reflexologia Podal.",
  },
  {
    id: "quatro-maos",
    title: "Massagem a Quatro Mãos",
    description: "Uma experiência sensorial única e luxuosa com sincronia harmoniosa e toque envolvente.",
    longDescription: "Dois terapeutas atuando em perfeita sintonia e ritmo coreografado sobre o corpo. Desconecta totalmente a mente do controle racional, proporcionando o ápice da descompressão sensorial.",
    image: "/images/servico-massagem-quatro-maos.jpg",
    badge: "Exclusiva & Luxuosa",
    whatsappMessage: "Olá Raquel! Gostaria de saber mais e agendar a Massagem a Quatro Mãos.",
  },
  {
    id: "desportiva",
    title: "Massagem Desportiva",
    description: "Tratamento especializado para quem pratica atividades físicas, melhorando o rendimento e prevenção.",
    longDescription: "Indicada para praticantes de atividades físicas regulares, profissionais ou recreativas. Melhora o desempenho atlético, previne lesões e acelera a recuperação muscular, reduzindo edemas e dores pós-treino.",
    image: "/images/servico-massagem-desportiva.jpg",
    badge: "Recuperação Ativa",
    whatsappMessage: "Olá Raquel! Gostaria de agendar uma sessão de Massagem Desportiva.",
  },
  {
    id: "integrativa",
    title: "Massagem Integrativa",
    description: "Tratamento personalizado que reúne múltiplas técnicas em sessão única, para alcançar maiores resultados.",
    longDescription: "Uma experiência terapêutica completa, desenhada sob medida para as necessidades do seu corpo e emoções. Combina o melhor de várias abordagens para acelerar a restauração física e mental duradoura.",
    image: "/images/servico-massagem-integrativa.jpg",
    badge: "Personalizada",
    whatsappMessage: "Olá Raquel! Gostaria de agendar uma sessão de Massagem Integrativa.",
  },
];
