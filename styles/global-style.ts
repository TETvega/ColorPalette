import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  // Estilos para el Background
  background: {
    backgroundColor: Colors.background,
    flex: 1,
    justifyContent:"center",
    alignItems: "center",
  },

  // Estilos para el contenedor de la paleta
  containerPalet: {
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    //alignItems: "center",
    maxWidth: 300,
    backgroundColor: Colors.background,
    padding: 10,
    borderRadius: 10,
    flexDirection: "column",
  },

  // Estilos para cada color dentro de la paleta
  colorBox: {
    justifyContent: "center",
    textAlign: "center",
    height: 50,
    borderRadius: 5,
    marginBottom: 10,
  },
  // Estilos del botón
  button: {
    backgroundColor: "#FF8C00", // Naranja
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
    
    colorText: {
      color: "#fff", 
      fontSize: 14,
      fontWeight: "bold",
      textAlign: "center",
    },
});
