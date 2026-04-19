import React from 'react';

interface ScreenshotsThumbnailsProps {
  projectTitle: string;
  screenshots: string[];
  onSelect: (index: number) => void;
}

export const ScreenshotsThumbnails: React.FC<ScreenshotsThumbnailsProps> = React.memo(({ projectTitle, screenshots, onSelect }) => {
  if (screenshots.length === 0) {
    return null;
  }

  const visible = screenshots.slice(0, 3);
  const extraCount = Math.max(0, screenshots.length - 3);

  return (
    <div className="grid grid-cols-3 gap-2 w-full">
      {visible.map((src, index) => {
        const showOverlay = index === visible.length - 1 && extraCount > 0;
        return (
          <button
            key={src}
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`Open ${projectTitle} screenshot ${index + 1}`}
            className="relative aspect-[9/16] rounded-md overflow-hidden border border-gray-200/60 hover:scale-[1.04] transition-transform duration-200 cursor-pointer bg-gray-50 p-0"
          >
            <img
              src={src}
              alt={`${projectTitle} screenshot ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {showOverlay && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white text-sm font-semibold">+{extraCount}</span>
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
});
