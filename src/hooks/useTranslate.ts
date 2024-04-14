import { useContext } from "react";
import { TranslateContext } from "../contexts/TranslateContext";

export default function useTranslate(){
  const transalateContext = useContext(TranslateContext);

  if(!transalateContext){
    throw new Error("Custom hook 'useTranslate' must be used inside a 'TranslateProvider'");
  }

  return transalateContext;
}
