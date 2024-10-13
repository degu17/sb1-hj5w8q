import React from 'react';
import { Clock } from 'lucide-react';
import { Translation } from '../types';

interface TranslationHistoryProps {
  translations: Translation[];
}

const TranslationHistory: React.FC<TranslationHistoryProps> = ({ translations }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <Clock className="mr-2" /> Translation History
      </h2>
      {translations.length === 0 ? (
        <p>No translations yet.</p>
      ) : (
        <ul className="space-y-4">
          {translations.map((translation) => (
            <li key={translation.id} className="border-b pb-2">
              <p className="font-semibold">{translation.source}</p>
              <p className="text-gray-600">{translation.target}</p>
              <p className="text-xs text-gray-400">
                {new Date(translation.timestamp).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TranslationHistory;