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

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {experienceHighlights.map((highlight, index) => (
            <Reveal key={highlight.title} delay={index * 80}>
              <article className="h-full border-t border-ivory/10 pt-6">
                <p className="text-xs font-semibold uppercase tracking-editorial text-ember">0{index + 1}</p>
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
