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

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 80}>
              <blockquote className="flex h-full flex-col justify-between rounded-[1.8rem] border border-ivory/10 bg-ivory/[0.03] p-6 sm:p-7">
                <p className="font-serif text-3xl leading-tight text-ivory">“{testimonial.quote}”</p>
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
