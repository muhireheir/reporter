import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import navigations from './app/utils/navigation';
import colors from './app/utils/colors';
import Login from './app/screens/Login';
import Home from './app/screens/Home';

const App = () => {
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar
        hidden={true}
        animated={true}
        backgroundColor={colors.PRIMARY}
      />
      <Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name={navigations.LOGIN} component={Login} />
        <Screen
          name={navigations.HOME}
          children={props => <Home stackProps={props} />}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
