import { ArrowUpRight } from 'lucide-react';

import { Container } from '../components/Container';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { signatureDishes } from '../data/siteContent';

const layoutClasses = [
  'md:col-span-5 md:row-span-2',
  'md:col-span-7 md:row-span-1',
  'md:col-span-7 md:row-span-1',
  'md:col-span-5 md:row-span-2 md:-mt-16',
];

export function SignatureDishesSection() {
  return (
    <section className="bg-charcoal py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Signature Dishes"
              title={<>A menu designed around flame, salt and seasonal brightness.</>}
              description="Four standout plates sketch the tone of the house — polished, expressive and rooted in the textures of fire."
            />
          </Reveal>
          <Reveal delay={120} className="max-w-sm">
            <p className="text-sm leading-7 text-ivory/60">
              Demo tasting highlights with fictional pricing for presentation purposes only.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid w-full min-w-0 grid-cols-1 auto-rows-[minmax(22rem,auto)] gap-4 sm:auto-rows-[26rem] md:grid-cols-12 md:auto-rows-[18rem] lg:gap-7">
          {signatureDishes.map((dish, index) => (
            <Reveal key={dish.name} className={`w-full min-w-0 ${layoutClasses[index]}`} delay={index * 80}>
              <article className="group relative h-full min-h-[22rem] w-full min-w-0 overflow-hidden rounded-[2rem] border border-ivory/10 bg-[#211d19] shadow-[0_18px_60px_rgba(0,0,0,0.16)]">
                <img
                  src={dish.image}
                  alt={dish.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                <div className="absolute left-4 top-4 flex items-center gap-2 sm:left-5 sm:top-5">
                  <span className="rounded-full border border-ivory/18 bg-charcoal/45 px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-editorial text-ivory/78 backdrop-blur-sm">
                    0{index + 1} / Signature
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="flex items-end justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="font-serif text-[1.9rem] leading-[0.94] text-ivory sm:text-[2.2rem]">{dish.name}</h3>
                      <p className="mt-3 max-w-md text-sm leading-6 text-ivory/74">{dish.description}</p>
                    </div>
                    <p className="shrink-0 text-sm font-semibold uppercase tracking-editorial text-ember">{dish.price}</p>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-editorial text-ivory/50 transition group-hover:text-ivory/75">
                    <span>View details</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
