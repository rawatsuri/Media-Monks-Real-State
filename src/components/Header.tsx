import React from 'react';
import { Search, MapPin, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">HomeFinder</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600">Buy</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Rent</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Sell</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Agent Finder</a>
            </nav>
            <div className="flex space-x-4">
              <button className="text-gray-700 hover:text-blue-600">Login</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Sign Up
              </button>
            </div>
          </div>
          
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
}