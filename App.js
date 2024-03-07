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
import MindfulnessTechniques2 from "./assets/screens/FAQS/MindfulnessTechniques/MindfulnessTechniques2";
import MindfulnessTechniques34 from "./assets/screens/FAQS/MindfulnessTechniques/MindfulnessTechniques34";
import MindfulnessTechniques56 from "./assets/screens/FAQS/MindfulnessTechniques/MindfulnessTechniques56";
import MindfulnessTechniques789 from "./assets/screens/FAQS/MindfulnessTechniques/MindfulnessTechniques789";
import MindfulnessTechniques10 from "./assets/screens/FAQS/MindfulnessTechniques/MindfulnessTechniques10";

import MeditationTechniqueConcept from "./assets/screens/FAQS/MeditationTechnique/MeditationTechniqueConcept";
import MeditationTechniqueBasics from "./assets/screens/FAQS/MeditationTechnique/MeditationTechniqueBasics";
import MeditationTechniqueStep1 from "./assets/screens/FAQS/MeditationTechnique/MeditaitonTechniqueStep1";
import MeditationTechniqueStep2 from "./assets/screens/FAQS/MeditationTechnique/MeditationTechniqueStep2";
import MeditationTechniqueStep3 from "./assets/screens/FAQS/MeditationTechnique/MeditationTechniqueStep3";
import MeditationTechniqueStep4 from "./assets/screens/FAQS/MeditationTechnique/MeditationTechniqueStep4";
import MeditationTechniqueStep5 from "./assets/screens/FAQS/MeditationTechnique/MeditationTechniqueStep5";
import MeditationBenefits1 from "./assets/screens/FAQS/MeditationTechnique/MeditationBenefits1";
import MeditationBenefits2 from "./assets/screens/FAQS/MeditationTechnique/MeditationBenefits2";
import MeditationBenefits3 from "./assets/screens/FAQS/MeditationTechnique/MeditationBenefits3";

import MeditationMusic from "./assets/screens/FAQS/MeditationForSleep/MeditationMusic";

import CompassionFAQ1 from "./assets/screens/FAQS/Compassion/CompassionFAQ1";
import CompassionFAQ2 from "./assets/screens/FAQS/Compassion/CompassionFAQ2";

import BreathingFAQ1 from "./assets/screens/FAQS/BreathingExerciseTechnique/BreathingFAQ1";
import BreathingFAQ2 from "./assets/screens/FAQS/BreathingExerciseTechnique/BreathingFAQ2";

import ProgressiveFAQ from "./assets/screens/FAQS/ProgressiveMuschleRelaxationTechniques/ProgressiveFAQ";
import ProgressiveTech1 from "./assets/screens/FAQS/ProgressiveMuschleRelaxationTechniques/ProgressiveTech1";
import ProgressiveTech2 from "./assets/screens/FAQS/ProgressiveMuschleRelaxationTechniques/ProgressiveTech2";

import GratitudeFAQ1 from "./assets/screens/FAQS/Gratitude/GratitudeFAQ1";
import GratitudeFAQ2 from "./assets/screens/FAQS/Gratitude/GratitudeFAQ2";
import GratitudeFAQ3 from "./assets/screens/FAQS/Gratitude/GratitudeFAQ3";

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
        <Stack.Screen
          name="MindfulnessTechniques2"
          component={MindfulnessTechniques2}
          options={{ title: "MindfulnessTechniques2" }}
        />
        <Stack.Screen
          name="MindfulnessTechniques34"
          component={MindfulnessTechniques34}
          options={{ title: "MindfulnessTechniques34" }}
        />
        <Stack.Screen
          name="MindfulnessTechniques56"
          component={MindfulnessTechniques56}
          options={{ title: "MindfulnessTechniques56" }}
        />
        <Stack.Screen
          name="MindfulnessTechniques789"
          component={MindfulnessTechniques789}
          options={{ title: "MindfulnessTechniques789" }}
        />
        <Stack.Screen
          name="MindfulnessTechniques10"
          component={MindfulnessTechniques10}
          options={{ title: "MindfulnessTechniques10" }}
        />
        <Stack.Screen
          name="MeditationTechniqueConcept"
          component={MeditationTechniqueConcept}
          options={{ title: "MeditationTechniqueConcept" }}
        />
        <Stack.Screen
          name="MeditationTechniqueBasics"
          component={MeditationTechniqueBasics}
          options={{ title: "MeditationTechniqueBasics" }}
        />
        <Stack.Screen
          name="MeditationTechniqueStep1"
          component={MeditationTechniqueStep1}
          options={{ title: "MeditationTechniqueStep1" }}
        />
        <Stack.Screen
          name="MeditationTechniqueStep2"
          component={MeditationTechniqueStep2}
          options={{ title: "MeditationTechniqueStep2" }}
        />
        <Stack.Screen
          name="MeditationTechniqueStep3"
          component={MeditationTechniqueStep3}
          options={{ title: "MeditationTechniqueStep3" }}
        />
        <Stack.Screen
          name="MeditationTechniqueStep4"
          component={MeditationTechniqueStep4}
          options={{ title: "MeditationTechniqueStep4" }}
        />
        <Stack.Screen
          name="MeditationTechniqueStep5"
          component={MeditationTechniqueStep5}
          options={{ title: "MeditationTechniqueStep5" }}
        />
        <Stack.Screen
          name="MeditationBenefits1"
          component={MeditationBenefits1}
          options={{ title: "MeditationBenefits1" }}
        />
        <Stack.Screen
          name="MeditationBenefits2"
          component={MeditationBenefits2}
          options={{ title: "MeditationBenefits2" }}
        />
        <Stack.Screen
          name="MeditationBenefits3"
          component={MeditationBenefits3}
          options={{ title: "MeditationBenefits3" }}
        />
        <Stack.Screen
          name="MeditationMusic"
          component={MeditationMusic}
          options={{ title: "MeditationMusic" }}
        />
        <Stack.Screen
          name="CompassionFAQ1"
          component={CompassionFAQ1}
          options={{ title: "CompassionFAQ1" }}
        />
        <Stack.Screen
          name="CompassionFAQ2"
          component={CompassionFAQ2}
          options={{ title: "CompassionFAQ2" }}
        />
        <Stack.Screen
          name="BreathingFAQ1"
          component={BreathingFAQ1}
          options={{ title: "BreathingFAQ1" }}
        />
        <Stack.Screen
          name="BreathingFAQ2"
          component={BreathingFAQ2}
          options={{ title: "BreathingFAQ2" }}
        />
        <Stack.Screen
          name="ProgressiveFAQ"
          component={ProgressiveFAQ}
          options={{ title: "ProgressiveFAQ" }}
        />
        <Stack.Screen
          name="ProgressiveTech1"
          component={ProgressiveTech1}
          options={{ title: "ProgressiveTech1" }}
        />
        <Stack.Screen
          name="ProgressiveTech2"
          component={ProgressiveTech2}
          options={{ title: "ProgressiveTech2" }}
        />
        <Stack.Screen
          name="GratitudeFAQ1"
          component={GratitudeFAQ1}
          options={{ title: "GratitudeFAQ1" }}
        />
        <Stack.Screen
          name="GratitudeFAQ2"
          component={GratitudeFAQ2}
          options={{ title: "GratitudeFAQ2" }}
        />
        <Stack.Screen
          name="GratitudeFAQ3"
          component={GratitudeFAQ3}
          options={{ title: "GratitudeFAQ3" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
