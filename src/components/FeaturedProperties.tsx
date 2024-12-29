import React from 'react';
import PropertyCard from './ui/PropertyCard';
import { properties } from '../data/properties';

export default function FeaturedProperties() {
  const featuredProperties = properties.filter(property => property.featured);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Properties</h2>
          <button className="text-blue-600 hover:text-blue-700 font-semibold">
            View All Properties
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}