import { ArrowUpRight } from 'lucide-react';
import { ReactNode } from 'react';

type ButtonLinkProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'solid' | 'ghost';
  className?: string;
  arrow?: boolean;
};

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal';

const variants = {
  solid: 'border-ember bg-ember text-ivory hover:bg-[#a85a37] hover:border-[#a85a37]',
  ghost: 'border-ivory/20 bg-transparent text-ivory hover:border-ivory/45 hover:bg-ivory/8',
};

export function ButtonLink({
  children,
  href,
  onClick,
  variant = 'solid',
  className = '',
  arrow = false,
}: ButtonLinkProps) {
  const content = (
    <>
      <span>{children}</span>
      {arrow ? <ArrowUpRight className="h-4 w-4" aria-hidden="true" /> : null}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${variants[variant]} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={`${baseClasses} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );
}
