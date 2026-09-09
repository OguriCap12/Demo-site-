import { useState } from 'react';

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
      <div className="fixed inset-x-4 bottom-4 z-40 md:hidden">
        <div className="grid grid-cols-2 gap-2 rounded-full border border-ivory/12 bg-[#15130f]/90 p-1.5 shadow-soft backdrop-blur-xl">
          <a
            href="#menu"
            className="inline-flex min-h-11 items-center justify-center rounded-full px-4 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ivory/80 transition hover:bg-ivory/8 hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
          >
            View Menu
          </a>
          <button
            type="button"
            onClick={() => setIsReservationOpen(true)}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-ember px-4 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ivory transition hover:bg-[#a85a37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
          >
            Reserve
          </button>
        </div>
      </div>
      <ReservationModal isOpen={isReservationOpen} onClose={() => setIsReservationOpen(false)} />
    </div>
  );
}
