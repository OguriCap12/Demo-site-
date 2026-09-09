import { MapPin, Navigation } from 'lucide-react';

import { ButtonLink } from '../components/ButtonLink';
import { Container } from '../components/Container';
import { Reveal } from '../components/Reveal';

type LocationSectionProps = {
  onReserveClick: () => void;
};

export function LocationSection({ onReserveClick }: LocationSectionProps) {
  return (
    <section id="location" className="scroll-mt-24 bg-ivory py-20 text-charcoal sm:py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
          <div>
            <Reveal>
              <div className="flex items-center gap-3"><p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-ember">Location / Visit</p><span className="h-px w-10 bg-ember/45" aria-hidden="true" /></div>
              <h2 className="mt-4 max-w-2xl font-serif text-[3.1rem] leading-[0.88] tracking-[-0.03em] sm:text-6xl lg:text-[5.1rem]">Defence Colony, New Delhi</h2>
              <p className="mt-7 max-w-xl text-base leading-8 text-charcoal/74 sm:text-lg">
                An intimate neighbourhood address designed to feel equally natural for a long lunch, a late dinner or a table worth lingering over.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-10 grid gap-0 border-y border-charcoal/10 sm:grid-cols-2">
                <div className="py-5 sm:pr-7">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-charcoal/42">Address</p>
                  <p className="mt-3 text-base leading-7">12A, Defence Colony Market<br />New Delhi 110024</p>
                  <p className="mt-2 text-xs leading-6 text-charcoal/50">Fictional address · portfolio concept</p>
                </div>
                <div className="border-t border-charcoal/10 py-5 sm:border-l sm:border-t-0 sm:pl-7">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-charcoal/42">Hours</p>
                  <div className="mt-3 space-y-3 text-sm leading-7 text-charcoal/74">
                    <div><p className="font-semibold">MON–THU</p><p>12:00 PM – 11:00 PM</p></div>
                    <div><p className="font-semibold">FRI–SUN</p><p>12:00 PM – 12:00 AM</p></div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink onClick={onReserveClick} className="focus-visible:ring-offset-ivory">Reserve a Table</ButtonLink>
                <a href="#location" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-charcoal/15 px-5 text-xs font-semibold uppercase tracking-editorial transition hover:border-charcoal/35 hover:bg-charcoal/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-ivory">
                  <Navigation className="h-3.5 w-3.5" aria-hidden="true" /> Get Directions
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="relative min-h-[27rem] overflow-hidden rounded-[1.8rem] border border-charcoal/10 bg-[#ddd2c1] p-4 shadow-soft sm:min-h-[32rem] sm:p-6">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(23,21,18,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(23,21,18,0.08)_1px,transparent_1px)] bg-[size:56px_56px] opacity-70" />
              <div className="absolute left-[12%] top-[28%] h-px w-[65%] rotate-[12deg] bg-charcoal/18" />
              <div className="absolute left-[18%] top-[61%] h-px w-[52%] -rotate-[8deg] bg-charcoal/18" />
              <div className="absolute right-[12%] top-[45%] h-px w-[28%] rotate-[4deg] bg-charcoal/18" />
              <div className="absolute left-[14%] top-[16%] rounded-full border border-charcoal/12 bg-white/55 px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-editorial text-charcoal/65">Ring Road</div>
              <div className="absolute right-[10%] top-[60%] rounded-full border border-charcoal/12 bg-white/55 px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-editorial text-charcoal/65">Defence Colony Market</div>
              <div className="absolute bottom-[15%] left-[14%] rounded-full border border-charcoal/12 bg-white/55 px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-editorial text-charcoal/65">Lodhi Road Access</div>
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-ember/35 bg-ember text-ivory shadow-soft"><MapPin className="h-7 w-7" aria-hidden="true" /></div>
                <div className="mt-5 rounded-[1.2rem] border border-charcoal/10 bg-white/78 px-5 py-4 text-center backdrop-blur-sm">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-editorial text-ember">Ember &amp; Olive</p>
                  <p className="mt-2 text-sm leading-6 text-charcoal/72">Defence Colony Market · New Delhi</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}