---
title: "Skill Project Style Guide"
description: "Guia Oficial de Design System, Identidade Visual e Tokens para o site de Raquel Seifert Massoterapia"
---

# Style Guide & Design System: Raquel Seifert Massoterapia

Este documento é a especificação oficial de UI, UX, Tokens e Identidade Visual para o projeto **Raquel Seifert - Massoterapeuta**. Todos os componentes, seções e páginas devem seguir rigorosamente estas diretrizes para assegurar consistência visual, acessibilidade e alinhamento com a atmosfera da marca.

---

## 1. Identidade Visual e Moodboard Conceitual

### Conceito de Design: Santuário de Serenidade
O design foi desenvolvido sob o conceito de **Oásis de Paz e Bem-Estar**. Ele traduz digitalmente a experiência do toque terapêutico e do acolhimento presente no espaço físico de Raquel Seifert em Monção, Portugal.
A interface proporciona sensação imediata de descompressão, respiro e reconexão interior, inspirada no preset **Maia** do Shadcn, combinando elementos orgânicos, tons botânicos/terrosos e iluminação suave.

### Vibe: "Respira e relaxa"
- Atmosfera tranquila, luminosa e convidativa.
- Imagens com luz natural suave, texturas de pedras quentes, gotas de água, linho cru e folhas verdes frescas.
- Sem cores berrantes, sem saturação excessiva e sem poluição visual.

### Princípios de Design
1. **Serenidade Orgânica:** O espaço em branco é um elemento de cura. Layouts desobstruídos com respiro generoso entre seções transmitem tranquilidade e calma mental.
2. **Toque Acolhedor & Humano:** Curvaturas suaves (`rounded-xl` / `rounded-2xl`), contrastes aquecidos (off-white e linho no lugar de cinza frio) e micro-interações gentis transmitem acolhimento e cuidado.
3. **Harmonia & Equilíbrio:** A hierarquia tipográfica equilibrada entre uma Serif elegante e uma Sans-serif moderna guia o olhar sem esforço.
4. **Transparência & Acessibilidade:** Contraste tipográfico acessível (WCAG AA/AAA), foco visível para teclado e navegação direta para agendamento humanizado via WhatsApp.

---

## 2. Paleta de Cores & Tokens Semânticos

A paleta une a **cor oficial da marca** (`#AB9047`) aos tons botânicos (Verde Sálvia), terrosos (Terracota Suave) e neutros confortáveis (Bege Areia e Linho).

### 2.1 Brand Colors (Cores da Marca)
| Token | Cor | HEX | RGB | Função |
| :--- | :--- | :--- | :--- | :--- |
| `--color-brand-gold` (Primary) | Ouro Âmbar Suave | `#AB9047` | `171, 144, 71` | Cor oficial da marca. Botões principais, selos, destaques e acentos de prestígio. |
| `--color-brand-sage` (Secondary) | Verde Sálvia Botânico | `#768D77` | `118, 141, 119` | Expressa cura natural e botânica. Cards secundários, badges e tags de serviços. |
| `--color-brand-terracotta` (Accent) | Terracota Suave | `#C88265` | `200, 130, 101` | Expressa calor e acolhimento humano. Ícones, detalhes e chamadas de autocuidado. |

### 2.2 Neutrals & Surfaces (Superfícies e Neutros)
| Token | Nome | HEX | RGB | Função |
| :--- | :--- | :--- | :--- | :--- |
| `--background` | Bege Areia Puro | `#FAF8F5` | `250, 248, 245` | Fundo principal da página. Elimina a frieza do branco absoluto. |
| `--card` / `--surface` | Branco Papiro | `#FFFFFF` | `255, 255, 255` | Superfície de cartões, painéis modais e drawers. |
| `--muted` | Linho Natural Suave | `#F2ECE1` | `242, 236, 225` | Fundo de seções alternadas, badges neutros e inputs inativos. |
| `--border` | Areia Neutra / Borda | `#E4DCCE` | `228, 220, 206` | Linhas divisórias sutis e contornos de cards. |
| `--ring` | Anel de Foco Dourado | `#AB9047` | `171, 144, 71` | Indicador de foco acessível (com 40%-60% de opacidade). |

