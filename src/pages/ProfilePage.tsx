import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Mail, Globe } from 'lucide-react';
import type { User } from '../types';

const mockUser: User = {
  id: '1',
  name: 'Sarah Chen',
  country: 'Singapore',
  imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  offering: 'UX/UI Design expertise',
  need: 'Frontend development mentorship',
  matchScore: 95,
  timestamp: new Date().toISOString(),
};

export default function ProfilePage() {
  const { id } = useParams();

  // In a real app, this would fetch user data based on the ID
  const user = mockUser;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-[#2A2A2A] rounded-lg overflow-hidden shadow-lg">
        <div className="relative h-48 bg-blue-900">
          <img
            src={user.imageUrl}
            alt={user.name}
            className="absolute bottom-0 left-8 transform translate-y-1/2 w-32 h-32 rounded-full border-4 border-[#2A2A2A] object-cover"
          />
        </div>
        
        <div className="pt-20 px-8 pb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-white">{user.name}</h1>
              <div className="flex items-center mt-2 text-gray-400">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{user.country}</span>
              </div>
            </div>
            
            <div className="space-x-4">
              <button className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </button>
              <button className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200">
                <Globe className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="bg-[#1A1A1A] p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-blue-400">Offering</h2>
              <p className="text-gray-300">{user.offering}</p>
            </div>
            
            <div className="bg-[#1A1A1A] p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-blue-400">Need</h2>
              <p className="text-gray-300">{user.need}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}