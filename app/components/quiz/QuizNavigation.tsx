'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';

interface QuizNavigationProps {
  onSkip: () => void;
}

export default function QuizNavigation({ onSkip }: QuizNavigationProps) {
  return (
    <div className="flex justify-end">
      <button 
        onClick={onSkip}
        className="text-gray-600 hover:text-gray-800 flex items-center gap-1"
      >
        These überspringen
        <ChevronRight size={16} />
      </button>
    </div>
  );
}