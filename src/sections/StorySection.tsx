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
    <section id="story" className="scroll-mt-24 bg-ivory py-20 text-charcoal sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-editorial text-ember">Restaurant Story</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-serif text-5xl leading-[0.92] sm:text-6xl lg:text-[5.4rem]">
                COOKED OVER FIRE. <br />
                INSPIRED BY THE SEA.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-xl text-base leading-8 text-charcoal/76 sm:text-lg">
                The fictional world of Ember &amp; Olive is built around a simple tension: smoke and salt, structure and ease, the elegance of Mediterranean technique alongside the generosity of Indian ingredients.
              </p>
            </Reveal>
            <div className="mt-10 space-y-4">
              {storyPoints.map((point, index) => (
                <Reveal key={point} delay={180 + index * 60}>
                  <div className="flex items-start gap-4 border-b border-charcoal/10 pb-4">
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-olive" />
                    <p className="text-sm leading-7 text-charcoal/72">{point}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="relative min-h-[36rem] lg:min-h-[44rem]">
            <div className="absolute inset-0 overflow-hidden rounded-[2.2rem] shadow-soft">
              <img
                src={storyPrimaryImage}
                alt="Flames rising from an open-fire kitchen during service."
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 left-4 w-[58%] overflow-hidden rounded-[1.8rem] border border-white/50 shadow-soft sm:left-8 lg:-left-10 lg:bottom-10">
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
