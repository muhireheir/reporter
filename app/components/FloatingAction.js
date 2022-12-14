import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import MCI from 'react-native-vector-icons/MaterialIcons'
import colors from '../utils/colors'
import { grobalStyles } from '../utils/styles'
import { useNavigation } from '@react-navigation/native';
import navigations from '../utils/navigation'




const FloatingAction = () => {

    const navigate = useNavigation();
    
    const goToHome=()=>{
        navigate.navigate(navigations.REPORT_CASE)
    }
  return (
    <View>
        <TouchableOpacity onPress={goToHome} activeOpacity={1} style={grobalStyles.fab}>
            <MCI  size={25} name="edit" />
        </TouchableOpacity>
    </View>
  )
}

export default FloatingAction