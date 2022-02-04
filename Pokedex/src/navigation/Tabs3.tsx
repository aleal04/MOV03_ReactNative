import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { PokemonView } from "../views/PokemonView";
import { SearchView } from "../views/SearchView";
import { RootStackParams } from "./Tabs1";
import { TrainerView } from "../views/TrainerView";


const Tab3 = createStackNavigator<RootStackParams>();

export const Tab3View = () => {
  return (
    <Tab3.Navigator
    screenOptions={{ 
      headerShown: false ,
      cardStyle: {
        backgroundColor: 'white'
      }
     }}>
      <Tab3.Screen name="HomeView" component={ TrainerView } />
      <Tab3.Screen name="PokemonView" component={ PokemonView } />
      <Tab3.Screen name="TrainerView" component={ TrainerView } />
    </Tab3.Navigator>
  );
}