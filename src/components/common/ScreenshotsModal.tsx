import React, { useEffect, useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';

interface ScreenshotsModalProps {
  projectTitle: string;
  screenshots: string[];
  onClose: () => void;
  initialIndex?: number;
}

export const ScreenshotsModal: React.FC<ScreenshotsModalProps> = React.memo(({ projectTitle, screenshots, onClose, initialIndex = 0 }) => {
  const stripRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(initialIndex);

  const scrollToIndex = useCallback((index: number): void => {
    const target = slideRefs.current[index];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    if (initialIndex > 0) {
      const target = slideRefs.current[initialIndex];
      if (target) {
        target.scrollIntoView({ behavior: 'auto', inline: 'center', block: 'nearest' });
      }
    }
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [initialIndex]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = slideRefs.current.findIndex((node) => node === entry.target);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      { root: strip, threshold: 0.6 }
    );
    slideRefs.current.forEach((node) => {
      if (node) {
        observer.observe(node);
      }
    });
    return () => observer.disconnect();
  }, [screenshots.length]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const content = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${projectTitle} screenshots`}
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm animate-fade-in flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
        <div className="text-white/90 text-sm font-medium pointer-events-auto">
          <span className="font-semibold">{projectTitle}</span>
          <span className="text-white/60 ml-3 md:hidden">{activeIndex + 1} / {screenshots.length}</span>
        </div>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close screenshots"
          className="pointer-events-auto w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 flex items-center justify-center border-0 cursor-pointer"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <div
        ref={stripRef}
        className="w-full h-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory md:snap-none scroll-smooth"
        style={{ scrollbarWidth: 'none' }}
        onClick={handleBackdropClick}
      >
        <div
          className="h-full flex items-center md:gap-6 md:px-16 md:w-max md:mx-auto"
          onClick={handleBackdropClick}
        >
          {screenshots.map((src, index) => (
            <div
              key={src}
              ref={(node) => { slideRefs.current[index] = node; }}
              className="snap-center shrink-0 w-full md:w-auto h-full flex items-center justify-center px-6 md:px-0"
            >
              <img
                src={src}
                alt={`${projectTitle} screenshot ${index + 1}`}
                className="max-h-[85vh] md:max-h-[78vh] max-w-[90vw] md:max-w-none object-contain rounded-2xl shadow-2xl"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {screenshots.length > 1 && (
        <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-2 md:hidden">
          {screenshots.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to screenshot ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-200 border-0 cursor-pointer ${
                index === activeIndex ? 'w-6 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );

  return createPortal(content, document.body);
});
