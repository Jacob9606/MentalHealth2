import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ManagementHome({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/images/MentalHealthLogo.png")}
          style={styles.logo}
        />
        <Text style={styles.logoText}>Management</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.longButton}
          onPress={() => navigation.navigate("ManagementFirstAid")}
        >
          <Text style={styles.buttonText}>Psychological first aid</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.longButton}
          onPress={() => navigation.navigate("ManagementSelfCare")}
        >
          <Text style={styles.buttonText}>Self-Care</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <AntDesign name="home" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("")}>
          <AntDesign name="arrowright" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00BFFF",
  },
  header: {
    marginTop: 50,
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00BFFF",
  },
  logoText: {
    marginTop: 15,
    marginBottom: 70,
    fontWeight: "bold",
    fontSize: 24,
    color: "#fff",
  },
  buttonContainer: {
    marginTop: 40, // 헤더와의 간격 추가
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  longButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#87CEFA",
    width: 300, // 긴 버튼으로 수정
    height: 70,
    marginTop: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: 50,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 20,
    width: "100%",
    bottom: -50,
  },
});
