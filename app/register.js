import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from "react-native";

import { useRouter } from "expo-router";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Register() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^[0-9]{10,}$/;
    return regex.test(phone);
  };

  const handleRegister = () => {
    if (name === "" || email === "" || phone === "" || pass === "" || confirmPass === "") {
      alert("Semua field wajib diisi!");
      return;
    }

    if (!validateEmail(email)) {
      alert("Email tidak valid!");
      return;
    }

    if (!validatePhone(phone)) {
      alert("Nomor HP harus angka dan minimal 10 digit!");
      return;
    }

    if (pass !== confirmPass) {
      alert("Password dan Confirm Password harus sama!");
      return;
    }

    alert("Registrasi berhasil!");

    router.push({
      pathname: "/home",
      params: { name: name }
    });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.subtitle}>Buat akun baru ✨</Text>

        <TextInput
          placeholder="Nama"
          placeholderTextColor="#666"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        <TextInput
          placeholder="Email"
          placeholderTextColor="#666"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Phone"
          placeholderTextColor="#666"
          keyboardType="numeric"
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
        />

        {/* Password dengan Icon Mata */}
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#666"
            secureTextEntry={!showPass}
            style={styles.passwordInput}
            value={pass}
            onChangeText={setPass}
          />

          <TouchableOpacity onPress={() => setShowPass(!showPass)}>
            <Ionicons
              name={showPass ? "eye" : "eye-off"}
              size={22}
              color="#5E2B97"
            />
          </TouchableOpacity>
        </View>

        {/* Confirm Password dengan Icon Mata */}
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="#666"
            secureTextEntry={!showConfirmPass}
            style={styles.passwordInput}
            value={confirmPass}
            onChangeText={setConfirmPass}
          />

          <TouchableOpacity onPress={() => setShowConfirmPass(!showConfirmPass)}>
            <Ionicons
              name={showConfirmPass ? "eye" : "eye-off"}
              size={22}
              color="#5E2B97"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text style={styles.link}>Sudah punya akun? Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#EAD9FF",
    justifyContent: "center",
    padding: 25,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#5E2B97",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 25,
  },
  input: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#C4A3FF",
  },

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#C4A3FF",
    paddingHorizontal: 14,
    marginBottom: 15,
  },

  passwordInput: {
    flex: 1,
    paddingVertical: 14,
  },

  button: {
    backgroundColor: "#7C3AED",
    padding: 14,
    borderRadius: 12,
    marginTop: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  link: {
    marginTop: 18,
    textAlign: "center",
    color: "#5E2B97",
    fontWeight: "bold",
  },
});