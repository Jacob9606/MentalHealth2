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

import ProgressiveConcept from "./assets/screens/FAQS/ProgressiveMuschleRelaxationTechniques/ProgressiveConcept";
import ProgressiveFAQ from "./assets/screens/FAQS/ProgressiveMuschleRelaxationTechniques/ProgressiveFAQ";
import ProgressiveTech1 from "./assets/screens/FAQS/ProgressiveMuschleRelaxationTechniques/ProgressiveTech1";

import GratitudeFAQ1 from "./assets/screens/FAQS/Gratitude/GratitudeFAQ1";
import GratitudeFAQ2 from "./assets/screens/FAQS/Gratitude/GratitudeFAQ2";
import GratitudeFAQ3 from "./assets/screens/FAQS/Gratitude/GratitudeFAQ3";

import AnxietyHome from "./assets/screens/Anxiety/AnxietyHome";
import AnxietyAwareness from "./assets/screens/Anxiety/AnxietyAwareness";
import AnxietySymptoms from "./assets/screens/Anxiety/AnxietySymptoms";
import AnxietyTreatment from "./assets/screens/Anxiety/AnxietyTreatment";
import AnxietyFAQS1 from "./assets/screens/Anxiety/AnxietyFAQS1";
import AnxietyFAQS2 from "./assets/screens/Anxiety/AnxietyFAQS2";
import AnxietyFAQS3 from "./assets/screens/Anxiety/AnxietyFAQS3";

import DepressionHome from "./assets/screens/Depresssion/DepressionHome";
import DepressionAwarness from "./assets/screens/Depresssion/DepressionAwarness";
import DepressionSymptoms from "./assets/screens/Depresssion/DepressionSymptoms";
import DepressionTreatment from "./assets/screens/Depresssion/DepressionTreatment";
import DepressionSelfCare from "./assets/screens/Depresssion/DepressionSelfCare";
import DepressionFAQS1 from "./assets/screens/Depresssion/DepressionFAQS1";
import DepressionFAQS2 from "./assets/screens/Depresssion/DepressionFAQS2";

import PsychologicalHome from "./assets/screens/PsychologicalDistress/PsychologicalHome";
import PsychologicalAwaraness from "./assets/screens/PsychologicalDistress/PsychologicalAwaraness";
import PsychologicalSymptoms from "./assets/screens/PsychologicalDistress/PsychologicalSymptoms";
import PsychologicalFAQS1 from "./assets/screens/PsychologicalDistress/PsychologicalFAQS1";
import PsychologicalFAQS2 from "./assets/screens/PsychologicalDistress/PsychologicalFAQS2";

import ManagementHome from "./assets/screens/Management/ManagementHome";
import ManagementFirstAid from "./assets/screens/Management/ManagementFirstAid";
import ManagementSelfCare from "./assets/screens/Management/ManagementSelfCare";

