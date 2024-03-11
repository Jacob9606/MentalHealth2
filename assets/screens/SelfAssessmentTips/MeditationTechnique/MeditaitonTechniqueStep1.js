import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons"; // Expo를 사용한다고 가정합니다.
import { useNavigation } from "@react-navigation/native";

const MeditationTechniqueStep1 = () => {
  const navigation = useNavigation();

  const onStepTwoPress = () => {
    // Insert logic for navigation or state transition to Step 2
    navigation.navigate("MeditationFAQ1");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Meditation Technique</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.stepTitle}>Step 1:</Text>
        <Text style={styles.stepDescription}>
          Find a quiet place. Locate a spot anywhere and you will be free from
          interruption.
        </Text>
        <Text style={styles.stepTitle}>Step 2:</Text>
        <Text style={styles.stepDescription}>
          Find a good time. Anytime is a good time for meditation.
        </Text>
        <Text style={styles.stepTitle}>Step 3:</Text>
        <Text style={styles.stepDescription}>
          Focus on your breathing techniques.
        </Text>
        <Text style={styles.stepTitle}>Step 4:</Text>
        <Text style={styles.stepDescription}>
          Connect with your body. Scan your body, just noticing the sensations
          in each part.
        </Text>
        <Text style={styles.stepTitle}>Step 5:</Text>
        <Text style={styles.stepDescription}>
          Notice thinking. When your mind wanders, and it will, that"`"s okay.
          When you notice you are thinking instead of focusing on your breath,
          simply bring your mind gently back to the breath.
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onStepTwoPress}>
        <Text style={styles.buttonText}>FAQs</Text>
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("MeditationTechniqueBasics")}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <MaterialIcons name="home" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("MeditationTechniqueStep2")}
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
  content: {
    backgroundColor: "#fff",
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
  stepTitle: {
    color: "#333",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  stepDescription: {
    color: "#333",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#4A90E2",
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
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: 20,
    bottom: -20, // 아이콘 컨테이너를 화면 아래에 위치시킵니다.
  },
});

export default MeditationTechniqueStep1;
