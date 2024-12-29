import React from 'react';
import PropertyFilters from './PropertyFilters';
import PropertyStats from './PropertyStats';

export default function SearchSection() {
  const handleSearch = (filters: any) => {
    console.log('Search filters:', filters);
    // Implement search functionality
  };

  return (
    <div className="relative">
      <div 
        className="h-[500px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Find Your Dream Property
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Discover the perfect property from our extensive collection of homes, apartments, and investment opportunities.
            </p>
          </div>
        </div>
      </div>
      <PropertyFilters onSearch={handleSearch} />
      <PropertyStats />
    </div>
  );
}