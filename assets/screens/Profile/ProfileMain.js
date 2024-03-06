import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileMain = () => {
  const navigation = useNavigation();

  const handleAdherenceAssessmentPress = () => {
    navigation.navigate("AdherenceAssessment"); // AdherenceAssessment 스크린으로 이동
  };

  const handleMedicationReminderPress = () => {
    navigation.navigate("MedicationReminder"); // MedicationReminder 스크린으로 이동
  };

  const handleAppointmentReminderPress = () => {
    navigation.navigate("AppointmentReminder"); // AppointmentReminder 스크린으로 이동
  };

  const handleProgressReportPress = () => {
    navigation.navigate("ProgressReport"); // ProgressReport 스크린으로 이동
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={require("../../../assets/images/Jacob.png")}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.buttonsSection}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleAdherenceAssessmentPress}
        >
          <Text style={styles.buttonText}>Adherence assessment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleMedicationReminderPress}
        >
          <Text style={styles.buttonText}>Medication Reminder</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleAppointmentReminderPress}
        >
          <Text style={styles.buttonText}>Appointment Reminder</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleProgressReportPress}
        >
          <Text style={styles.buttonText}>Progress report</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        {/* 여기에 footer 컴포넌트를 넣을 수 있습니다 */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00BFFF", // 이 부분은 실제 앱의 배경색에 맞춰 조정해주세요.
  },
  profileSection: {
    alignItems: "center",
    marginTop: 50,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100, // 원형 이미지를 만들기 위해 width / 2 값을 사용합니다.
  },
  buttonsSection: {
    marginTop: 20,
  },
  button: {
    backgroundColor: "white",
    marginHorizontal: 50,
    marginVertical: 10,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    // 원하는 폰트로 바꿀 수 있습니다.
  },
  footer: {
    // 푸터 스타일을 여기에 정의할 수 있습니다.
  },
});

export default ProfileMain;
