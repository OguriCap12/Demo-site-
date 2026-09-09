import { ButtonLink } from '../components/ButtonLink';
import { Container } from '../components/Container';
import { Reveal } from '../components/Reveal';
import { storySecondaryImage } from '../data/siteContent';

type ReservationCTASectionProps = {
  onReserveClick: () => void;
};

export function ReservationCTASection({ onReserveClick }: ReservationCTASectionProps) {
  return (
    <section id="reservations" className="scroll-mt-24 bg-charcoal py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.4rem] border border-ivory/10">
            <img
              src={storySecondaryImage}
              alt="Elegant restaurant dining room with candlelight and Mediterranean atmosphere."
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#13110e]/82 via-[#13110e]/50 to-[#13110e]/68" />
            <div className="relative grid gap-10 px-6 py-14 sm:px-10 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:px-16 lg:py-20">
              <div>
                <div className="flex items-center gap-3"><p className="text-xs font-semibold uppercase tracking-editorial text-ember">Reserve / Your Table</p><span className="h-px w-10 bg-ember/45" aria-hidden="true" /></div>
                <h2 className="mt-4 max-w-3xl font-serif text-5xl leading-[0.9] tracking-[-0.02em] text-ivory sm:text-6xl lg:text-[4.6rem]">
                  A polished booking touchpoint, designed to convert without pretending to be live.
                </h2>
              </div>
              <div>
                <p className="max-w-xl text-base leading-8 text-ivory/76 sm:text-lg">
                  Open the reservation panel to experience the interaction. This portfolio website never submits data or processes a real booking.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <ButtonLink onClick={onReserveClick}>Reserve a Table</ButtonLink>
                  <ButtonLink href="#location" variant="ghost">
                    View Location
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
