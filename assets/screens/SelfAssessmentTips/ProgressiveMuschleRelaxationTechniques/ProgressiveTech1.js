import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProgressiveTech1 = () => {
  const navigation = useNavigation();

  /*   const onNextPress = () => {
    // Navigation logic to go to the next FAQ
    navigation.navigate("ProgressiveFAQ");
  }; */

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Progressive muscle relaxation Techniques
        </Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.answerText}>
          1. Head: clench left hand and feel the tension. relax and let hand
          loosely. same for right hand.
        </Text>
        <Text style={styles.answerText}>
          2. Wrist: bend hand back, helper-extending wrists and relax.
        </Text>
        <Text style={styles.answerText}>
          3.Upper Arm: bend elbow toward shoulders and tense biceps muscle and
          relax.
        </Text>
        <Text style={styles.answerText}>
          4. Shoulders: bring shoulders up toward ears and relax; let shoulders
          drop down.
        </Text>
        <Text style={styles.answerText}>
          5. Forehead: wrinkle forehead, raise eyebrows and relax.
        </Text>
        <Text style={styles.answerText}>
          6. Eyes: close eyes tightly and relax.
        </Text>
        <Text style={styles.answerText}>
          7. Neck: turn head so that chin is over right shoulder. straighten and
          relax.
        </Text>
        <Text style={styles.answerText}>
          8. Neck And Jaws: bend head forward, pressing chin against chest.
          straighten and relax.
        </Text>
        <Text style={styles.answerText}>
          9. Abdomen: tighten stomach muscle and relax.
        </Text>
        <Text style={styles.answerText}>
          10. Back, Thighs: arch back and relax. stretch legs in front of you.
          tighten thigh muscles and relax.
        </Text>
        <Text style={styles.answerText}>
          11. Hamstrings: push heels down into floor tighten hamstring muscle
          and relax.
        </Text>
        <Text style={styles.answerText}>
          12. Calves, Feet: point toes toward head and relax. curl toes toward
          the bottom of feet and relax.
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("FAQS")}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <AntDesign name="home" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("ProgressiveTech1")}
        >
          <AntDesign name="arrowright" size={24} color="black" />
        </TouchableOpacity>
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
  questionText: {
    color: "#333",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
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
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,

    bottom: 0,
  },
});

export default ProgressiveTech1;
