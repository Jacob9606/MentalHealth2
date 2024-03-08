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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Symptoms</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.answerText}>
          • When we are stressed, we have headaches, nausea, or trouble
          sleeping, difficulty relaxing, irritable or anxious. Stress can worsen
          pre-existing health problems. {"\n"}
        </Text>
        <Text style={styles.questionText}>• 3.1 Managing stress</Text>
        <Text style={styles.answerText}>
          {"\n"}• Keep a daily routine: Planning our day, maintaining regular
          mealtimes, family time, exercise, chores, and other recreational
          activities.
        </Text>
        <Text style={styles.answerText}>
          {"\n"} • Get plenty of sleep: Both the body and the mind benefit from
          a good night's sleep. Establish a consistent sleep schedule by
          retiring and waking up at the same time each day. Minimize the use of
          electronic devices such as televisions, computers, and smartphones
          before bedtime. Avoid consuming large meals, caffeine, and alcohol
          close to bedtime.
        </Text>
        <Text style={styles.answerText}>
          {"\n"}• Keep a daily routine: Planning our day, maintaining regular
          mealtimes, family time, exercise, chores, and other recreational
          activities.
        </Text>
        <Text style={styles.answerText}>
          • Eat healthy​: What we eat, and drink can affect our health. Drink
          enough fluids.
        </Text>
        <Text style={styles.answerText}>
          {"\n"} • Exercise regularly: Regular daily exercise can help to reduce
          stress. This can include walking, as well as intensive physical
          exercise.
        </Text>
      </View>

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
    color: "#000080", // Adjusted to match the screenshot (navy blue)
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
