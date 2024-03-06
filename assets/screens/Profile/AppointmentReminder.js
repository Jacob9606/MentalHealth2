import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AppointmentReminder = () => {
  const navigation = useNavigation();

  const handleNavigateToAppointmentReminderSetup = () => {
    navigation.navigate("AppointmentReminderSetup");
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Appointment Reminder</Text>
        </View>
        <View style={styles.appointmentBox}>
          <Text style={styles.appointmentText}>Your next appointment</Text>
          <Text style={styles.appointmentDate}>09/10/2023 15:30pm</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleNavigateToAppointmentReminderSetup}
        >
          <Text style={styles.buttonText}>Change the date</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00BFFF",
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    paddingBottom: 50,
  },
  header: {
    position: "absolute",
    top: 20,
    left: 20,
    padding: 16,
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  appointmentBox: {
    width: "100%",
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
  appointmentText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  appointmentDate: {
    fontSize: 18,
    color: "#333",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
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

export default AppointmentReminder;
