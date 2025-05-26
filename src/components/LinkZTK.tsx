import { AuthStackParamList } from "@navigation/AuthNavigator";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  ViewStyle,
  StyleProp,
} from "react-native";

type LinkZTKProps = {
  value: string;
  style?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
};

export default function LinkZTK({ value, onPress, style }: LinkZTKProps) {
  type NavigationProp = StackNavigationProp<AuthStackParamList, "Register">;
  const navigation = useNavigation<NavigationProp>();

  return (
    <TouchableOpacity style={styles.content} onPress={onPress}>
      <Text style={[styles.texto, style]}> {value} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  content: {
    alignContent: "center",
    justifyContent: "center",
    height: 30,
    marginTop: 20
  },
  texto: {
    margin: "auto",
    fontSize: 14,
    color: "#aaa",
    textAlign: "right",
    textDecorationLine: "underline",
  },
});
