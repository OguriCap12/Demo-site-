import { Container } from '../components/Container';
import { Reveal } from '../components/Reveal';
import { chefPortraitSrc } from '../data/siteContent';

export function ChefSection() {
  return (
    <section className="bg-ivory py-20 text-charcoal sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <p className="text-xs font-semibold uppercase tracking-editorial text-ember">Chef / Kitchen</p>
                <span className="h-px w-10 bg-ember/45" aria-hidden="true" />
              </div>
              <h2 className="mt-4 font-serif text-5xl leading-[0.9] tracking-[-0.02em] sm:text-6xl lg:text-[5.4rem]">
                CHEF ARJUN MEHRA
              </h2>
              <p className="mt-7 max-w-xl font-serif text-2xl leading-tight text-charcoal/88 sm:text-3xl">
                “The fire should reveal the ingredient, not overpower it.”
              </p>
              <p className="mt-6 max-w-xl text-lg leading-8 text-charcoal/78">
                Chef Arjun Mehra brings Mediterranean technique into conversation with the ingredients and fire of India.
              </p>

              <div className="mt-9 grid max-w-xl grid-cols-2 gap-6 border-y border-charcoal/12 py-5">
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-editorial text-charcoal/50">Signature</p>
                  <p className="mt-2 text-sm font-semibold">Live-fire cooking</p>
                </div>
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-editorial text-charcoal/50">Philosophy</p>
                  <p className="mt-2 text-sm font-semibold">Ingredient first</p>
                </div>
              </div>

              <p className="mt-7 max-w-xl text-sm leading-7 text-charcoal/60">
                This chef identity is fictional and exists purely as part of the Ember &amp; Olive portfolio concept.
              </p>
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-[2.2rem] border border-charcoal/10 bg-[#d8cebd] p-3 shadow-soft">
              <img
                src={chefPortraitSrc}
                alt="A fictional chef standing near a live-fire kitchen in warm light."
                className="h-[28rem] w-full rounded-[1.6rem] object-cover transition duration-700 hover:scale-[1.02] sm:h-[34rem] lg:h-[40rem]"
                loading="lazy"
              />
              <div className="absolute left-7 top-7 rounded-full border border-white/45 bg-charcoal/72 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-editorial text-ivory backdrop-blur-sm">
                Live Fire / Delhi
              </div>
              <div className="absolute inset-x-8 bottom-8 rounded-[1.3rem] border border-white/55 bg-white/78 p-4 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-editorial text-ember">Fictional Demo Character</p>
                <p className="mt-2 text-sm leading-6 text-charcoal/68">
                  A sample chef profile demonstrating premium hospitality storytelling.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
