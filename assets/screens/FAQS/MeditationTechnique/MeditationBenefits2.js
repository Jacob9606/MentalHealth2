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
const MeditationBenefits2 = () => {
  const navigation = useNavigation();

  const onNextPress = () => {
    // Logic to go to the next screen or component
    navigation.navigate("MeditationBenefits3");
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
          1. Builds self-confidence,resolves phobias & fears.
        </Text>
        <Text style={styles.listItem}>
          2. Helps control own thoughts, helps with focus & concentration.
        </Text>
        <Text style={styles.listItem}>
          3. Improved learning ability and memory.
        </Text>
        <Text style={styles.listItem}>4. Increased emotional stability.</Text>
        <Text style={styles.listItem}>
          5. Able to see the larger picture in a given situation.
        </Text>
        <Text style={styles.listItem}>
          6. Increased ability to solve complex problems.
        </Text>
        <Text style={styles.listItem}>
          7. Greater communication between the two brain hemispheres.
        </Text>
        <Text style={styles.listItem}>
          8. React more quickly and more effectively to a stressful event.
        </Text>
        <Text style={styles.listItem}>
          9. Increase in the capacity for intimate contact with loved ones.
        </Text>
        <Text style={styles.listItem}>
          10. Decrease in potential mental illness.
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onNextPress}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("MeditationBenefits3")}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <MaterialIcons name="home" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("MeditationBenefits1")}
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

export default MeditationBenefits2;
