import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProgressiveConcept = () => {
  const navigation = useNavigation();

  const onNextPress = () => {
    // Navigation logic to go to the next FAQ
    navigation.navigate("ProgressiveTech1");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Progressive Muscle Relaxation</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.questionText}>
          Progressive muscle relation is a systematic technique for managing
          stress, phobia, hypertension, anxiety, depression and achieving a deep
          state of relaxation.
        </Text>
        <Text style={styles.answerText}>
          Before and during muscle relaxation techniques tensing for 4 second.
          Relax and feel relaxation for 10 seconds. For instance, count in
          Amharic 41,42,43……… counting in English 1001, 1002, 1003….
        </Text>
        <Text style={styles.questionText}>
          {"\n"}General Instructions For Progressive Muscle Relaxation:
        </Text>
        <Text style={styles.answerText}>
          Before and during muscle relaxation techniques tensing for 4 seconds.
          Relax and feel relaxation for 10 seconds. For instance, count in
          Amharic 41,42,43……… counting in English 1001, 1002, 1003….
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onNextPress}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("FAQS")}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <AntDesign name="home" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("ProgressiveTech1")}
        >
          <AntDesign name="arrowright" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#00BFFF", // Adjusted to match the screenshot
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    color: "#000", // Adjusted to match the screenshot (navy blue)
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  content: {
    backgroundColor: "#FFFFFF", // White background for the content
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  questionText: {
    color: "#000", // Text color adjusted to match the screenshot
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  answerText: {
    color: "#333333", // Dark grey color for the text
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#1E90FF", // Dodger blue background for the button
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 25,
    alignSelf: "stretch",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF", // White text for the button
    fontSize: 18,
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,

    bottom: -30,
    paddingBottom: 30,
  },
});

export default ProgressiveConcept;
