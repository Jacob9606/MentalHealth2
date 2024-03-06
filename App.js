import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./assets/screens/HomeScreen";
import LoginScreen from "./assets/screens/LoginScreen";
import CreateAnAccount from "./assets/screens/CreateAnAccount";
import MentalHealthConcept from "./assets/screens/MentalHealthConcept";

// Profile Screens
import ProfileMain from "./assets/screens/Profile/ProfileMain";
import AdherenceAssessment from "./assets/screens/Profile/AdherenceAssessment";
import MedicationReminder from "./assets/screens/Profile/MedicationReminder";
import MedicineReminder from "./assets/screens/Profile/MedicineReminder";
import AppointmentReminder from "./assets/screens/Profile/AppointmentReminder";
import AppointmentReminderSetup from "./assets/screens/Profile/AppointmentReminderSetup";
import ProgressReport from "./assets/screens/Profile/ProgressReport";

import FAQS from "./assets/screens/FAQS/FAQS";
import MindfulnessTechniques1 from "./assets/screens/FAQS/MindfulnessTechniques/MindfulnessTechniques1";

// Dass-21 Screens
import Q1 from "./assets/screens/Dass21/Q1";
import Q2 from "./assets/screens/Dass21/Q2";
import Q3 from "./assets/screens/Dass21/Q3";
import Q4 from "./assets/screens/Dass21/Q4";
import Q5 from "./assets/screens/Dass21/Q5";
import Q6 from "./assets/screens/Dass21/Q6";
import Q7 from "./assets/screens/Dass21/Q7";
import Q8 from "./assets/screens/Dass21/Q8";
import Q9 from "./assets/screens/Dass21/Q9";
import Q10 from "./assets/screens/Dass21/Q10";
import Q11 from "./assets/screens/Dass21/Q11";
import Q12 from "./assets/screens/Dass21/Q12";
import Q13 from "./assets/screens/Dass21/Q13";
import Q14 from "./assets/screens/Dass21/Q14";
import Q15 from "./assets/screens/Dass21/Q15";
import Q16 from "./assets/screens/Dass21/Q16";
import Q17 from "./assets/screens/Dass21/Q17";
import Q18 from "./assets/screens/Dass21/Q18";
import Q19 from "./assets/screens/Dass21/Q19";
import Q20 from "./assets/screens/Dass21/Q20";
import Q21 from "./assets/screens/Dass21/Q21";
import Result from "./assets/screens/Dass21/Result";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen name="Q1" component={Q1} options={{ title: "Q1" }} />
        <Stack.Screen name="Q2" component={Q2} options={{ title: "Q2" }} />
        <Stack.Screen name="Q3" component={Q3} options={{ title: "Q3" }} />
        <Stack.Screen name="Q4" component={Q4} options={{ title: "Q4" }} />
        <Stack.Screen name="Q5" component={Q5} options={{ title: "Q5" }} />
        <Stack.Screen name="Q6" component={Q6} options={{ title: "Q6" }} />
        <Stack.Screen name="Q7" component={Q7} options={{ title: "Q7" }} />
        <Stack.Screen name="Q8" component={Q8} options={{ title: "Q8" }} />
        <Stack.Screen name="Q9" component={Q9} options={{ title: "Q9" }} />
        <Stack.Screen name="Q10" component={Q10} options={{ title: "Q10" }} />
        <Stack.Screen name="Q11" component={Q11} options={{ title: "Q11" }} />
        <Stack.Screen name="Q12" component={Q12} options={{ title: "Q12" }} />
        <Stack.Screen name="Q13" component={Q13} options={{ title: "Q13" }} />
        <Stack.Screen name="Q14" component={Q14} options={{ title: "Q14" }} />
        <Stack.Screen name="Q15" component={Q15} options={{ title: "Q15" }} />
        <Stack.Screen name="Q16" component={Q16} options={{ title: "Q16" }} />
        <Stack.Screen name="Q17" component={Q17} options={{ title: "Q17" }} />
        <Stack.Screen name="Q18" component={Q18} options={{ title: "Q18" }} />
        <Stack.Screen name="Q19" component={Q19} options={{ title: "Q19" }} />
        <Stack.Screen name="Q20" component={Q20} options={{ title: "Q20" }} />
        <Stack.Screen name="Q21" component={Q21} options={{ title: "Q21" }} />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: "LoginScreen" }}
        />
        <Stack.Screen
          name="CreateAnAccount"
          component={CreateAnAccount}
          options={{ title: "CreateAnAccount" }}
        />
        <Stack.Screen
          name="MentalHealthConcept"
          component={MentalHealthConcept}
          options={{ title: "MentalHealthConcept" }}
        />
        {/* Below part is Profile */}
        <Stack.Screen
          name="ProfileMain"
          component={ProfileMain}
          options={{ title: "ProfileMain" }}
        />
        <Stack.Screen
          name="AdherenceAssessment"
          component={AdherenceAssessment}
          options={{ title: "AdherenceAssessment " }}
        />
        <Stack.Screen
          name="MedicationReminder"
          component={MedicationReminder}
          options={{ title: "MedicationReminder" }}
        />
        <Stack.Screen
          name="MedicineReminder"
          component={MedicineReminder}
          options={{ title: "MedicineReminder" }}
        />
        <Stack.Screen
          name="AppointmentReminder"
          component={AppointmentReminder}
          options={{ title: "AppointmentReminder" }}
        />
        <Stack.Screen
          name="AppointmentReminderSetup"
          component={AppointmentReminderSetup}
          options={{ title: "AppointmentReminderSetup" }}
        />
        <Stack.Screen
          name="ProgressReport"
          component={ProgressReport}
          options={{ title: "ProgressReport" }}
        />
        {/* Below part is Dass-21 */}
        <Stack.Screen
          name="Result"
          component={Result}
          options={{ title: "Result" }}
        />
        <Stack.Screen
          name="FAQS"
          component={FAQS}
          options={{ title: "FAQS" }}
        />
        <Stack.Screen
          name="MindfulnessTechniques1"
          component={MindfulnessTechniques1}
          options={{ title: "MindfulnessTechniques1" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
