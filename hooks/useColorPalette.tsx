import { PaletteType } from "@/Types/PaleteTypes";
import { useState } from "react";

// Libreria para manejar colores
// https://www.npmjs.com/package/chroma-js
// Documentacion
// https://gka.github.io/chroma.js/
const chroma = require("chroma-js");

// Los tipos de esquemas de color que podemos generar
// | "analogous" | "triadic" | "tetradic" | "contrast";

const useColorPalette = () => {
  // Estado que almacena la paleta de colores generada
  const [palette, setPalette] = useState<string[]>([]);

  // 
  const generateColorPalette = (
    type: PaletteType = "complementary",
    count: number = 6
    ) => {

    if(count < 1 ) count = 1 ;
    if(count > 10 ) count = 10;

    // Generamos un color base aleatorio
    const baseColor = chroma.random();
    // esquema Generado por Chroma 
    // de 0 a 255
    // clipped es si uno de los colores esta mal ya que se paso del rango
    // Color {
    //     _rgb: Array(4)
    //     0: 24     // Rojo (R)
    //     1: 221    // Verde (G)
    //     2: 160    // Azul (B)
    //     3: 1      // Alfa (A, opacidad)
    //     _clipped: false
    //   }
      
    let colors: string[] = [];

    switch (type) {
      case "complementary":
        // Genera colores complementarios basados en el color base
        // hsl.h pasa el color a se esquema Hue, Saturation, Lightness
        //https://colordesigner.io/convert/rgbtohsl
        // "hsl.h , +180" directamente entra en la propiedad de Hue y la rota 180 grados en el circulo cromatico
        // vease la imagen de la pagina 2
        // https://guiadigital.uam.es/SCUAM/documentacion/pdfs_a_descargar/color.pdf

        // .scale genera un conjunto de colores desde los limites [base , base +180~ ] . colors[cantidad de colores a generar]
        colors = chroma.scale([baseColor, baseColor.set("hsl.h", "+180")]).colors(count);
        break;
      default:
        colors = [baseColor.hex()];
        break;
    }

    // Actualiza la paleta de colores
    setPalette(colors);
  };

  return {
    // Propiedades
    palette,

    // Función para generar colores
    generateColorPalette,
  };
};

export default useColorPalette;




