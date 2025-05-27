import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  ViewStyle,
  StyleProp,
  TextStyle,
} from "react-native";

type SubTitleZTKProps = {
  value: string;
  style?: StyleProp<TextStyle>;
};

export default function SubTitleZTK({ value, style }: SubTitleZTKProps) {
  return <Text style={[style,styles.texto]}> {value} </Text>;
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 15,
    color: "#CCCCCC",
    marginBottom: 20
  },
});
