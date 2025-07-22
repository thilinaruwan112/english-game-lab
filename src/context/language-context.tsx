
'use client';

import { useParams } from 'next/navigation';
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type Language = 'en' | 'si';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children, lang: initialLang }: { children: ReactNode, lang?: Language }) => {
  const params = useParams();
  const langFromParams = Array.isArray(params.lang) ? params.lang[0] : params.lang;
  
  const [language, setLanguage] = useState<Language>(initialLang || (langFromParams as Language) || 'si');

  useEffect(() => {
    if (langFromParams && (langFromParams === 'en' || langFromParams === 'si')) {
      setLanguage(langFromParams);
    }
  }, [langFromParams]);


  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
