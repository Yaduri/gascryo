import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CloseIcon } from '@solar-icons/react/linear/close';
import { buildWhatsAppUrl } from '../data/gascryo';
import { WhatsAppIcon } from './BrandIcons';

export function FloatingWhatsApp() {
  const [showBalloon, setShowBalloon] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowBalloon(true);
    }, 3500);
    return () => window.clearTimeout(timer);
  }, []);

  const href = buildWhatsAppUrl(
    'Olá equipe GasCryo! Gostaria de solicitar um orçamento técnico.'
  );

  return (
    <div className="fixed right-5 bottom-5 z-50 flex items-end gap-3 sm:right-6 sm:bottom-6">
      <AnimatePresence>
        {showBalloon && !dismissed && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.94 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden items-center gap-2.5 rounded-xl border border-white/15 bg-[#0B1A33] px-4 py-2.5 text-sm font-medium text-white shadow-[0_12px_32px_rgba(0,0,0,0.45)] sm:flex"
          >
            <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-[#E5A910]">
              Falar com a equipe técnica
            </a>
            <button
              type="button"
              onClick={() => setDismissed(true)}
              aria-label="Fechar aviso do WhatsApp"
              className="rounded p-0.5 text-[#9BB0CE] hover:text-white cursor-pointer"
            >
              <CloseIcon className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a GasCryo pelo WhatsApp"
        className="whatsapp-pulse relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_22px_rgba(37,211,102,0.28)] transition-colors duration-200 hover:bg-[#20BD5A]"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
