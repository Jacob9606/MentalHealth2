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

const SummaryFAQ1 = () => {
  const navigation = useNavigation();

  const onNextPress = () => {
    // Navigation logic to go to the next FAQ
    navigation.navigate("SummaryFAQ2");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Summary FAQ</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>
          FAQ: What Are The Facts About Mental Illness?
        </Text>
        <Text style={styles.listItem}>
          - Mental illness is common to all (universal).
        </Text>
        <Text style={styles.listItem}>
          - Caused by a complex interplay of biopsychosocial factors.
        </Text>
        <Text style={styles.listItem}>
          - With the right kind of help, most recover and lead healthy,
          productive, and satisfying lives.
        </Text>
        <Text style={styles.sectionTitle}>
          {"\n"}FAQ: FAQ: What Are Myths or Misconceptions About Mental
          Illnesses?
        </Text>
        <Text style={styles.listItem}>
          - Mental illness only affects a few people.
        </Text>
        <Text style={styles.listItem}>
          - People with a mental illness never get better.
        </Text>
        <Text style={styles.sectionTitle}>
          {"\n"}
          FAQ: What Are The Misconceptions of Mental Illness in Ethiopia?
        </Text>
        <Text style={styles.listItem}>
          - Spirit possession (likift, zar, wuqabi), Punishment for sins, Evil
          eye.
        </Text>
        <Text style={styles.listItem}>
          - Bewitched/cursed, Thinking too much.
        </Text>
        <Text style={styles.listItem}>
          - Exposure to cold air berd, Exposure to sun rays (Mitch)
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onNextPress}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("FAQS")}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <MaterialIcons name="home" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("MeditationTechniqueBasics")}
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
  sectionTitle: {
    color: "#333",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  listItem: {
    color: "#333",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#fff",
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
    color: "#4A90E2",
    fontSize: 18,
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,

    bottom: -10, // 아이콘 컨테이너를 화면 아래에 위치시킵니다.
  },
});

export default SummaryFAQ1;
