import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const MindfulnessTechniques56 = () => {
  const onNextPress = () => {
    // Logic to go to the next set of mindfulness techniques
    console.log("Next set of techniques");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Mindfulness Techniques</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.techniqueText}>
          7. Use repetitive events of the day.
        </Text>
        <Text style={styles.techniqueText}>
          8. Walk mindfully, can you see and appreciate something new.
        </Text>
        <Text style={styles.techniqueText}>
          9. As you return home, greet your family and friedns who live with
          you. Give yourself few minutes to become calm.
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onNextPress}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
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
  techniqueText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    marginBottom: 10, // Added to separate the techniques
  },
  button: {
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 25,
    alignSelf: "center",
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

export default MindfulnessTechniques56;
