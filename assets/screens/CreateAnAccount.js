import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

const CreateAnAccount = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    // 여기서 Home 페이지로 이동합니다.
    navigation.navigate("ProfileMain");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create An Account</Text>
      <Text style={styles.subtitle}>
        Enter your account details below or log in
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={setDateOfBirth}
        value={dateOfBirth}
        placeholder="Date of Birth"
      />
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign-up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#00BFFF",
    alignItems: "flex-start",
  },
  title: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontSize: 15,
    marginBottom: 40,
  },
  input: {
    height: 55,
    width: "100%",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 30,
  },
  button: {
    backgroundColor: "#00BFFF",
    borderColor: "white", // 테두리 색상
    borderWidth: 2, // 테두리 굵기
    width: 200,
    borderRadius: 30,
    padding: 15,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center", // 가운데 정렬
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CreateAnAccount;
