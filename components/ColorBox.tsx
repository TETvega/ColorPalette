import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { globalStyles } from '@/styles/global-style';

interface ColorBoxProps {
  color: string; 
  onPress: () => void; 
}

const ColorBox = ({ color, onPress }: ColorBoxProps) => (
  <Pressable  onPress={onPress}>
    <View testID='ColorBox' style={[globalStyles.colorBox, { backgroundColor: color }]}>
      {/* Mostrar cod de color */}
      <Text style={globalStyles.colorText}>
        {color}
      </Text>
    </View>
  </Pressable>
);

export default ColorBox;
