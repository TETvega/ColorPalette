import React from "react";
import { render } from "@testing-library/react-native";
import ColorBox from "@/components/ColorBox";
import { Colors } from "@/constants/Colors";

describe("ColorBox Component", () => {
  it("Renderizacion con 1 Color Dado", () => {
    // Manda a reenderizar un color
    const { getByText } = render(
      <ColorBox color="#FF5733" onPress={() => {}} />
    );

    // Verifica si el color se reenderiza
    expect(getByText("#FF5733")).toBeTruthy();
  });


//   Error por que el color es otro
  it("Aplica correctamente el color de Fondo", () => {
    const { getByTestId } = render(
      <ColorBox color="#FF5733" onPress={() => {}} />
    );

    // Busca por el Id de test
    const colorBox = getByTestId("ColorBox"); 

    // espera -> en las propiedades el estilo igual al array contenido [ el background color   : negro]
    //  Este tiene que dar error
    expect(colorBox.props.style).toEqual(
      expect.arrayContaining([{ backgroundColor: Colors.background }])
    );
  });
});
