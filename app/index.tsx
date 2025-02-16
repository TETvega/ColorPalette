import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import useColorPalette from '@/hooks/useColorPalette';
import { globalStyles } from '@/styles/global-style';
import ColorPalette from '@/components/ColorPalette';
import { PaletteType } from '@/Types/PaleteTypes';

const index = () => {

  const { palette, generateColorPalette } = useColorPalette();
  const [currentType, setCurrentType] = useState<PaletteType>("complementary");
  const [colorCount, setColorCount] = useState(6); //cantidad de colores


  useEffect(() => {
    generateColorPalette(currentType, colorCount);
  }, [currentType, colorCount]);

  const handleGenerate = () => {
    generateColorPalette(currentType, colorCount);
  };

  return (
    <View style={globalStyles.background}>
      {/* Titulo de la APP */}
      <Text style={globalStyles.title}>Color Palets 🎨</Text>
      {/* Generacion de la paleta de colores */}
      <ColorPalette colors={palette} />


      {/* Boton de generacion */}
      <Pressable style={globalStyles.button} onPress={handleGenerate}>

        <Text style={globalStyles.buttonText}>Genera una Nueva Paleta</Text>
      </Pressable>
      {/* Fin de Boton de Generacion */}
    </View>
  );
};

export default index