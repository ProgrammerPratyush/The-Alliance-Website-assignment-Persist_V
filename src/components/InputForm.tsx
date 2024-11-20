import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface InputFormProps {
  onSubmit: (offering: string, need: string) => void;
}

export default function InputForm({ onSubmit }: InputFormProps) {
  const [offering, setOffering] = useState('');
  const [need, setNeed] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (offering.trim() && need.trim()) {
      onSubmit(offering, need);
      setOffering('');
      setNeed('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-6">
      <div className="space-y-2">
        <label htmlFor="offering" className="block text-sm font-medium text-gray-700">
          Your Offering
        </label>
        <div className="relative">
          <textarea
            id="offering"
            value={offering}
            onChange={(e) => setOffering(e.target.value)}
            placeholder="Share your expertise, skills, or resources..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent resize-none"
            rows={3}
            maxLength={500}
          />
          <span className="absolute bottom-2 right-2 text-xs text-gray-500">
            {offering.length}/500
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="need" className="block text-sm font-medium text-gray-700">
          Your Need
        </label>
        <div className="relative">
          <textarea
            id="need"
            value={need}
            onChange={(e) => setNeed(e.target.value)}
            placeholder="What are you looking for from the community?"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent resize-none"
            rows={3}
            maxLength={500}
          />
          <span className="absolute bottom-2 right-2 text-xs text-gray-500">
            {need.length}/500
          </span>
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200"
        disabled={!offering.trim() || !need.trim()}
      >
        <Send className="w-5 h-5 mr-2" />
        Connect with the Community
      </button>
    </form>
  );
}