import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const MentalHealthConcept = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Mental Health Concept</Text>
      <View style={styles.section}>
        <Text style={styles.subHeader}>Mental Health</Text>
        <Text style={styles.text}>
          • Mental health is the condition of being well-balanced in your
          emotions, thoughts, and social interactions. It means you can cope
          with stress, have positive self-esteem, and enjoy healthy
          relationships with others.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>Mental Illness:</Text>
        <Text style={styles.text}>
          • A state of psychological, social, spiritual and/physical illness
          which interferes with an individual's thinking, perception of the
          environment, social relationships, and the ability to adapt to
          changing environment.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: "#00BFFF", // 배경색은 디자인에 맞게 조정
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
    color: "#000", // 텍스트 색상은 디자인에 맞게 조정
  },
  section: {
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    lineHeight: 24, // 줄 간격은 디자인에 맞게 조정
    color: "#333", // 텍스트 색상은 디자인에 맞게 조정
  },
});

export default MentalHealthConcept;
