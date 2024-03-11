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

const DepressiveDisorder = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Depressive Disorder</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.answerText}>
          • All the symptoms are not universal to all. However, most people with
          depressive disorder have at least 5 of the following Signs and
          symptoms that happen to individual most of the day:
        </Text>
        <Text style={styles.answerText}>1. Depressed mood feeling.</Text>
        <Text style={styles.answerText}>2. Anhedonia.</Text>
        <Text style={styles.answerText}>
          3. Insomnia or Hypersomnia: sleep loss Or Sleep Increase
        </Text>
        <Text style={styles.answerText}>4. Fatigue</Text>
        <Text style={styles.answerText}>
          5. Decreased concentration and Unable to make decisions.
        </Text>
        <Text style={styles.answerText}>6. Decrease or increase appetite.</Text>
        <Text style={styles.answerText}>7. Excessive guilt.</Text>
        <Text style={styles.answerText}>
          8. Psychomotor agitation and retardation
        </Text>
        <Text style={styles.answerText}>
          9. Recurrent thoughts of death, suicidal ideation, or suicide attempt.
        </Text>

        <Text style={styles.answerText}>
          {"\n"}1 out of 5 symptoms should be a depressive mood or loss of
          interest. Furthermore, physical, or psychological problems such as
          head headaches, other sorts of pain or cramping (stabbing) may be
          present.
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

    bottom: 0,
  },
});

export default DepressiveDisorder;
