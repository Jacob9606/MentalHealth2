import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function DepressionHome() {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const menuItems = [
    { name: "Awareness", screen: "DepressionAwarness" },
    { name: "Cause of Depression", screen: "CauseOfDepression" },
    { name: "Depressive Disorder", screen: "DepressiveDisorder" },
    { name: "Suicide Behaviour", screen: "SuicideBehaviour" },
    { name: "Treatmnet", screen: "DepressionTreatmentConcept" },
    { name: "Role of Anti-Depressant", screen: "RoleOfAntiDepressants" },
    { name: "SummaryFAQ", screen: "SummaryFAQ1" },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../images/MentalHealthLogo.png")}
          style={styles.logo}
        />
        <Text style={styles.logoText}>Mental Health Solutions</Text>
      </View>
      <View style={styles.menu}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => navigateToScreen(item.screen)}
          >
            <Text style={styles.buttonText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
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
    fontWeight: "bold",
    fontSize: 24,
    color: "#fff",
  },
  menu: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#87CEFA",
    width: "80%",
    height: 60,
    marginBottom: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: 25,
  },
});
