import { useEffect, useState, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';

interface ImageModalProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

const ImageModal = ({ images, currentIndex, onClose, onNavigate }: ImageModalProps) => {
  const [isActive, setIsActive] = useState(false);
  const [imageStyle, setImageStyle] = useState<React.CSSProperties>({
    opacity: 0,
    transform: 'scale(0.96)',
  });
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsActive(true), 10);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setImageStyle({ opacity: 0, transform: 'scale(0.96)' });
    const timer = setTimeout(() => {
      setImageStyle({ opacity: 1, transform: 'scale(1)' });
    }, 150);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    if (!isActive) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isActive]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onNavigate('prev');
      } else if (e.key === 'ArrowRight') {
        onNavigate('next');
      }
    },
    [onClose, onNavigate]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX.current - touchStartX.current;

    if (Math.abs(swipeDistance) > swipeThreshold) {
      onNavigate(swipeDistance > 0 ? 'prev' : 'next');
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handlePrevClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate('prev');
  };

  const handleNextClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate('next');
  };

  const showNavigation = images.length > 1;

  const modalContent = (
    <div
      className={`modal ${isActive ? 'active' : ''}`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={`Project image ${currentIndex + 1} of ${images.length}`}
    >
      <button
        type="button"
        className="close-modal"
        onClick={onClose}
        aria-label="Close image viewer"
      >
        ×
      </button>

      {showNavigation && (
        <>
          <button
            type="button"
            className="modal-nav modal-prev"
            onClick={handlePrevClick}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            className="modal-nav modal-next"
            onClick={handleNextClick}
            aria-label="Next image"
          >
            ›
          </button>
          <div className="modal-counter" aria-live="polite">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}

      <div
        className="modal-container"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          className="modal-image"
          src={images[currentIndex]}
          alt={`Project screenshot ${currentIndex + 1} of ${images.length}`}
          style={imageStyle}
        />
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default ImageModal;
