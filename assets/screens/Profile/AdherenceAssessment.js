import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const AdherenceAssessment = () => {
  const [typeOfTreatment, setTypeOfTreatment] = useState("Panadol");
  const [doseOfTreatment, setDoseOfTreatment] = useState(
    "3 times a day after meal"
  );
  const [frequency, setFrequency] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Adherence assessment</Text>

      <Text style={styles.label}>Type of treatment:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setTypeOfTreatment}
        value={typeOfTreatment}
      />

      <Text style={styles.label}>Dose of treatment:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setDoseOfTreatment}
        value={doseOfTreatment}
      />

      <Text style={styles.label}>Frequency of treatment given per day:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setFrequency}
        value={frequency}
        placeholder="Enter frequency"
      />

      {/* Add navigation or submit button here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00BFFF",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  label: {
    fontSize: 25,

    fontWeight: "bold",
    marginTop: 20,
  },
  input: {
    height: 50,
    borderColor: "white",
    borderWidth: 3,
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
});

export default AdherenceAssessment;
