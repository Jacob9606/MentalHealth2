import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// 수정된 비디오 링크
const videoIDs = {
  theSoundOfRain: "J4d-a7dVtiQ",
  fallingAsleep: "U6Ay9v7gK9w", // 변경된 비디오 링크
  niceAndCosy: "0te4Y6u9kM8", // 변경된 비디오 링크
};

const MeditationForSleep = () => {
  const openYouTube = (videoId) => {
    const url = `https://www.youtube.com/watch?v=${videoId}`;
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          console.log("Don't know how to open this URL: " + url);
        }
      })
      .catch((err) => console.error("An error occurred", err));
  };

  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Meditation for sleep</Text>
      </View>
      {Object.entries(videoIDs).map(([key, videoId]) => (
        <TouchableOpacity
          key={key}
          style={styles.thumbnailContainer}
          onPress={() => openYouTube(videoId)}
        >
          <Image
            style={styles.thumbnail}
            source={{ uri: `http://img.youtube.com/vi/${videoId}/0.jpg` }}
          />
          <Text style={styles.thumbnailText}>
            {key.replace(/([A-Z])/g, " $1").trim()}
          </Text>
        </TouchableOpacity>
      ))}
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("FAQS")}>
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
  thumbnailContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  thumbnail: {
    width: 100, // Adjust thumbnail width as needed
    height: 100, // Adjust thumbnail height as needed
    borderRadius: 10, // Add border radius for rounded corners
    marginBottom: 10, // Add margin bottom for spacing
  },
  thumbnailText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 20, // 버튼과 아이콘 사이의 간격을 조정합니다.
  },
});

export default MeditationForSleep;
