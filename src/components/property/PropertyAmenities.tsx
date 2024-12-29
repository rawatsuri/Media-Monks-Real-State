import React from 'react';
import { Check } from 'lucide-react';

interface PropertyAmenitiesProps {
  amenities: string[];
}

export default function PropertyAmenities({ amenities }: PropertyAmenitiesProps) {
  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-2">Amenities</h3>
      <div className="grid grid-cols-2 gap-3">
        {amenities.map((amenity, index) => (
          <div 
            key={index}
            className="flex items-center gap-2 text-gray-600"
          >
            <Check className="h-4 w-4 text-green-500" />
            <span>{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  );
}