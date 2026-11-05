import { useEffect, useState } from 'react';
import Lenis from 'lenis';

let lenisInstance = null;

export const getLenis = () => lenisInstance;

export const scrollTo = (target, options = {}) => {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, options);
  } else {
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

export default function useLenis() {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    // Respect prefers-reduced-motion: reduce
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      lenisInstance = null;
      setLenis(null);
      return;
    }

    // Standard easeOutExpo-style curve
    const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const instance = new Lenis({
      duration: 1.1,
      easing: easeOutExpo,
      smoothWheel: true,
      syncTouch: false,
    });

    lenisInstance = instance;
    setLenis(instance);

    let rafId;
    function raf(time) {
      instance.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    const handleMotionChange = (e) => {
      if (e.matches) {
        cancelAnimationFrame(rafId);
        instance.destroy();
        lenisInstance = null;
        setLenis(null);
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMotionChange);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleMotionChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMotionChange);
      } else if (mediaQuery.removeListener) {
        mediaQuery.removeListener(handleMotionChange);
      }
      cancelAnimationFrame(rafId);
      instance.destroy();
      if (lenisInstance === instance) {
        lenisInstance = null;
      }
      setLenis(null);
    };
  }, []);

  return lenis;
}
