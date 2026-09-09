import { ArrowUpRight } from 'lucide-react';

import { Container } from '../components/Container';
import { Reveal } from '../components/Reveal';
import { chefPortraitSrc } from '../data/siteContent';

export function ChefSection() {
  return (
    <section className="bg-ivory py-20 text-charcoal sm:py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-ember">Chef / Kitchen</p>
                <span className="h-px w-10 bg-ember/45" aria-hidden="true" />
              </div>
              <h2 className="mt-4 font-serif text-[3.2rem] leading-[0.86] tracking-[-0.03em] sm:text-6xl lg:text-[5.4rem]">
                CHEF ARJUN MEHRA
              </h2>
              <p className="mt-8 max-w-xl font-serif text-[1.8rem] leading-[1.02] text-charcoal/88 sm:text-3xl">
                “The fire should reveal the ingredient, not overpower it.”
              </p>
              <p className="mt-6 max-w-xl text-lg leading-8 text-charcoal/78">
                Chef Arjun Mehra brings Mediterranean technique into conversation with the ingredients and fire of India.
              </p>
              <div className="mt-9 grid max-w-xl grid-cols-2 border-y border-charcoal/12 py-5">
                <div className="pr-5">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-editorial text-charcoal/50">Signature</p>
                  <p className="mt-2 text-sm font-semibold">Live-fire cooking</p>
                </div>
                <div className="border-l border-charcoal/12 pl-5">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-editorial text-charcoal/50">Philosophy</p>
                  <p className="mt-2 text-sm font-semibold">Ingredient first</p>
                </div>
              </div>
              <a href="#menu" className="mt-8 inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-charcoal transition hover:text-ember">
                Explore the menu <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <p className="mt-6 max-w-xl text-xs leading-6 text-charcoal/50">
                Fictional chef identity created exclusively for this portfolio concept.
              </p>
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-[1.8rem] border border-charcoal/10 bg-[#d8cebd] p-2.5 shadow-soft sm:p-3">
              <img
                src={chefPortraitSrc}
                alt="A fictional chef standing near a live-fire kitchen in warm light."
                className="h-[27rem] w-full rounded-[1.35rem] object-cover transition duration-700 hover:scale-[1.02] sm:h-[34rem] lg:h-[42rem]"
                loading="lazy"
              />
              <div className="absolute left-6 top-6 rounded-full border border-white/45 bg-charcoal/72 px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-editorial text-ivory backdrop-blur-sm">
                Live Fire / Delhi
              </div>
              <div className="absolute bottom-6 left-6 right-6 rounded-[1.1rem] border border-white/55 bg-white/78 p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-editorial text-ember">Kitchen Notes</p>
                  <span className="text-[0.58rem] font-semibold uppercase tracking-editorial text-charcoal/45">01 / 03</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-charcoal/68">Technique stays quiet; the ingredient stays in focus.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}