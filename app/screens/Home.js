import { View, Text,Button } from 'react-native'
import React from 'react'
import navigations from '../utils/navigation';
import { useNavigation } from '@react-navigation/native';




const Home = () => {

    const navigation = useNavigation();
    const goToLogin=()=>{
        navigation.navigate(navigations.LOGIN)
    }

  return (
    <View>
      <Button onPress={goToLogin} title="Go to  login" />
    </View>
  )
}

export default Home
