import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Language, Translation } from '../types';

interface TranslationFormProps {
  onTranslate: (translation: Translation) => void;
  isOnline: boolean;
}

const TranslationForm: React.FC<TranslationFormProps> = ({ onTranslate, isOnline }) => {
  const [sourceText, setSourceText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState<Language>('ja');
  const [targetLanguage, setTargetLanguage] = useState<Language>('en');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!sourceText.trim()) return;

    let translatedText = '';
    if (isOnline) {
      // Here you would normally call an API for translation
      // For this example, we'll just reverse the string
      translatedText = sourceText.split('').reverse().join('');
    } else {
      translatedText = '[Offline] Translation not available';
    }

    const translation: Translation = {
      id: Date.now().toString(),
      source: sourceText,
      target: translatedText,
      sourceLanguage,
      targetLanguage,
      timestamp: Date.now(),
    };

    onTranslate(translation);
    setSourceText('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow mb-4">
      <div className="mb-4">
        <textarea
          value={sourceText}
          onChange={(e) => setSourceText(e.target.value)}
          className="w-full p-2 border rounded"
          rows={4}
          placeholder="Enter text to translate"
        />
      </div>
      <div className="flex justify-between mb-4">
        <select
          value={sourceLanguage}
          onChange={(e) => setSourceLanguage(e.target.value as Language)}
          className="p-2 border rounded"
        >
          <option value="ja">Japanese</option>
          <option value="en">English</option>
          <option value="vi">Vietnamese</option>
          <option value="id">Indonesian</option>
          <option value="zh">Chinese</option>
        </select>
        <select
          value={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value as Language)}
          className="p-2 border rounded"
        >
          <option value="en">English</option>
          <option value="ja">Japanese</option>
          <option value="vi">Vietnamese</option>
          <option value="id">Indonesian</option>
          <option value="zh">Chinese</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded flex items-center justify-center"
        disabled={!isOnline}
      >
        <Send className="mr-2" /> Translate
      </button>
    </form>
  );
};

export default TranslationForm;