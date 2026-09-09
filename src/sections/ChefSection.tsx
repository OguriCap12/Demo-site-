import { Container } from '../components/Container';
import { Reveal } from '../components/Reveal';
import { chefPortraitSrc } from '../data/siteContent';

export function ChefSection() {
  return (
    <section className="bg-ivory py-20 text-charcoal sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-editorial text-ember">Chef / Kitchen</p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.94] sm:text-6xl">
              CHEF ARJUN MEHRA
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-charcoal/78">
              “Chef Arjun Mehra brings Mediterranean technique into conversation with the ingredients and fire of India.”
            </p>
            <p className="mt-6 max-w-xl text-sm leading-7 text-charcoal/62">
              This chef identity is fictional and exists purely as part of the Ember &amp; Olive portfolio concept. The section demonstrates how narrative, portraiture and culinary positioning can elevate a premium hospitality brand online.
            </p>
          </Reveal>

          <Reveal className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-[2.2rem] border border-charcoal/10 bg-[#d8cebd] p-3 shadow-soft">
              <img
                src={chefPortraitSrc}
                alt="A fictional chef standing near a live-fire kitchen in warm light."
                className="h-[28rem] w-full rounded-[1.6rem] object-cover sm:h-[34rem] lg:h-[40rem]"
                loading="lazy"
              />
              <div className="absolute inset-x-8 bottom-8 rounded-[1.3rem] border border-white/55 bg-white/72 p-4 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-editorial text-ember">Fictional Demo Character</p>
                <p className="mt-2 text-sm leading-6 text-charcoal/68">
                  Used to showcase brand storytelling for a luxury restaurant website.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
