export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const categories = [
  {
    id: 'residential',
    name: 'Residential',
    description: 'Find your perfect home among our residential properties',
    icon: 'Home'
  },
  {
    id: 'luxury',
    name: 'Luxury',
    description: 'Exclusive high-end properties for discerning buyers',
    icon: 'Crown'
  },
  {
    id: 'commercial',
    name: 'Commercial',
    description: 'Office spaces, retail locations, and business properties',
    icon: 'Building2'
  },
  {
    id: 'land',
    name: 'Land',
    description: 'Development opportunities and vacant land',
    icon: 'Map'
  },
  {
    id: 'vacation',
    name: 'Vacation',
    description: 'Holiday homes and vacation rentals',
    icon: 'Palmtree' // Changed from PalmTree to Palmtree
  },
  {
    id: 'investment',
    name: 'Investment',
    description: 'Properties with high return potential',
    icon: 'TrendingUp'
  }
];