import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeView } from '../views/HomeView';
import { PokemonView } from '../views/PokemonView';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{ 
      headerShown: false ,
      cardStyle: {
        backgroundColor: 'white'
      }
     }}>
      <Stack.Screen name="HomeView" component={ HomeView } />
      <Stack.Screen name="PokemonView" component={ PokemonView } />
    </Stack.Navigator>
  );
}