import { useState } from 'react';

import { ButtonLink } from '../components/ButtonLink';
import { Container } from '../components/Container';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { menuCategories } from '../data/siteContent';

type MenuSectionProps = {
  onReserveClick: () => void;
};

export function MenuSection({ onReserveClick }: MenuSectionProps) {
  const [activeCategoryId, setActiveCategoryId] = useState(menuCategories[0].id);
  const activeCategory = menuCategories.find((category) => category.id === activeCategoryId) ?? menuCategories[0];

  return (
    <section id="menu" className="scroll-mt-24 bg-ivory py-20 text-charcoal sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Menu"
              title={<>A fictional menu composed for a refined, modern Mediterranean house.</>}
              description="Switch between courses to explore the range — from small plates and fire-cooked signatures to desserts and drinks."
              tone="dark"
            />
            <div className="mt-10 flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start">
              <ButtonLink onClick={onReserveClick} className="focus-visible:ring-offset-ivory">
                Reserve a Table
              </ButtonLink>
              <p className="max-w-sm text-sm leading-7 text-charcoal/62">
                All dishes, prices and timings are part of a fictional portfolio concept and are shown only to demonstrate the user experience.
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal delay={80}>
              <div className="grid grid-cols-2 gap-2 rounded-[1.7rem] border border-charcoal/10 bg-white/50 p-2 sm:flex sm:overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {menuCategories.map((category) => {
                  const isActive = category.id === activeCategory.id;
                  return (
                    <button
                      key={category.id}
                      type="button"
                      className={[
                        'min-w-0 rounded-full px-3 py-3 text-[0.68rem] font-semibold uppercase tracking-editorial transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-ivory',
                        isActive ? 'bg-charcoal text-ivory shadow-[0_8px_24px_rgba(23,21,18,0.16)]' : 'bg-transparent text-charcoal/72 hover:bg-charcoal/6',
                      ].join(' ')}
                      onClick={() => setActiveCategoryId(category.id)}
                      aria-pressed={isActive}
                      aria-label={`Show ${category.label} menu`}
                    >
                      {category.label}
                    </button>
                  );
                })}
              </div>
            </Reveal>

            <Reveal key={activeCategory.id} className="mt-6 rounded-[2rem] border border-charcoal/10 bg-white/70 p-5 shadow-soft sm:p-7">
              <div className="flex flex-col gap-4 border-b border-charcoal/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="flex items-center gap-3"><p className="text-xs font-semibold uppercase tracking-editorial text-ember">Current Selection</p><span className="h-px w-8 bg-ember/45" aria-hidden="true" /></div>
                  <h3 className="mt-3 font-serif text-4xl leading-none sm:text-5xl">{activeCategory.label}</h3>
                </div>
                <p className="max-w-md text-sm leading-7 text-charcoal/62">{activeCategory.note}</p>
              </div>

              <div className="mt-2 divide-y divide-charcoal/10">
                {activeCategory.items.map((item, index) => (
                  <article key={item.name} className="group grid gap-3 py-5 transition sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8">
                    <div>
                      <div className="flex items-start gap-4">
                        <span className="mt-1 text-xs font-semibold uppercase tracking-editorial text-charcoal/35">{String(index + 1).padStart(2, '0')}</span>
                        <div>
                          <h4 className="font-serif text-2xl transition duration-300 group-hover:text-ember sm:text-[2rem]">{item.name}</h4>
                          <p className="mt-2 max-w-xl text-sm leading-7 text-charcoal/62">{item.description}</p>
                        </div>
                      </div>
                    </div>
                    <p className="pl-8 text-sm font-semibold uppercase tracking-editorial text-olive sm:pl-0">{item.price}</p>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
