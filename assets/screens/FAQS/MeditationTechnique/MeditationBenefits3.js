import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MeditationBenefits3 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Meditation Benefits</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.subHeader}>Spiritual Benefits of Meditation</Text>
        <Text style={styles.listItem}>
          1. Helps keep things in perspective, & provides peace of mind,
          happiness.
        </Text>
        <Text style={styles.listItem}>
          2. Helps you discover your purpose & increases self-actualization.
        </Text>
        <Text style={styles.listItem}>
          3. Increased compassion, & growing wisdom.
        </Text>
        <Text style={styles.listItem}>
          4. Deeper understanding of yourself and others.
        </Text>
        <Text style={styles.listItem}>
          5. Brings body, mind, spirit in harmony.
        </Text>
        <Text style={styles.listItem}>
          6. Deeper Level of spiritual relaxation.
        </Text>
        <Text style={styles.listItem}>7. Increased acceptance of oneself.</Text>
        <Text style={styles.listItem}>8. Helps learn forgiveness.</Text>
        <Text style={styles.listItem}>9. Changes attitude toward life.</Text>
        <Text style={styles.listItem}>
          10. Creates a deeper relationship with your God.
        </Text>
        <Text style={styles.listItem}>11. Greater inner directedness.</Text>
        <Text style={styles.listItem}>
          12. Helps living in the present moment.
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("MeditationBenefits2")}
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
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 20, // 버튼과 아이콘 사이의 간격을 조정합니다.
  },
});

export default MeditationBenefits3;