### 2.3 Typography & Foregrounds (Textos e Contraste)
| Token | Nome | HEX | RGB | Função |
| :--- | :--- | :--- | :--- | :--- |
| `--foreground` | Marrom Floresta Profundo | `#26231E` | `38, 35, 30` | Títulos e textos de leitura principal (alto contraste quente). |
| `--muted-foreground` | Marrom Terroso Médio | `#6A6357` | `106, 99, 87` | Descrições secundárias, legendas e textos auxiliares. |
| `--primary-foreground` | Branco Seda | `#FFFFFF` | `255, 255, 255` | Texto sobre botões e fundos escuros ou dourados. |
| `--disabled` | Areia Fóssil | `#A8A295` | `168, 162, 149` | Estados desabilitados e placeholders sutis. |

### 2.4 Semantic & Feedback (Mensagens e Ações)
| Token | Nome | HEX | Função |
| :--- | :--- | :--- | :--- |
| `--color-success` | Verde Folha (`#4E8055`) | Confirmação de agendamento e status positivo. |
| `--color-warning` | Âmbar Herbal (`#C88732`) | Avisos e pontos de atenção sobre contraindicações. |
| `--color-error` / `--destructive` | Argila Queimada (`#B84C3E`) | Erros de preenchimento e mensagens de cancelamento. |
| `--color-info` | Névoa Azulada Sálvia (`#5C7E8A`) | Informações de localização, horário e orientações. |

### 2.5 Modo Escuro (Dark Sanctuary - Opcional)
No caso de ativação de Dark Mode, utilizar tons de terra noturna e sálvia escuro em vez de preto puro:
- `--background`: `#1C1A17` (Café Florestal Noturno)
- `--card`: `#24211D` (Madeira Nobre Acolhedora)
- `--foreground`: `#F5EFE6` (Areia Iluminada)
- `--muted`: `#2D2924`
- `--border`: `#3B362F`
- `--primary`: `#C9AF65` (Ouro Claro com brilho suave no fundo escuro)

---

## 3. Escala Tipográfica (Typography Scale)

### 3.1 Famílias de Fontes
- **Headings (Títulos & Destaques):** `Playfair Display`, serif.
  - Expressa elegância atemporal, confiança, sofisticação e toque clássico europeu.
- **Body & Interface (Corpo de Texto, Botões e Navegação):** `Montserrat`, sans-serif.
  - Oferece desenho geométrico limpo, leveza visual, clareza e excelente legibilidade em telas mobile e desktop.
- **Fallback:** `ui-serif, Georgia, Cambria, serif` (para títulos) e `system-ui, -apple-system, BlinkMacSystemFont, sans-serif` (para corpo).

### 3.2 Tabela de Hierarquia Tipográfica

| Elemento / Token | Família | Tamanho (px / rem) | Altura de Linha (line-height) | Peso (font-weight) | Letter-Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display / Hero H1** | Playfair Display | `48px - 56px` / `3rem - 3.5rem` | `1.15` | Bold (700) | `-0.02em` |
| **H1 (Página)** | Playfair Display | `36px - 44px` / `2.25rem - 2.75rem` | `1.2` | SemiBold (600) | `-0.015em` |
| **H2 (Seções)** | Playfair Display | `28px - 34px` / `1.75rem - 2.125rem` | `1.25` | SemiBold (600) | `-0.01em` |
| **H3 (Cards / Tópicos)** | Playfair Display | `20px - 24px` / `1.25rem - 1.5rem` | `1.3` | Medium (500) | `0` |
| **H4 (Subtítulos)** | Montserrat | `16px - 18px` / `1rem - 1.125rem` | `1.4` | SemiBold (600) | `0.01em` |
| **Body Large (Destaque)**| Montserrat | `18px` / `1.125rem` | `1.6` | Regular (400) | `0` |
| **Body Regular (Padrão)** | Montserrat | `16px` / `1rem` | `1.65` | Regular (400) | `0` |
| **Body Small / Muted** | Montserrat | `14px` / `0.875rem` | `1.5` | Regular (400) | `0` |
| **Caption / Overline** | Montserrat | `12px` / `0.75rem` | `1.4` | SemiBold (600) | `0.08em` (Uppercase) |
| **Button Text** | Montserrat | `15px` / `0.9375rem` | `1` | Medium (500) / SemiBold | `0.02em` |

---

## 4. Espaçamento, Grid e Elevação

### 4.1 Escala de Espaçamentos (Base 4px / 8px)
- `space-1`: `4px` (`0.25rem`)
- `space-2`: `8px` (`0.5rem`)
- `space-3`: `12px` (`0.75rem`)
- `space-4`: `16px` (`1rem`)
- `space-6`: `24px` (`1.5rem`)
- `space-8`: `32px` (`2rem`)
- `space-12`: `48px` (`3rem`)
- `space-16`: `64px` (`4rem`)
- `space-20`: `80px` (`5rem`)
- `space-24`: `96px` (`6rem`)

