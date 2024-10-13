export type Language = 'ja' | 'en' | 'vi' | 'id' | 'zh';

export interface Translation {
  id: string;
  source: string;
  target: string;
  sourceLanguage: Language;
  targetLanguage: Language;
  timestamp: number;
}

export interface Term {
  term: string;
  definition: string;
}

export interface Phrase {
  category: string;
  text: string;
}