import React, { useState } from 'react';
import { Book, Search } from 'lucide-react';
import { Language, Term } from '../types';

interface TermDictionaryProps {
  language: Language;
}

const TermDictionary: React.FC<TermDictionaryProps> = ({ language }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for healthcare terms
  const terms: Term[] = [
    { term: '血圧', definition: 'Blood pressure' },
    { term: '体温', definition: 'Body temperature' },
    { term: '脈拍', definition: 'Pulse rate' },
    { term: '酸素飽和度', definition: 'Oxygen saturation' },
    // Add more terms here
  ];

  const filteredTerms = terms.filter((term) =>
    term.term.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <Book className="mr-2" /> Healthcare Term Dictionary
      </h2>
      <div className="mb-4 relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 pl-10 border rounded"
          placeholder="Search terms..."
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" />
      </div>
      <ul className="space-y-2">
        {filteredTerms.map((term, index) => (
          <li key={index} className="border-b pb-2">
            <span className="font-semibold">{term.term}</span>:{' '}
            <span>{term.definition}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TermDictionary;