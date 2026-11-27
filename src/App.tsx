import { useEffect } from 'react';
import Lenis from 'lenis';
import { MotionConfig } from 'motion/react';
import { ReadingProgress } from './components/ReadingProgress';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SolutionsSection } from './components/SolutionsSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { GasesCoverageSection } from './components/GasesCoverageSection';
import { FaqSection } from './components/FaqSection';
import { ContactFooter } from './components/ContactFooter';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export function App() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!target) return;
      const hash = target.getAttribute('href');
      if (!hash || hash === '#') return;
      const dest = document.querySelector(hash);
      if (dest) {
        e.preventDefault();
        lenis.scrollTo(dest as HTMLElement, { offset: -72 });
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <ReadingProgress />
      <Header />
      <main>
        <Hero />
        <SolutionsSection />
        <BeforeAfterSection />
        <ProcessTimeline />
        <GasesCoverageSection />
        <FaqSection />
        <ContactFooter />
      </main>
      <FloatingWhatsApp />
    </MotionConfig>
  );
}

export default App;
