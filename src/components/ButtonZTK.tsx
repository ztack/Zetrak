import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  ViewStyle,
  StyleProp,
} from "react-native";

type ButtonZTKProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
};

export default function ButtonZTK({ title, onPress, style }: ButtonZTKProps) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    minHeight: 40,
    backgroundColor: "#FFA726",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#FFA726",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 8,
  },
  buttonText: {
    color: "#181818",
    fontSize: 17,
    fontWeight: "bold",
  },
});
