import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeView } from '../views/HomeView';
import { PokemonView } from '../views/PokemonView';
import { SimplePokemon } from '../interfaces/PokemonInterfaces';
import { TrainerView } from '../views/TrainerView';

export type RootStackParams = {
  HomeView: undefined , 
  TrainerView: undefined ,
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
      <Stack.Screen name="TrainerView" component={ TrainerView } />
    </Stack.Navigator>
  );
}