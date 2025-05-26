// src/screens/auth/RegisterScreen.tsx

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import TitleZTK from "@components/TitleZTK";
import ButtonZTK from "@components/ButtonZTK";
import LinkZTK from "@components/LinkZTK";
import TextIconZTK from "@components/TextIconZTK";
import LogoZTK from "@components/LogoZTK";
import LinkIconZTK from "@components/LinkIconZTK";

type AuthStackParamList = {
  Login: undefined;
};

type NavigationProp = StackNavigationProp<AuthStackParamList, "Login">;

export default function RegisterScreen() {
  type NavigationProp = StackNavigationProp<AuthStackParamList, "Login">;
  const navigation = useNavigation<NavigationProp>();
  var fondo = require("../../../assets/images/bg.png");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      return;
    }

    // Aquí iría la lógica para registrarse, por ejemplo usando Firebase o una API
    Alert.alert("Registro exitoso", "Tu cuenta ha sido creada");
    navigation.navigate("Login");
  };

  return (
    <ImageBackground style={styles.background} source={fondo}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <LogoZTK />
          <SafeAreaView style={styles.safeArea}>
            <TitleZTK value="Crear cuenta" style={styles.title} />
            <TextIconZTK
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              placeholder="Correo electrónico"
            />
            <TextIconZTK
              value={password}
              onChangeText={setPassword}
              placeholder="Contraseña"
              iconName="lock-closed-outline"
              secureTextEntry
            />
            <TextIconZTK
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirmar contraseña"
              iconName="shield-checkmark-outline"
              secureTextEntry
            />
            <ButtonZTK title="Registrarse" onPress={handleRegister} />
            <LinkIconZTK
              value="Volver al Inicio"
              iconName="chevron-back-outline"
              onPress={() => navigation.navigate("Login")}
            />
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
  scrollContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  safeArea: {
    width: "100%",
    backgroundColor: "rgba(24, 24, 24, 0.8)",
    borderRadius: 15,
    padding: 30,
    borderWidth: 1,
    borderColor: "#3d3d3d",
  },
  title: {
    textAlign: "center",
  },
});
