import { useEffect, useState } from 'react';

import { NavBar } from './components/NavBar';
import { ReservationModal } from './components/ReservationModal';
import { navItems } from './data/siteContent';
import { ChefSection } from './sections/ChefSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { Footer } from './sections/Footer';
import { GallerySection } from './sections/GallerySection';
import { HeroSection } from './sections/HeroSection';
import { IntroductionSection } from './sections/IntroductionSection';
import { LocationSection } from './sections/LocationSection';
import { MenuSection } from './sections/MenuSection';
import { ReservationCTASection } from './sections/ReservationCTASection';
import { SignatureDishesSection } from './sections/SignatureDishesSection';
import { StorySection } from './sections/StorySection';
import { TestimonialsSection } from './sections/TestimonialsSection';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [showMobileBar, setShowMobileBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowMobileBar(window.scrollY > 420);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-charcoal text-ivory">
      <a
        href="#main-content"
        className="sr-only z-[60] rounded-full bg-ivory px-4 py-2 text-sm font-semibold text-charcoal focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <NavBar items={navItems} onReserveClick={() => setIsReservationOpen(true)} />

      <main id="main-content" className="pb-24 md:pb-0">
        <HeroSection onReserveClick={() => setIsReservationOpen(true)} />
        <IntroductionSection />
        <SignatureDishesSection />
        <StorySection />
        <ExperienceSection />
        <MenuSection onReserveClick={() => setIsReservationOpen(true)} />
        <GallerySection />
        <ChefSection />
        <TestimonialsSection />
        <LocationSection onReserveClick={() => setIsReservationOpen(true)} />
        <ReservationCTASection onReserveClick={() => setIsReservationOpen(true)} />
      </main>

      <Footer onReserveClick={() => setIsReservationOpen(true)} />

      <div
        className={`pointer-events-none fixed inset-x-3 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-40 transition-all duration-500 md:hidden ${
          showMobileBar ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
        aria-hidden={!showMobileBar}
      >
        <div className="pointer-events-auto mx-auto grid max-w-md grid-cols-2 gap-1.5 rounded-full border border-ivory/15 bg-[#15130f]/92 p-1 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <a
            href="#menu"
            tabIndex={showMobileBar ? 0 : -1}
            className="inline-flex min-h-10 items-center justify-center rounded-full px-3 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ivory/75 transition-colors duration-300 hover:bg-ivory/8 hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
          >
            View Menu
          </a>
          <button
            type="button"
            tabIndex={showMobileBar ? 0 : -1}
            onClick={() => setIsReservationOpen(true)}
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-ember px-3 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ivory transition-all duration-300 hover:bg-[#a85a37] hover:shadow-[0_6px_20px_rgba(184,103,66,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember active:scale-[0.98]"
          >
            Reserve
          </button>
        </div>
      </div>

      <ReservationModal isOpen={isReservationOpen} onClose={() => setIsReservationOpen(false)} />
    </div>
  );
}