### 4.2 Containers e Seções (Alinhado à skill `skill-architecture-site.md`)
- `.box-section`:
  - Mobile: `py-10` ou `py-12` (espaçamento vertical harmônico).
  - Tablet / Desktop: `py-16` a `py-20`.
- `.box-container-boxed`:
  - `max-w-[1200px]` (telas de até 1366px) e `max-w-[1400px]` (telas maiores), centralizado com `mx-auto` e `px-4 sm:px-6 lg:px-8`.
- `.box-container-full`:
  - Largura `100%` com `px-4 sm:px-6`.

### 4.3 Border Radius (Cantos Arredondados Orgânicos)
- `radius-sm`: `6px` (`0.375rem`) - Badges, tags pequenas e checkboxes.
- `radius-md`: `10px` (`0.625rem`) - Inputs, selects e botões secundários.
- `radius-lg`: `16px` (`1rem`) - Botões principais, imagens e cards compactos.
- `radius-xl`: `24px` (`1.5rem`) - Cards de destaque, depoimentos e modais.
- `radius-2xl`: `32px` (`2rem`) - Banners promocionais e contêineres de hero.
- `radius-full`: `9999px` - Botão flutuante WhatsApp, pílulas e avatares.

### 4.4 Sombras e Elevações (Warm Ambient Shadows)
Evitar sombras pretas ou duras. Utilizar sombras suaves e quentes inspiradas na luz difusa:
- **Elevação 1 (Cards neutros / repouso):**
  - `box-shadow: 0 4px 20px -2px rgba(90, 80, 60, 0.05), 0 2px 6px -1px rgba(90, 80, 60, 0.03);`
- **Elevação 2 (Hover em Cards e Botões):**
  - `box-shadow: 0 12px 32px -4px rgba(171, 144, 71, 0.12), 0 4px 12px -2px rgba(90, 80, 60, 0.06);`
- **Elevação 3 (Modais, Sheets e Menus Suspensos):**
  - `box-shadow: 0 20px 48px -8px rgba(44, 39, 30, 0.15), 0 8px 16px -4px rgba(44, 39, 30, 0.08);`

---

## 5. Componentes Principais (UI Patterns)

### 5.1 Botões (Buttons)
- **Primary Button (Agendamento / WhatsApp):**
  - Fundo: `--color-brand-gold` (`#AB9047`).
  - Texto: Branco puro (`#FFFFFF`), `font-medium`, tracking sutil.
  - Hover: Levemente escurecido (`#977E3C`) com elevação suave (`shadow-md`).
  - Active: Scale `0.98` com transição rápida de 150ms.
  - Focus: Anel duplo (`ring-2 ring-brand-gold/50 ring-offset-2`).
- **Secondary Button (Explorar Serviços / Sobre):**
  - Fundo: Transparente ou Bege Linho Suave (`#F2ECE1`).
  - Borda: `1px solid #AB9047` ou `#768D77` (Sálvia).
  - Texto: `--color-foreground` ou `--color-brand-gold`.
  - Hover: Fundo preenchido sutilmente com `10%` da cor da borda.
- **Ghost Button (Links de Navegação):**
  - Fundo: Transparente.
  - Hover: Fundo suave `bg-muted/60`, cor de texto intensificada.
- **Floating WhatsApp Button (Atendimento Rápido):**
  - Posição fixa no canto inferior direito (`fixed bottom-6 right-6 z-50`).
  - Cor de fundo: Verde WhatsApp oficial (`#25D366`) ou Ouro da Marca com ícone destacado.
  - Acessibilidade obrigatória: `aria-label="Abrir atendimento no WhatsApp"`.

### 5.2 Cards de Serviços
- Fundo: Branco Papiro (`#FFFFFF`) com borda suave (`border-border`).
- Imagem: `aspect-[4/3]` ou `aspect-[16/10]` no topo com `rounded-t-xl`, overlay suave ao passar o cursor.
- Conteúdo: Título em `Playfair Display`, descrição com parágrafos escaneáveis de no máximo 3 linhas e botão ou link de ação para agendamento.
- Transição: `transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg`.

