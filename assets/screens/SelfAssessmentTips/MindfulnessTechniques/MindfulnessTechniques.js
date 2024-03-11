import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const MindfulnessTechniques = () => {
  const navigation = useNavigation();

  const onNextPress = () => {
    // Navigate to MindfulnessFAQ
    navigation.navigate("MindfulnessFAQ");
  };

  return (
    <ScrollView contentContainerStyle={styles.container} scrollEnabled={true}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Mindfulness Techniques</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.techniqueText}>
          1. As you awaken in the morning, pay attention to your breathing
          instead of letting your mind spin off into yesterday or today, take
          mindful breath. Focus on your breathing and sense the effects of
          breathing throughout your body.
        </Text>
        <Text style={styles.techniqueText}>
          2. Instead of hurrying to your usual routine, slow down and enjoy
          something special about the morning by appreciating nature.
        </Text>
        <Text style={styles.techniqueText}>
          3. On the way to work pay attention to how you walk, drive, ride, take
          some deep breath, relaxing throughout your body.
        </Text>
        <Text style={styles.techniqueText}>
          4. When you stop walking, pay attention to your breath, relax, and
          enjoy the landscape around you.
        </Text>
        <Text style={styles.techniqueText}>
          5. When you arrive at your destination take a few moments to orient
          yourself, breathe calmly, relax your body and start.
        </Text>
        <Text style={styles.techniqueText}>
          6. when sitting become aware of you sign of physical tension and take
          breath to stretch
        </Text>
        <Text style={styles.techniqueText}>
          7. Use repetitive events of the day.
        </Text>
        <Text style={styles.techniqueText}>
          8. walk mindfully, can you see and appreciate something new.
        </Text>
        <Text style={styles.techniqueText}>
          9. As you return home, greet your family and friends who live with
          you.
        </Text>
        <Text style={styles.techniqueText}>
          10. As you go to sleep, take mindful breathing.
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
    paddingBottom: 100, // 화면 아래 여백 설정
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

export default MindfulnessTechniques;
