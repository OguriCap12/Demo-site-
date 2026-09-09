import { ArrowUpRight } from 'lucide-react';
import { Container } from '../components/Container';
import { navItems } from '../data/siteContent';

type FooterProps = { onReserveClick: () => void };

export function Footer({ onReserveClick }: FooterProps) {
  return (
    <footer className="border-t border-ivory/10 bg-[#100f0c] py-12 text-ivory sm:py-14">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <a href="#top" className="inline-block font-serif text-3xl tracking-[0.16em] text-ivory transition hover:text-ember">EMBER &amp; OLIVE</a>
            <p className="mt-5 max-w-md font-serif text-xl leading-tight text-ivory/70">Modern Mediterranean.<br />Open-fire cooking.<br />New Delhi.</p>
            <button type="button" onClick={onReserveClick} className="mt-7 inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ember transition hover:text-ivory">Reserve your table <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></button>
          </div>
          <div className="grid gap-10 sm:grid-cols-2">
            <div><p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-ember">Explore</p><div className="mt-5 flex flex-col gap-3 text-sm text-ivory/65">{navItems.map((item) => <a key={item.href} href={item.href} className="transition hover:translate-x-1 hover:text-ivory">{item.label}</a>)}<button type="button" onClick={onReserveClick} className="text-left transition hover:translate-x-1 hover:text-ivory">Reservations</button></div></div>
            <div><p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-ember">Visit</p><p className="mt-5 text-sm leading-7 text-ivory/62">12A, Defence Colony Market<br />New Delhi 110024</p><p className="mt-4 text-sm leading-7 text-ivory/52">Mon–Thu · 12 PM–11 PM<br />Fri–Sun · 12 PM–12 AM</p></div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-ivory/10 pt-5 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-ivory/35 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Ember &amp; Olive</span><span>Concept website · No real reservations processed</span></div>
      </Container>
    </footer>
  );
}