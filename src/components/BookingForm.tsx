import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail } from 'lucide-react';

interface BookingFormProps {
  propertyTitle: string;
  onSubmit: (data: BookingData) => void;
}

interface BookingData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
}

export default function BookingForm({ propertyTitle, onSubmit }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Schedule a Viewing</h2>
      <p className="text-gray-600 mb-6">Property: {propertyTitle}</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="flex items-center gap-2 text-gray-700 mb-2">
            <User className="h-5 w-5" />
            <span>Full Name</span>
          </label>
          <input
            type="text"
            required
            className="w-full p-2 border rounded-md"
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
        </div>
        
        <div>
          <label className="flex items-center gap-2 text-gray-700 mb-2">
            <Mail className="h-5 w-5" />
            <span>Email</span>
          </label>
          <input
            type="email"
            required
            className="w-full p-2 border rounded-md"
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
          />
        </div>
        
        <div>
          <label className="flex items-center gap-2 text-gray-700 mb-2">
            <Phone className="h-5 w-5" />
            <span>Phone</span>
          </label>
          <input
            type="tel"
            required
            className="w-full p-2 border rounded-md"
            value={formData.phone}
            onChange={e => setFormData({...formData, phone: e.target.value})}
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="flex items-center gap-2 text-gray-700 mb-2">
              <Calendar className="h-5 w-5" />
              <span>Preferred Date</span>
            </label>
            <input
              type="date"
              required
              className="w-full p-2 border rounded-md"
              value={formData.date}
              onChange={e => setFormData({...formData, date: e.target.value})}
            />
          </div>
          
          <div>
            <label className="flex items-center gap-2 text-gray-700 mb-2">
              <Clock className="h-5 w-5" />
              <span>Preferred Time</span>
            </label>
            <input
              type="time"
              required
              className="w-full p-2 border rounded-md"
              value={formData.time}
              onChange={e => setFormData({...formData, time: e.target.value})}
            />
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Submit Booking Request
        </button>
      </form>
    </div>
  );
}