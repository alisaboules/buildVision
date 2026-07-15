import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { translations, type Language } from "./translations";


type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const browserLang: Language = navigator.language.startsWith("ru")
    ? "ru"
    : "en";

  const [lang, setLang] = useState<Language>(browserLang);

  const t = (key: string) => {
    return (
      translations[lang][key as keyof typeof translations.en] ??
      key
    );
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}