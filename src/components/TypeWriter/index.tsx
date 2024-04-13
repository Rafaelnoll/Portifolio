import { useEffect, useState } from "react";
import { TypingTextContainer } from "./styles";

interface Props {
  text: string;
  msDelay?: number;
  infinite?: boolean;
}

export default function TypeWriter({ text, msDelay = 150, infinite = false }:Props){
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if(currentIndex < text.length){
      const timeout = setTimeout(() => {
        setCurrentText(prevState => prevState + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, msDelay);

      return () => clearTimeout(timeout);
    } else if(infinite){
      setCurrentIndex(0);
      setCurrentText('')
    }
  },[currentIndex, text, msDelay, infinite]);

  return (
    <TypingTextContainer>
      <span>{currentText}</span>
    </TypingTextContainer>
  );
}
