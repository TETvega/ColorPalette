import React, { useCallback } from 'react';
import { View } from 'react-native';
import { globalStyles } from '@/styles/global-style';
import Clipboard from '@react-native-clipboard/clipboard'; // Importamos Clipboard para el portapapeles

import ColorBox from './ColorBox';

interface ColorPaletteProps {
  colors: string[]; // Lista de colores a mostrar
}

const ColorPalette = ({ colors }: ColorPaletteProps) => {

  const copyToClipboard = (color: string) => {
    Clipboard.setString(color); // Copiar color al portapapeles
  };

  return (
    <View style={globalStyles.containerPalet}>
      {colors.map((color, index) => (
        // se muestra el color y el codigo 
        <ColorBox 
          key={index} 
          color={color} 
          onPress={() => copyToClipboard(color)} 
        />
      ))}
    </View>
  );
};

export default ColorPalette;



