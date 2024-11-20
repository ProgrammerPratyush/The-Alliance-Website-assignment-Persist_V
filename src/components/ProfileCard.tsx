import React from 'react';
import type { ProfileCardProps } from '../types';

export default function ProfileCard({ user, onClick }: ProfileCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-[#2A2A2A] rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-blue-900/50 hover:scale-105 cursor-pointer"
    >
      <img
        src={user.imageUrl}
        alt={user.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{user.name}</h3>
        <p className="text-gray-400">{user.country}</p>
        <div className="mt-3 space-y-2">
          <p className="text-sm text-gray-300">
            <span className="font-medium text-blue-400">Offering:</span> {user.offering}
          </p>
          <p className="text-sm text-gray-300">
            <span className="font-medium text-blue-400">Need:</span> {user.need}
          </p>
        </div>
      </div>
    </div>
  );
}