import React from 'react';
import { BedDouble, Bath, Square, MapPin, Calendar } from 'lucide-react';
import { Property } from '../data/properties';
import { formatPrice } from '../utils/format';

interface PropertyDetailsProps {
  property: Property;
  onBook: () => void;
}

export default function PropertyDetails({ property, onBook }: PropertyDetailsProps) {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img 
            src={property.image} 
            alt={property.title} 
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>
        
        <div>
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-2xl font-bold">{property.title}</h2>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
              property.status === 'For Sale' ? 'bg-green-500' : 'bg-blue-500'
            } text-white`}>
              {property.status}
            </span>
          </div>
          
          <p className="text-3xl font-bold text-blue-600 mb-4">
            {formatPrice(property.price, property.status)}
          </p>
          
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="h-5 w-5 mr-2" />
            <span>{property.location}</span>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="flex items-center">
              <BedDouble className="h-5 w-5 mr-2 text-gray-600" />
              <span>{property.beds} beds</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-5 w-5 mr-2 text-gray-600" />
              <span>{property.baths} baths</span>
            </div>
            <div className="flex items-center">
              <Square className="h-5 w-5 mr-2 text-gray-600" />
              <span>{property.sqft} sqft</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-gray-600">{property.description}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Amenities</h3>
            <div className="flex flex-wrap gap-2">
              {property.amenities.map((amenity, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>
          
          <button
            onClick={onBook}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <Calendar className="h-5 w-5" />
            Schedule a Viewing
          </button>
        </div>
      </div>
    </div>
  );
}