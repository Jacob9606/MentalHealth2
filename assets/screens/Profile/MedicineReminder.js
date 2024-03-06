import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const MedicineReminder = () => {
  const [morning, setMorning] = useState("");
  const [afternoon, setAfternoon] = useState("");
  const [evening, setEvening] = useState("");

  const confirmReminders = () => {
    // 여기에 알람 설정 로직을 추가하세요
    alert("Reminders are set for Morning, Afternoon, and Evening");
  };

  return (
    <View style={styles.container}>
      <View style={styles.whiteBox}>
        <Text style={styles.title}>Medicine Reminder</Text>
        <Text style={styles.subtitle}>
          Set your time to get reminder for the medicine
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={setMorning}
          value={morning}
          placeholder="Morning"
        />
        <TextInput
          style={styles.input}
          onChangeText={setAfternoon}
          value={afternoon}
          placeholder="Afternoon"
        />
        <TextInput
          style={styles.input}
          onChangeText={setEvening}
          value={evening}
          placeholder="Evening"
        />

        <View style={styles.buttonContainer}>
          <Button title="Confirm" onPress={confirmReminders} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 100,
    backgroundColor: "#00BFFF",
  },
  whiteBox: {
    width: 350,
    height: 500,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginTop: 20,
    width: "100%",
  },
});

export default MedicineReminder;
