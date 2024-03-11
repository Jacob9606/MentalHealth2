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

const AnxietyFAQS1 = () => {
  const navigation = useNavigation();

  const onNextPress = () => {
    // Navigation logic to go to the next FAQ
    navigation.navigate("AnxietyFAQS2");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>FAQs</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.questionText}>
          1. FAQ: What are the Facts about anxiety?
        </Text>
        <Text style={styles.answerText}>
          • Anxiety can be caused by many factors, such as genetics, hormones,
          stress/trauma, substance abuse, physical illness, and economic or
          psychological stress.
        </Text>
        <Text style={styles.answerText}>
          {"\n"}• Anxiety is a treatable illness.
        </Text>
        <Text style={styles.answerText}>
          {"\n"}• Anxiety is one of the most common mental health disorders.
        </Text>
        <Text style={styles.answerText}>
          {"\n"}• Anxiety is not a communicable disease.
        </Text>
        <Text style={styles.questionText}>
          2. FAQ: What are misconceptions about anxiety?
        </Text>
        <Text style={styles.answerText}>•People with anxiety are "crazy."</Text>
        <Text style={styles.answerText}>
          • Medications given to treat anxiety are addictive.
        </Text>
        <Text style={styles.answerText}>
          • Medication given for anxiety is lifelong.
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
    color: "#FFFFFF", // Adjusted to match the screenshot (navy blue)
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

    bottom: -10,
  },
});

export default AnxietyFAQS1;
