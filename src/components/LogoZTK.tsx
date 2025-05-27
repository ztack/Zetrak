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
  Image,
  ImageStyle,
} from "react-native";

type LogoZTKProps = {
  style?: StyleProp<ImageStyle>;
};

export default function LogoZTK({ style }: LogoZTKProps) {

  return (
    <Image
      source={require("../../assets/images/logo.png")}
      style={[style, styles.logo]}
      resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    zIndex: 1,
    shadowColor: "#FFA726",
    marginBottom: 20,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
});
