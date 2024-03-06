import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const ProgressiveTech2 = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Progressive muscle relaxation Techniques
        </Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.answerText}>
          Head: clench left hand and feel the tension. relax and let hand
          loosely. same for right hand Wrist: bend hand back, helper-extending
          wrists. relax Upper Arm: bend elbow toward shoulders and tense biceps
          muscle. relax Shoulders: bring shoulders up toward ears. relax; let
          shoulders drop down. Forehead: wrinkle forehead, raise eyebrows. relax
          Eyes: close eyes tightly. relax Neck: turn head so that chin is over
          right shoulder. straighten and relax. Neck And Jaws: bend head
          forward, pressing chin against chest. straighten and relax.9. Abdomen:
          tighten stomach muscle. relax 10. Back, Thighs: arch back. relax.
          stretch legs in front of you. tighten thigh muscles. relax 11.
          Hamstrings: push heels down into floor tighten hamstring muscle. relax
          12. Calves, Feet: point toes toward head. relax. curl toes toward the
          bottom of feet. relax
        </Text>
      </View>
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
    textAlign: "center",
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

  answerText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#4A90E2",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 25,
    alignSelf: "stretch",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProgressiveTech2;
