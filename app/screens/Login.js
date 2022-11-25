import { View, Text,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import navigations from '../utils/navigation';


const Login = () => {

    const navigation = useNavigation();
    const goToHome=()=>{
        navigation.navigate(navigations.HOME)
    }

  return (
    <View>
      <Button onPress={goToHome} title="Go to home screen"/>
    </View>
  )
}

export default Login