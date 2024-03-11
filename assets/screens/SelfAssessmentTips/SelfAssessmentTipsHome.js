import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SelfAssessmentTipsHome = () => {
  const navigation = useNavigation();

  const navigateToFAQDetail = (faqKey) => {
    // 'FAQDetail'은 FAQ 상세 화면의 라우트 이름이어야 합니다.
    // 'faqKey'는 각 FAQ 항목에 해당하는 고유 키입니다.
    navigation.navigate("FAQDetail", { faqKey });
  };

  // faqItems 배열 정의
  const faqItems = [
    "Dass-21",
    "Meditation",
    "Breathing Exercise",
    "Progressive Muscle Relaxation",
    "Compassion",
    "Gratitude",
    "Mindfulness",
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Self Assessment & Tips</Text>
      {faqItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => {
            switch (item) {
              case "Dass-21":
                navigation.navigate("Q1");
                break;
              case "Meditation":
                navigation.navigate("MeditationTechniqueConcept");
                break;
              case "Breathing Exercise":
                navigation.navigate("BreathingFAQ1");
                break;
              case "Progressive Muscle Relaxation":
                navigation.navigate("ProgressiveConcept");
                break;
              case "Compassion":
                navigation.navigate("CompassionFAQ1");
                break;
              case "Gratitude":
                navigation.navigate("GratitudeFAQ1");
                break;
              case "Mindfulness":
                navigation.navigate("MindfulnessConcept");
                break;
              default:
                navigateToFAQDetail(item);
            }
          }}
        >
          <Text style={styles.buttonText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00BFFF",
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    padding: 20,
    textAlign: "center",
  },
  button: {
    marginHorizontal: 20,
    marginBottom: 5,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
    marginTop: 20, // 버튼과 아이콘 사이의 간격을 조정합니다.
  },
});

export default SelfAssessmentTipsHome;
