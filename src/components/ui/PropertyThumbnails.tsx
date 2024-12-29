import React from 'react';
import { Image } from 'lucide-react';

interface PropertyThumbnailsProps {
  photos: string[];
  onOpenGallery: () => void;
}

export default function PropertyThumbnails({ photos, onOpenGallery }: PropertyThumbnailsProps) {
  return (
    <div className="grid grid-cols-4 gap-2 mt-4">
      {photos.slice(0, 3).map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt={`Property ${index + 1}`}
          className="h-24 w-full object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
          onClick={onOpenGallery}
        />
      ))}
      {photos.length > 3 && (
        <button
          onClick={onOpenGallery}
          className="bg-gray-900 bg-opacity-50 rounded-lg flex items-center justify-center text-white hover:bg-opacity-60 transition-all"
        >
          <div className="text-center">
            <Image className="h-6 w-6 mx-auto mb-1" />
            <span className="text-sm">+{photos.length - 3}</span>
          </div>
        </button>
      )}
    </div>
  );
}