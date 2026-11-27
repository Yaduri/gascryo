import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';

interface MagneticButtonProps {
  children: string;
  icon?: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  variant?: 'gold' | 'outline' | 'navy';
  className?: string;
}

export function MagneticButton({
  children,
  icon,
  href,
  target,
  rel,
  type = 'button',
  onClick,
  variant = 'gold',
  className = '',
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 18, mass: 0.25 });
  const springY = useSpring(y, { stiffness: 260, damping: 18, mass: 0.25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (prefersReduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    x.set(offsetX * 0.16);
    y.set(offsetY * 0.18);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const stylesByVariant = {
    gold: 'bg-[#E5A910] text-[#061022] hover:bg-[#F2BA26] shadow-[0_6px_18px_rgba(229,169,16,0.16)] font-semibold',
    navy: 'bg-[#08162E] text-white hover:bg-[#0E2448] shadow-[0_6px_18px_rgba(6,16,34,0.16)] font-semibold',
    outline:
      'border border-[#9BB0CE]/35 text-[#F4F7FB] hover:border-[#E5A910] hover:text-[#E5A910] font-medium bg-white/[0.02]',
  }[variant];

  const baseClass = `group relative inline-flex items-center justify-center gap-2.5 rounded-lg px-6 py-3.5 text-[0.95rem] transition-colors duration-200 cursor-pointer select-none ${stylesByVariant} ${className}`;

  const inner = (
    <>
      <span className="btn-roll-track">
        <span className="btn-roll-item">{children}</span>
        <span className="btn-roll-item" aria-hidden="true">
          {children}
        </span>
      </span>
      {icon && (
        <span className="inline-flex shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: springX, y: springY }}
        whileTap={prefersReduced ? undefined : { scale: 0.98 }}
        className={baseClass}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileTap={prefersReduced ? undefined : { scale: 0.98 }}
      className={baseClass}
    >
      {inner}
    </motion.button>
  );
}
