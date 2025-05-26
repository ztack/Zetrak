import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "@navigation/AuthNavigator";
import { colors } from "@constants/colors";
import TextZTK from "@components/TextZTK";
import ButtonZTK from "@components/ButtonZTK";
import LinkZTK from "@components/LinkZTK";
import TitleZTK from "@components/TitleZTK";

type NavigationProp = StackNavigationProp<AuthStackParamList, "ForgotPassword">;

export default function ForgotPasswordScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [email, setEmail] = useState("");

  const handlePasswordReset = () => {
    if (!email) {
      Alert.alert("Error", "Por favor ingresa tu correo electrónico.");
      return;
    }

    Alert.alert(
      "Correo enviado",
      `Se ha enviado un enlace de recuperación a ${email}`
    );
    navigation.navigate("Login");
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
          <SafeAreaView style={styles.safeArea}>
            <TitleZTK value="Recuperar contraseña"></TitleZTK>
            <TextZTK
              value={email}
              onChangeText={setEmail}
              style= {{marginTop: 20}}
              placeholder="Correo electrónico"
            />
            <ButtonZTK title="Enviar enlace" style={styles.button} onPress={handlePasswordReset} />
            <LinkZTK
              value="Volver a iniciar sesión"
              onPress={() => navigation.navigate("Login")}
            />
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
    padding: 10,
  },
  safeArea: {
    width: "100%",
    backgroundColor: "rgba(24, 24, 24, 0.8)",
    borderRadius: 15,
    padding: 30,
    shadowColor: "#FFA726",
  },
  button: {
    marginTop: 10
  }
});
