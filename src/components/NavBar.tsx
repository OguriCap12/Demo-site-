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
  const [activeHref, setActiveHref] = useState('#top');
  const [scrollProgress, setScrollProgress] = useState(0);

  useBodyScrollLock(isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['#top', ...items.map((item) => item.href)]
      .map((href) => document.querySelector(href))
      .filter((section): section is Element => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: '-28% 0px -58% 0px', threshold: [0.05, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    const closeMenu = () => setIsMenuOpen(false);
    window.addEventListener('resize', closeMenu);
    return () => window.removeEventListener('resize', closeMenu);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

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
              className="font-serif text-lg tracking-[0.18em] text-ivory sm:text-xl transition hover:text-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
              aria-label="Ember and Olive home"
              onClick={closeMenu}
            >
              EMBER &amp; OLIVE
            </a>

            <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
              {items.map((item) => {
                const isActive = activeHref === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? 'location' : undefined}
                    className={[
                      'relative text-xs font-semibold uppercase tracking-editorial transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember',
                      isActive ? 'text-ivory after:w-full' : 'text-ivory/76 after:w-0 hover:text-ivory hover:after:w-full',
                      'after:absolute after:-bottom-2 after:left-0 after:h-px after:bg-ember after:transition-all',
                    ].join(' ')}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <div className="hidden lg:block">
              <ButtonLink onClick={onReserveClick} className="px-4 py-2.5 text-[0.64rem]" arrow>

                Reserve a Table
              </ButtonLink>
            </div>

            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full sm:h-11 sm:w-11 border border-ivory/15 bg-charcoal/55 text-ivory shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition hover:border-ivory/30 hover:bg-charcoal/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember lg:hidden"
              onClick={() => setIsMenuOpen((current) => !current)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </Container>
      </header>
      <div className="fixed left-0 right-0 top-0 z-50 h-px bg-transparent" aria-hidden="true">
        <div className="h-full bg-ember transition-[width] duration-150" style={{ width: `${scrollProgress}%` }} />
      </div>

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
          onClick={closeMenu}
          aria-hidden="true"
        />
        <div
          className={[
            'absolute inset-x-4 top-24 rounded-[2rem] border border-ivory/10 bg-[#1d1a16] p-6 shadow-soft transition duration-300',
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0',
          ].join(' ')}
        >
          <div className="space-y-1" role="menu" aria-label="Mobile navigation">
            {items.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  tabIndex={isMenuOpen ? 0 : -1}
                  aria-current={isActive ? 'location' : undefined}
                  className={[
                    'flex items-center justify-between border-b border-ivory/8 py-4 text-sm font-semibold uppercase tracking-editorial transition',
                    isActive ? 'text-ivory' : 'text-ivory/85',
                  ].join(' ')}
                  onClick={closeMenu}
                >
                  <span>{item.label}</span>
                  <span className={isActive ? 'text-ember' : 'text-ivory/30'}>/</span>
                </a>
              );
            })}
          </div>

          <div className="mt-8 space-y-3">
            <ButtonLink
              onClick={() => {
                closeMenu();
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
