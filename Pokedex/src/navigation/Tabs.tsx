import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';

import { Navigator } from './Tabs1';

import Icon from "react-native-vector-icons/Ionicons";
import { Tab2View } from './Tabs2';
import { Tab3View } from './Tabs3';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
        sceneContainerStyle={{ 
            backgroundColor:'white' 
        }}
        screenOptions={{ 
            tabBarActiveTintColor: '#e91e63',
            tabBarLabelStyle:{
                marginBottom: ( Platform.OS === 'ios' ? 0 : 10 )
            },
            tabBarStyle:{
                position: 'absolute' ,
                backgroundColor: 'rgba(255 , 255 , 255 , 0.70)' ,
                borderWidth: 0 ,
                elevation: 0 ,
                height: (Platform.OS === 'ios') ? 80 : 60
            }
         }}
        
    >
        <Tab.Screen 
            name="HomeView" 
            component={ Navigator } 
            options={{ 
                headerShown: false ,
                tabBarLabel: "Lista" ,
                tabBarIcon:({ color }) => (
                    <Icon 
                        color={color} 
                        size={ 25 } 
                        name='list-outline'
                    />)
            }}            
        />
        <Tab.Screen 
            name="SearchView" 
            component={ Tab2View } 
            options={{ 
                headerShown: false ,
                tabBarLabel: "Búsqueda" ,
                tabBarIcon:({ color }) => (
                    <Icon 
                        color={color} 
                        size={ 25 } 
                        name='search-outline'
                    />)
            }}
        />
        <Tab.Screen 
            name="TrainerView" 
            component={ Tab3View } 
            options={{ 
                headerShown: false ,
                tabBarLabel: "Entrenadores" ,
                tabBarIcon:({ color }) => (
                    <Icon 
                        color={color} 
                        size={ 25 } 
                        name='person-outline'
                    />)
            }}
        />
    </Tab.Navigator>
  );
}