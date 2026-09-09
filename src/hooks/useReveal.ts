import { useEffect, useRef, useState } from 'react';

import { useReducedMotion } from './useReducedMotion';

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return { ref, isVisible, prefersReducedMotion };
}
