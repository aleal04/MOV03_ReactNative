import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { PokemonView } from "../views/PokemonView";
import { SearchView } from "../views/SearchView";
import { RootStackParams } from "./Tabs1";


const Tab2 = createStackNavigator<RootStackParams>();

export const Tab2View = () => {
  return (
    <Tab2.Navigator
    screenOptions={{ 
      headerShown: false ,
      cardStyle: {
        backgroundColor: 'white'
      }
     }}>
      <Tab2.Screen name="HomeView" component={ SearchView } />
      <Tab2.Screen name="PokemonView" component={ PokemonView } />
    </Tab2.Navigator>
  );
}