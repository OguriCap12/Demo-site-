import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { NavItem } from '../data/siteContent';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import { ButtonLink } from './ButtonLink';
import { Container } from './Container';

type NavBarProps = {
  items: NavItem[];
  onReserveClick: () => void;
};

export function NavBar({ items, onReserveClick }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useBodyScrollLock(isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const closeMenu = () => setIsMenuOpen(false);
    window.addEventListener('resize', closeMenu);
    return () => window.removeEventListener('resize', closeMenu);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40">
        <Container>
          <div
            className={[
              'mt-4 flex items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-6',
              isScrolled
                ? 'border-ivory/10 bg-charcoal/85 shadow-soft backdrop-blur-xl'
                : 'border-transparent bg-transparent',
            ].join(' ')}
          >
            <a
              href="#top"
              className="font-serif text-xl tracking-[0.18em] text-ivory transition hover:text-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
              aria-label="Ember and Olive home"
            >
              EMBER &amp; OLIVE
            </a>

            <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs font-semibold uppercase tracking-editorial text-ivory/80 transition hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:block">
              <ButtonLink onClick={onReserveClick} className="px-4 py-2.5 text-[0.67rem]">
                Reserve a Table
              </ButtonLink>
            </div>

            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/15 bg-charcoal/55 text-ivory transition hover:border-ivory/30 lg:hidden"
              onClick={() => setIsMenuOpen((current) => !current)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </Container>
      </header>

      <div
        id="mobile-menu"
        className={[
          'fixed inset-0 z-30 lg:hidden',
          isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none',
        ].join(' ')}
        aria-hidden={!isMenuOpen}
      >
        <div
          className={[
            'absolute inset-0 bg-charcoal/70 backdrop-blur-sm transition-opacity duration-300',
            isMenuOpen ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={[
            'absolute inset-x-4 top-24 rounded-[2rem] border border-ivory/10 bg-[#1d1a16] p-6 shadow-soft transition duration-300',
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0',
          ].join(' ')}
        >
          <div className="space-y-1" role="menu" aria-label="Mobile navigation">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                role="menuitem"
                className="flex items-center justify-between border-b border-ivory/8 py-4 text-sm font-semibold uppercase tracking-editorial text-ivory/85"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{item.label}</span>
                <span className="text-ember">/</span>
              </a>
            ))}
          </div>

          <div className="mt-8 space-y-3">
            <ButtonLink
              onClick={() => {
                setIsMenuOpen(false);
                onReserveClick();
              }}
              className="w-full justify-center"
            >
              Reserve a Table
            </ButtonLink>
            <p className="text-xs leading-6 text-ivory/55">
              Portfolio concept only — reservation requests do not reach a real restaurant.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
