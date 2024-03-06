import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const FAQs = () => {
  const navigation = useNavigation();

  const navigateToFAQDetail = (faqKey) => {
    // 'FAQDetail'은 FAQ 상세 화면의 라우트 이름이어야 합니다.
    // 'faqKey'는 각 FAQ 항목에 해당하는 고유 키입니다.
    navigation.navigate("FAQDetail", { faqKey });
  };

  const faqItems = [
    "Mindfulness Techniques",
    "Meditation Technique",
    "Meditation for sleep",
    "Compassion",
    "Gratitude",
    "Breathing exercise Technique",
    "Progressive muscle relaxation Techniques",
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>FAQs</Text>
      {faqItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => {
            if (item === "Mindfulness Techniques") {
              navigation.navigate("MindfulnessTechniques1");
            } else {
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
});

export default FAQs;
