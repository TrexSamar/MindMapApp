import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SubjectScreen from '../screens/SubjectScreen';
import MathsTopicScreen from '../screens/MathsTopicScreen';
import PhysicsTopicScreen from '../screens/PhysicsTopicScreen';
import ChemistryTopicScreen from '../screens/ChemistryTopicScreen';
import BiologyTopicScreen from '../screens/BiologyTopicScreen';
import HistoryTopicScreen from '../screens/HistoryTopicScreen';
import CivicsTopicScreen from '../screens/CivicsTopicScreen';
import GeographyTopicScreen from '../screens/GeographyTopicScreen';
import EconomicsTopicScreen from '../screens/EconomicsTopicScreen';
import HindiTopicScreen from '../screens/HindiTopicScreen';
import EnglishTopicScreen from '../screens/EnglishTopicScreen';
import Motion from '../screens/Motion';
import LawsOfMotion from "../screens/LawsOfMotion";
import Gravitation from "../screens/Gravitation";
import WorkAndEnergy from "../screens/WorkAndEnergy";
import AtomsAndMolecules from "../screens/AtomsAndMolecules";
import IsMatterAroundUsPure from "../screens/IsMatterAroundUsPure";
import Matter from "../screens/Matter";
import Atom from "../screens/Atom";
import Tissues from "../screens/Tissues";
import Cell from "../screens/Cell";
import Diseases from "../screens/Diseases";
import History1 from "../screens/History1";
import Geo1 from "../screens/Geo1";
import Geo2 from "../screens/Geo2";
import Geo3 from "../screens/Geo3";
import Geo4 from "../screens/Geo4";
import Geo5 from "../screens/Geo5";
import History3 from "../screens/History3";
import History2 from "../screens/History2";
import Civics1 from "../screens/Civics1";
import Civics2 from "../screens/Civics2";
import Civics3 from "../screens/Civics3";
import Civics4 from "../screens/Civics4";
import Eco1 from "../screens/Eco1";
import Eco2 from "../screens/Eco1";
import Eco3 from "../screens/Eco1";
import H1 from "../screens/H1";
import H2 from "../screens/H2";
import H3 from "../screens/H3";
import H4 from "../screens/H4";
import E1 from "../screens/E1";
import E2 from "../screens/E2";
import E3 from "../screens/E3";
 




const Stack = createStackNavigator();

export default class StackNavigator extends React.Component{
    render(){
  return (
    <Stack.Navigator
      initialRouteName="Subjects"
      screenOptions={{
        headerShown: false
      }}
    >
        <Stack.Screen name="Subjects" component={SubjectScreen} />
        <Stack.Screen name="MathsTopics" component={MathsTopicScreen} />
        <Stack.Screen name="PhysicsTopics" component={PhysicsTopicScreen} />
        <Stack.Screen name="ChemistryTopics" component={ChemistryTopicScreen} />
        <Stack.Screen name="BiologyTopics" component={BiologyTopicScreen} />
        <Stack.Screen name="CivicsTopics" component={CivicsTopicScreen} />
        <Stack.Screen name="GeographyTopics" component={GeographyTopicScreen} />
        <Stack.Screen name="HistoryTopics" component={HistoryTopicScreen} />
        <Stack.Screen name="EconomicsTopics" component={EconomicsTopicScreen} />
        <Stack.Screen name="HindiTopics" component={HindiTopicScreen} />
        <Stack.Screen name="EnglishTopics" component={EnglishTopicScreen} />
        <Stack.Screen name="Motion" component={Motion} />
        <Stack.Screen name="LawsOfMotion" component={LawsOfMotion} />
        <Stack.Screen name="Gravitation" component={Gravitation} />
        <Stack.Screen name="WorkAndEnergy" component={WorkAndEnergy} />
        <Stack.Screen name="AtomsAndMolecules" component={AtomsAndMolecules} />
        <Stack.Screen name="IsMatterAroundUsPure" component={IsMatterAroundUsPure} />
        <Stack.Screen name="Matter" component={Matter} />
        <Stack.Screen name="Atom" component={Atom} />
        <Stack.Screen name="Cell" component={Cell} />
        <Stack.Screen name="Tissues" component={Tissues} />
        <Stack.Screen name="Diseases" component={Diseases} />
        <Stack.Screen name="History1" component={History1} />
        <Stack.Screen name="Geo1" component={Geo1} />
        <Stack.Screen name="Geo2" component={Geo2} />
        <Stack.Screen name="Geo3" component={Geo3} />
        <Stack.Screen name="Geo4" component={Geo4} />
        <Stack.Screen name="Geo5" component={Geo5} />
        <Stack.Screen name="History3" component={History3} />
        <Stack.Screen name="History2" component={History2} />
        <Stack.Screen name="Civics1" component={Civics1} />
        <Stack.Screen name="Civics2" component={Civics2} />
        <Stack.Screen name="Civics3" component={Civics3} />
        <Stack.Screen name="Civics4" component={Civics4} />
        <Stack.Screen name="Eco1" component={Eco1} />
        <Stack.Screen name="Eco2" component={Eco2} />
        <Stack.Screen name="Eco3" component={Eco3} />
        <Stack.Screen name="H1" component={H1} />
        <Stack.Screen name="H2" component={H2} />
        <Stack.Screen name="H3" component={H3} />
        <Stack.Screen name="H4" component={H4} />
        <Stack.Screen name="E1" component={E1} />
        <Stack.Screen name="E2" component={E2} />
        <Stack.Screen name="E3" component={E3} />
         

    </Stack.Navigator>
  )
    }
}