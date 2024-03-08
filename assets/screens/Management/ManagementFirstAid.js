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

const ManagementFirstAid = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Psychological first aid</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.questionText}>
          Psychological first aid If you have one or more of the following signs
          and symptoms, please report them to your family or caregiver.
        </Text>
        <Text style={styles.answerText}> {"\n"} Warning sign?</Text>
        <Text style={styles.answerText}>
          {"\n"} 1. Threatening to hurt or kill oneself.
        </Text>
        <Text style={styles.answerText}>
          {"\n"} 2. engaging in very risky behaviour to harm oneself.
        </Text>
        <Text style={styles.answerText}>
          {"\n"} 3. Active Hallucination or false fixed belief/Delusion.
        </Text>
        <Text style={styles.answerText}>
          {"\n"} 4. Talking or writing about death, dying, or suicide
        </Text>
        <Text style={styles.answerText}>{"\n"} 5. Feeling hopeless</Text>
        <Text style={styles.answerText}>
          {"\n"} 6. Feeling worthless or a lack of purpose
        </Text>
        <Text style={styles.answerText}>
          {"\n"} 7. Acting recklessly or engaging in risky activities
        </Text>
        <Text style={styles.answerText}>
          {"\n"} 7. Acting recklessly or engaging in risky activities
        </Text>
        <Text style={styles.answerText}>
          {"\n"} 8. Increasing alcohol or drug use
        </Text>
        <Text style={styles.answerText}>
          {"\n"} 9. Withdrawing from family, friends, or society
        </Text>
        <Text style={styles.answerText}>
          {"\n"} 10. Demonstrating rage and anger
        </Text>
        <Text style={styles.answerText}>{"\n"} 11. Appearing agitated</Text>
        <Text style={styles.answerText}>
          {"\n"} 12. Having rapid mood swings
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
    position: "absolute",
    bottom: 10,
  },
});

export default ManagementFirstAid;
