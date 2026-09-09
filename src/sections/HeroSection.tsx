import { ArrowDown, ArrowUpRight } from 'lucide-react';

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
      <div className="absolute inset-0 bg-gradient-to-r from-[#16130f]/78 via-[#16130f]/32 to-[#16130f]/42" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-transparent" />

      <Container className="relative flex min-h-screen items-end pb-16 pt-32 sm:pb-24 lg:pb-28">
        <div className="w-full max-w-4xl border-l border-ember/55 pl-5 sm:pl-7">
          <div className="motion-safe:animate-fade-up flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.68rem] font-semibold uppercase tracking-editorial text-ivory/72">
            <span className="text-ember">Defence Colony, New Delhi</span>
            <span className="hidden h-1 w-1 rounded-full bg-ivory/35 sm:block" aria-hidden="true" />
            <span>Open daily · 12 PM – late</span>
          </div>

          <h1 className="motion-safe:animate-fade-up mt-5 max-w-4xl font-serif text-[3.35rem] leading-[0.86] tracking-[-0.025em] text-ivory sm:text-[5.3rem] lg:text-[7rem]">
            EMBER &amp; OLIVE
          </h1>

          <div className="motion-safe:animate-fade-up mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold uppercase tracking-editorial text-ivory/84 sm:text-base">
            <span>Modern Mediterranean</span>
            <span className="h-1 w-1 rounded-full bg-ember" aria-hidden="true" />
            <span>Open-Fire Dining</span>
          </div>

          <p className="motion-safe:animate-fade-up mt-7 max-w-2xl text-base leading-7 text-ivory/78 sm:text-lg sm:leading-8">
            Seasonal ingredients, live-fire cooking and the spirit of the Mediterranean — served in the heart of New Delhi.
          </p>

          <div className="motion-safe:animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <ButtonLink href="#menu" arrow>
              Explore the Menu
            </ButtonLink>
            <ButtonLink onClick={onReserveClick} variant="ghost">
              Reserve a Table
            </ButtonLink>
          </div>

          <div className="motion-safe:animate-fade-up mt-10 grid max-w-2xl grid-cols-3 border-t border-ivory/15 pt-4 sm:mt-12 sm:pt-5">
            <div className="pr-3">
              <p className="font-serif text-xl text-ivory sm:text-2xl">Live fire</p>
              <p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-editorial text-ivory/48">Kitchen</p>
            </div>
            <div className="border-l border-ivory/15 px-3 sm:px-5">
              <p className="font-serif text-xl text-ivory sm:text-2xl">Seasonal</p>
              <p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-editorial text-ivory/48">Produce</p>
            </div>
            <div className="border-l border-ivory/15 pl-3 sm:pl-5">
              <p className="font-serif text-xl text-ivory sm:text-2xl">12A</p>
              <p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-editorial text-ivory/48">Defence Colony</p>
            </div>
          </div>
        </div>

        <a
          href="#introduction"
          className="group absolute bottom-5 right-5 inline-flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-editorial text-ivory/70 transition hover:text-ivory sm:bottom-8 sm:right-8"
        >
          <span className="hidden sm:inline">Scroll</span>
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/18 bg-charcoal/45 backdrop-blur-sm transition group-hover:border-ivory/35 motion-safe:animate-float-gentle">
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </span>
        </a>

        <a
          href="#gallery"
          className="absolute bottom-5 left-5 hidden items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-editorial text-ivory/48 transition hover:text-ivory sm:inline-flex"
        >
          View the atmosphere
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </Container>
    </section>
  );
}
