import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import ColorPalette from '@/components/ColorPalette';
import GenerateButton from '@/components/GenerateButton';

// Mock funcion del copycliboard
jest.mock('@react-native-clipboard/clipboard', () => ({
  setString: jest.fn(),
}));

describe('ColorPalette Component', () => {
  const colors = ['#FF5733', '#33FF57', '#3357FF'];

  it('Reenderiza el componente ColorPalette con sus componentes', () => {
    const { getByText, getAllByTestId } = render(<ColorPalette colors={colors} />);

    // Verifica que se rendericen todos los ColorBox
    colors.forEach((color) => {
        // Verificar si los colores existen en la interzas
      expect(getByText(color)).toBeTruthy(); 
    });

    // Ver si se reenderizan la cantidad de colores 3
    const colorBoxes = getAllByTestId('ColorBox');
    expect(colorBoxes.length).toBe(colors.length);
  });

  it('Verificar la llamada a copy Cliboard', () => {
    const { getByText } = render(<ColorPalette colors={colors} />);

    const colorToPress = '#FF5733';
    const colorBox = getByText(colorToPress);
    // dispara el evento con el color mandado
    fireEvent.press(colorBox);

    // Verfificar si se llamo la funcion con el colorToPress
    expect(Clipboard.setString).toHaveBeenCalledWith(colorToPress);
  });

  it('Verifica que se reenderize el Boton de Generar', () => {
    const { getByText } = render(<GenerateButton onPress={() => {}} />);
    
    
    expect(getByText('Generar')).toBeTruthy();
  });
});
