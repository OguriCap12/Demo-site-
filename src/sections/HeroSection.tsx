import { ArrowDown, ArrowUpRight, Flame, Leaf, Sparkles } from 'lucide-react';

import { heroImageSrc } from '../data/siteContent';
import { ButtonLink } from '../components/ButtonLink';
import { Container } from '../components/Container';

type HeroSectionProps = {
  onReserveClick: () => void;
};

export function HeroSection({ onReserveClick }: HeroSectionProps) {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-charcoal text-ivory">
      <img
        src={heroImageSrc}
        alt="A cinematic Mediterranean dining room with plated dishes and the warm glow of an open-fire kitchen."
        className="absolute inset-0 h-full w-full scale-[1.015] object-cover object-center transition-transform duration-[2000ms] motion-safe:animate-[heroZoom_12s_ease-out_both]"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#16130f]/88 via-[#16130f]/42 to-[#16130f]/52" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/18 to-transparent" />
      <div className="absolute inset-y-0 right-0 hidden w-[38%] bg-gradient-to-l from-charcoal/35 to-transparent lg:block" />

      <Container className="relative flex min-h-[100svh] items-end pb-14 pt-28 sm:pb-20 lg:pb-24">
        <div className="w-full max-w-5xl border-l border-ember/55 pl-5 sm:pl-7 lg:pl-8">
          <div className="motion-safe:animate-fade-up flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.68rem] font-semibold uppercase tracking-editorial text-ivory/72">
            <span className="text-ember">Defence Colony, New Delhi</span>
            <span className="hidden h-1 w-1 rounded-full bg-ivory/35 sm:block" aria-hidden="true" />
            <span>Open daily · 12 PM – late</span>
          </div>

          <h1 className="motion-safe:animate-fade-up mt-5 max-w-4xl font-serif text-[3.25rem] leading-[0.84] tracking-[-0.035em] text-ivory sm:text-[5.5rem] lg:text-[7.6rem]">
            EMBER &amp; OLIVE
          </h1>

          <div className="motion-safe:animate-fade-up mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold uppercase tracking-editorial text-ivory/84 sm:text-base">
            <span>Modern Mediterranean</span>
            <span className="h-1 w-1 rounded-full bg-ember" aria-hidden="true" />
            <span>Open-Fire Dining</span>
          </div>

          <p className="motion-safe:animate-fade-up mt-6 max-w-2xl text-base leading-7 text-ivory/78 sm:text-lg sm:leading-8">
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

          <div className="motion-safe:animate-fade-up mt-8 grid max-w-3xl grid-cols-1 gap-2 sm:mt-12 sm:grid-cols-3 sm:gap-3">
            {[
              { icon: Flame, value: 'Live fire', label: 'Kitchen' },
              { icon: Leaf, value: 'Seasonal', label: 'Produce' },
              { icon: Sparkles, value: '12A', label: 'Defence Colony' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3 border-t border-ivory/15 py-3 sm:border-t-0 sm:border-l sm:px-4 sm:py-1 first:sm:border-l-0 first:sm:pl-0">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ember/30 bg-ember/10 text-ember">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-serif text-lg leading-none text-ivory sm:text-xl">{value}</p>
                  <p className="mt-1 text-[0.58rem] font-semibold uppercase tracking-editorial text-ivory/48">{label}</p>
                </div>
              </div>
            ))}
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
