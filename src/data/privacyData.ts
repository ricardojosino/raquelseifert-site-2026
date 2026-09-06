export interface CookieItem {
  name: string;
  provider: string;
  purpose: string;
  category: "necessary" | "analytics" | "marketing";
  duration: string;
}

export interface PrivacyData {
  company: {
    brandName: string;
    legalName: string;
    taxNumber: string;
    address: string;
    country: string;
  };
  contacts: {
    privacyEmail: string;
    supportEmail: string;
    phone: string;
    whatsappUrl: string;
    dpoContact?: string;
  };
  website: {
    name: string;
    url: string;
    lastUpdated: string;
  };
  businessModel: "institutional" | "saas" | "ecommerce" | "services" | "lead_generation";
  supervisoryAuthority: {
    name: string;
    website: string;
    address: string;
  };
  cookies: CookieItem[];
}

export const privacyData: PrivacyData = {
  company: {
    brandName: "Raquel Seifert Massoterapia",
    legalName: "Raquel Seifert - Massoterapia e Bem-Estar",
    taxNumber: "Consulte no estabelecimento / Faturação",
    address: "Rua Gen. Pimenta de Castro, 38, Monção, Portugal",
    country: "Portugal",
  },
  contacts: {
    privacyEmail: "contacto@raquelseifert.pt",
    supportEmail: "contacto@raquelseifert.pt",
    phone: "+351 926 823 317",
    whatsappUrl: "https://api.whatsapp.com/send?phone=351926823317",
  },
  website: {
    name: "Raquel Seifert - Massoterapeuta",
    url: "https://raquelseifert.pt",
    lastUpdated: "Março de 2026",
  },
  businessModel: "services",
  supervisoryAuthority: {
    name: "Comissão Nacional de Proteção de Dados (CNPD)",
    website: "https://www.cnpd.pt",
    address: "Av. D. Carlos I, 134 - 1.º, 1200-651 Lisboa, Portugal",
  },
  cookies: [
    {
      name: "raquelseifert_cookie_consent",
      provider: "Próprio",
      purpose: "Armazena a preferência de consentimento de cookies do utilizador.",
      category: "necessary",
      duration: "1 ano",
    },
    {
      name: "session_id",
      provider: "Próprio",
      purpose: "Garante a segurança, integridade e estabilidade da navegação.",
      category: "necessary",
      duration: "Sessão",
    },
  ],
};
