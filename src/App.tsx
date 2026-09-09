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

      <main id="main-content">
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
      <ReservationModal isOpen={isReservationOpen} onClose={() => setIsReservationOpen(false)} />
    </div>
  );
}
