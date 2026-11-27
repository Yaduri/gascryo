interface GasCryoLogoProps {
  variant?: 'dark' | 'light';
  compact?: boolean;
  className?: string;
}

export function GasCryoLogo({
  variant = 'dark',
  compact = false,
  className = '',
}: GasCryoLogoProps) {
  const textColor = variant === 'dark' ? 'text-white' : 'text-[#08162E]';
  const subColor = variant === 'dark' ? 'text-[#9BB0CE]' : 'text-[#425573]';

  return (
    <span className={`inline-flex items-center gap-3 select-none ${className}`}>
      <svg
        width={compact ? 34 : 42}
        height={compact ? 34 : 42}
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <polygon
          points="32,4 56,18 56,46 32,60 8,46 8,18"
          stroke="#E5A910"
          strokeWidth="3.2"
          strokeLinejoin="miter"
        />
        <polygon
          points="32,12.5 48.5,22 48.5,42 32,51.5 15.5,42 15.5,22"
          stroke="#E5A910"
          strokeWidth="2.5"
          opacity="0.88"
        />
        <polygon
          points="32,21 41,26.2 41,37.8 32,43 23,37.8 23,26.2"
          stroke="#E5A910"
          strokeWidth="2.2"
          opacity="0.72"
        />
        <line x1="32" y1="28" x2="32" y2="36" stroke="#E5A910" strokeWidth="2.2" />
        <line x1="28.5" y1="30" x2="35.5" y2="34" stroke="#E5A910" strokeWidth="2.2" />
        <line x1="35.5" y1="30" x2="28.5" y2="34" stroke="#E5A910" strokeWidth="2.2" />
      </svg>

      <span className="flex flex-col leading-none">
        <span
          className={`font-[var(--font-display)] tracking-[-0.02em] ${
            compact ? 'text-[1.2rem]' : 'text-[1.4rem]'
          } ${textColor}`}
        >
          <span className="font-light">GAS</span>
          <span className="font-extrabold">CRYO</span>
        </span>
        {!compact && (
          <span className={`mt-1 text-[0.64rem] tracking-[0.07em] font-medium ${subColor}`}>
            equipamentos industriais criogênicos
          </span>
        )}
      </span>
    </span>
  );
}
