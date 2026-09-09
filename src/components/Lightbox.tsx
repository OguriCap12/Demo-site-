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
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
      if (event.key === 'ArrowRight') {
        onNext();
      }
      if (event.key === 'ArrowLeft') {
        onPrev();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (activeIndex === null) {
    return null;
  }

  const activeItem = items[activeIndex];

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4 py-6 backdrop-blur-sm motion-safe:animate-modal-in">
      <div className="absolute inset-0" onClick={onClose} />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${activeItem.title} image preview`}
        className="relative flex w-full max-w-6xl flex-col gap-4 rounded-[2rem] border border-white/10 bg-[#11100e] p-3 text-ivory shadow-soft motion-safe:animate-modal-in sm:p-5"
        tabIndex={-1}
      >
        <div className="flex items-center justify-between gap-4 px-2 pt-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-editorial text-ember">Gallery</p>
            <h3 className="mt-2 font-serif text-2xl sm:text-3xl">{activeItem.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/12 text-ivory transition hover:border-ivory/30 hover:bg-ivory/5"
            aria-label="Close gallery lightbox"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div
          className="relative overflow-hidden rounded-[1.5rem] bg-[#181511]"
          onTouchStart={(event) => setTouchStartX(event.touches[0]?.clientX ?? null)}
          onTouchEnd={(event) => {
            if (touchStartX === null) return;
            const delta = (event.changedTouches[0]?.clientX ?? touchStartX) - touchStartX;
            if (Math.abs(delta) > 50) {
              delta < 0 ? onNext() : onPrev();
            }
            setTouchStartX(null);
          }}
        >
          <img
            src={activeItem.image}
            alt={activeItem.alt}
            className="max-h-[72vh] w-full object-cover transition-opacity duration-300"
            loading="eager"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-5">
            <p className="max-w-2xl text-sm text-ivory/78">{activeItem.alt}</p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 px-2 pb-2">
          <button
            type="button"
            onClick={onPrev}
            className="inline-flex items-center gap-2 rounded-full border border-ivory/12 px-4 py-2 text-xs font-semibold uppercase tracking-editorial transition hover:border-ivory/30 hover:bg-ivory/5"
            aria-label="Previous gallery image"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </button>
          <p className="text-xs uppercase tracking-editorial text-ivory/54">
            {activeIndex + 1} / {items.length}
          </p>
          <button
            type="button"
            onClick={onNext}
            className="inline-flex items-center gap-2 rounded-full border border-ivory/12 px-4 py-2 text-xs font-semibold uppercase tracking-editorial transition hover:border-ivory/30 hover:bg-ivory/5"
            aria-label="Next gallery image"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
