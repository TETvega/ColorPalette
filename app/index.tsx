import { View, Text, Pressable, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import useColorPalette from '@/hooks/useColorPalette';
import { globalStyles } from '@/styles/global-style';
import ColorPalette from '@/components/ColorPalette';
import { PaletteType } from '@/Types/PaleteTypes';
import useColorCount from '@/hooks/useColorCount';


const index = () => {

  const { palette, generateColorPalette } = useColorPalette();
  const [currentType, setCurrentType] = useState<PaletteType>('complementary');
  
  // Se usa el hook 
  const { colorCount, handleColorChange } = useColorCount();

  const handleGenerate = () => {
    generateColorPalette(currentType, Number(colorCount) || 1);
  };

  return (
    <View style={globalStyles.background}>
      <Text style={globalStyles.title}>Color Palets 🎨</Text>
      <ColorPalette colors={palette} />
      
      {/* Campo para ingresar la cantidad de colores */}
      <Text style={globalStyles.label}>Cantidad de colores:</Text>
      <TextInput
        style={globalStyles.input}
        keyboardType="numeric"
        value={colorCount}
        onChangeText={handleColorChange} // Se usa el metodo del hook
      />
      
      {/* Selector de tipo de paleta */}
      <Text style={globalStyles.label}>Tipo de Paleta:</Text>
      <Picker
        selectedValue={currentType}
        onValueChange={(itemValue) => setCurrentType(itemValue)}
        style={globalStyles.picker}
      >
        <Picker.Item label="Complementary" value="complementary" />
        <Picker.Item label="Analogous" value="analogous" />
        <Picker.Item label="Triadic" value="triadic" />
        <Picker.Item label="Tetradic" value="tetradic" />
      </Picker>
      
      {/* Boton para generar una nueva paleta */}
      <Pressable style={globalStyles.button} onPress={handleGenerate}>
        <Text style={globalStyles.buttonText}>Genera una Nueva Paleta</Text>
      </Pressable>
    </View>
  );
};
export default index