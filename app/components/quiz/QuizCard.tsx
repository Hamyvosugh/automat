'use client';

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface Answer {
  text: string;
  points: number;
}

interface Question {
  id: number;
  topic: string;
  question: string;
  totalQuestions: number;
  answers: Answer[];
}

interface QuizCardProps {
  questions: Question[];
  onComplete: (results: number[]) => void;
}

export default function QuizCard({ questions, onComplete }: QuizCardProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleAnswer = (points: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = points;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  const handleSkip = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main card */}
      <div className="bg-white rounded-lg shadow-lg p-8 relative z-10">
        <div className="flex justify-between items-center mb-6">
          <div className="text-gray-600">
            {currentQuestion + 1}/{questions[currentQuestion].totalQuestions} {questions[currentQuestion].topic}
          </div>
        </div>
        
        <h2 className="text-2xl mb-8">
          {questions[currentQuestion].question}
        </h2>
        
        <div className="flex flex-wrap gap-4 mb-6">
          {questions[currentQuestion].answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(answer.points)}
              className="px-6 py-2 bg-orange-400 text-white rounded hover:bg-orange-500 transition-colors"
            >
              {answer.text}
            </button>
          ))}
        </div>
        
        <div className="flex justify-end">
          <button 
            onClick={handleSkip}
            className="text-gray-600 hover:text-gray-800 flex items-center gap-1"
          >
            These überspringen
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Next card preview */}
      <div className="absolute top-4 left-[calc(100%-40px)] w-full h-[calc(100%-8px)] bg-white rounded-lg shadow-md -z-10 opacity-50" />
      
      {/* Pagination dots */}
      <div className="flex justify-center gap-2 mt-8 overflow-x-auto py-2">
        {Array.from({ length: questions[currentQuestion].totalQuestions }).map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentQuestion ? 'bg-orange-400' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}