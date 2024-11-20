import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import type { User } from '../types';

const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    country: 'Singapore',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    offering: 'UX/UI Design expertise',
    need: 'Frontend development mentorship',
    matchScore: 95,
    timestamp: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    country: 'Spain',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    offering: 'Backend architecture consulting',
    need: 'Mobile app design collaboration',
    matchScore: 88,
    timestamp: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Aisha Patel',
    country: 'India',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    offering: 'Digital marketing strategy',
    need: 'Content creation partnership',
    matchScore: 82,
    timestamp: new Date().toISOString(),
  },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to The Alliance</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Connect with professionals worldwide, share your expertise, and find the
          support you need to grow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockUsers.map((user) => (
          <ProfileCard
            key={user.id}
            user={user}
            onClick={() => navigate(`/profile/${user.id}`)}
          />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate('/intake')}
          className="px-8 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200"
        >
          Join The Alliance
        </button>
      </div>
    </div>
  );
}