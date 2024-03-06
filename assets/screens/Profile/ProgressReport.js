import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";

const ProgressReport = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

  const generateReport = () => {
    // Logic to generate report
    console.log(`Report for: ${selectedYear}-${selectedMonth}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Progress Report</Text>
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedYear}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedYear(itemValue)}
        >
          {/* Dynamically generate year options */}
          {/* Example: */}
          <Picker.Item label="2023" value={2023} />
          <Picker.Item label="2024" value={2024} />
          {/* Add more as needed */}
        </Picker>
        <Picker
          selectedValue={selectedMonth}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedMonth(itemValue)}
        >
          {/* Dynamically generate month options */}
          {/* Example: */}
          <Picker.Item label="January" value={1} />
          <Picker.Item label="February" value={2} />
          <Picker.Item label="March" value={3} />
          <Picker.Item label="April" value={4} />
          <Picker.Item label="May" value={5} />
          <Picker.Item label="June" value={6} />
          <Picker.Item label="July" value={7} />
          <Picker.Item label="August" value={8} />
          <Picker.Item label="September" value={9} />
          <Picker.Item label="October" value={10} />
          <Picker.Item label="November" value={11} />
          <Picker.Item label="December" value={12} />
          {/* Add more as needed */}
        </Picker>
      </View>
      <TouchableOpacity style={styles.button} onPress={generateReport}>
        <Text style={styles.buttonText}>Generate Report</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00BFFF",
    alignItems: "center",
    paddingTop: 50,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  pickerContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    width: "90%",
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
    justifyContent: "center",
  },
  picker: {
    height: 50,
    width: "100%",
  },
  button: {
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 25,
  },
  buttonText: {
    color: "#4A90E2",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProgressReport;
