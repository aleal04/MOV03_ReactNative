import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeView } from '../views/HomeView';
import { PokemonView } from '../views/PokemonView';
import { SimplePokemon } from '../interfaces/PokemonInterfaces';

export type RootStackParams = {
  HomeView: undefined , 
  PokemonView: { simplePokemon: SimplePokemon , color: string }
}

const Stack = createStackNavigator<RootStackParams>();

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