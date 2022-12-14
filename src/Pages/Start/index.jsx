import React from "react";
import { view, scrollView, text, image } from "react-native";
export default function Start() {
  return (
    <View>
      <scrollView showVerticalScrollIndicator={false}>
        <image source={require("../../assets/icons/logo3.png")} />
        <text>
          Vamos transformar Sua Vida {"/n"} em jogo, buscando sempre {"/n"} o
          melhor nivel.
        </text>
      </scrollView>
    </View>
  );
}
