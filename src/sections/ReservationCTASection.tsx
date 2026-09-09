import { ButtonLink } from '../components/ButtonLink';
import { Container } from '../components/Container';
import { Reveal } from '../components/Reveal';
import { storySecondaryImage } from '../data/siteContent';

type ReservationCTASectionProps = {
  onReserveClick: () => void;
};

export function ReservationCTASection({ onReserveClick }: ReservationCTASectionProps) {
  return (
    <section id="reservations" className="scroll-mt-24 bg-charcoal py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-ivory/10 shadow-[0_30px_100px_rgba(0,0,0,0.28)]">
            <img
              src={storySecondaryImage}
              alt="Elegant restaurant dining room with candlelight and Mediterranean atmosphere."
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#13110e]/92 via-[#13110e]/62 to-[#13110e]/72" />
            <div className="relative grid gap-10 px-6 py-12 sm:px-10 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:px-14 lg:py-16">
              <div>
                <div className="flex items-center gap-3"><p className="text-xs font-semibold uppercase tracking-editorial text-ember">Reserve / Your Table</p><span className="h-px w-10 bg-ember/45" aria-hidden="true" /></div>
                <h2 className="mt-4 max-w-3xl font-serif text-[2.7rem] leading-[0.88] tracking-[-0.025em] text-ivory sm:text-6xl lg:text-[4.25rem]">
                  A polished booking touchpoint, designed to convert without pretending to be live.
                </h2>
              </div>
              <div>
                <p className="max-w-xl text-base leading-8 text-ivory/76 sm:text-lg">
                  Choose your preferred time and party size in the reservation panel. This portfolio demo does not submit or process real bookings.
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
