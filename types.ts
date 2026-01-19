export interface PartyData {
  name: string;
  color: string;
  videos: number;
  viralPercentage: number;
  tone: 'Positivo' | 'Negativo' | 'Neutral';
  mainStrategy: string;
}

export interface MonthlyData {
  month: string;
  PP: number;
  PSOE: number;
  Vox: number;
  Sumar: number;
  event?: string;
}

export interface TheoryCard {
  id: string;
  title: string;
  year: string;
  color: string;
  shortDesc: string;
  fullTitle: string;
  definition: string;
  implication: string;
}

export interface ConclusionCard {
  id: string;
  title: string;
  summary: string;
  detail: string;
  color: string;
}

export interface Comment {
  id: number;
  username: string;
  text: string;
  likes: number;
  isUser?: boolean;
}

export enum SectionType {
  INTRO = 'INTRO',
  THEORY = 'THEORY',
  METHODOLOGY = 'METHODOLOGY',
  RESULTS_ACTIVITY = 'RESULTS_ACTIVITY',
  RESULTS_TONE = 'RESULTS_TONE',
  INTERVIEWS = 'INTERVIEWS',
  COMMENTS = 'COMMENTS',
}