import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type TextIconZTKProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  iconName?: keyof typeof Ionicons.glyphMap;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  secureTextEntry?: boolean;
  style?: StyleProp<ViewStyle>;
};

export default function TextIconZTK({
  value,
  onChangeText,
  placeholder = 'Escribe aquí...',
  iconName = 'mail-outline',
  keyboardType = 'default',
  secureTextEntry = false,
  style
}: TextIconZTKProps) {
  return (
    <View style={[styles.inputContainer, style]} >
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#ccc"
        keyboardType={keyboardType}
        autoCapitalize="none"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
      <Ionicons
        name={iconName}
        size={24}
        color="#FFA726"
        style={styles.icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2c2c2c',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#3d3d3d',
    height: 50,
  },
  input: {
    flex: 1, // ¡Esto es la clave!
    color: '#fff',
    fontSize: 16,
  },
  icon: {
    marginLeft: 10,
  },
});
