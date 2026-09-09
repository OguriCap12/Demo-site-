import { useState } from 'react';

import { Container } from '../components/Container';
import { Lightbox } from '../components/Lightbox';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { galleryItems } from '../data/siteContent';

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const showNext = () => {
    setActiveIndex((current) => {
      if (current === null) {
        return 0;
      }
      return (current + 1) % galleryItems.length;
    });
  };

  const showPrev = () => {
    setActiveIndex((current) => {
      if (current === null) {
        return galleryItems.length - 1;
      }
      return (current - 1 + galleryItems.length) % galleryItems.length;
    });
  };

  return (
    <section id="gallery" className="scroll-mt-24 bg-charcoal py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Gallery"
            title={<>A visual language of embers, stone, linen and evening light.</>}
            description="An editorial gallery that sketches the atmosphere of the concept from service to kitchen, ingredients and plated detail."
          />
        </Reveal>

        <div className="mt-14 grid auto-rows-[18rem] gap-3 sm:grid-cols-2 sm:auto-rows-[15rem] md:grid-cols-3 md:auto-rows-[17rem] lg:gap-5">
          {galleryItems.map((item, index) => (
            <Reveal key={item.title} className={item.span} delay={index * 70}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group relative h-full w-full overflow-hidden rounded-[1.25rem] border border-ivory/10 text-left transition duration-500 hover:-translate-y-0.5 hover:border-ivory/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
                aria-label={`Open ${item.title} image in lightbox`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-4"><p className="text-xs font-semibold uppercase tracking-editorial text-ember">View image</p><span className="text-xs font-semibold uppercase tracking-editorial text-ivory/55">{String(index + 1).padStart(2, "0")} / {String(galleryItems.length).padStart(2, "0")}</span></div>
                  <h3 className="mt-2 font-serif text-[1.65rem] leading-none text-ivory sm:text-2xl">{item.title}</h3>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </Container>

      <Lightbox
        items={galleryItems}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNext={showNext}
        onPrev={showPrev}
      />
    </section>
  );
}
