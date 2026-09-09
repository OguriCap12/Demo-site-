import { Container } from '../components/Container';
import { Reveal } from '../components/Reveal';
import { storyPrimaryImage, storySecondaryImage } from '../data/siteContent';

const storyPoints = [
  'Open-fire cooking as the centrepiece of the room.',
  'Mediterranean techniques interpreted with Indian produce.',
  'A communal style of service built for sharing and pause.',
  'Slow hospitality with precision, warmth and restraint.',
];

export function StorySection() {
  return (
    <section id="story" className="scroll-mt-24 overflow-hidden bg-ivory py-20 text-charcoal sm:py-24 lg:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <div>
            <Reveal>
              <div className="flex items-center gap-3"><p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-ember">Restaurant Story</p><span className="h-px w-10 bg-ember/45" aria-hidden="true" /></div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 max-w-3xl font-serif text-[3.35rem] leading-[0.86] tracking-[-0.035em] sm:text-6xl lg:text-[5.6rem]">
                COOKED OVER FIRE. <br />
                INSPIRED BY THE SEA.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-lg text-base leading-8 text-charcoal/76 sm:text-lg">
                The fictional world of Ember &amp; Olive is built around a simple tension: smoke and salt, structure and ease, the elegance of Mediterranean technique alongside the generosity of Indian ingredients.
              </p>
            </Reveal>
            <div className="mt-12 space-y-0 border-t border-charcoal/10">
              {storyPoints.map((point, index) => (
                <Reveal key={point} delay={180 + index * 60}>
                  <div className="flex items-start gap-4 border-b border-charcoal/10 py-4">
                    <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                    <p className="text-sm leading-7 text-charcoal/72">{point}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="relative min-h-[31rem] sm:min-h-[36rem] lg:min-h-[44rem]">
            <div className="absolute inset-x-0 top-0 h-[88%] overflow-hidden rounded-[1.6rem] border border-charcoal/10 shadow-soft lg:h-full lg:rounded-[2rem]">
              <img
                src={storyPrimaryImage}
                alt="Flames rising from an open-fire kitchen during service."
                className="h-full w-full object-cover transition duration-1000 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-0 left-3 w-[54%] overflow-hidden rounded-[1.25rem] border border-white/60 bg-ivory p-1.5 shadow-soft sm:left-8 lg:-left-10 lg:bottom-8 lg:w-[48%]">
              <img
                src={storySecondaryImage}
                alt="An evening dining room with candles, linen and warm hospitality lighting."
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
