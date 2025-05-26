import { Ionicons } from "@expo/vector-icons";
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

type LinkIconZTKProps = {
  value: string
  iconName: keyof typeof Ionicons.glyphMap;
  style?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
};

export default function LinkIconZTK({ value, iconName, onPress, style }: LinkIconZTKProps) {
  type NavigationProp = StackNavigationProp<AuthStackParamList, "Register">;
  const navigation = useNavigation<NavigationProp>();

  return (
    <TouchableOpacity style={styles.content} onPress={onPress}>
        <Ionicons name={iconName} size={18} style={styles.icon}/>
        <Text style={[styles.texto, style]}> {value} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 10,
    flexDirection: 'row',
    paddingVertical: 5,
  },
  icon:{
    color: "#aaa",
  },
  texto: {
    fontSize: 14,
    color: "#aaa",
  },
});
