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

const AnxietyPanicDisorder = () => {
  const navigation = useNavigation();
  /*   const onNextPress = () => {
    // Navigation logic to go to the next FAQ
    navigation.navigate("AnxietyPanicDisorder");
  }; */
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Panic Attack & Panic Disorder</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.questionText}>
          Symptoms of Panic Attack/Panic Disorder
        </Text>
        <Text style={styles.answerText}>1. heart palpitations</Text>
        <Text style={styles.answerText}>2. Sweating</Text>
        <Text style={styles.answerText}>3. Chills</Text>
        <Text style={styles.answerText}>4. Labored Breathing</Text>
        <Text style={styles.answerText}>
          5. Feeling of chocking and smothering
        </Text>
        <Text style={styles.answerText}>6. Chest pain</Text>
        <Text style={styles.answerText}>7. Nausea, upset stomach</Text>
        <Text style={styles.answerText}>8. Heat/cold sensatinon</Text>
        <Text style={styles.answerText}>9. Heat/cold sensation</Text>
        <Text style={styles.answerText}>10. Hand and leg numbness</Text>
        <Text style={styles.answerText}>11. Strange feeling</Text>
        <Text style={styles.answerText}>12. Feeling out of control</Text>
        <Text style={styles.answerText}>
          13. Feeling to die/dead To diagnose a panic attack at least 4 symptoms
          should be present. Panic attack or disorder is treatable, therefore,
          if you feel some of those symptoms consulting the doctors is ideal.
        </Text>
      </View>
      {/*       <TouchableOpacity style={styles.button} onPress={onNextPress}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity> */}
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

    bottom: 0,
  },
});

export default AnxietyPanicDisorder;
