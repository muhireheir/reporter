import {View, Text, Button} from 'react-native';
import React from 'react';
import navigations from '../utils/navigation';
import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './Login';

const Home = () => {
  const navigation = useNavigation();
  const goToLogin = () => {
    navigation.navigate(navigations.LOGIN);
  };

  const Tab = createBottomTabNavigator();

  return (
    <View>
      <Button onPress={goToLogin} title="Go to  login" />
      <Tab.Navigator>
        <Tab.Screen name="Hom" component={Login} />
        <Tab.Screen name="Setti" component={Login} />
      </Tab.Navigator>
    </View>
  );
};

export default Home;
