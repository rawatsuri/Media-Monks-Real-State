import React from 'react';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';

interface PropertyFiltersProps {
  onSearch: (filters: any) => void;
}

export default function PropertyFilters({ onSearch }: PropertyFiltersProps) {
  const [location, setLocation] = React.useState('');
  const [type, setType] = React.useState('');
  const [priceRange, setPriceRange] = React.useState('');
  const [status, setStatus] = React.useState('');

  const handleSearch = () => {
    onSearch({ location, type, priceRange, status });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto -mt-24 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <div className="flex items-center border rounded-md p-2">
            <MapPin className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="ml-2 flex-1 outline-none"
            />
          </div>
        </div>

        <div className="relative">
          <div className="flex items-center border rounded-md p-2">
            <Home className="h-5 w-5 text-gray-400" />
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="ml-2 flex-1 outline-none bg-transparent"
            >
              <option value="">Property Type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="condo">Condo</option>
            </select>
          </div>
        </div>

        <div className="relative">
          <div className="flex items-center border rounded-md p-2">
            <DollarSign className="h-5 w-5 text-gray-400" />
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="ml-2 flex-1 outline-none bg-transparent"
            >
              <option value="">Price Range</option>
              <option value="0-300000">Under $300k</option>
              <option value="300000-600000">$300k - $600k</option>
              <option value="600000-1000000">$600k - $1M</option>
              <option value="1000000+">$1M+</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
        >
          <Search className="h-5 w-5" />
          <span>Search</span>
        </button>
      </div>

      <div className="flex gap-4 mt-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="status"
            value="sale"
            checked={status === 'sale'}
            onChange={(e) => setStatus(e.target.value)}
            className="text-blue-600"
          />
          <span>For Sale</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="status"
            value="rent"
            checked={status === 'rent'}
            onChange={(e) => setStatus(e.target.value)}
            className="text-blue-600"
          />
          <span>For Rent</span>
        </label>
      </div>
    </div>
  );
}