import { Schema } from 'mongoose';
interface Question {
  _id: Schema.Types.ObjectId;
  question: string;
  answers: string[];
}

interface Answer {
  [key: string]: Question;
}

export type { Question, Answer };
