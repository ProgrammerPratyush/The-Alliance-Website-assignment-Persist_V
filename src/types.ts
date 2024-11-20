export interface User {
  id: string;
  name: string;
  country: string;
  imageUrl: string;
  offering: string;
  need: string;
  matchScore: number;
  timestamp: string;
}

export interface LeaderboardEntry extends User {
  rank: number;
}

export interface ConversationPrompt {
  id: string;
  text: string;
  likes: number;
}

export interface ProfileCardProps {
  user: User;
  onClick?: () => void;
}