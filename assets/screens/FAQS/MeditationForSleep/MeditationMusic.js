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

// You would fetch video IDs dynamically but for this example, we use placeholders
const videoIDs = {
  theSoundOfRain: "VIDEO_ID_1",
  fallingAsleep: "VIDEO_ID_2",
  niceAndCosy: "VIDEO_ID_3",
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
          {/* Other elements like play button etc., can be added here */}
          <Text style={styles.thumbnailText}>
            {key.replace(/([A-Z])/g, " $1").trim()}
          </Text>
        </TouchableOpacity>
      ))}
      {/* ...other components like navigation buttons... */}
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
    width: 200, // Set the width of the thumbnail
    height: 100, // Set the height of the thumbnail
    resizeMode: "cover",
  },
  thumbnailText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  // ...other styles...
});

export default MeditationForSleep;