### 5.3 Inputs e Formulários
- Borda padrão: `1px solid var(--border)` com cantos `rounded-md`.
- Fundo: Branco ou Linho suave (`bg-background`).
- Estado de Foco (`:focus-visible`): Contorno limpo com `--color-brand-gold` e sombra difusa sem quebra de layout.
- Feedback de Erro: Borda avermelhada (`#B84C3E`) com texto de apoio explicativo e humanizado.

---

## 6. Exportação Técnica de Tokens

### 6.1 Variáveis CSS Globais (`src/app/globals.css`)

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-montserrat), ui-sans-serif, system-ui, sans-serif;
  --font-heading: var(--font-playfair), ui-serif, Georgia, serif;
  
  /* Brand Tokens */
  --color-brand-gold: var(--brand-gold);
  --color-brand-gold-hover: var(--brand-gold-hover);
  --color-brand-sage: var(--brand-sage);
  --color-brand-terracotta: var(--brand-terracotta);
  
  /* Shadcn Semantic Mapping */
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-destructive: var(--destructive);
  
  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) * 1.5);
  --radius-2xl: calc(var(--radius) * 2.0);
}

:root {
  /* Brand Specifics */
  --brand-gold: #AB9047;
  --brand-gold-hover: #977E3C;
  --brand-sage: #768D77;
  --brand-terracotta: #C88265;

  /* Neutrals & Surfaces */
  --background: oklch(0.985 0.008 85); /* #FAF8F5 */
  --foreground: oklch(0.24 0.012 60);  /* #26231E */
  --card: oklch(1 0 0);                /* #FFFFFF */
  --card-foreground: oklch(0.24 0.012 60);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.24 0.012 60);

  /* Primary (Dourado da Marca #AB9047) */
  --primary: oklch(0.66 0.11 86);
  --primary-foreground: oklch(1 0 0);

  /* Secondary (Verde Sálvia) */
  --secondary: oklch(0.94 0.015 110);
  --secondary-foreground: oklch(0.32 0.03 140);

  /* Muted & Borders */
  --muted: oklch(0.95 0.012 85);       /* #F2ECE1 */
  --muted-foreground: oklch(0.48 0.02 75); /* #6A6357 */
  --accent: oklch(0.94 0.02 85);
  --accent-foreground: oklch(0.24 0.012 60);
  --border: oklch(0.90 0.015 85);      /* #E4DCCE */
  --input: oklch(0.90 0.015 85);
  --ring: oklch(0.66 0.11 86);

  /* Destructive & Feedback */
  --destructive: oklch(0.55 0.17 30);  /* #B84C3E */
  --radius: 0.875rem;                  /* 14px */
}

.dark {
  --background: oklch(0.20 0.01 65);   /* #1C1A17 */
  --foreground: oklch(0.96 0.01 85);   /* #F5EFE6 */
  --card: oklch(0.24 0.01 65);         /* #24211D */
  --card-foreground: oklch(0.96 0.01 85);
  --popover: oklch(0.24 0.01 65);
  --popover-foreground: oklch(0.96 0.01 85);
  --primary: oklch(0.74 0.11 86);      /* Dourado mais claro para leitura */
  --primary-foreground: oklch(0.18 0.01 60);
  --secondary: oklch(0.28 0.02 120);
  --secondary-foreground: oklch(0.95 0.01 85);
  --muted: oklch(0.26 0.01 65);
  --muted-foreground: oklch(0.70 0.02 85);
  --accent: oklch(0.28 0.02 85);
  --accent-foreground: oklch(0.96 0.01 85);
  --border: oklch(0.32 0.01 65);
  --input: oklch(0.32 0.01 65);
  --ring: oklch(0.74 0.11 86);
  --destructive: oklch(0.60 0.18 30);
}
```

### 6.2 Configuração das Fontes no Next.js (`src/app/layout.tsx`)

```tsx
import { Playfair_Display, Montserrat } from "next/font/google";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

// No <body>:
// <body className={`${montserrat.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}>
```

---

## 7. Diretrizes de Uso nas Próximas Tarefas

1. **Sempre referenciar este guia** antes de criar novas seções ou componentes.
2. **Utilizar a classe `font-heading`** para todos os títulos de destaque (`H1`, `H2`, `H3`) com a fonte *Playfair Display*.
3. **Utilizar a cor oficial da marca** (`#AB9047` / `text-brand-gold`, `bg-brand-gold`) nos elementos de maior impacto e conversão (CTAs de agendamento e destaques institucionais).
4. **Respeitar o espaçamento com `.box-section` e `.box-container-boxed`** para garantir alinhamento perfeito entre mobile e desktop.