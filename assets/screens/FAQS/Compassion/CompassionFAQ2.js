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

const CompassionFAQ2 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Compassion FAQ</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.questionText}>
          • How do we Foster our compassion?
        </Text>
        <Text style={styles.answerText}>
          <Text>
            • Self-compassion: Expressing kindness towards ourselves will open
            the gates to a more accepting and selfless way of being. It is the
            first step in developing compassion, as we must learn to show
            compassion towards ourselves before we can genuinely show compassion
            to others.
          </Text>
          {"\n\n"}
          <Text>
            • Compassion for others: Once we have developed self-compassion, we
            can move on to practicing compassion for others. We can start by
            sending positive thoughts towards friends or family.
          </Text>
          {"\n\n"}
          <Text>
            • By extending our compassion to all living things, we can feel a
            deeper connection with the environment, nature, and the ecosystems
            in which we live, and of which we are a part.
          </Text>
          {"\n\n"}
          <Text>
            • Empathy: Our brains are wired to feel empathy for others.
          </Text>
          {"\n\n"}
          <Text>
            • Selflessness: We can find a sense of purpose in our lives when we
            help others.
          </Text>
          {"\n\n"}
          <Text>
            • Forgiveness: To forgive is to set a prisoner free and discover
            that the prisoner was you.
          </Text>
          {"\n\n"}
          <Text>
            • Kindness: A simple kind word to somebody or a small act of
            generosity can let you go a long way and feel better.
          </Text>
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("CompassionFAQ1")}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <MaterialIcons name="home" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("")}>
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

    marginBottom: 10, // 아이콘 컨테이너를 화면 아래에 위치시킵니다.
  },
});

export default CompassionFAQ2;
