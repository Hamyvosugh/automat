'use client';

import React from 'react';

interface QuizProgressProps {
  total: number;
  current: number;
}

export default function QuizProgress({ total, current }: QuizProgressProps) {
  return (
    <div className="flex justify-center gap-2 mt-8">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`h-2 w-2 rounded-full ${
            index === current ? 'bg-orange-400' : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
}