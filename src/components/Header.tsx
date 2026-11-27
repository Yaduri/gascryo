import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import { ArrowRightUpIcon } from '@solar-icons/react/linear/arrow-right-up';
import { HamburgerMenuIcon } from '@solar-icons/react/linear/hamburger-menu';
import { CloseIcon } from '@solar-icons/react/linear/close';
import { COMPANY, buildWhatsAppUrl } from '../data/gascryo';
import { GasCryoLogo } from './GasCryoLogo';
import { WhatsAppIcon } from './BrandIcons';

const NAV_LINKS = [
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Antes e Depois', href: '#antes-depois' },
  { label: 'Processo', href: '#processo' },
  { label: 'Gases & Brasil', href: '#gases' },
  { label: 'Dúvidas', href: '#duvidas' },
];

export function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 32);
    if (!mobileOpen) {
      if (latest > previous && latest > 160) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }
  });

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileOpen]);

  const quoteUrl = buildWhatsAppUrl(
    'Olá equipe GasCryo! Vim pelo site e gostaria de solicitar um orçamento técnico.'
  );

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: hidden ? -96 : 0 }}
        transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? 'bg-[#061022]/90 backdrop-blur-md border-b border-white/10 shadow-[0_12px_32px_rgba(4,11,24,0.45)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a
            href="#inicio"
            aria-label={`${COMPANY.brand} — Início`}
            className="focus-visible:outline-none"
          >
            <GasCryoLogo variant="dark" />
          </a>

          <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-draw text-[0.9rem] font-medium text-[#D5E1F2] transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="#orcamento"
              className="group inline-flex items-center gap-2 rounded-lg bg-[#E5A910] px-4 py-2.5 text-[0.875rem] font-semibold text-[#061022] transition-colors hover:bg-[#F2BA26]"
            >
              <span className="btn-roll-track">
                <span className="btn-roll-item">Orçamento Técnico</span>
                <span className="btn-roll-item" aria-hidden="true">
                  Orçamento Técnico
                </span>
              </span>
              <ArrowRightUpIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white transition-colors hover:border-[#E5A910]/60 lg:hidden"
          >
            {mobileOpen ? <CloseIcon className="h-5 w-5" /> : <HamburgerMenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            initial={{ clipPath: 'circle(0% at calc(100% - 42px) 40px)', opacity: 0.6 }}
            animate={{ clipPath: 'circle(150% at calc(100% - 42px) 40px)', opacity: 1 }}
            exit={{ clipPath: 'circle(0% at calc(100% - 42px) 40px)', opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-[#061022] px-6 pt-28 pb-10 lg:hidden"
          >
            <nav className="flex flex-col gap-5">
              {NAV_LINKS.map((item, idx) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + idx * 0.05, duration: 0.35 }}
                  className="border-b border-white/10 pb-4 font-[var(--font-display)] text-2xl font-bold text-white transition-colors hover:text-[#E5A910]"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <div className="space-y-4">
              <a
                href={quoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#E5A910] px-5 py-3.5 text-base font-semibold text-[#061022]"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" />
                Falar no WhatsApp ({COMPANY.phoneDisplay})
                <ArrowRightUpIcon className="h-4 w-4" />
              </a>
              <p className="text-center text-sm text-[#9BB0CE]">
                {COMPANY.cityState} · {COMPANY.coverage}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
