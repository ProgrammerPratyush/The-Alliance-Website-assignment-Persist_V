import React from 'react';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function QuickActionButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/intake')}
      className="fixed bottom-8 right-8 w-14 h-14 bg-blue-900 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-800 transition-colors duration-200"
    >
      <Plus className="w-6 h-6" />
    </button>
  );
}