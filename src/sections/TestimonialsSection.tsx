import { Container } from '../components/Container';
import { Reveal } from '../components/Reveal';
import { testimonials } from '../data/siteContent';

export function TestimonialsSection() {
  return (
    <section className="bg-[#12100d] py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-editorial text-ember">Testimonials</p>
              <h2 className="mt-4 font-serif text-5xl leading-[0.94] text-ivory sm:text-6xl">Impressions from a fictional dinner service.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-ivory/56">
              These short testimonials are written exclusively for the demo experience and do not represent verified public reviews.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-0 border-y border-ivory/10 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 80}>
              <blockquote className="flex h-full flex-col justify-between border-b border-ivory/10 bg-ivory/[0.025] p-6 sm:p-8 lg:border-b-0 lg:border-l first:lg:border-l-0 lg:px-8 first:lg:pl-0 last:lg:pr-0">
                <p className="font-serif text-[1.65rem] leading-tight text-ivory sm:text-3xl">“{testimonial.quote}”</p>
                <footer className="mt-8 border-t border-ivory/10 pt-5 text-xs font-semibold uppercase tracking-editorial text-olive">
                  — {testimonial.name}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
