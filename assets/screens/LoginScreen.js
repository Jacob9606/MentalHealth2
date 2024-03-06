import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image
        source={require("../images/MentalHealthLogo.png")}
        style={styles.logo}
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
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      <Text style={styles.forgotPassword} onPress={() => {}}>
        Forgot Password
      </Text>
      <Text
        style={styles.createAnAccount}
        onPress={() => {
          navigation.navigate("CreateAnAccount");
        }}
      >
        <Text style={styles.createAnAccountUnderline}>create an account</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#00BFFF",
  },
  logo: {
    width: 250,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  input: {
    height: 60,
    width: "100%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 30,
    borderColor: "white",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    width: "50%",
    borderRadius: 50, // 동그랗게 만들기 위한 반지름 설정
    marginTop: 20,
    borderColor: "white", // border color 설정
    borderWidth: 3, // border width 설정
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
  forgotPassword: {
    color: "white",
    fontSize: 15,
    marginTop: 15,
    textDecorationLine: "underline",
  },
  createAnAccountUnderline: {
    color: "white",
    fontSize: 18,
    marginTop: 15,
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
