import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CompassionFAQ1 = () => {
  const navigation = useNavigation();

  /*   const onNextPress = () => {
    // Navigation logic to go to the next FAQ
    navigation.navigate("CompassionFAQ2");
  }; */

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Compassion FAQ</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.questionText}>
          Why is compassion part of therapy?
        </Text>
        <Text style={styles.answerText}>
          • As humans, we have an innate propensity for compassion. Compassion
          consistently shows up in cultural and religious teachings around the
          world. When people perform behaviour associated with compassion, such
          as warm smiles and friendly hand gestures, their bodies produce more
          oxytocin.
        </Text>
        <Text style={styles.questionText}>
          How Do We Foster Our Compassion?
        </Text>
        <Text style={styles.answerText}>• Self-Compassion</Text>
        <Text style={styles.answerText}>• Compassion For Others </Text>
        <Text style={styles.answerText}>• Empathy</Text>
        <Text style={styles.answerText}>• Selflessness</Text>
        <Text style={styles.answerText}>• Forgiveness</Text>
        <Text style={styles.answerText}>• Kindness</Text>
      </View>
      {/*       <TouchableOpacity style={styles.button} onPress={onNextPress}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity> */}
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("CompassionFAQ1")}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <MaterialIcons name="home" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CompassionFAQ2")}>
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
    textAlign: "center",
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
  questionText: {
    color: "#333",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  answerText: {
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

export default CompassionFAQ1;
