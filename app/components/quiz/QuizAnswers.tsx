'use client';

import React from 'react';
import { Answer } from '@/lib/types/quiz';

interface QuizAnswersProps {
  answers: Answer[];
  onSelect: (points: number) => void;
}

export default function QuizAnswers({ answers, onSelect }: QuizAnswersProps) {
  return (
    <div className="flex gap-4 mb-6">
      {answers.map((answer, index) => (
        <button
          key={index}
          onClick={() => onSelect(answer.points)}
          className="px-6 py-2 bg-orange-400 text-white rounded hover:bg-orange-500 transition-colors"
        >
          {answer.text}
        </button>
      ))}
    </div>
  );
}