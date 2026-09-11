import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { GalleryItem } from '../data/siteContent';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import { useFocusTrap } from '../hooks/useFocusTrap';

type LightboxProps = {
  items: GalleryItem[];
  activeIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export function Lightbox({ items, activeIndex, onClose, onNext, onPrev }: LightboxProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const isOpen = activeIndex !== null;
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useBodyScrollLock(isOpen);
  useFocusTrap(isOpen, panelRef);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onNext();
      if (event.key === 'ArrowLeft') onPrev();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (activeIndex === null) return null;

  const activeItem = items[activeIndex];

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-3 py-4 backdrop-blur-sm motion-safe:animate-modal-in sm:px-5 sm:py-6">
      <button
        type="button"
        aria-label="Close gallery lightbox"
        className="absolute inset-0 h-full w-full cursor-default"
        onClick={onClose}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lightbox-title"
        className="relative flex max-h-[calc(100dvh-2rem)] w-full max-w-6xl flex-col gap-3 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#11100e] p-3 text-ivory shadow-soft motion-safe:animate-modal-in sm:max-h-[92dvh] sm:gap-4 sm:rounded-[2rem] sm:p-5"
        tabIndex={-1}
      >
        <div className="flex shrink-0 items-center justify-between gap-4 px-1 pt-1 sm:px-2 sm:pt-2">
          <div className="min-w-0">
            <p className="text-[0.65rem] font-semibold uppercase tracking-editorial text-ember">Gallery</p>
            <h3 id="lightbox-title" className="mt-1 truncate font-serif text-xl sm:mt-2 sm:text-3xl">
              {activeItem.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ivory/12 text-ivory transition hover:border-ivory/30 hover:bg-ivory/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
            aria-label="Close gallery lightbox"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div
          className="relative min-h-0 overflow-hidden rounded-[1.1rem] bg-[#181511] sm:rounded-[1.5rem]"
          onTouchStart={(event) => setTouchStartX(event.touches[0]?.clientX ?? null)}
          onTouchEnd={(event) => {
            if (touchStartX === null) return;
            const endX = event.changedTouches[0]?.clientX ?? touchStartX;
            const delta = endX - touchStartX;
            if (Math.abs(delta) > 50) {
              if (delta < 0) onNext();
              else onPrev();
            }
            setTouchStartX(null);
          }}
        >
          <img
            src={activeItem.image}
            alt={activeItem.alt}
            className="block max-h-[calc(100dvh-12rem)] min-h-0 w-full object-contain sm:max-h-[68vh]"
            loading="eager"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-4 sm:p-5">
            <p className="max-w-2xl text-xs leading-5 text-ivory/78 sm:text-sm sm:leading-6">{activeItem.alt}</p>
          </div>
        </div>

        <div className="flex shrink-0 items-center justify-between gap-2 px-1 pb-1 sm:px-2 sm:pb-2">
          <button
            type="button"
            onClick={onPrev}
            className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-ivory/12 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-editorial transition hover:border-ivory/30 hover:bg-ivory/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember sm:gap-2 sm:px-4 sm:text-xs"
            aria-label="Previous gallery image"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Previous</span>
          </button>
          <p className="shrink-0 text-[0.65rem] uppercase tracking-editorial text-ivory/54 sm:text-xs">
            {activeIndex + 1} / {items.length}
          </p>
          <button
            type="button"
            onClick={onNext}
            className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-ivory/12 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-editorial transition hover:border-ivory/30 hover:bg-ivory/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember sm:gap-2 sm:px-4 sm:text-xs"
            aria-label="Next gallery image"
          >
            <span>Next</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
