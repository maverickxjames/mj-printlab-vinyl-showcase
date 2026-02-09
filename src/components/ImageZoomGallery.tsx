import { useState, useRef } from 'react';

interface ImageZoomGalleryProps {
  images: string[];
  productName: string;
}

const ImageZoomGallery = ({ images, productName }: ImageZoomGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZooming, setIsZooming] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image with Zoom */}
      <div
        ref={imageRef}
        className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-muted/50 to-muted shadow-card cursor-crosshair"
        onMouseEnter={() => setIsZooming(true)}
        onMouseLeave={() => setIsZooming(false)}
        onMouseMove={handleMouseMove}
      >
        <img
          src={images[selectedIndex]}
          alt={`${productName} - View ${selectedIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-200"
          style={{
            transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
            transform: isZooming ? 'scale(2)' : 'scale(1)',
          }}
        />
        {isZooming && (
          <div className="absolute bottom-4 left-4 bg-foreground/70 text-primary-foreground px-3 py-1 rounded-full text-xs">
            Hover to zoom
          </div>
        )}
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-1">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                selectedIndex === index
                  ? 'border-primary shadow-soft'
                  : 'border-border/50 hover:border-primary/50'
              }`}
            >
              <img
                src={img}
                alt={`${productName} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageZoomGallery;
