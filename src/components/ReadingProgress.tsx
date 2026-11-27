import { motion, useScroll, useSpring } from 'motion/react';

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[70] h-[2.5px] origin-left bg-[#E5A910]"
    />
  );
}
