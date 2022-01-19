import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Navigator } from "./src/navigation/Navigation";

const App = () => {
  return(
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  )
}

export default App;