import React from 'react';
import { Trophy, Star } from 'lucide-react';
import type { LeaderboardEntry } from '../types';

interface LeaderboardProps {
  entries: LeaderboardEntry[];
}

export default function Leaderboard({ entries }: LeaderboardProps) {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="px-6 py-4 bg-blue-900 text-white flex items-center">
        <Trophy className="w-6 h-6 mr-2" />
        <h2 className="text-xl font-bold">Community Leaders</h2>
      </div>
      
      <div className="divide-y divide-gray-200">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="p-4 hover:bg-gray-50 transition-colors duration-150"
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                {entry.rank <= 3 ? (
                  <Star className={`w-6 h-6 ${
                    entry.rank === 1 ? 'text-yellow-400' :
                    entry.rank === 2 ? 'text-gray-400' :
                    'text-amber-600'
                  }`} />
                ) : (
                  <span className="text-gray-500 font-medium">{entry.rank}</span>
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <div className="text-sm">
                    <p className="font-medium text-gray-900 truncate">
                      Offering: {entry.offering}
                    </p>
                    <p className="text-gray-500 truncate">
                      Need: {entry.need}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Score: {entry.matchScore}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}