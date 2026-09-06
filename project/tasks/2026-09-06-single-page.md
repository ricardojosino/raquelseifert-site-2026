---
title: "Single Page - Raquel Seifert Massoterapia"
description: "Desenvolvimento da landing page / single page institucional de Raquel Seifert Massoterapeuta em Monção, Portugal."
---

## Regras
- path: `/`
- Use a skill `project/skills/skill-architecture-site.md` para entender o padrão técnico;
- Use a skill `project/skills/skill-project-style-guide.md` para entender o style guide do projeto;
- Use a skill `project/skills/skill-seo-performance.md` para entender sobre o padrão de SEO aplicado;
- Use a skill `project/skills/skill-page-privacy.md` para criar a página de privacidade;

## SEO
title: "Raquel Seifert | Massoterapia e Bem-Estar em Monção, Portugal"
description: "Massagens terapêuticas personalizadas em Monção: relaxamento, drenagem linfática, pedras quentes, desportiva e integrativa. Agende sua sessão com Raquel Seifert."

## Schema JSON-LD
- `@context`: `https://schema.org`
- `@type`: `["HealthAndBeautyBusiness", "ProfessionalService"]`
- `name`: "Raquel Seifert - Massoterapeuta"
- `description`: "Massagens terapêuticas personalizadas em Monção: relaxamento, drenagem linfática, pedras quentes, desportiva e integrativa."
- `image`: `${baseUrl}/images/seo/seo-single-page.jpg`
- `telephone`: "+351 926 823 317"
- `address`:
  - `@type`: `PostalAddress`
  - `streetAddress`: "Rua Gen. Pimenta de Castro, 38"
  - `addressLocality`: "Monção"
  - `addressCountry`: "PT"
- `sameAs`:
  - `https://www.instagram.com/raquelseifert.massoterapeuta/`
  - `https://maps.app.goo.gl/Lf6t1wBocaZZSwjc8`
- `hasOfferCatalog`:
  - Catálogo de serviços com os 9 tratamentos oferecidos.

## Seções

### 1. Header & Navegação
- **Componentes**: `HeaderDesktop.tsx` e `HeaderMobile.tsx`
- **Itens de Menu com Âncoras**:
  - Início (`#inicio`)
  - Sobre Mim (`#sobre`)
  - Serviços (`#servicos`)
  - O Espaço (`#espaco`)
  - Depoimentos (`#depoimentos`)
  - Agendamento (`#agendar`)
- **Ação em destaque (CTA)**: Botão "Agendar Sessão" redirecionando para o WhatsApp (`https://api.whatsapp.com/send?phone=351926823317`).

### 2. Hero Section (`HeroSection.tsx`)
- **ID da Seção**: `#inicio`
- **Headline (H1)**: "Relaxe, Revitalize e Sinta-se Bem."
- **Subtítulo**: "Encontre o equilíbrio entre corpo e mente com massagens terapêuticas personalizadas, feitas para melhorar sua qualidade de vida e trazer bem-estar duradouro."
- **CTAs**:
  - Primário: "Agendar Sessão" (link para `#agendar` ou WhatsApp)
  - Secundário: "Conhecer Serviços" (âncora `#servicos`)
- **Imagens Responsivas**:
  - Mobile: `project/context/banner-mobile.jpg`
  - Tablet: `project/context/banner-tablet.jpg`
  - Notebook/Desktop: `project/context/banner-desktop.jpg`
- **Requisitos de Performance (CWV)**:
  - Uso de `next/image` com `priority={true}` na imagem da Hero para garantir pontuação máxima no LCP.

### 3. Sobre Mim (`AboutSection.tsx`)
- **ID da Seção**: `#sobre`
- **Título (H2)**: "Olá, sou Raquel Seifert!"
- **Foto**: `project/context/bio-raquel-seifert.jpg`
- **Conteúdo**:
  - Apoio da família para dedicação exclusiva à massoterapia e ajuda ao próximo.
  - Paixão por proporcionar qualidade de vida aos clientes com transparência, carinho e dedicação.
  - Atendimento único e individualizado para alcançar resultados ideais no bem-estar físico e mental.
  - Respeito à individualidade como fonte de inspiração.
  - Propósito de transformar a experiência com toque terapêutico que traz conforto e equilíbrio físico e mental.

### 4. Serviços (`ServicesSection.tsx`)
- **ID da Seção**: `#servicos`
- **Cabeçalho**:
  - Título (H2): "O que eu ofereço?"
  - Subtítulo / Texto: Explicação de que cada pessoa possui necessidades únicas e convite para escolher o tipo de cuidado mais adequado.
