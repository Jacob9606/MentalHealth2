import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign, MaterialIcons, FontAwesome5 } from "@expo/vector-icons"; // Expo를 사용한다고 가정합니다.

const Q18 = ({ navigation }) => {
  const [answer, setAnswer] = useState(null);

  const selectAnswer = (option) => {
    setAnswer(option);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Assessment</Text>
        <View style={styles.iconContainer}></View>
      </View>
      <View style={styles.content}>
        <Text style={styles.question}>
          18. I found myself getting agitated.
        </Text>
        <View style={styles.options}>
          <View style={styles.row}>
            {["No", "Sometimes"].map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.button,
                  answer === option && styles.selectedButton,
                ]}
                onPress={() => selectAnswer(option)}
              >
                <Text style={styles.buttonText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.row}>
            {["Mostly", "Always"].map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.button,
                  answer === option && styles.selectedButton,
                ]}
                onPress={() => selectAnswer(option)}
              >
                <Text style={styles.buttonText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
      <View style={styles.navigation}>
        <TouchableOpacity onPress={() => navigation.navigate("Q17")}>
          <AntDesign name="stepbackward" size={24} color="#00BFFF" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <MaterialIcons name="home" size={24} color="#00BFFF" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Q19")}>
          <AntDesign name="stepforward" size={24} color="#00BFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 20,
    backgroundColor: "#00BFFF",
    flexDirection: "row", // 아이콘들을 행으로 정렬합니다.
    justifyContent: "space-between", // 공간을 균등하게 분배합니다.
    alignItems: "center", // 아이템들을 수직으로 중앙에 배치합니다.
  },
  iconContainer: {
    flexDirection: "row",
    width: 100,
    justifyContent: "space-between",
  },
  headerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
  },
  options: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 300,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    width: "48%",
    backgroundColor: "#87CEFA",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: "2%",
  },
  selectedButton: {
    backgroundColor: "#00BFFF",
  },
  buttonText: {
    color: "#fff",
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
  },
});

export default Q18;
