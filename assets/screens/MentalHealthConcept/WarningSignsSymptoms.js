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

const WarningSignsSymptoms = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Warning Sings & Symptoms</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Sleep or Food Desire Changes</Text>
        <Text style={styles.listItem}>
          - Unusal sleep or personal care decrease.
        </Text>
        <Text style={styles.sectionTitle}>Emotional Changes</Text>
        <Text style={styles.listItem}>
          {"\n"} - Depressive mood, frustration, emotionality.
        </Text>
        <Text style={styles.sectionTitle}>{"\n"}Unusual Loneliness</Text>
        <Text style={styles.listItem}>- loss of social life.</Text>
        <Text style={styles.listItem}>
          - loss of interest in work, and daily activity
        </Text>
        <Text style={styles.sectionTitle}>{"\n"}Thinking Problems</Text>
        <Text style={styles.listItem}>
          - difficulty in attention, memory problems.
        </Text>
        <Text style={styles.listItem}>
          - Self-separation from families and communities
        </Text>
        <Text style={styles.listItem}>
          - False fixed beliefs or perception.
        </Text>
        <Text style={styles.listItem}>
          - Fear or suspicion or unusual behaviour.
        </Text>
      </View>
      {/*       <TouchableOpacity style={styles.button} onPress={onNextPress}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity> */}
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

    bottom: 0, // 아이콘 컨테이너를 화면 아래에 위치시킵니다.
  },
});

export default WarningSignsSymptoms;
