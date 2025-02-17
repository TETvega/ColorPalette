
import { useState } from 'react';

const useColorCount = (initialValue = '6') => {
  const [colorCount, setColorCount] = useState(initialValue);

  // Funcion generada con ayuda de chatgpt para las expresiones 
  const handleColorChange = (text: string) => {
    if (/^\d*$/.test(text)) {

      const num = parseInt(text, 10);
      // pasamos el texto a numero
      // Si no es nulo y es mayor o igual a 1 y tambien es menos o igual a 7 pasa
      if (!isNaN(num) && num >= 1 && num <= 7) {
        setColorCount(text);
      } else if (text === '') {
        setColorCount('');
      }
    }
  };

  return { colorCount, handleColorChange };
};

export default useColorCount;
