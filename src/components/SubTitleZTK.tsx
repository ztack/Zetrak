import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  ViewStyle,
  StyleProp,
} from "react-native";

type SubTitleZTKProps = {
  value: string;
  style?: StyleProp<ViewStyle>;
};

export default function SubTitleZTK({ value, style }: SubTitleZTKProps) {
  return <Text style={styles.texto}> {value} </Text>;
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 15,
    color: "#CCCCCC",
    marginBottom: 20,
  },
});
