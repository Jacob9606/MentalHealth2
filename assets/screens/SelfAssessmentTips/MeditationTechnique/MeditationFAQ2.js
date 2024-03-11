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

const MeditationFAQ2 = () => {
  const navigation = useNavigation();

  const onStepTwoPress = () => {
    // Insert logic for navigation or state transition to Step 2
    navigation.navigate("MeditationFAQ2");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Meditation Technique</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.stepDescription}>
          2. Psychological Benefits such as building self-confidence, resolving
          phobias & and fears, increased ability to solve complex problems, and
          decreased potential mental illness.
        </Text>
        <Text style={styles.stepDescription}>
          {"\n"}3. Spiritual Benefits such as providing peace of mind,
          happiness, a deeper understanding of yourself and others, bringing
          body, mind, and spirit in harmony, a deeper level of spiritual
          relaxation, increased acceptance of oneself, helping learn
          forgiveness, and creating a deeper relationship with your God.
        </Text>
      </View>

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
    position: "absolute", // 아이콘 컨테이너를 절대 위치로 설정합니다.
    bottom: 30, // 아이콘 컨테이너를 화면 아래에 위치시킵니다.
  },
});

export default MeditationFAQ2;
