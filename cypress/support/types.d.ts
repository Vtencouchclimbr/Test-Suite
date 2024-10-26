import { Schema } from 'mongoose';
interface Question {
  _id: Schema.Types.ObjectId;
  question: string;
  answers: string[];
}

interface Answers {
  [key: string]: Question;
}

export type { Game, Answers };
