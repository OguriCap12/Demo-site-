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

        <div className="mt-14 grid gap-5 md:grid-cols-12 md:auto-rows-[18rem] lg:gap-7">
          {signatureDishes.map((dish, index) => (
            <Reveal key={dish.name} className={layoutClasses[index]} delay={index * 80}>
              <article className="group relative h-full overflow-hidden rounded-[2rem] border border-ivory/10 bg-[#211d19]">
                <img
                  src={dish.image}
                  alt={dish.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-3xl leading-none text-ivory sm:text-[2.2rem]">{dish.name}</h3>
                      <p className="mt-3 max-w-md text-sm leading-6 text-ivory/74">{dish.description}</p>
                    </div>
                    <p className="shrink-0 text-sm font-semibold uppercase tracking-editorial text-ember">{dish.price}</p>
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
