import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { AddIcon } from '@solar-icons/react/linear/add';
import { FAQ_ITEMS } from '../data/gascryo';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="duvidas"
      className="border-t border-white/10 bg-[#061022] py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-[var(--font-display)] text-[2rem] font-semibold leading-[1.12] tracking-[-0.025em] text-white sm:text-[2.6rem]">
              Dúvidas frequentes antes de solicitar orçamento.
            </h2>
          </div>

          <div className="divide-y divide-white/12 border-y border-white/12 lg:col-span-7">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              const panelId = `faq-panel-${idx}`;
              const btnId = `faq-btn-${idx}`;

              return (
                <div key={item.question}>
                  <h3>
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-[#E5A910] cursor-pointer"
                    >
                      <span className="font-[var(--font-display)] text-lg font-semibold text-white">
                        {item.question}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-[#E5A910]"
                      >
                        <AddIcon className="h-4 w-4" />
                      </motion.span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={btnId}
                        initial={prefersReduced ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={prefersReduced ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-10 text-[0.97rem] leading-relaxed text-[#B9CAE2]">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
