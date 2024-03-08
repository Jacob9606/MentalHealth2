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

const DepressionSelfCare = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Self-Care</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.answerText}>
          • Suffering from depression can be extremely difficult to cope with.
          But by doing the following activities you can recover from low mood:
        </Text>
        <Text style={styles.answerText}>
          {"\n"} 1. Talk about how you"`"re feeling. Talking to your doctor or
          someone you trust can help you feel better and less alone.
        </Text>
        <Text style={styles.answerText}>
          {"\n"} 2. Eat well. A healthy diet can lift your mood and maintain
          your mental health.
        </Text>
        <Text style={styles.answerText}>
          {"\n"} 3. Stay physically active. Exercise may feel like the last
          thing you want to do, but it can ease the symptoms of depression.
          Research suggests it may be as effective as antidepressants in helping
          you feel better.
        </Text>
        <Text style={styles.answerText}>
          {"\n"} 4. Spend time in nature. Being in nature can make us feel
          happier, feel our lives are more worthwhile, and reduce our levels of
          depression.
        </Text>
        <Text style={styles.answerText}>
          {"\n"} 5. Avoid cigarettes and alcohol
        </Text>
        <Text style={styles.answerText}>
          {"\n"} 6. Mindfulness exercises are ways of paying attention to the
          present moment using techniques like meditation, breathing, and yoga.
        </Text>
        <Text style={styles.answerText}>
          {"\n"} 7. Spirituality: belief in your God, prayer, and hymns.
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

export default DepressionSelfCare;
