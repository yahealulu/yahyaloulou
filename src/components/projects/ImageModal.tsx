import { useEffect, useState, useRef, useCallback } from 'react';

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
    transform: 'scale(0.9)',
  });
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Show modal with animation
  useEffect(() => {
    const timer = setTimeout(() => setIsActive(true), 10);
    return () => clearTimeout(timer);
  }, []);

  // Update image with transition effect
  useEffect(() => {
    setImageStyle({ opacity: 0, transform: 'scale(0.9)' });
    const timer = setTimeout(() => {
      setImageStyle({ opacity: 1, transform: 'scale(1)' });
    }, 150);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowLeft') {
      onNavigate('prev');
    } else if (e.key === 'ArrowRight') {
      onNavigate('next');
    }
  }, [onClose, onNavigate]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Touch/swipe navigation for mobile
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
      if (swipeDistance > 0) {
        // Swipe right - go to previous image
        onNavigate('prev');
      } else {
        // Swipe left - go to next image
        onNavigate('next');
      }
    }
  };

  // Close modal when clicking outside image
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

  return (
    <div 
      className={`modal ${isActive ? 'active' : ''}`}
      onClick={handleBackdropClick}
    >
      <div 
        className="modal-container"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          className="modal-image"
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1} of ${images.length}`}
          style={imageStyle}
        />
        
        {showNavigation && (
          <>
            <button
              className="modal-nav modal-prev"
              onClick={handlePrevClick}
            >
              ‹
            </button>
            <button
              className="modal-nav modal-next"
              onClick={handleNextClick}
            >
              ›
            </button>
            <div className="modal-counter">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>
      
      <button className="close-modal" onClick={onClose}>
        ×
      </button>
    </div>
  );
};

export default ImageModal;

