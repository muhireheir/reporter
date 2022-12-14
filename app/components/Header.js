import { View, Text } from 'react-native'
import React from 'react'
import { grobalStyles } from '../utils/styles'
import MI from 'react-native-vector-icons/MaterialIcons';
import colors from '../utils/colors';



const Header = () => {
  return (
    <View style={grobalStyles.header}>
      <MI size={32}  name='account-circle' />
    </View>
  )
}

export default Header