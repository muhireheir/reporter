import { View, Text, Button, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import navigations from '../utils/navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MI from 'react-native-vector-icons/MaterialIcons'
import Reports from './Reports';
import colors from '../utils/colors';
import Dashboard from './Dashboard';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';




const Home = () => {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();
  useEffect(()=>{
      navigation.navigate(navigations.MAIN);
  },[]);
  
  return (
    <Tab.Navigator  screenOptions={{
      tabBarActiveTintColor: colors.PRIMARY,
      header:Header
    }} >
      <Tab.Screen options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => (
          <MI name="dashboard" color={color} size={size} />
        )
      }} name={navigations.DASHBOARD} component={Dashboard} />
      <Tab.Screen options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => (
          <MI name="list-alt" color={color} size={size} />
        )
      }} name={navigations.REPORT} component={Reports} />
      <Tab.Screen options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => (
          <MI name="account-box" color={color} size={size} />
        )
      }} name={navigations.PROFILE} component={Reports} />
    </Tab.Navigator>
  );
};

export default Home;