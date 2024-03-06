import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const AppointmentReminderSetup = () => {
  const navigation = useNavigation();

  const handleConfirmButtonPress = () => {
    navigation.navigate("AppointmentReminder");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Appointment Reminder Set up</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Your next appointment</Text>
        <TextInput style={styles.input} placeholder="Date" />
        <TextInput style={styles.input} placeholder="Time" />
      </View>
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={handleConfirmButtonPress}
      >
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00BFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 40,
  },
  inputContainer: {
    width: "80%", // Adjust the width as needed
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    alignItems: "stretch",
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
  },
  confirmButton: {
    backgroundColor: "#4A90E2",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  confirmButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AppointmentReminderSetup;
