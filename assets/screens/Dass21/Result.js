import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; // 추가

const Result = () => {
  const navigation = useNavigation(); // 추가

  // Replace with actual data/logic
  const score = 6;
  const level = "Moderate";

  const navigateToFAQs = () => {
    navigation.navigate("FAQS");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Result</Text>
      </View>
      <View style={styles.resultBox}>
        <Text style={styles.scoreText}>Score: {score}</Text>
        <Text style={styles.levelText}>Level: {level}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={navigateToFAQs}>
        <Text style={styles.buttonText}>FAQs</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00BFFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  resultBox: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#333",
  },
  levelText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#333",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#4A90E2",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Result;
