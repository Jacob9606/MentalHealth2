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

export default function HomeScreen() {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const menuItems = [
    { name: "Mental Health Concept", screen: "MentalHealthConceptsHome" },
    { name: "Depression", screen: "DepressionHome" },
    { name: "Anxiety", screen: "AnxietyHome" },
    { name: "Psychological Distress", screen: "PsychologicalHome" },
    { name: "Self-Assessment & Tips", screen: "SelfAssessmentTipsHome" },
    { name: "Profile", screen: "LoginScreen" },
    {
      name: "Psychological First Aid & Substance Use Disorder",
      screen: "PsychologicalHome",
    },
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
    marginTop: 20,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00BFFF",
  },
  logoText: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 20,
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
    height: 50, // 조정된 높이
    marginBottom: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14, // 조정된 폰트 크기
    textAlign: "center",
  },
  logo: {
    width: 150, // 조정된 이미지 크기
    height: 150, // 조정된 이미지 크기
    marginTop: 10,
  },
});
