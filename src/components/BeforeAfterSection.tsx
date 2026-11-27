import { useCallback, useRef, useState } from 'react';
import { CheckIcon } from '@solar-icons/react/linear/check';
import { TransferHorizontalIcon } from '@solar-icons/react/linear/transfer-horizontal';
import { buildWhatsAppUrl } from '../data/gascryo';
import { MagneticButton } from './MagneticButton';
import { WhatsAppIcon } from './BrandIcons';

const CABIN_SCOPE = [
  {
    title: 'Reforma estrutural e tubulações',
    detail: 'Recuperação da estrutura metálica da cabine, substituição de linhas desgastadas e soldagem TIG/MIG-MAG.',
  },
  {
    title: 'Recuperação térmica e vedação',
    detail: 'Recomposição de isolamento térmico em poliuretano e alumínio com revisão de válvulas e conexões.',
  },
  {
    title: 'Pintura técnica industrial',
    detail: 'Acabamento de alta resistência contra condensação criogênica, oxidação e intempéries rodoviárias.',
  },
  {
    title: 'Teste de microvazamento',
    detail: 'Inspeção completa e ensaio rigoroso antes da liberação operacional do equipamento.',
  },
];

export function BeforeAfterSection() {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, active: false });

  const sliderRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = sliderRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(96, Math.max(4, pct)));
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    updateFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    updateFromClientX(e.clientX);
  };

  const handlePointerUp = () => {
    setDragging(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setPosition((p) => Math.max(4, p - 4));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setPosition((p) => Math.min(96, p + 4));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setPosition(4);
    } else if (e.key === 'End') {
      e.preventDefault();
      setPosition(96);
    }
  };

  const handleSectionPointerMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setSpotlight({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      active: true,
    });
  };

  return (
    <section
      id="antes-depois"
      ref={sectionRef}
      onMouseMove={handleSectionPointerMove}
      onMouseLeave={() => setSpotlight((s) => ({ ...s, active: false }))}
      className="relative overflow-hidden bg-[#061022] py-20 text-white sm:py-28"
    >
      {/* Spotlight sutil acompanhando o ponteiro */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: spotlight.active ? 1 : 0,
          background: `radial-gradient(580px circle at ${spotlight.x}% ${spotlight.y}%, rgba(229, 169, 16, 0.08), rgba(14, 79, 168, 0.06) 40%, transparent 72%)`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-[var(--font-display)] text-[2rem] font-semibold leading-[1.12] tracking-[-0.025em] text-white sm:text-[2.65rem]">
              Reforma de cabine e conjunto criogênico na prática.
            </h2>
            <p className="mt-4 max-w-[58ch] text-[1.03rem] leading-relaxed text-[#B9CAE2]">
              Recuperação completa de tubulações oxidadas, válvulas, isolamento térmico e pintura
              industrial para devolver segurança e desempenho operacional ao equipamento.
            </p>
          </div>
          <div className="flex lg:col-span-5 lg:justify-end">
            <MagneticButton
              href={buildWhatsAppUrl(
                'Olá equipe GasCryo! Vi o comparativo Antes e Depois no site e quero avaliar a reforma do meu tanque/cabine criogênica.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              variant="gold"
              icon={<WhatsAppIcon className="h-4 w-4" />}
            >
              Avaliar meu equipamento
            </MagneticButton>
          </div>
        </div>

        {/* Interactive Before / After Slider + Technical Scope */}
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div
              ref={sliderRef}
              role="slider"
              tabIndex={0}
              aria-label="Comparador interativo antes e depois da reforma criogênica"
              aria-valuemin={4}
              aria-valuemax={96}
              aria-valuenow={Math.round(position)}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onKeyDown={handleKeyDown}
              className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-2xl border border-white/15 bg-[#040B18] shadow-[0_14px_36px_rgba(0,0,0,0.35)] cursor-ew-resize touch-none"
            >
              {/* Right / Base Layer: AFTER */}
              <img
                src="/images/hero-tank.jpg"
                alt="Conjunto criogênico após reforma completa: pintura industrial branca e tubulação em aço inox restaurada"
                draggable={false}
                className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[76%_56%]"
              />

              {/* Left / Clipped Layer: BEFORE */}
              <div
                className="pointer-events-none absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
              >
                <img
                  src="/images/cabin-before.jpg"
                  alt="Cabine criogênica antes da reforma com tubulações oxidadas, válvulas desgastadas e pintura comprometida"
                  draggable={false}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              {/* Labels */}
              <span className="pointer-events-none absolute top-4 left-4 rounded-md bg-[#061022]/85 px-3 py-1.5 text-xs font-semibold text-[#E4EDF9] backdrop-blur-sm border border-white/15">
                Antes da reforma
              </span>
              <span className="pointer-events-none absolute top-4 right-4 rounded-md bg-[#E5A910] px-3 py-1.5 text-xs font-semibold text-[#061022]">
                Depois da GasCryo
              </span>

              {/* Divider Line & Handle */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 bottom-0 w-[2px] bg-[#E5A910]"
                style={{ left: `${position}%` }}
              >
                <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#061022] bg-[#E5A910] text-[#061022] shadow-[0_6px_18px_rgba(0,0,0,0.45)]">
                  <TransferHorizontalIcon className="h-5 w-5" />
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs text-[#9BB0CE]">
              Imagens ilustrativas do padrão de reforma estrutural e acabamento industrial.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="divide-y divide-white/10 border-y border-white/10">
              {CABIN_SCOPE.map((item) => (
                <div key={item.title} className="flex gap-4 py-5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E5A910]/15 text-[#E5A910]">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <h3 className="font-[var(--font-display)] text-base font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#9BB0CE]">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