- **Estrutura de Dados**: Separada em `src/data/services.ts`.
- **Cards dos Serviços** (com imagem, título e descrição):
  1. **Massagem de Relaxamento**: Para aliviar o estresse e promover um relaxamento profundo.
     - Foto: `project/context/servico-massagem-relxamento.jpg`
  2. **Massagem Terapêutica**: Ideal para tratar dores musculares e melhorar a mobilidade.
     - Foto: `project/context/servico-massagem-terapeutica.jpg`
  3. **Drenagem Linfática**: Para reduzir inchaços, melhorar a circulação e revitalizar o corpo.
     - Foto: `project/context/servico-drenagem-linfatica.jpg`
  4. **Massagem com Pedras Quentes**: Uma experiência relaxante que harmoniza corpo e mente.
     - Foto: `project/context/servico-massagem-pedras-quentes.jpg`
  5. **Massagem Crânio Facial**: Alívio para tensões e dores na cabeça, pescoço e rosto.
     - Foto: `project/context/servico-massagem-cranio-facial.jpg`
  6. **Reflexologia Podal**: Bem-estar geral através de pontos reflexos e cuidado com os pés.
     - Foto: `project/context/servico-reflexologia-podal.jpg`
  7. **Massagem a Quatro Mãos**: Uma experiência sensorial única e luxuosa.
     - Foto: `project/context/servico-massagem-quatro-maos.jpg`
  8. **Massagem Desportiva**: Tratamento especializado para praticantes de atividades físicas regulares, melhorando desempenho, prevenindo lesões e acelerando a recuperação muscular.
     - Foto: `project/context/servico-massagem-desportiva.jpg`
  9. **Massagem Integrativa**: Tratamento complementar que combina várias técnicas em sessão única para potencializar resultados rápidos e promover cuidado integrado entre corpo, mente e emoções.
     - Foto: `project/context/servico-massagem-integrativa.jpg`

### 5. Chamada de Autocuidado (`CtaCareSection.tsx`)
- **Título (H2)**: "Cuide de Você!"
- **Texto**: "Não deixe para depois o cuidado que você merece. Seja para relaxar, aliviar tensões ou renovar suas energias, eu estou aqui para ajudar você a se sentir melhor. Vamos agendar a sua sessão?"
- **Botão**: "Quero Minha Sessão" (Scroll suave para a seção `#agendar`).

### 6. O Espaço (`SpaceSection.tsx`)
- **ID da Seção**: `#espaco`
- **Título (H2)**: "Bem-estar começa aqui."
- **Texto**: "Meu espaço foi pensado com muito carinho para que você se sinta acolhido desde o momento em que chega. Cada detalhe foi planejado para proporcionar conforto e relaxamento."
- **Foto**: `project/context/raquel-seifert-massagem.jpg`

### 7. O que dizem sobre mim (`TestimonialsSection.tsx`)
- **ID da Seção**: `#depoimentos`
- **Título (H2)**: "O que dizem sobre mim"
- **Estrutura de Dados**: Separada em `src/data/testimonials.ts`.
- **Depoimentos**:
  1. **Diana Varandas de Sá**:
     - Depoimento: "A Raquel é uma ótima profissional, ajudou me com as minhas contracturas e consegui encontrar umas mãos que me ajudassem a relaxar. Tem um ambiente super acolhedor e relaxante. Eu tenho me sentido super bem e zero dores, recomendo cem por cento."
     - Foto: `project/context/depoimento-diana-varandas-de-sa.jpg`
  2. **Josaine Silva**:
     - Depoimento: "Excelente profissional, ambiente aconchegante e lindo! Depois que comecei com as massagens não precisei mais tomar relaxante muscular e certamente voltarei mais vezes. Mãozinhas de fada."
     - Foto: `project/context/depoimento-josaine-silva.jpg`

### 8. Agendamento / Conversão Final (`BookingSection.tsx`)
- **ID da Seção**: `#agendar`
- **Título (H2)**: "Vamos Agendar?"
- **Texto**: "Cuidar de si mesmo é um gesto de amor próprio. Com as minhas massagens personalizadas, você vai sentir a diferença no corpo e na mente, ganhando mais equilíbrio e energia para encarar o dia a dia. Não deixe para depois! Eu estou aqui para entender suas necessidades e ajudar você a alcançar o bem-estar que merece."
- **CTA Principal**: Botão "Agendar Sessão" abrindo o WhatsApp com link: `https://api.whatsapp.com/send?phone=351926823317`
- **Foto**: `project/context/espaco-raquel-seifert.jpg`

### 9. Rodapé (`Footer.tsx`)
- **Identidade**: Raquel Seifert - Massoterapeuta
- **Endereço**: Rua Gen. Pimenta de Castro, 38 Monção, Portugal ([Ver no Google Maps](https://maps.app.goo.gl/Lf6t1wBocaZZSwjc8))
- **WhatsApp / Telefone**: +351 926 823 317 ([WhatsApp](https://api.whatsapp.com/send?phone=351926823317))
- **Links Sociais**:
  - Instagram: [Instagram](https://www.instagram.com/raquelseifert.massoterapeuta/)
  - Google Maps: [Google Maps](https://maps.app.goo.gl/Lf6t1wBocaZZSwjc8)
- **Privacidade**: Link para `/privacidade` (em conformidade com a skill `skill-page-privacy.md`).
