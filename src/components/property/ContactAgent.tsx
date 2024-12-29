import React from 'react';
import { Phone, Mail } from 'lucide-react';

interface ContactAgentProps {
  agent: {
    name: string;
    phone: string;
    email: string;
    photo: string;
  };
}

export default function ContactAgent({ agent }: ContactAgentProps) {
  return (
    <div className="mt-8 p-4 bg-gray-50 rounded-lg animate-slide-up">
      <h3 className="font-semibold mb-4">Contact Agent</h3>
      <div className="flex items-center gap-4">
        <img 
          src={agent.photo} 
          alt={agent.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <p className="font-medium">{agent.name}</p>
          <div className="flex items-center gap-2 text-gray-600 mt-1">
            <Phone className="h-4 w-4" />
            <a href={`tel:${agent.phone}`} className="hover:text-blue-600 transition-colors">
              {agent.phone}
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Mail className="h-4 w-4" />
            <a href={`mailto:${agent.email}`} className="hover:text-blue-600 transition-colors">
              {agent.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}