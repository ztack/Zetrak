import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  ViewStyle,
  StyleProp,
} from "react-native";

type TitleZTKProps = {
  value: string;
  style?: StyleProp<ViewStyle>;
};

export default function TitleZTK({ value, style }: TitleZTKProps) {
  return <Text style={styles.texto}> {value} </Text>;
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFA726",
    marginBottom: 5,
    letterSpacing: 1,
  },
});
