import React from "react";
import {Provider} from 'react-redux';
import { NavigationContainer } from "@react-navigation/native";
import { Tabs } from "./src/navigation/Tabs";
import rootReducer from './src/reducers/TrainerReducer'
import {createStore, applyMiddleware} from 'redux';

const App = () => {

  const store = createStore(rootReducer);

  return(
    <Provider store={store}>
      <NavigationContainer>
          <Tabs/>
      </NavigationContainer>
    </Provider>
  )
}

export default App;