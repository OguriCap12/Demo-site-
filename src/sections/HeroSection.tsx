import { ArrowDown } from 'lucide-react';

import { heroImageSrc } from '../data/siteContent';
import { ButtonLink } from '../components/ButtonLink';
import { Container } from '../components/Container';

type HeroSectionProps = {
  onReserveClick: () => void;
};

export function HeroSection({ onReserveClick }: HeroSectionProps) {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-charcoal text-ivory">
      <img
        src={heroImageSrc}
        alt="A cinematic Mediterranean dining room with plated dishes and the warm glow of an open-fire kitchen."
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#16130f]/72 via-[#16130f]/28 to-[#16130f]/38" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/15 to-transparent" />

      <Container className="relative flex min-h-screen items-end pb-16 pt-28 sm:pb-20 lg:pb-24">
        <div className="max-w-3xl">
          <p className="motion-safe:animate-fade-up text-xs font-semibold uppercase tracking-editorial text-ember">
            Defence Colony, New Delhi
          </p>
          <h1 className="motion-safe:animate-fade-up mt-5 font-serif text-[3.5rem] leading-[0.92] text-ivory sm:text-[5.3rem] lg:text-[7rem]">
            EMBER &amp; OLIVE
          </h1>
          <div className="motion-safe:animate-fade-up mt-5 space-y-2 text-sm font-semibold uppercase tracking-editorial text-ivory/84 sm:text-base">
            <p>Modern Mediterranean</p>
            <p>Open-Fire Dining</p>
          </div>
          <p className="motion-safe:animate-fade-up mt-8 max-w-xl text-base leading-7 text-ivory/78 sm:text-lg sm:leading-8">
            Seasonal ingredients, live-fire cooking and the spirit of the Mediterranean — served in the heart of New Delhi.
          </p>
          <div className="motion-safe:animate-fade-up mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="#menu" arrow>
              Explore the Menu
            </ButtonLink>
            <ButtonLink onClick={onReserveClick} variant="ghost">
              Reserve a Table
            </ButtonLink>
          </div>
        </div>

        <a
          href="#introduction"
          className="group absolute bottom-5 right-5 inline-flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-editorial text-ivory/70 transition hover:text-ivory sm:bottom-8 sm:right-8"
        >
          <span>Scroll</span>
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/18 bg-charcoal/45 backdrop-blur-sm transition group-hover:border-ivory/35 motion-safe:animate-float-gentle">
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </span>
        </a>
      </Container>
    </section>
  );
}
