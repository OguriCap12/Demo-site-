import { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
  className = '',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left';
  const titleTone = tone === 'light' ? 'text-ivory' : 'text-charcoal';
  const descriptionTone = tone === 'light' ? 'text-ivory/72' : 'text-charcoal/72';

  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      <div className="mb-4 flex items-center gap-3"><p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-ember/90">{eyebrow}</p><span className="h-px w-8 bg-ember/45" aria-hidden="true" /></div>
      <h2 className={`font-serif text-[2.55rem] leading-[0.9] tracking-[-0.02em] sm:text-5xl lg:text-[4.15rem] ${titleTone}`}>{title}</h2>
      {description ? <p className={`mt-7 max-w-2xl text-[0.95rem] leading-7 sm:text-base ${descriptionTone}`}>{description}</p> : null}
    </div>
  );
}
