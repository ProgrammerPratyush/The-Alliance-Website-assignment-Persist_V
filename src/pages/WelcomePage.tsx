import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users } from 'lucide-react';

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="bg-[#2A2A2A] rounded-lg p-8 shadow-lg">
        <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
          <Users className="w-10 h-10 text-white" />
        </div>

        <h1 className="text-4xl font-bold mb-4">Welcome to The Alliance!</h1>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Your profile has been created successfully. You're now part of a community
          of professionals ready to collaborate and grow together.
        </p>

        <div className="space-y-4">
          <button
            onClick={() => navigate('/community')}
            className="w-full max-w-md px-8 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200"
          >
            Explore the Community
          </button>
          
          <button
            onClick={() => navigate('/')}
            className="w-full max-w-md px-8 py-3 bg-[#1A1A1A] text-white rounded-lg hover:bg-[#222] transition-colors duration-200"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
}