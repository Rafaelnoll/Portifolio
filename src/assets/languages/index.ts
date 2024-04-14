import en from "./en";
import ptBR from "./pt-BR";

interface LanguagesObject {
  [key: string]: {
    [key: string]: string;
  }
}

export default {
  'pt-br': ptBR,
  'en': en,
} as LanguagesObject
