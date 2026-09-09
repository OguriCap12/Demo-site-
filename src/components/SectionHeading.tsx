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
      <p className="mb-4 text-xs font-semibold uppercase tracking-editorial text-ember/90">{eyebrow}</p>
      <h2 className={`font-serif text-4xl leading-none sm:text-5xl lg:text-6xl ${titleTone}`}>{title}</h2>
      {description ? <p className={`mt-6 max-w-2xl text-sm leading-7 sm:text-base ${descriptionTone}`}>{description}</p> : null}
    </div>
  );
}
