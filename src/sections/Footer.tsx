import { Container } from '../components/Container';
import { navItems } from '../data/siteContent';

type FooterProps = {
  onReserveClick: () => void;
};

export function Footer({ onReserveClick }: FooterProps) {
  return (
    <footer className="border-t border-ivory/10 bg-[#100f0c] py-10 text-ivory">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <a href="#top" className="font-serif text-2xl tracking-[0.18em] text-ivory">
              EMBER &amp; OLIVE
            </a>
            <p className="mt-4 max-w-md text-sm leading-7 text-ivory/62">
              Modern Mediterranean
              <br />
              Defence Colony, New Delhi
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-editorial text-ember">Navigation</p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-ivory/68">
                <a href="#instagram-note" className="transition hover:text-ivory">
                  Instagram
                </a>
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="transition hover:text-ivory">
                    {item.label}
                  </a>
                ))}
                <button
                  type="button"
                  onClick={onReserveClick}
                  className="text-left transition hover:text-ivory"
                >
                  Reservations
                </button>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-editorial text-ember">Notes</p>
              <p className="mt-4 text-sm leading-7 text-ivory/62">
                © 2026 Ember &amp; Olive
                <br />
                Concept website — no real reservations are processed.
              </p>
              <p id="instagram-note" className="mt-4 text-sm leading-7 text-ivory/52">
                No live Instagram profile is linked in this fictional demo to avoid sending visitors to a fake social URL.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
