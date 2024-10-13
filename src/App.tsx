import React, { useState, useEffect } from 'react';
import { Globe, Book, MessageSquare, History, Wifi, Lock } from 'lucide-react';
import TranslationForm from './components/TranslationForm';
import TermDictionary from './components/TermDictionary';
import PhraseCollection from './components/PhraseCollection';
import TranslationHistory from './components/TranslationHistory';
import LanguageSelector from './components/LanguageSelector';
import { Language, Translation } from './types';

const App: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('ja');
  const [translations, setTranslations] = useState<Translation[]>([]);
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const addTranslation = (translation: Translation) => {
    setTranslations([translation, ...translations]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center">
            <Globe className="mr-2" /> Healthcare Translator
          </h1>
          <LanguageSelector
            selectedLanguage={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
          />
        </div>
      </header>

      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <TranslationForm
              onTranslate={addTranslation}
              isOnline={isOnline}
            />
            <TranslationHistory translations={translations} />
          </div>
          <div>
            <TermDictionary language={selectedLanguage} />
            <PhraseCollection language={selectedLanguage} />
          </div>
        </div>
      </main>

      <footer className="bg-gray-200 p-4 mt-8">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center">
            <Wifi className={`mr-2 ${isOnline ? 'text-green-500' : 'text-red-500'}`} />
            {isOnline ? 'Online' : 'Offline'}
          </div>
          <div className="flex items-center">
            <Lock className="mr-2" /> Secure & Private
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;