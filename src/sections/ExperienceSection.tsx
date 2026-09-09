import { Container } from '../components/Container';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { experienceHighlights } from '../data/siteContent';

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 bg-[#14120f] bg-paper-glow py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Dining Experience"
            title={<>An atmosphere shaped by glow, texture and measured service.</>}
            description="Every room detail is intended to support the mood of the food — tactile materials, gentle contrast and a sense of quiet theatre rather than spectacle."
          />
        </Reveal>

        <div className="mt-14 grid gap-0 border-y border-ivory/10 lg:grid-cols-3 lg:gap-0">
          {experienceHighlights.map((highlight, index) => (
            <Reveal key={highlight.title} delay={index * 80}>
              <article className="h-full border-b border-ivory/10 py-7 lg:border-b-0 lg:border-l lg:px-8 lg:py-8 first:lg:border-l-0 first:lg:pl-0 last:lg:pr-0">
                <div className="flex items-center gap-3"><p className="text-xs font-semibold uppercase tracking-editorial text-ember">0{index + 1}</p><span className="h-px w-8 bg-ember/35" aria-hidden="true" /></div>
                <h3 className="mt-5 font-serif text-3xl text-ivory">{highlight.title}</h3>
                <p className="mt-4 text-base leading-7 text-ivory/82">{highlight.description}</p>
                <p className="mt-4 max-w-md text-sm leading-7 text-ivory/58">{highlight.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
