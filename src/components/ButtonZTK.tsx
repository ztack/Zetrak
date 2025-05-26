import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  ViewStyle,
  StyleProp,
} from "react-native";

type Variant = "primary" | "secondary" | "cancel" | "disabled";

type ButtonZTKProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  variant?: Variant;
  disabled?: boolean;
};

export default function ButtonZTK({
  title,
  onPress,
  style,
  variant = "primary",
  disabled = false,
}: ButtonZTKProps) {
  const getButtonStyle = () => {
    switch (variant) {
      case "secondary":
        return styles.secondary;
      case "cancel":
        return styles.cancel;
      case "disabled":
        return styles.disabled;
      default:
        return styles.primary;
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case "secondary":
        return styles.secondaryText;
      case "cancel":
        return styles.cancelText;
      case "disabled":
        return styles.disabledText;
      default:
        return styles.primaryText;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.baseButton, getButtonStyle(), style]}
      onPress={onPress}
      disabled={disabled || variant === "disabled"}
    >
      <Text style={[styles.baseText, getTextStyle()]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  baseButton: {
    minHeight: 40,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  baseText: {
    fontSize: 17,
    fontWeight: "bold",
  },

  // PRIMARY
  primary: {
    backgroundColor: "#FFA726",
    shadowColor: "#FFA726",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 8,
  },
  primaryText: {
    color: "#181818",
  },

  // SECONDARY
  secondary: {
    backgroundColor: "#3D3D3D",
    borderWidth: 1,
    borderColor: "#FFA726",
  },
  secondaryText: {
    color: "#FFA726",
  },

  // CANCEL
  cancel: {
    backgroundColor: "#2c2c2c",
    borderWidth: 1,
    borderColor: "#FF5252",
  },
  cancelText: {
    color: "#FF5252",
  },

  // DISABLED
  disabled: {
    backgroundColor: "#A9A9A9",
  },
  disabledText: {
    color: "#EEEEEE",
  },
});
