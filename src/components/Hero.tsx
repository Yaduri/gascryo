import { motion, useReducedMotion } from 'motion/react';
import { ArrowRightDownIcon } from '@solar-icons/react/linear/arrow-right-down';
import { ArrowRightUpIcon } from '@solar-icons/react/linear/arrow-right-up';
import { GlobalIcon } from '@solar-icons/react/bold-duotone/global';
import { ShieldCheckIcon } from '@solar-icons/react/bold-duotone/shield-check';
import { SnowflakeIcon } from '@solar-icons/react/bold-duotone/snowflake';
import { COMPANY } from '../data/gascryo';
import { MagneticButton } from './MagneticButton';

const HERO_LINES = [
  'Engenharia criogênica',
  'sob medida para a',
  'indústria brasileira.',
];

const EXPO_EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#061022] pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28"
    >
      {/* Subtle architectural directional glow from top-right industrial lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[540px] w-[540px] rounded-full bg-[#0E4FA8]/25 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[-8%] h-[360px] w-[360px] rounded-full bg-[#E5A910]/8 blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Editorial Copy Column */}
          <div className="lg:col-span-6">
            <h1 className="font-[var(--font-display)] text-[2.45rem] font-extrabold leading-[1.03] tracking-[-0.03em] text-white sm:text-[3.35rem] lg:text-[3.75rem]">
              {HERO_LINES.map((line, idx) => (
                <span key={line} className="block overflow-hidden py-0.5">
                  <motion.span
                    className="block"
                    initial={prefersReduced ? false : { y: '108%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{
                      duration: 0.72,
                      delay: 0.08 + idx * 0.1,
                      ease: EXPO_EASE,
                    }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={prefersReduced ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.36, ease: EXPO_EASE }}
              className="mt-7 max-w-[54ch] text-[1.05rem] leading-relaxed text-[#B9CAE2] sm:text-[1.125rem]"
            >
              Fabricação, reforma completa e manutenção especializada de tanques criogênicos
              estacionários, rodoviários, cabines e aquecedores de CO₂ em aço inox. Base industrial
              em Jarinu/SP com atendimento para operações em todo o Brasil.
            </motion.p>

            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.48, ease: EXPO_EASE }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <MagneticButton
                href="#orcamento"
                variant="gold"
                icon={<ArrowRightUpIcon className="h-4 w-4" />}
              >
                Solicitar orçamento técnico
              </MagneticButton>

              <MagneticButton
                href="#antes-depois"
                variant="outline"
                icon={<ArrowRightDownIcon className="h-4 w-4" />}
              >
                Ver reforma antes e depois
              </MagneticButton>
            </motion.div>
          </div>

          {/* Photographic Industrial Plate with Clip-Path Reveal */}
          <div className="lg:col-span-6">
            <motion.div
              initial={
                prefersReduced
                  ? false
                  : { clipPath: 'inset(100% 0% 0% 0% round 14px)', opacity: 0.4 }
              }
              animate={{ clipPath: 'inset(0% 0% 0% 0% round 14px)', opacity: 1 }}
              transition={{ duration: 0.95, delay: 0.18, ease: EXPO_EASE }}
              className="relative overflow-hidden rounded-[14px] border border-white/12 bg-[#040B18] shadow-[0_28px_70px_rgba(0,0,0,0.55)]"
            >
              <motion.img
                src="/images/hero-tank.jpg"
                alt="Tanque criogênico rodoviário branco com tubulação em aço inox em galpão industrial"
                initial={prefersReduced ? false : { scale: 1.09 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, delay: 0.18, ease: EXPO_EASE }}
                className="aspect-[16/10] w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061022]/80 via-transparent to-transparent"
              />
              <div className="absolute right-4 bottom-4 left-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-3 text-xs text-[#E4EDF9]">
                <span className="font-medium">Tanques Estacionários e Rodoviários</span>
                <span className="tabular-spec text-[#E5A910]">Jarinu/SP · Todo o Brasil</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Verified Technical Specification Strip (real facts only) */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.62, ease: EXPO_EASE }}
          className="mt-14 grid gap-6 border-t border-white/12 pt-8 sm:grid-cols-3"
        >
          <div className="flex items-start gap-3.5">
            <GlobalIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#E5A910]" />
            <div>
              <p className="font-[var(--font-display)] text-base font-bold text-white">
                {COMPANY.coverage}
              </p>
              <p className="mt-1 text-sm text-[#9BB0CE]">
                Base fabril em Jarinu/SP atendendo plantas e frotas em todo o território nacional.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <ShieldCheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#E5A910]" />
            <div>
              <p className="font-[var(--font-display)] text-base font-bold text-white">
                100% testado contra microvazamento
              </p>
              <p className="mt-1 text-sm text-[#9BB0CE]">
                Inspeção técnica especializada, soldagem TIG/MIG-MAG e controle rigoroso de qualidade.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <SnowflakeIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#E5A910]" />
            <div>
              <p className="font-[var(--font-display)] text-base font-bold text-white">
                O₂, N₂, Argônio e CO₂
              </p>
              <p className="mt-1 text-sm text-[#9BB0CE]">
                Equipamentos criogênicos, isolamento em poliuretano/alumínio e aquecedores em inox.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
