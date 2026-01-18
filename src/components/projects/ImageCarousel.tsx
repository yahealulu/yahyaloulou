import { useState } from 'react';

interface ImageCarouselProps {
  images: string[];
  projectTitle: string;
  onImageClick: (startIndex: number) => void;
}

const ImageCarousel = ({ images, projectTitle, onImageClick }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  const handleCarouselClick = () => {
    onImageClick(currentIndex);
  };

  return (
    <div className="image-carousel" onClick={handleCarouselClick}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${projectTitle} preview ${index + 1}`}
          className="carousel-image"
          loading="lazy"
          style={{ display: index === currentIndex ? 'block' : 'none' }}
        />
      ))}
      <div className="carousel-nav">
        {images.map((_, index) => (
          <div
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={(e) => handleDotClick(index, e)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;

