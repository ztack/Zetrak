import { ImageBackground, StyleSheet, Text } from "react-native";



export default function SettingsScreen() {

    return (
    <ImageBackground
        style={styles.background}
        source={require("../../../assets/images/bg.png")}
    >

    </ImageBackground>
    );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
})