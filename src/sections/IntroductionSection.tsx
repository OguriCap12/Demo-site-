import { Container } from '../components/Container';
import { Reveal } from '../components/Reveal';

export function IntroductionSection() {
  return (
    <section id="introduction" className="scroll-mt-24 bg-ivory py-20 text-charcoal sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-editorial text-ember">The Ember &amp; Olive Philosophy</p>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="max-w-4xl font-serif text-5xl leading-[0.93] sm:text-6xl lg:text-[5.6rem]">
                WHERE FIRE MEETS THE MEDITERRANEAN
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 max-w-2xl text-base leading-8 text-charcoal/76 sm:text-lg">
                Ember &amp; Olive imagines Mediterranean coastal cooking through the lens of modern Indian hospitality — open flame, seasonal produce, sea-bright flavours and a dining room paced for long conversation.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 max-w-xl text-sm leading-7 text-charcoal/62">
                Conceived as a premium portfolio concept, the experience blends editorial restraint with warmth: charred citrus, olive oil, linen, stone and the quiet theatre of the kitchen.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
