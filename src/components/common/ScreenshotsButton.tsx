import React from 'react';

interface ScreenshotsButtonProps {
  onClick: () => void;
}

export const ScreenshotsButton: React.FC<ScreenshotsButtonProps> = React.memo(({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-xs text-gray-500 hover:text-gray-900 underline underline-offset-2 transition-colors duration-200 bg-transparent border-0 cursor-pointer p-0"
    >
      View screenshots
    </button>
  );
});
