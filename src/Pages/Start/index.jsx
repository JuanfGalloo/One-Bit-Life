import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import DefaultButton from "../../Components/Common/DefaultButton";
import LifeStatus from "../../Components/Common/LifeStatus";
import { useNavigation } from "@react-navigation/native";
export default function Start() {
  const navigation = useNavigation();

  const handleNavAppExplanation = () => {
    navigation.navigate("AppExplanation");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} showVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../Assets/icons/logo3.png")}
            style={styles.logo}
          />

          <LifeStatus />

          <Text style={styles.description}>
            Vamos transformar Sua Vida {"\n"} em jogo, buscando sempre {"\n"} o
            melhor nivel.
          </Text>

          <DefaultButton
            buttonText={"Continuar"}
            handlePress={handleNavAppExplanation}
            width={250}
            height={50}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21,21,21,0.98)",
  },

  logo: {
    width: 300,
    height: 60,
    marginTop: 60,
    marginBottom: 20,
  },
  description: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 60,
  },
});
