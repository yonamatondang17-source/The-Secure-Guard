import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  const { name } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>

      <Text style={styles.welcome}>
        Welcome, <Text style={{ fontWeight: "bold" }}>{name || "User"}</Text> 💜
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/login")}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAD9FF",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#5E2B97",
    marginBottom: 20,
  },
  welcome: {
    fontSize: 18,
    color: "#333",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#7C3AED",
    padding: 14,
    borderRadius: 12,
    width: "70%",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});