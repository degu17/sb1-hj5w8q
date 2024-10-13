import React, { useState } from 'react';
import { MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { Language, Phrase } from '../types';

interface PhraseCollectionProps {
  language: Language;
}

const PhraseCollection: React.FC<PhraseCollectionProps> = ({ language }) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  // Mock data for healthcare phrases
  const phrases: { [key: string]: Phrase[] } = {
    'Medication': [
      { category: 'Medication', text: 'お薬の時間です (It\'s time for your medication)' },
      { category: 'Medication', text: '薬を飲みましたか？ (Did you take your medicine?)' },
    ],
    'Vital Signs': [
      { category: 'Vital Signs', text: '血圧を測りましょう (Let\'s measure your blood pressure)' },
      { category: 'Vital Signs', text: '体温を測ります (I\'ll take your temperature)' },
    ],
    'Daily Care': [
      { category: 'Daily Care', text: 'お食事の時間です (It\'s mealtime)' },
      { category: 'Daily Care', text: 'お風呂に入りましょう (Let\'s take a bath)' },
    ],
  };

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <MessageSquare className="mr-2" /> Common Phrases
      </h2>
      {Object.entries(phrases).map(([category, categoryPhrases]) => (
        <div key={category} className="mb-4">
          <button
            onClick={() => toggleCategory(category)}
            className="flex justify-between items-center w-full p-2 bg-gray-100 rounded"
          >
            <span className="font-semibold">{category}</span>
            {expandedCategory === category ? <ChevronUp /> : <ChevronDown />}
          </button>
          {expandedCategory === category && (
            <ul className="mt-2 space-y-2">
              {categoryPhrases.map((phrase, index) => (
                <li key={index} className="p-2 bg-gray-50 rounded">
                  {phrase.text}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default PhraseCollection;