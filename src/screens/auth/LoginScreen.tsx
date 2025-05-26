import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "@navigation/AuthNavigator";
import TextZTK from "@components/TextZTK";
import ButtonZTK from "@components/ButtonZTK";
import { StatusBar } from "expo-status-bar";
import TitleZTK from "@components/TitleZTK";
import SubTitleZTK from "@components/SubTitleZTK";
import LinkZTK from "@components/LinkZTK";

export default function LoginScreen() {
  type NavigationProp = StackNavigationProp<AuthStackParamList, "ForgotPassword">;
  const navigation = useNavigation<NavigationProp>();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    console.log("Iniciando sesión...");
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../../../assets/images/bg.png")}
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
          <Image
            source={require("../../../assets/images/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <SafeAreaView style={styles.safeArea}>
            <TitleZTK value= "Bienvenido"></TitleZTK>
            <SubTitleZTK value= "Inicia sesión en tu cuenta"></SubTitleZTK>
            <TextZTK
              value={email}
              onChangeText={setEmail}
              placeholder="Correo electrónico"
            />
            <TextZTK
              value={pass}
              onChangeText={setPass}
              placeholder="Contraseña"
              iconName="lock-closed-outline"
              secureTextEntry
            />
            <ButtonZTK
              title="Iniciar Sesión"
              style={styles.button}
              onPress={handleLogin}
            />
            <LinkZTK value= "¿Olvidaste tu contraseña?" onPress={() => navigation.navigate("ForgotPassword")}/>
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, width: "100%", height: "100%" },
  scrollContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    zIndex: 1,
    shadowColor: "#FFA726",
    marginBottom: 50,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  safeArea: {
    width: "100%",
    backgroundColor: "rgba(24, 24, 24, 0.8)",
    borderRadius: 15,
    padding: 30,
    shadowColor: "#FFA726",
  },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  button: { width: "100%", marginTop: 20 },
});
