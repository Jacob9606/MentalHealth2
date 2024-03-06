import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MedicationReminderApp = () => {
  const navigation = useNavigation();

  const [taken, setTaken] = useState({
    morning: false,
    lunch: false,
    dinner: false,
  });

  const handlePress = (timeOfDay) => {
    const newTakenState = !taken[timeOfDay];
    setTaken({ ...taken, [timeOfDay]: newTakenState });
    Alert.alert(
      "Reminder",
      `You have marked '${timeOfDay}' as ${newTakenState ? "Yes" : "No"}`
    );
  };

  const navigateToMedicineReminder = () => {
    navigation.navigate("MedicineReminder");
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Medication Reminder</Text>
        <Text style={styles.question}>Have you taken a medicine?</Text>

        {Object.keys(taken).map((timeOfDay) => (
          <View key={timeOfDay} style={styles.row}>
            <Text style={styles.timeLabel}>
              {timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1)}
            </Text>
            <TouchableOpacity
              style={[
                styles.button,
                taken[timeOfDay] ? styles.buttonTaken : styles.buttonNotTaken,
              ]}
              onPress={() => handlePress(timeOfDay)}
            >
              <Text style={styles.buttonText}>
                {taken[timeOfDay] ? "Yes" : "No"}
              </Text>
            </TouchableOpacity>
          </View>
        ))}

        <TouchableOpacity
          style={styles.setupButton}
          onPress={navigateToMedicineReminder}
        >
          <Text style={styles.setupButtonText}>Set up time</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "#00BFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 40,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  timeLabel: {
    fontSize: 18,
    marginRight: 10,
  },
  button: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
  buttonTaken: {
    backgroundColor: "#64B5F6",
  },
  buttonNotTaken: {
    backgroundColor: "#90A4AE",
  },
  setupButton: {
    backgroundColor: "#64B5F6",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  setupButtonText: {
    fontSize: 18,
    color: "#FFFFFF",
    textAlign: "center",
  },
});

export default MedicationReminderApp;
