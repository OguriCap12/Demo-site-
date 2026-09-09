import { ArrowUpRight } from 'lucide-react';

import { Container } from '../components/Container';
import { Reveal } from '../components/Reveal';

export function IntroductionSection() {
  return (
    <section id="introduction" className="scroll-mt-24 bg-ivory py-20 text-charcoal sm:py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-20">
          <Reveal>
            <div className="flex items-center gap-3 pt-2">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-ember">The Ember &amp; Olive Philosophy</p>
              <span className="h-px w-10 bg-ember/45" aria-hidden="true" />
            </div>
            <p className="mt-10 hidden max-w-[14rem] font-serif text-2xl leading-tight text-charcoal/48 lg:block">
              Fire gives the ingredient a voice.
            </p>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="max-w-5xl font-serif text-[3.35rem] leading-[0.86] tracking-[-0.035em] sm:text-6xl lg:text-[5.7rem]">
                WHERE FIRE MEETS THE MEDITERRANEAN
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-9 grid gap-8 border-t border-charcoal/10 pt-7 sm:grid-cols-[1.25fr_0.75fr] sm:gap-12">
                <p className="text-base leading-8 text-charcoal/76 sm:text-lg">
                  Ember &amp; Olive imagines Mediterranean coastal cooking through the lens of modern Indian hospitality — open flame, seasonal produce, sea-bright flavours and a dining room paced for long conversation.
                </p>
                <p className="text-sm leading-7 text-charcoal/58">
                  Conceived as a premium portfolio concept, the experience blends editorial restraint with warmth: charred citrus, olive oil, linen, stone and the quiet theatre of the kitchen.
                </p>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <a href="#story" className="mt-9 inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-charcoal transition hover:text-ember">
                Discover the story <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}