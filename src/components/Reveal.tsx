import { ReactNode } from 'react';

import { useReveal } from '../hooks/useReveal';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const { ref, isVisible, prefersReducedMotion } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal-element ${isVisible ? 'is-visible' : ''} ${className}`}
      style={prefersReducedMotion ? undefined : { transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
