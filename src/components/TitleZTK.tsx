import React from "react";
import {
  StyleSheet,
  Text,
  ViewStyle,
  StyleProp,
  TextStyle
} from "react-native";

type TitleZTKProps = {
  value: string;
  style?: StyleProp<TextStyle>;
};

export default function TitleZTK({ 
  value = "", 
  style 
}: TitleZTKProps) {
  return <Text style={[styles.texto, style]}> {value} </Text>;
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFA726",
    marginBottom: 5,
    width: "100%",
    height: 40
  },
});
