import React from "react";
import { View, StyleSheet } from "react-native";

import Lottie from "lottie-react-native";

export default function lifeStatus() {
  return (
    <View style={StyleSheet.container}>
      <Lottie
        source={require("../../../Assets/education/education-100.json")}
        autoPlay
        loop
        style={styles.educacaoAnimacao}
      />

      <Lottie
        source={require("../../../Assets/money/money-100.json")}
        autoPlay
        loop
        style={styles.financasAnimacao}
      />
      <Lottie
        source={require("../../../Assets/robot/robot-100-100.json")}
        autoPlay
        loop
        style={styles.roboAnimacao}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  roboAnimacao: {
    width: 190,
    marginTop: 30,
  },
  educacaoAnimacao: {
    width: 100,
    marginTop: 50,
    right: 70,
    position: "absolute",
  },
  financasAnimacao: {
    width: 100,
    marginTop: 50,
    left: 70,
    position: "absolute",
  },
});
