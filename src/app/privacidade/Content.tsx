import { PrivacyData } from "@/data/privacyData";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, ExternalLink } from "lucide-react";

interface ContentProps {
  data: PrivacyData;
}

export default function Content({ data }: ContentProps) {
  return (
    <article className="box-section bg-background">
      <div className="box-container-boxed max-w-4xl mx-auto">
        {/* Botão de Retorno */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-brand-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Voltar à página inicial</span>
          </Link>
        </div>

        {/* Cabeçalho */}
        <header className="space-y-4 pb-8 border-b border-border">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-xs uppercase tracking-wider font-semibold text-brand-gold">
            <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Conformidade RGPD & Legislação Portuguesa</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Política de Privacidade e Tratamento de Dados
          </h1>

          <p className="text-sm text-muted-foreground">
            <strong>Última atualização:</strong> {data.website.lastUpdated}
          </p>
        </header>

        {/* Conteúdo Jurídico Estruturado */}
        <div className="prose prose-stone max-w-none pt-8 space-y-8 text-foreground/85 leading-relaxed">
          <section className="space-y-3">
            <p>
              A <strong>{data.company.legalName}</strong> (doravante designada por <strong>&quot;{data.company.brandName}&quot;</strong>, &quot;nós&quot; ou &quot;nosso&quot;), com sede em {data.company.address} e NIF/NIPC {data.company.taxNumber}, assume o compromisso rigoroso de proteger a privacidade e os dados pessoais de todos os utilizadores, clientes e visitantes do website {data.website.url}.
            </p>
            <p>
              A presente Política de Privacidade regula o tratamento de dados pessoais realizado no âmbito da utilização do nosso website e dos nossos serviços de massoterapia e bem-estar, em estrito cumprimento com o <strong>Regulamento Geral sobre a Proteção de Dados (RGPD - Regulamento UE 2016/679)</strong> e a <strong>Lei n.º 58/2019, de 8 de agosto</strong> (legislação nacional de execução do RGPD em Portugal).
            </p>
          </section>

          {/* 1. Responsável pelo Tratamento */}
          <section className="space-y-3 p-6 rounded-2xl bg-card border border-border">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              1. Responsável pelo Tratamento dos Dados
            </h2>
            <p>
              Para efeitos da legislação aplicável de proteção de dados, a entidade Responsável pelo Tratamento (Data Controller) é:
            </p>
            <ul className="space-y-1 text-sm list-disc pl-5">
              <li><strong>Denominação:</strong> {data.company.legalName}</li>
              <li><strong>Marca / Estabelecimento:</strong> {data.company.brandName}</li>
              <li><strong>Sede / Morada:</strong> {data.company.address}</li>
              <li><strong>E-mail de Contacto:</strong> {data.contacts.privacyEmail}</li>
              <li><strong>Telefone / WhatsApp:</strong> {data.contacts.phone}</li>
            </ul>
          </section>

          {/* 2. Dados Pessoais que Recolhemos */}
          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              2. Dados Pessoais que Recolhemos
            </h2>
            <p>
              Recolhemos apenas os dados estritamente necessários para a prestação dos nossos cuidados terapêuticos e melhoria da experiência de contacto:
            </p>
            <ol className="space-y-2 list-decimal pl-5 text-sm sm:text-base">
              <li>
                <strong>Dados de Identificação e Contacto:</strong> Nome completo, número de telefone e e-mail facultados voluntariamente pelo cliente ao solicitar informações ou agendamento de sessões.
              </li>
              <li>
                <strong>Dados de Saúde e Histórico Terapêutico (Ficha de Anamnese):</strong> Queixas físicas, contraturas, histórico de lesões e contraindicações específicas partilhadas em ambiente clínico para adequação das técnicas de massoterapia. Estes dados são tratados sob rigoroso sigilo profissional.
              </li>
              <li>
                <strong>Dados Técnicos de Navegação:</strong> Endereço IP anonimizado e cookies estritamente necessários para garantir a estabilidade do site.
              </li>
            </ol>
          </section>

          {/* 3. Finalidades e Bases Legais */}
          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              3. Finalidades e Bases Legais do Tratamento (Artigo 6.º do RGPD)
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse border border-border my-4">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-3 border border-border font-semibold">Finalidade do Tratamento</th>
                    <th className="p-3 border border-border font-semibold">Base Legal Aplicável (RGPD)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-border">Agendamento e prestação de sessões de massoterapia</td>
                    <td className="p-3 border border-border">Artigo 6.º, n.º 1, alínea b) (Diligências pré-contratuais e contratuais)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-border">Atendimento de dúvidas via WhatsApp ou e-mail</td>
                    <td className="p-3 border border-border">Artigo 6.º, n.º 1, alíneas b) e f) (Interesse legítimo em apoiar o cliente)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-border">Cumprimento de obrigações legais e fiscais de faturação</td>
                    <td className="p-3 border border-border">Artigo 6.º, n.º 1, alínea c) (Obrigação legal fiscal)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 4. Conservação dos Dados */}
          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              4. Prazo de Conservação dos Dados
            </h2>
            <p>
              Os dados pessoais são conservados apenas durante o período estritamente necessário:
            </p>
            <ul className="space-y-1 list-disc pl-5 text-sm sm:text-base">
              <li><strong>Contactos e Mensagens de Marcação:</strong> Conservados durante o período de acompanhamento da sessão e até 12 meses após a última interação.</li>
              <li><strong>Dados Fiscais e de Faturação:</strong> Conservados pelo prazo legal obrigatório de <strong>10 (dez) anos</strong>, nos termos da legislação fiscal portuguesa em vigor.</li>
            </ul>
          </section>

          {/* 5. Direitos dos Titulares dos Dados */}
          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              5. Direitos dos Titulares dos Dados (Artigos 15.º a 22.º do RGPD)
            </h2>
            <p>
              Nos termos do RGPD, assistem-lhe os seguintes direitos fundamentais:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm pt-2">
              <li className="p-3 bg-card rounded-lg border border-border">✓ <strong>Direito de Acesso</strong> aos dados tratados</li>
              <li className="p-3 bg-card rounded-lg border border-border">✓ <strong>Direito de Retificação</strong> de dados incorretos</li>
              <li className="p-3 bg-card rounded-lg border border-border">✓ <strong>Direito ao Apagamento</strong> (&quot;Esquecimento&quot;)</li>
              <li className="p-3 bg-card rounded-lg border border-border">✓ <strong>Direito à Limitação</strong> do tratamento</li>
              <li className="p-3 bg-card rounded-lg border border-border">✓ <strong>Direito de Portabilidade</strong> dos seus dados</li>
              <li className="p-3 bg-card rounded-lg border border-border">✓ <strong>Direito de Oposição</strong> ao tratamento</li>
            </ul>
            <p className="text-sm pt-2">
              Para exercer qualquer um destes direitos, envie o seu pedido para o e-mail:{" "}
              <a href={`mailto:${data.contacts.privacyEmail}`} className="text-brand-gold font-semibold underline">
                {data.contacts.privacyEmail}
              </a>
            </p>
          </section>

          {/* 6. Cookies */}
          <section className="space-y-3">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              6. Política e Tabela de Cookies
            </h2>
            <p>
              O nosso website utiliza apenas cookies essenciais para o funcionamento básico da plataforma:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse border border-border my-4">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-3 border border-border font-semibold">Nome</th>
                    <th className="p-3 border border-border font-semibold">Finalidade</th>
                    <th className="p-3 border border-border font-semibold">Duração</th>
                  </tr>
                </thead>
                <tbody>
                  {data.cookies.map((c) => (
                    <tr key={c.name}>
                      <td className="p-3 border border-border font-mono text-xs font-semibold">{c.name}</td>
                      <td className="p-3 border border-border">{c.purpose}</td>
                      <td className="p-3 border border-border">{c.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 7. Reclamação à Autoridade de Controlo (CNPD) */}
          <section className="space-y-3 p-6 rounded-2xl bg-card border border-border">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              7. Direito de Reclamação à Autoridade de Controlo (CNPD)
            </h2>
            <p className="text-sm leading-relaxed">
              Caso considere que o tratamento dos seus dados viola as normas do RGPD ou da legislação portuguesa, tem o direito de apresentar uma reclamação formal junto da autoridade nacional de controlo:
            </p>
            <div className="text-sm space-y-1 pt-2 font-medium">
              <p>🏛️ <strong>{data.supervisoryAuthority.name}</strong></p>
              <p>📍 {data.supervisoryAuthority.address}</p>
              <p>
                🌐 Website:{" "}
                <a
                  href={data.supervisoryAuthority.website}
                  target="_blank"
                  rel="noopener"
                  className="text-brand-gold underline inline-flex items-center gap-1"
                >
                  {data.supervisoryAuthority.website}
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
