
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import ColorPalette from '@/components/ColorPalette';

// Simula la fuincion de copiar el estring
jest.mock('@react-native-clipboard/clipboard', () => ({
  setString: jest.fn(),
}));

describe('ColorPalette Component', () => {
  it('Verificar si Copia Correctamente el color pulsado al Portapapeles', () => {
    // Lista de Colores
    const colors = ['#FF5733', '#33FF57', '#3357FF'];
    // Renderizacion de colores
    const { getByText } = render(<ColorPalette colors={colors} />);

    const colorBox = getByText('#FF5733'); // Buscar el primer color
    // Dispara el evento de precionar el primer color 
    fireEvent.press(colorBox);
    // Validar que se copio Correctamente 
    expect(Clipboard.setString).toHaveBeenCalledWith('#FF5733');
  });
});
