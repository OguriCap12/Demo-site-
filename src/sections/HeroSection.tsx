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
        className="absolute inset-0 h-full w-full scale-[1.015] object-cover object-center transition-transform duration-[2000ms] motion-safe:animate-[heroZoom_12s_ease-out_both] sm:object-center"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#16130f]/90 via-[#16130f]/45 to-[#16130f]/52" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/20 to-charcoal/10" />
      <div className="absolute inset-y-0 right-0 hidden w-[38%] bg-gradient-to-l from-charcoal/35 to-transparent lg:block" />

      <Container className="relative flex min-h-[100svh] items-end pb-28 pt-28 sm:pb-20 lg:pb-24">
        <div className="w-full max-w-5xl border-l border-ember/55 pl-4 sm:pl-7 lg:pl-8">
          <div className="motion-safe:animate-fade-up flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.64rem] font-semibold uppercase tracking-editorial text-ivory/72 sm:text-[0.68rem]">
            <span className="text-ember">Defence Colony, New Delhi</span>
            <span className="hidden h-1 w-1 rounded-full bg-ivory/35 sm:block" aria-hidden="true" />
            <span>Open daily · 12 PM – late</span>
          </div>

          <h1 className="motion-safe:animate-fade-up mt-5 max-w-4xl font-serif text-[2.85rem] leading-[0.88] tracking-[-0.035em] text-ivory sm:text-[5.5rem] lg:text-[7.6rem]">
            EMBER &amp; OLIVE
          </h1>

          <div className="motion-safe:animate-fade-up mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.7rem] font-semibold uppercase tracking-editorial text-ivory/84 sm:mt-6 sm:gap-x-4 sm:text-base">
            <span>Modern Mediterranean</span>
            <span className="h-1 w-1 rounded-full bg-ember" aria-hidden="true" />
            <span>Open-Fire Dining</span>
          </div>

          <p className="motion-safe:animate-fade-up mt-5 max-w-2xl text-[0.92rem] leading-6 text-ivory/78 sm:mt-6 sm:text-lg sm:leading-8">
            Seasonal ingredients, live-fire cooking and the spirit of the Mediterranean — served in the heart of New Delhi.
          </p>

          <div className="motion-safe:animate-fade-up mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
            <ButtonLink href="#menu" arrow>
              Explore the Menu
            </ButtonLink>
            <ButtonLink onClick={onReserveClick} variant="ghost">
              Reserve a Table
            </ButtonLink>
          </div>

          <div className="motion-safe:animate-fade-up mt-7 grid max-w-3xl grid-cols-1 gap-1 sm:mt-12 sm:grid-cols-3 sm:gap-3">
            {[
              { icon: Flame, value: 'Live fire', label: 'Kitchen' },
              { icon: Leaf, value: 'Seasonal', label: 'Produce' },
              { icon: Sparkles, value: '12A', label: 'Defence Colony' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3 border-t border-ivory/15 py-2.5 sm:border-t-0 sm:border-l sm:px-4 sm:py-1 first:sm:border-l-0 first:sm:pl-0">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ember/30 bg-ember/10 text-ember sm:h-9 sm:w-9">
                  <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-serif text-base leading-none text-ivory sm:text-xl">{value}</p>
                  <p className="mt-1 text-[0.55rem] font-semibold uppercase tracking-editorial text-ivory/48 sm:text-[0.58rem]">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <a
          href="#introduction"
          className="group absolute bottom-5 right-5 inline-flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-editorial text-ivory/70 transition hover:text-ivory sm:bottom-8 sm:right-8"
          aria-label="Scroll to introduction"
        >
          <span className="hidden sm:inline">Scroll</span>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ivory/18 bg-charcoal/45 backdrop-blur-sm transition group-hover:border-ivory/35 sm:h-11 sm:w-11 motion-safe:animate-float-gentle">
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
