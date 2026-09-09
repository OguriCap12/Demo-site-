import { MapPin } from 'lucide-react';

import { ButtonLink } from '../components/ButtonLink';
import { Container } from '../components/Container';
import { Reveal } from '../components/Reveal';

type LocationSectionProps = {
  onReserveClick: () => void;
};

export function LocationSection({ onReserveClick }: LocationSectionProps) {
  return (
    <section id="location" className="scroll-mt-24 bg-ivory py-20 text-charcoal sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-editorial text-ember">Location</p>
              <h2 className="mt-4 font-serif text-5xl leading-[0.94] sm:text-6xl">Defence Colony, New Delhi</h2>
              <p className="mt-7 max-w-xl text-base leading-8 text-charcoal/74 sm:text-lg">
                Positioned as an intimate destination in the market, the concept blends neighbourhood ease with destination-dining polish.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-editorial text-charcoal/42">Address</p>
                  <p className="mt-3 text-lg leading-8">
                    12A, Defence Colony Market
                    <br />
                    New Delhi 110024
                  </p>
                  <p className="mt-3 text-sm leading-7 text-charcoal/58">Fictional demo address for portfolio presentation.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-editorial text-charcoal/42">Hours</p>
                  <div className="mt-3 space-y-4 text-sm leading-7 text-charcoal/74">
                    <div>
                      <p className="font-semibold uppercase tracking-editorial text-charcoal/82">Mon–Thu</p>
                      <p>12:00 PM – 11:00 PM</p>
                    </div>
                    <div>
                      <p className="font-semibold uppercase tracking-editorial text-charcoal/82">Fri–Sun</p>
                      <p>12:00 PM – 12:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-8">
                <ButtonLink onClick={onReserveClick} className="focus-visible:ring-offset-ivory">
                  Reserve a Table
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="relative min-h-[28rem] overflow-hidden rounded-[2.2rem] border border-charcoal/10 bg-[#ddd2c1] p-5 shadow-soft sm:p-7">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(23,21,18,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(23,21,18,0.08)_1px,transparent_1px)] bg-[size:56px_56px] opacity-70" />
              <div className="absolute inset-x-[12%] top-[18%] h-[2px] rotate-[14deg] bg-charcoal/20" />
              <div className="absolute right-[15%] top-[46%] h-[2px] w-[38%] -rotate-[10deg] bg-charcoal/20" />
              <div className="absolute left-[18%] top-[62%] h-[2px] w-[44%] rotate-[4deg] bg-charcoal/20" />
              <div className="absolute left-[15%] top-[18%] rounded-full border border-charcoal/12 bg-white/55 px-4 py-2 text-xs font-semibold uppercase tracking-editorial text-charcoal/70">
                Ring Road
              </div>
              <div className="absolute right-[12%] top-[58%] rounded-full border border-charcoal/12 bg-white/55 px-4 py-2 text-xs font-semibold uppercase tracking-editorial text-charcoal/70">
                Defence Colony Market
              </div>
              <div className="absolute bottom-[18%] left-[16%] rounded-full border border-charcoal/12 bg-white/55 px-4 py-2 text-xs font-semibold uppercase tracking-editorial text-charcoal/70">
                Lodhi Road Access
              </div>

              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-ember/35 bg-ember text-ivory shadow-soft">
                  <MapPin className="h-7 w-7" aria-hidden="true" />
                </div>
                <div className="mt-5 rounded-[1.4rem] border border-charcoal/10 bg-white/72 px-5 py-4 text-center backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-editorial text-ember">Ember &amp; Olive</p>
                  <p className="mt-2 text-sm leading-6 text-charcoal/72">A stylized location illustration for the fictional concept.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
