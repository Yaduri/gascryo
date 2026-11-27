import { useState, type FormEvent } from 'react';
import { ArrowRightUpIcon } from '@solar-icons/react/linear/arrow-right-up';
import { CheckIcon } from '@solar-icons/react/linear/check';
import { CopyIcon } from '@solar-icons/react/linear/copy';
import { LetterIcon } from '@solar-icons/react/bold-duotone/letter';
import { MapPointIcon } from '@solar-icons/react/bold-duotone/map-point';
import { COMPANY, buildWhatsAppUrl } from '../data/gascryo';
import { GasCryoLogo } from './GasCryoLogo';
import { MagneticButton } from './MagneticButton';
import { InstagramIcon, WhatsAppIcon } from './BrandIcons';

const SERVICE_OPTIONS = [
  'Fabricação de tanque criogênico',
  'Reforma completa de tanque criogênico',
  'Reforma de cabine criogênica',
  'Aquecedor de CO₂ em aço inox',
  'Manutenção e teste de microvazamento',
  'Peças e equipamentos industriais',
];

export function ContactFooter() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [service, setService] = useState(SERVICE_OPTIONS[0]);
  const [details, setDetails] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      'Olá equipe GasCryo! Gostaria de solicitar um orçamento técnico:',
      `• Nome: ${name.trim()}`,
      company.trim() ? `• Empresa: ${company.trim()}` : null,
      location.trim() ? `• Cidade/UF: ${location.trim()}` : null,
      `• Serviço: ${service}`,
      details.trim() ? `• Detalhes: ${details.trim()}` : null,
    ].filter(Boolean);

    window.open(buildWhatsAppUrl(lines.join('\n')), '_blank', 'noopener,noreferrer');
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(COMPANY.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      window.location.href = `mailto:${COMPANY.email}`;
    }
  };

  return (
    <>
      <section
        id="orcamento"
        className="border-t border-white/10 bg-[#040B18] py-20 text-white sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left Info Column */}
            <div className="lg:col-span-5">
              <h2 className="font-[var(--font-display)] text-[2rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-white sm:text-[2.75rem]">
                Solicite uma avaliação técnica com a equipe GasCryo.
              </h2>
              <p className="mt-4 max-w-[46ch] text-[1.03rem] leading-relaxed text-[#B9CAE2]">
                Informe os dados do seu tanque, cabine ou projeto sob medida. Ao enviar, abrimos o
                WhatsApp técnico com o resumo pronto para agilizar seu atendimento em qualquer
                região do Brasil.
              </p>

              <div className="mt-9 space-y-4">
                <a
                  href={buildWhatsAppUrl(
                    'Olá equipe GasCryo! Gostaria de falar com a equipe técnica.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-white/12 bg-[#0B1A33]/70 px-5 py-4 transition-colors hover:border-[#E5A910]/60"
                >
                  <span className="flex items-center gap-3.5">
                    <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
                    <span>
                      <span className="block text-xs text-[#9BB0CE]">WhatsApp Técnico</span>
                      <span className="tabular-spec text-base font-semibold text-white">
                        {COMPANY.phoneDisplay}
                      </span>
                    </span>
                  </span>
                  <ArrowRightUpIcon className="h-4 w-4 text-[#9BB0CE]" />
                </a>

                <div className="flex items-center justify-between rounded-xl border border-white/12 bg-[#0B1A33]/70 px-5 py-4">
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="flex items-center gap-3.5 hover:text-[#E5A910]"
                  >
                    <LetterIcon className="h-5 w-5 text-[#E5A910]" />
                    <span>
                      <span className="block text-xs text-[#9BB0CE]">E-mail Comercial</span>
                      <span className="text-base font-semibold text-white">{COMPANY.email}</span>
                    </span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label="Copiar e-mail da GasCryo"
                    className="inline-flex items-center gap-1.5 rounded-md border border-white/15 px-2.5 py-1.5 text-xs font-medium text-[#D5E1F2] transition-colors hover:border-[#E5A910] hover:text-[#E5A910] cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <CheckIcon className="h-3.5 w-3.5 text-[#E5A910]" />
                        Copiado
                      </>
                    ) : (
                      <>
                        <CopyIcon className="h-3.5 w-3.5" />
                        Copiar
                      </>
                    )}
                  </button>
                </div>

                <a
                  href={COMPANY.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-white/12 bg-[#0B1A33]/70 px-5 py-4 transition-colors hover:border-[#E5A910]/60"
                >
                  <span className="flex items-center gap-3.5">
                    <InstagramIcon className="h-5 w-5 text-[#E5A910]" />
                    <span>
                      <span className="block text-xs text-[#9BB0CE]">Instagram Oficial</span>
                      <span className="text-base font-semibold text-white">
                        {COMPANY.instagramHandle}
                      </span>
                    </span>
                  </span>
                  <ArrowRightUpIcon className="h-4 w-4 text-[#9BB0CE]" />
                </a>
              </div>
            </div>

            {/* Right Technical Quote Builder Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/12 bg-[#0B1A33]/75 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:p-9"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="quote-name"
                      className="block text-sm font-medium text-[#D5E1F2]"
                    >
                      Seu nome *
                    </label>
                    <input
                      id="quote-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex.: Carlos Eduardo"
                      className="mt-2 w-full rounded-lg border border-white/15 bg-[#061022] px-4 py-3 text-sm text-white placeholder:text-[#7E94B6] focus:border-[#E5A910] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="quote-company"
                      className="block text-sm font-medium text-[#D5E1F2]"
                    >
                      Empresa
                    </label>
                    <input
                      id="quote-company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Nome da indústria ou transportadora"
                      className="mt-2 w-full rounded-lg border border-white/15 bg-[#061022] px-4 py-3 text-sm text-white placeholder:text-[#7E94B6] focus:border-[#E5A910] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="quote-location"
                      className="block text-sm font-medium text-[#D5E1F2]"
                    >
                      Cidade / Estado *
                    </label>
                    <input
                      id="quote-location"
                      type="text"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Ex.: Campinas/SP, Curitiba/PR..."
                      className="mt-2 w-full rounded-lg border border-white/15 bg-[#061022] px-4 py-3 text-sm text-white placeholder:text-[#7E94B6] focus:border-[#E5A910] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="quote-service"
                      className="block text-sm font-medium text-[#D5E1F2]"
                    >
                      Tipo de demanda
                    </label>
                    <select
                      id="quote-service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-white/15 bg-[#061022] px-4 py-3 text-sm text-white focus:border-[#E5A910] focus:outline-none"
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#061022] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="quote-details"
                    className="block text-sm font-medium text-[#D5E1F2]"
                  >
                    Especificações do equipamento ou serviço
                  </label>
                  <textarea
                    id="quote-details"
                    rows={4}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Informe capacidade do tanque, gás (O₂, N₂, Ar, CO₂), necessidade de isolamento térmico, reforma ou fabricação sob medida..."
                    className="mt-2 w-full resize-none rounded-lg border border-white/15 bg-[#061022] px-4 py-3 text-sm text-white placeholder:text-[#7E94B6] focus:border-[#E5A910] focus:outline-none"
                  />
                </div>

                <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                  <MagneticButton
                    type="submit"
                    variant="gold"
                    icon={<WhatsAppIcon className="h-4 w-4" />}
                  >
                    Enviar para o WhatsApp Técnico
                  </MagneticButton>
                  <span className="text-xs text-[#9BB0CE]">
                    Retorno direto com a equipe em Jarinu/SP.
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#040B18] py-12 text-[#9BB0CE]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <GasCryoLogo variant="dark" />
              <p className="mt-4 max-w-sm text-sm leading-relaxed">
                Confiança e eficiência em cada solução. Fabricação, reformas e manutenção de
                equipamentos criogênicos para todo o Brasil.
              </p>
            </div>

            <div className="space-y-2 text-sm md:col-span-4">
              <p className="font-[var(--font-display)] font-bold text-white">Unidade Industrial</p>
              <p className="flex items-start gap-2 leading-relaxed">
                <MapPointIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#E5A910]" />
                <span>
                  {COMPANY.addressLine}
                  <br />
                  {COMPANY.cityState} · CEP {COMPANY.cep}
                </span>
              </p>
            </div>

            <div className="space-y-2 text-sm md:col-span-3">
              <p className="font-[var(--font-display)] font-bold text-white">Dados Cadastrais</p>
              <p>{COMPANY.legalName}</p>
              <p className="tabular-spec text-xs text-[#B9CAE2]">CNPJ {COMPANY.cnpj}</p>
              <p className="tabular-spec text-xs text-[#B9CAE2]">{COMPANY.phoneDisplay}</p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-[#7E94B6]">
            <p>© {new Date().getFullYear()} {COMPANY.brand} — Todos os direitos reservados.</p>
            <p>{COMPANY.coverage}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
