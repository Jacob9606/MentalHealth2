import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons"; // Expo를 사용한다고 가정합니다.
import { useNavigation } from "@react-navigation/native";

const MeditationBenefits1 = () => {
  const navigation = useNavigation();

  const onNextPress = () => {
    // Logic to go to the next screen or component
    navigation.navigate("MeditationBenefits2");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Meditation Benefits</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.subHeader}>
          Physiological Benefits of Meditation
        </Text>
        <Text style={styles.listItem}>
          1. It increases blood flow and slows the heart rate.
        </Text>
        <Text style={styles.listItem}>
          2. Leads to a deeper level of physical relaxation & decreases muscle
          tension.
        </Text>
        <Text style={styles.listItem}>
          3. Reduces anxiety attacks by lowering the levels of blood lactate.
        </Text>
        <Text style={styles.listItem}>4. Enhances the immune system.</Text>
        <Text style={styles.listItem}>
          5. Drop in cholesterol levels, lowers risk of cardiovascular disease.
        </Text>
        <Text style={styles.listItem}>
          6. Improved flow of air to the lungs resulting in easier breathing.
        </Text>
        <Text style={styles.listItem}>7. Decreases the aging process.</Text>
        <Text style={styles.listItem}>8. Cure headaches & migraines.</Text>
        <Text style={styles.listItem}>
          9. Greater Brain Functioning & relaxes nervous system.
        </Text>
        <Text style={styles.listItem}>
          10. Increases serotonin level, influences mood and behavior.
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onNextPress}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("MeditationBenefits1")}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <MaterialIcons name="home" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("MeditationBenefits2")}
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
  subHeader: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  listItem: {
    color: "#333",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    marginBottom: 5,
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
    marginBottom: 20,
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
    marginTop: 20, // 버튼과 아이콘 사이의 간격을 조정합니다.
  },
});

export default MeditationBenefits1;
