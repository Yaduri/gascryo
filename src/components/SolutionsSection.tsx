import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { CheckCircleIcon } from '@solar-icons/react/bold-duotone/check-circle';
import { SOLUTIONS, buildWhatsAppUrl } from '../data/gascryo';
import { MagneticButton } from './MagneticButton';
import { WhatsAppIcon } from './BrandIcons';

export function SolutionsSection() {
  const [activeId, setActiveId] = useState(SOLUTIONS[0].id);
  const prefersReduced = useReducedMotion();

  const current = SOLUTIONS.find((item) => item.id === activeId) ?? SOLUTIONS[0];

  return (
    <section
      id="solucoes"
      className="bg-[#F3F6FA] py-20 text-[#08162E] sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <h2 className="font-[var(--font-display)] text-[2rem] font-semibold leading-[1.12] tracking-[-0.025em] text-[#08162E] sm:text-[2.65rem]">
            Fabricação, reforma e manutenção no mesmo padrão de segurança.
          </h2>
        </div>

        {/* Animated Tabs with Sliding Pill (layoutId) */}
        <div
          role="tablist"
          aria-label="Frentes de atuação GasCryo"
          className="mt-9 inline-flex max-w-full flex-wrap gap-1.5 rounded-xl border border-[#08162E]/10 bg-white p-1.5"
        >
          {SOLUTIONS.map((tab) => {
            const isActive = tab.id === activeId;
            return (
              <button
                key={tab.id}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => setActiveId(tab.id)}
                className={`relative rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors cursor-pointer sm:px-5 ${
                  isActive ? 'text-white' : 'text-[#314563] hover:text-[#08162E]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="solution-tab-pill"
                    transition={{ type: 'spring', stiffness: 360, damping: 32 }}
                    className="absolute inset-0 rounded-lg bg-[#08162E]"
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Solution Architectural Panel */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              id={`panel-${current.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${current.id}`}
              initial={prefersReduced ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReduced ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
              className="grid items-stretch gap-8 rounded-2xl border border-[#08162E]/10 bg-white p-6 shadow-[0_8px_24px_rgba(8,22,46,0.05)] sm:p-10 lg:grid-cols-12"
            >
              <div className="flex flex-col justify-between lg:col-span-6">
                <div>
                  <h3 className="font-[var(--font-display)] text-2xl font-semibold leading-tight tracking-[-0.02em] text-[#08162E] sm:text-[1.9rem]">
                    {current.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-[#425573]">
                    {current.summary}
                  </p>

                  <ul className="mt-7 space-y-3.5 border-t border-[#08162E]/10 pt-6">
                    {current.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[0.95rem] text-[#172842]">
                        <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#C88E05]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-2">
                  <MagneticButton
                    href={buildWhatsAppUrl(current.whatsappDraft)}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="navy"
                    icon={<WhatsAppIcon className="h-4 w-4 text-[#25D366]" />}
                  >
                    {current.ctaLabel}
                  </MagneticButton>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative h-full min-h-[290px] overflow-hidden rounded-xl bg-[#061022]">
                  <img
                    src={current.image}
                    alt={current.imageAlt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
