import React from 'react';
import { properties } from '../data/properties';

export default function PropertyStats() {
  const stats = {
    totalProperties: properties.length,
    forSale: properties.filter(p => p.status === 'For Sale').length,
    forRent: properties.filter(p => p.status === 'For Rent').length,
    averagePrice: Math.round(
      properties.reduce((acc, curr) => acc + curr.price, 0) / properties.length
    )
  };

  return (
    <div className="bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-white mb-2">{stats.totalProperties}</p>
            <p className="text-blue-100">Total Properties</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-white mb-2">{stats.forSale}</p>
            <p className="text-blue-100">Properties for Sale</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-white mb-2">{stats.forRent}</p>
            <p className="text-blue-100">Properties for Rent</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-white mb-2">${(stats.averagePrice).toLocaleString()}</p>
            <p className="text-blue-100">Average Price</p>
          </div>
        </div>
      </div>
    </div>
  );
}