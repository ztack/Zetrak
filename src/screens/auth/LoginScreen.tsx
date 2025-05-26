import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "@navigation/AuthNavigator";
import ButtonZTK from "@components/ButtonZTK";
import TitleZTK from "@components/TitleZTK";
import SubTitleZTK from "@components/SubTitleZTK";
import LinkZTK from "@components/LinkZTK";
import LogoZTK from "@components/LogoZTK";
import TextIconZTK from "@components/TextIconZTK";

export default function LoginScreen({ setIsAuthenticated }: { setIsAuthenticated: (auth: boolean) => void }) {


  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  type NavigationProp = StackNavigationProp<AuthStackParamList, "Login">;
  const navigation = useNavigation<NavigationProp>();
  const fondo = require("../../../assets/images/bg.png");


  const handleLogin = () => {
    console.log("Iniciando sesión...");
    setIsAuthenticated(true);
  };

  return (
    <ImageBackground
      style={styles.background}
      source={fondo}
    >
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
            <TitleZTK value="Bienvenido" />
            <SubTitleZTK value="Inicia sesión" />

            <TextIconZTK
              value={email}
              onChangeText={setEmail}
              placeholder="Correo electrónico"
              keyboardType="email-address"
            />
            <TextIconZTK
              value={pass}
              onChangeText={setPass}
              placeholder="Contraseña"
              iconName="lock-closed-outline"
              secureTextEntry
            />
            <ButtonZTK title="Iniciar Sesión" onPress={handleLogin} />
            <ButtonZTK
              title="Crear cuenta"
              variant="secondary"
              style={{ marginTop: 12 }}
              onPress={() => navigation.navigate("Register")}
            />

            <LinkZTK
              value="¿Olvidaste de Contraseña? "
              onPress={() => navigation.navigate("ForgotPassword")}
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
  },
  scrollContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  safeArea: {
    width: "100%",
    backgroundColor: "rgba(24, 24, 24, 0.8)",
    borderRadius: 15,
    padding: 30,
    borderWidth: 1,
    borderColor: "#3d3d3d",
  },
});