import WellbingTipsConcept from "./assets/screens/Wellbeing/WellbingTipsConcept";
import WellbingTips1 from "./assets/screens/Wellbeing/WellbingTips1";
import WellbingTips2 from "./assets/screens/Wellbeing/WellbingTips2";
import WellbingTips3 from "./assets/screens/Wellbeing/WellbingTips3";
import WellbingTips4 from "./assets/screens/Wellbeing/WellbingTips4";
import WellbingTips5 from "./assets/screens/Wellbeing/WellbingTips5";
import WellbingTips6 from "./assets/screens/Wellbeing/WellbingTips6";
import WellbingTips7 from "./assets/screens/Wellbeing/WellbingTips7";

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
import ResultModerate from "./assets/screens/Dass21/ResultModerate";
import ResultSevere from "./assets/screens/Dass21/ResultSevere";
import ResultNormal from "./assets/screens/Dass21/ResultNormal";

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
        <Stack.Screen
          name="ProfileMain"
          component={ProfileMain}
          options={{ title: "ProfileMain" }}
        />
        <Stack.Screen
          name="AdherenceAssessment"
          component={AdherenceAssessment}
          options={{ title: "AdherenceAssessment" }}
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
        <Stack.Screen
          name="ResultModerate"
          component={ResultModerate}
          options={{ title: "ResultModerate" }}
        />
        <Stack.Screen
          name="ResultSevere"
          component={ResultSevere}
          options={{ title: "ResultSevere" }}
        />
        <Stack.Screen
          name="ResultNormal"
          component={ResultNormal}
          options={{ title: "ResultNormal" }}
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
          name="ProgressiveConcept"
          component={ProgressiveConcept}
          options={{ title: "ProgressiveConcept" }}
        />
        <Stack.Screen
          name="ProgressiveTech1"
          component={ProgressiveTech1}
          options={{ title: "ProgressiveTech1" }}
        />
        <Stack.Screen
          name="ProgressiveFAQ"
          component={ProgressiveFAQ}
          options={{ title: "ProgressiveFAQ" }}
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
        <Stack.Screen
          name="AnxietyHome"
          component={AnxietyHome}
          options={{ title: "AnxietyHome" }}
        />
        <Stack.Screen
          name="AnxietyAwareness"
          component={AnxietyAwareness}
          options={{ title: "AnxietyAwareness" }}
        />
        <Stack.Screen
          name="AnxietySymptoms"
          component={AnxietySymptoms}
          options={{ title: "AnxietySymptoms" }}
        />
        <Stack.Screen
          name="AnxietyTreatment"
          component={AnxietyTreatment}
          options={{ title: "AnxietyTreatment" }}
        />
        <Stack.Screen
          name="AnxietyFAQS1"
          component={AnxietyFAQS1}
          options={{ title: "AnxietyFAQS1" }}
        />
        <Stack.Screen
          name="AnxietyFAQS2"
          component={AnxietyFAQS2}
          options={{ title: "AnxietyFAQS2" }}
        />
        <Stack.Screen
          name="AnxietyFAQS3"
          component={AnxietyFAQS3}
          options={{ title: "AnxietyFAQS3" }}
        />
        <Stack.Screen
          name="DepressionHome"
          component={DepressionHome}
          options={{ title: "DepressionHome" }}
        />
        <Stack.Screen
          name="DepressionAwarness"
          component={DepressionAwarness}
          options={{ title: "DepressionAwarness" }}
        />
        <Stack.Screen
          name="DepressionSymptoms"
          component={DepressionSymptoms}
          options={{ title: "DepressionSymptoms" }}
        />
        <Stack.Screen
          name="DepressionTreatment"
          component={DepressionTreatment}
          options={{ title: "DepressionTreatment" }}
        />
        <Stack.Screen
          name="DepressionSelfCare"
          component={DepressionSelfCare}
          options={{ title: "DepressionSelfCare" }}
        />
        <Stack.Screen
          name="DepressionFAQS1"
          component={DepressionFAQS1}
          options={{ title: "DepressionFAQS1" }}
        />
        <Stack.Screen
          name="DepressionFAQS2"
          component={DepressionFAQS2}
          options={{ title: "DepressionFAQS2" }}
        />
        <Stack.Screen
          name="PsychologicalHome"
          component={PsychologicalHome}
          options={{ title: "PsychologicalHome" }}
        />
        <Stack.Screen
          name="PsychologicalAwaraness"
          component={PsychologicalAwaraness}
          options={{ title: "PsychologicalAwaraness" }}
        />
        <Stack.Screen
          name="PsychologicalSymptoms"
          component={PsychologicalSymptoms}
          options={{ title: "PsychologicalSymptoms" }}
        />
        <Stack.Screen
          name="PsychologicalFAQS1"
          component={PsychologicalFAQS1}
          options={{ title: "PsychologicalFAQS1" }}
        />
        <Stack.Screen
          name="PsychologicalFAQS2"
          component={PsychologicalFAQS2}
          options={{ title: "PsychologicalFAQS2" }}
        />
        <Stack.Screen
          name="ManagementHome"
          component={ManagementHome}
          options={{ title: "ManagementHome" }}
        />
        <Stack.Screen
          name="ManagementFirstAid"
          component={ManagementFirstAid}
          options={{ title: "ManagementFirstAid" }}
        />
        <Stack.Screen
          name="ManagementSelfCare"
          component={ManagementSelfCare}
          options={{ title: "ManagementSelfCare" }}
        />
        <Stack.Screen
          name="WellbingTipsConcept"
          component={WellbingTipsConcept}
          options={{ title: "WellbingTipsConcept" }}
        />
        <Stack.Screen
          name="WellbingTips1"
          component={WellbingTips1}
          options={{ title: "WellbingTips1" }}
        />
        <Stack.Screen
          name="WellbingTips2"
          component={WellbingTips2}
          options={{ title: "WellbingTips2" }}
        />
        <Stack.Screen
          name="WellbingTips3"
          component={WellbingTips3}
          options={{ title: "WellbingTips3" }}
        />
        <Stack.Screen
          name="WellbingTips4"
          component={WellbingTips4}
          options={{ title: "WellbingTips4" }}
        />
        <Stack.Screen
          name="WellbingTips5"
          component={WellbingTips5}
          options={{ title: "WellbingTips5" }}
        />
        <Stack.Screen
          name="WellbingTips6"
          component={WellbingTips6}
          options={{ title: "WellbingTips6" }}
        />
        <Stack.Screen
          name="WellbingTips7"
          component={WellbingTips7}
          options={{ title: "WellbingTips7" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
