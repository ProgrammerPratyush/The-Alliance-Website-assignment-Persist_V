import React from 'react';
import { MessageSquare, ThumbsUp } from 'lucide-react';
import type { ConversationPrompt } from '../types';

interface ConversationPromptsProps {
  prompts: ConversationPrompt[];
  onLike: (id: string) => void;
}

export default function ConversationPrompts({ prompts, onLike }: ConversationPromptsProps) {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="px-6 py-4 bg-blue-900 text-white flex items-center">
        <MessageSquare className="w-6 h-6 mr-2" />
        <h2 className="text-xl font-bold">Conversation Starters</h2>
      </div>

      <div className="divide-y divide-gray-200">
        {prompts.map((prompt) => (
          <div key={prompt.id} className="p-6 hover:bg-gray-50">
            <p className="text-gray-800 mb-4">{prompt.text}</p>
            <div className="flex justify-end">
              <button
                onClick={() => onLike(prompt.id)}
                className="inline-flex items-center space-x-2 text-blue-900 hover:text-blue-700"
              >
                <ThumbsUp className="w-5 h-5" />
                <span>{prompt.likes}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}