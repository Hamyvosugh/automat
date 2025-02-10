'use client';

import QuizCard from '../components/quiz/QuizCard';
import questionsData from '../lib/data/questions.json';

export default function Page() {
  const handleQuizComplete = (results: number[]) => {
    console.log('Quiz completed with results:', results);
    // Calculate total points
    const totalPoints = results.reduce((acc, curr) => acc + curr, 0);
    console.log('Total points:', totalPoints);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <QuizCard 
        questions={questionsData.questions}
        onComplete={handleQuizComplete}
      />
    </main>
  );
}