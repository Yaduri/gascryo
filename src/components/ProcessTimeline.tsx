import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react';
import { PROCESS_STEPS } from '../data/gascryo';

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 72%', 'end 68%'],
  });

  const lineScaleY = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <section
      id="processo"
      className="border-t border-white/10 bg-[#040B18] py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <h2 className="font-[var(--font-display)] text-[2rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-white sm:text-[2.75rem]">
              Cinco etapas entre o diagnóstico e o equipamento liberado.
            </h2>
            <p className="mt-5 max-w-[48ch] text-[1.05rem] leading-relaxed text-[#9BB0CE]">
              Operar gases liquefeitos a temperaturas criogênicas não admite improviso. Cada projeto
              segue uma sequência monitorada de caldeiraria, isolamento térmico e ensaios de
              estanqueidade.
            </p>
            <div className="mt-8 rounded-xl border border-white/10 bg-[#0B1A33]/70 p-5">
              <p className="tabular-spec text-xs font-semibold text-[#E5A910]">
                GARANTIA DE RIGOR TÉCNICO
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#D5E1F2]">
                Nenhum tanque ou aquecedor deixa nossa unidade em Jarinu/SP sem passar pelo teste de
                microvazamento e conferência final de acabamento industrial.
              </p>
            </div>
          </div>

          {/* Hub Animation: Linha do tempo que se desenha conforme a rolagem */}
          <div ref={containerRef} className="relative lg:col-span-7">
            {/* Static background track */}
            <div
              aria-hidden="true"
              className="absolute top-3 bottom-3 left-[19px] w-[2px] bg-white/12 sm:left-[23px]"
            />

            {/* Animated gold progress line */}
            <motion.div
              aria-hidden="true"
              style={{ scaleY: prefersReduced ? 1 : lineScaleY }}
              className="absolute top-3 bottom-3 left-[19px] w-[2px] origin-top bg-[#E5A910] sm:left-[23px]"
            />

            <ol className="space-y-8">
              {PROCESS_STEPS.map((step) => (
                <motion.li
                  key={step.number}
                  initial={prefersReduced ? false : { opacity: 0.35, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pl-14 sm:pl-16"
                >
                  <span className="tabular-spec absolute top-1 left-0 flex h-10 w-10 items-center justify-center rounded-full border border-[#E5A910]/60 bg-[#061022] text-xs font-semibold text-[#E5A910] shadow-[0_0_0_5px_#040B18] sm:h-12 sm:w-12 sm:text-sm">
                    {step.number}
                  </span>

                  <div className="rounded-xl border border-white/10 bg-[#0B1A33]/55 p-6 transition-colors hover:border-[#E5A910]/40">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-[var(--font-display)] text-xl font-bold text-white">
                        {step.title}
                      </h3>
                      <span className="tabular-spec rounded bg-white/6 px-2.5 py-1 text-xs text-[#E5A910]">
                        {step.tag}
                      </span>
                    </div>
                    <p className="mt-2.5 text-[0.95rem] leading-relaxed text-[#B9CAE2]">
                      {step.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
