import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, ArrowLeft } from 'lucide-react';

interface PhotoGalleryProps {
  photos: string[];
  onClose: () => void;
}

export default function PhotoGallery({ photos, onClose }: PhotoGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50">
      <div className="flex items-center justify-between p-4 bg-black bg-opacity-50">
        <button
          onClick={onClose}
          className="text-white hover:text-gray-300 transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="h-6 w-6" />
          <span>Back to Property</span>
        </button>
        <span className="text-white">
          {currentIndex + 1} / {photos.length}
        </span>
      </div>

      <div className="flex items-center justify-center h-[calc(100vh-80px)]">
        <button
          onClick={prevPhoto}
          className="absolute left-4 text-white hover:text-gray-300 transition-colors"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
        
        <img
          src={photos[currentIndex]}
          alt={`Photo ${currentIndex + 1}`}
          className="max-h-[80vh] w-auto mx-auto animate-fade-in"
        />
        
        <button
          onClick={nextPhoto}
          className="absolute right-4 text-white hover:text-gray-300 transition-colors"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
}