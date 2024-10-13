import React from 'react';
import { Globe } from 'lucide-react';
import { Language } from '../types';

interface LanguageSelectorProps {
  selectedLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  selectedLanguage,
  onLanguageChange,
}) => {
  return (
    <div className="flex items-center">
      <Globe className="mr-2" />
      <select
        value={selectedLanguage}
        onChange={(e) => onLanguageChange(e.target.value as Language)}
        className="bg-blue-500 text-white p-2 rounded"
      >
        <option value="ja">日本語</option>
        <option value="en">English</option>
        <option value="vi">Tiếng Việt</option>
        <option value="id">Bahasa Indonesia</option>
        <option value="zh">中文</option>
      </select>
    </div>
  );
};

export default LanguageSelector;