import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { globalStyles } from "@/styles/global-style";

interface GenerateButtonProps {
  onPress: () => void;
}

const GenerateButton: React.FC<GenerateButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={globalStyles.button} onPress={onPress}>
      <Text style={globalStyles.buttonText}>Generar</Text>
    </TouchableOpacity>
  );
};

export default GenerateButton;

