import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Leaderboard from '../components/Leaderboard';
import ConversationPrompts from '../components/ConversationPrompts';
import type { LeaderboardEntry, ConversationPrompt } from '../types';

const mockLeaderboard: LeaderboardEntry[] = [
  {
    id: '1',
    rank: 1,
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
    rank: 2,
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
    rank: 3,
    name: 'Aisha Patel',
    country: 'India',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    offering: 'Digital marketing strategy',
    need: 'Content creation partnership',
    matchScore: 82,
    timestamp: new Date().toISOString(),
  },
];

const mockPrompts: ConversationPrompt[] = [
  {
    id: '1',
    text: "I noticed you're interested in UX/UI design. I'd love to hear your thoughts on the latest design trends in mobile applications.",
    likes: 24,
  },
  {
    id: '2',
    text: "Your backend architecture experience could be valuable for my project. Would you be open to discussing microservices architecture?",
    likes: 18,
  },
  {
    id: '3',
    text: "I see we both have an interest in digital marketing. How do you approach content strategy for different social media platforms?",
    likes: 15,
  },
];

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [prompts, setPrompts] = useState(mockPrompts);

  const handleLike = (id: string) => {
    setPrompts(prompts.map(prompt => 
      prompt.id === id ? { ...prompt, likes: prompt.likes + 1 } : prompt
    ));
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Community Hub</h1>
        <div className="max-w-xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search community members..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 bg-[#2A2A2A] rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <Leaderboard entries={mockLeaderboard} />
        </div>
        <div>
          <ConversationPrompts prompts={prompts} onLike={handleLike} />
        </div>
      </div>
    </div>
  );
}