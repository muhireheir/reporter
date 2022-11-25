import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigations from './app/utils/navigation';
import Login from './app/screens/Login';
import Home from './app/screens/Home';


const App =() => {


  const {Navigator,Screen} = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator
      screenOptions={{
        headerShown: false,
      }}
      >
          <Screen 
          name={navigations.LOGIN}
          component={Login}
          />
          <Screen 
          name={navigations.HOME}
          children={props => (
            <Home stackProps={props} />
          )}
          />

        </Navigator>
    </NavigationContainer>
  );
};



export default App;
