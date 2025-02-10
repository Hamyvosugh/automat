export interface Question {
    id: number;
    topic: string;
    question: string;
    totalQuestions: number;
    answers: Answer[];
  }
  
  export interface Answer {
    text: string;
    points: number;
  }
  
  export interface QuizResult {
    totalPoints: number;
    analysis: string;
  }