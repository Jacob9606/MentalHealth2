import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../images/MentalHealthLogo.png")}
          style={styles.logo}
        />
        <Text style={styles.logoText}>Mental Health Solutions</Text>
      </View>
      <View style={styles.menu}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("MentalHealthConcept")}
          >
            <Text style={styles.buttonText}>Mental Health Concept</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("Depression Pressed")}
          >
            <Text style={styles.buttonText}>Depression</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("Anxiety Pressed")}
          >
            <Text style={styles.buttonText}>Anxiety</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("Psychological Distress Pressed")}
          >
            <Text style={styles.buttonText}>Psychological Distress</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Q1")}
          >
            <Text style={styles.buttonText}>DASS-21</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Text style={styles.buttonText}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00BFFF",
  },
  header: {
    marginTop: 50,
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00BFFF", // Change this color to match your header
  },
  logoText: {
    marginTop: 15,
    fontWeight: "bold",
    fontSize: 24,
    color: "#fff",
  },
  menu: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#87CEFA",
    width: 150,
    height: 80,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,

    justifyContent: "center",
  },
  logo: {
    width: 200, // 원하는 너비로 설정하세요.
    height: 200, // 원하는 높이로 설정하세요.
    marginTop: 25,
  },
});
