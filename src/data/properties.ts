export interface Property {
  id: number;
  image: string;
  photos: string[];
  title: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  type: string;
  category: string;
  status: 'For Sale' | 'For Rent';
  featured: boolean;
  description: string;
  amenities: string[];
  yearBuilt?: number;
  parking?: number;
  virtualTour?: string;
  floorPlan?: string;
  nearbyPlaces?: string[];
  agent?: {
    name: string;
    phone: string;
    email: string;
    photo: string;
  };
}

export const properties: Property[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&q=80",
    photos: [
      "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1613977257372-718d32605f27?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1613977257441-c4e473e0e602?auto=format&fit=crop&q=80"
    ],
    title: "Modern Penthouse Suite",
    price: 2500000,
    location: "Manhattan, NY",
    beds: 3,
    baths: 3.5,
    sqft: 2800,
    type: "Penthouse",
    category: "Luxury",
    status: "For Sale",
    featured: true,
    description: "Stunning penthouse with panoramic city views, featuring floor-to-ceiling windows, custom Italian kitchen, and private rooftop terrace. Smart home technology throughout.",
    amenities: ["Rooftop Terrace", "Smart Home", "Wine Cellar", "24/7 Concierge", "Gym", "Spa"],
    yearBuilt: 2022,
    parking: 2,
    virtualTour: "https://example.com/tour/1",
    floorPlan: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&q=80",
    nearbyPlaces: ["Central Park", "5th Avenue Shopping", "MoMA", "Fine Dining"],
    agent: {
      name: "Sarah Johnson",
      phone: "(555) 123-4567",
      email: "sarah.j@example.com",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
    }
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
    photos: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80"
    ],
    title: "Suburban Family Home",
    price: 850000,
    location: "Westchester, NY",
    beds: 4,
    baths: 3,
    sqft: 3200,
    type: "House",
    category: "Residential",
    status: "For Sale",
    featured: true,
    description: "Beautiful colonial-style home in prestigious neighborhood. Recently renovated with modern amenities while maintaining classic charm. Large backyard with pool.",
    amenities: ["Pool", "Garden", "Finished Basement", "Home Office", "New Appliances"],
    yearBuilt: 1995,
    parking: 2,
    virtualTour: "https://example.com/tour/2",
    floorPlan: "https://example.com/floorplan/2",
    nearbyPlaces: ["Top Schools", "Parks", "Shopping Center", "Train Station"],
    agent: {
      name: "Michael Chen",
      phone: "(555) 234-5678",
      email: "michael.c@example.com",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    }
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80",
    photos: [
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80"
    ],
    title: "Downtown Loft",
    price: 4500,
    location: "Brooklyn, NY",
    beds: 2,
    baths: 2,
    sqft: 1500,
    type: "Loft",
    category: "Residential",
    status: "For Rent",
    featured: true,
    description: "Industrial-chic loft in converted warehouse. Exposed brick walls, high ceilings, and original hardwood floors. Perfect for creative professionals.",
    amenities: ["High Ceilings", "Original Details", "In-unit Laundry", "Bike Storage", "Roof Access"],
    yearBuilt: 1920,
    parking: 1,
    virtualTour: "https://example.com/tour/3",
    floorPlan: "https://example.com/floorplan/3",
    nearbyPlaces: ["Art Galleries", "Cafes", "Subway", "Waterfront"],
    agent: {
      name: "Emma Rodriguez",
      phone: "(555) 345-6789",
      email: "emma.r@example.com",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
    }
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
    photos: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80"
    ],
    title: "Beachfront Villa",
    price: 5500000,
    location: "Hamptons, NY",
    beds: 6,
    baths: 7,
    sqft: 6500,
    type: "Villa",
    category: "Luxury",
    status: "For Sale",
    featured: true,
    description: "Magnificent oceanfront estate with private beach access. Features include infinity pool, guest house, home theater, and state-of-the-art security system.",
    amenities: ["Private Beach", "Infinity Pool", "Guest House", "Home Theater", "Wine Cellar", "Smart Security"],
    yearBuilt: 2018,
    parking: 4,
    virtualTour: "https://example.com/tour/4",
    floorPlan: "https://example.com/floorplan/4",
    nearbyPlaces: ["Private Beach", "Golf Club", "Marina", "Luxury Shopping"],
    agent: {
      name: "James Wilson",
      phone: "(555) 456-7890",
      email: "james.w@example.com",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
    }
  }
];