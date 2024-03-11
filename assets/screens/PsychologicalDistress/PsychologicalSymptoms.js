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

const PsychologicalSymptoms = () => {
  const navigation = useNavigation();
  const onNextPress = () => {
    // Navigation logic to go to the next FAQ
    navigation.navigate("PsychologicalTreatment");
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Symptoms</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.answerText}>
          Symptoms of psychological distress can vary, even among people who
          have experienced the same stressor. However, the following are some
          common symptoms of psychological distress:
        </Text>

        <Text style={styles.answerText}>
          {"\n"}• Problems with anger management
        </Text>
        <Text style={styles.answerText}>
          • Physical symptoms that can't be explained by a medical condition,
          such as headaches.
        </Text>
        <Text style={styles.answerText}>{"\n"}• Low energy levels</Text>
        <Text style={styles.answerText}>{"\n"}• Isolation</Text>
        <Text style={styles.answerText}>
          • Changes in eating or sleeping patterns.
        </Text>
        <Text style={styles.answerText}>
          • Excessive use of alcohol or other substances
        </Text>
        <Text style={styles.answerText}>
          • Thoughts of hurting oneself or others
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onNextPress}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("AnxietyHome")}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <AntDesign name="home" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("")}>
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
    color: "black", // Text color adjusted to match the screenshot
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
    position: "absolute",
    bottom: 0,
  },
});

export default PsychologicalSymptoms;
