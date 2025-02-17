import useColorCount from '@/hooks/useColorCount';
import { renderHook, act } from '@testing-library/react-native';

describe('useColorCount Hook', () => {
  it('Verifica Valor inicial Por defecto [6]', () => {
    const { result } = renderHook(() => useColorCount());
    // espera que el conteo de colores sea 6
    expect(result.current.colorCount).toBe('6'); 
  });

  it('Verificar que cambie el contador con numeros validos', () => {
    const { result } = renderHook(() => useColorCount());
    act(() => {
      result.current.handleColorChange('3');
    });
    expect(result.current.colorCount).toBe('3');
  });

  it('Verificar que no cambie el contador de colores con numero invalidos', () => {
    const { result } = renderHook(() => useColorCount());

    act(() => {
        // cambiarlo a 10
      result.current.handleColorChange('10');
    });

    expect(result.current.colorCount).toBe('6');
  });

  it('Verificar Valores Vacios', () => {
    const { result } = renderHook(() => useColorCount());

    act(() => {
      result.current.handleColorChange(''); 
    });

    expect(result.current.colorCount).toBe(''); // Debe permitir el valor ""
  });

  it('Verificar Ignorar Valores de letras', () => {
    const { result } = renderHook(() => useColorCount());

    act(() => {
      result.current.handleColorChange('abc');
    });

    expect(result.current.colorCount).toBe('6'); // No debe cambiar el valor 
  });
});
