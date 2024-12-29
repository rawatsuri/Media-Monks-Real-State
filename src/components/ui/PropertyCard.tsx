import React, { useState } from 'react';
import { Heart, BedDouble, Bath, Square } from 'lucide-react';
import { Property } from '../../data/properties';
import { formatPrice } from '../../utils/format';
import Modal from './Modal';
import PropertyDetails from '../PropertyDetails';
import BookingForm from '../BookingForm';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBook = () => {
    setIsDetailsOpen(false);
    setIsBookingOpen(true);
  };

  const handleBookingSubmit = (data: any) => {
    console.log('Booking submitted:', data);
    setIsBookingOpen(false);
    // Here you would typically send this data to your backend
  };

  return (
    <>
      <div 
        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
        onClick={() => setIsDetailsOpen(true)}
      >
        <div className="relative">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
              property.status === 'For Sale' ? 'bg-green-500' : 'bg-blue-500'
            } text-white`}>
              {property.status}
            </span>
          </div>
          <button 
            className={`absolute top-4 right-4 p-2 bg-white rounded-full shadow-md transition-colors duration-300 ${
              isFavorite ? 'text-red-500' : 'text-gray-600'
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorite(!isFavorite);
            }}
          >
            <Heart className="h-5 w-5" fill={isFavorite ? 'currentColor' : 'none'} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold">{property.title}</h3>
            <span className="text-sm font-medium text-gray-500">{property.type}</span>
          </div>
          <p className="text-2xl font-bold text-blue-600 mb-2">
            {formatPrice(property.price, property.status)}
          </p>
          <p className="text-gray-600 mb-4">{property.location}</p>
          
          <div className="flex justify-between text-gray-600 mb-4">
            <div className="flex items-center">
              <BedDouble className="h-5 w-5 mr-2" />
              <span>{property.beds} beds</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-5 w-5 mr-2" />
              <span>{property.baths} baths</span>
            </div>
            <div className="flex items-center">
              <Square className="h-5 w-5 mr-2" />
              <span>{property.sqft} sqft</span>
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex flex-wrap gap-2">
              {property.amenities.slice(0, 3).map((amenity, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                >
                  {amenity}
                </span>
              ))}
              {property.amenities.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                  +{property.amenities.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isDetailsOpen} onClose={() => setIsDetailsOpen(false)}>
        <PropertyDetails property={property} onBook={handleBook} />
      </Modal>

      <Modal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)}>
        <BookingForm 
          propertyTitle={property.title}
          onSubmit={handleBookingSubmit}
        />
      </Modal>
    </>
  );
}