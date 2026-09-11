import { Quote } from 'lucide-react';
import { Container } from '../components/Container';
import { Reveal } from '../components/Reveal';
import { testimonials } from '../data/siteContent';

export function TestimonialsSection() {
  return (
    <section className="bg-[#12100d] py-20 sm:py-24 lg:py-32">
      <Container>
        <Reveal>
          <div className="grid gap-8 border-b border-ivory/10 pb-10 lg:grid-cols-[1fr_0.45fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3"><p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-ember">Testimonials</p><span className="h-px w-8 bg-ember/45" /></div>
              <h2 className="mt-4 max-w-4xl font-serif text-[3.2rem] leading-[0.88] tracking-[-0.03em] text-ivory sm:text-6xl lg:text-[5.2rem]">The feeling should stay with you after the last course.</h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-ivory/56 lg:pb-1">A few words from tables that lingered a little longer.</p>
          </div>
        </Reveal>
        <div className="grid border-b border-ivory/10 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 80}>
              <blockquote className="group flex h-full min-h-[19rem] flex-col justify-between border-b border-ivory/10 py-8 transition-colors duration-500 hover:bg-ivory/[0.025] lg:border-b-0 lg:border-l lg:px-8 lg:py-10 first:lg:border-l-0 first:lg:pl-0 last:lg:pr-0">
                <div><Quote className="h-7 w-7 text-ember/80 transition-transform duration-500 group-hover:-translate-y-1" aria-hidden="true" /><p className="mt-7 font-serif text-[1.7rem] leading-[1.08] text-ivory transition-colors duration-500 group-hover:text-ivory/95 sm:text-[2rem]">“{testimonial.quote}”</p></div>
                <footer className="mt-10 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-olive">{testimonial.name}</footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}