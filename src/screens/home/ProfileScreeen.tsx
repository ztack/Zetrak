import SubTitleZTK from "@components/SubTitleZTK";
import TitleZTK from "@components/TitleZTK";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProfileScreen() {
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
          <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.profileText}>Profile</Text>
            </View>

            {/* Avatar and Info */}
            <View style={styles.profileContainer}>
              <LinearGradient
                colors={["#4FACFE", "#00F2FE"]}
                style={styles.avatarBorder}
              >
                <Image
                  source={{ uri: "https://placedog.net/500" }}
                  style={styles.avatar}
                />
              </LinearGradient>
              <Text style={styles.name}>PITBULL DOG</Text>
              <Text style={styles.location}>United Kingdom</Text>
            </View>

            {/* Stats */}
            <View style={styles.statsContainer}>
              <View style={styles.statBox}>
                <Text style={styles.statNumber}>5290</Text>
                <Text style={styles.statLabel}>Seguidores</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={styles.statNumber}>1260</Text>
                <Text style={styles.statLabel}>Sigues</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={styles.statNumber}>290</Text>
                <Text style={styles.statLabel}>Historias</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={styles.statNumber}>90</Text>
                <Text style={styles.statLabel}>Rutinas</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    
  },
  scrollContainer: {
    alignItems: "center",
    paddingTop: 40,
    height: "85%"
  },

  /* SEPARACION */
  container: {
    flex: 1,
    backgroundColor: "rgba(24, 24, 24, 0.8)",
    borderWidth: 1,
    borderColor: "#3d3d3d",
    borderRadius: 15,
    alignItems: "center",
    paddingTop: 40,
  },
  header: {
    marginBottom: 20,
  },
  profileText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#CCCCCC",
  },
  profileContainer: {
    alignItems: "center",
  },
  avatarBorder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 2,
    borderColor: "white",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  location: {
    color: "#CCCCCC",
    marginTop: 2,
    marginBottom: 10,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginVertical: 20,
    padding: 20,
  },
  statBox: {
    alignItems: "center",
    width: 80,
  },
  statNumber: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  statLabel: {
    color: "#fff",
  },
});
