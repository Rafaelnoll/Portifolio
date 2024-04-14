import { ReactNode, createContext, useState } from "react";
import languages from "../assets/languages";
import { TypeLanguages } from "../types/languages";

interface Props {
  children: ReactNode;
}

interface ContextValue {
  currentLanguage: TypeLanguages,
  changeLanguage: (value: TypeLanguages) => void,
  translate: (value: string) => string;
}

export const TranslateContext = createContext<ContextValue>({
  currentLanguage: 'pt-br',
  changeLanguage: () => {},
  translate: () => '',
})

export default function TranslateProvider({ children }: Props){
  const [currentLanguage, setCurrentLanguage] = useState<TypeLanguages>('pt-br');

  function onChangeCurrentLanguage(newLanguage: TypeLanguages){
    setCurrentLanguage(newLanguage);
  }

  function translate(value: string){
    if(languages[currentLanguage][value]){
      return languages[currentLanguage][value];
    }

    return value;
  }

  return (
  <TranslateContext.Provider value={{
    currentLanguage,
    changeLanguage: onChangeCurrentLanguage,
    translate
    }}>
    {children}
  </TranslateContext.Provider>
  )
}
