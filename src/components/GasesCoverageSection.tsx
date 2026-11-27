import { motion, useReducedMotion } from 'motion/react';
import { MapPointIcon } from '@solar-icons/react/bold-duotone/map-point';
import { GASES } from '../data/gascryo';

const ROUTES = [
  { id: 'sp-ne', d: 'M 218 258 Q 260 190 290 120' },
  { id: 'sp-n', d: 'M 218 258 Q 165 180 128 96' },
  { id: 'sp-co', d: 'M 218 258 Q 182 215 162 178' },
  { id: 'sp-mg', d: 'M 218 258 Q 245 232 256 218' },
  { id: 'sp-s', d: 'M 218 258 Q 204 295 190 326' },
];

export function GasesCoverageSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="gases" className="bg-[#F3F6FA] py-20 text-[#08162E] sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left: Structured Cryogenic Gas Specification Table */}
          <div className="lg:col-span-7">
            <h2 className="font-[var(--font-display)] text-[2rem] font-semibold leading-[1.12] tracking-[-0.025em] text-[#08162E] sm:text-[2.6rem]">
              Preparados para temperaturas extremas e gases liquefeitos.
            </h2>
            <p className="mt-4 max-w-[58ch] text-[1.03rem] leading-relaxed text-[#425573]">
              Nossos tanques criogênicos, cabines e aquecedores em inox atendem às exigências
              térmicas e mecânicas dos principais gases industriais.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-[#08162E]/12 bg-white shadow-[0_8px_24px_rgba(8,22,46,0.05)]">
              <div className="divide-y divide-[#08162E]/10">
                {GASES.map((gas) => (
                  <div
                    key={gas.code}
                    className="grid gap-3 px-6 py-5 sm:grid-cols-12 sm:items-center sm:gap-4"
                  >
                    <div className="flex items-center gap-3.5 sm:col-span-4">
                      <span className="tabular-spec flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#08162E] text-sm font-semibold text-[#E5A910]">
                        {gas.formula}
                      </span>
                      <div>
                        <p className="font-[var(--font-display)] font-semibold text-[#08162E]">
                          {gas.name}
                        </p>
                        <p className="tabular-spec text-xs text-[#425573]">{gas.code}</p>
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <span className="tabular-spec inline-flex rounded-md bg-[#0E4FA8]/10 px-2.5 py-1 text-xs font-semibold text-[#0E4FA8]">
                        {gas.boilingPoint}
                      </span>
                    </div>

                    <p className="text-sm leading-relaxed text-[#425573] sm:col-span-5">
                      {gas.applications}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: National Coverage Panel */}
          <div className="lg:col-span-5">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-[#08162E]/12 bg-[#061022] p-7 text-white sm:p-9">
              <div>
                <h3 className="font-[var(--font-display)] text-2xl font-semibold leading-tight sm:text-[1.8rem]">
                  Base industrial em Jarinu/SP. Atendimento em todo o Brasil.
                </h3>

                <p className="mt-3.5 text-sm leading-relaxed text-[#B9CAE2]">
                  Localizados no eixo industrial de Jundiaí — com acesso direto às rodovias
                  Anhanguera, Bandeirantes e Dom Pedro I — recebemos tanques rodoviários e
                  expedimos equipamentos sob medida para todas as regiões do país.
                </p>
              </div>

              {/* Schematic Coverage SVG radiating from Jarinu/SP */}
              <div className="my-7 flex items-center justify-center rounded-xl border border-white/10 bg-[#040B18] p-4">
                <svg
                  viewBox="0 0 360 365"
                  className="h-56 w-full max-w-[260px]"
                  role="img"
                  aria-label="Mapa esquemático de atendimento nacional a partir de Jarinu, São Paulo"
                >
                  <path
                    d="M112 36 L176 28 L228 52 L286 78 L322 118 L314 166 L286 218 L266 254 L232 276 L204 316 L186 346 L158 320 L166 284 L142 252 L118 228 L88 188 L56 154 L44 114 L74 74 Z"
                    fill="#0B1A33"
                    stroke="rgba(155,176,206,0.32)"
                    strokeWidth="1.5"
                  />

                  {ROUTES.map((route, idx) => (
                    <motion.path
                      key={route.id}
                      d={route.d}
                      fill="none"
                      stroke="#E5A910"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      initial={prefersReduced ? false : { pathLength: 0, opacity: 0.2 }}
                      whileInView={{ pathLength: 1, opacity: 0.85 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{
                        duration: 1.0,
                        delay: 0.15 + idx * 0.12,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    />
                  ))}

                  {[
                    [290, 120],
                    [128, 96],
                    [162, 178],
                    [256, 218],
                    [190, 326],
                  ].map(([cx, cy], i) => (
                    <circle key={i} cx={cx} cy={cy} r="4" fill="#9BB0CE" />
                  ))}

                  <circle cx="218" cy="258" r="14" fill="#E5A910" opacity="0.2" />
                  <circle cx="218" cy="258" r="6" fill="#E5A910" />
                  <text
                    x="230"
                    y="262"
                    fill="#FFFFFF"
                    fontSize="12"
                    fontFamily="Archivo, sans-serif"
                    fontWeight="600"
                  >
                    Jarinu/SP
                  </text>
                </svg>
              </div>

              <div className="flex items-start gap-2.5 border-t border-white/12 pt-4 text-xs text-[#9BB0CE]">
                <MapPointIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#E5A910]" />
                <span>
                  Estrada Municipal Rubens de Almeida Pupo — Chácaras Canaã, Jarinu/SP · CEP
                  13246-692
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
