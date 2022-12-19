import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { grobalStyles } from '../utils/styles'
import MI from 'react-native-vector-icons/MaterialIcons';
import colors from '../utils/colors';
import { useNavigation } from '@react-navigation/native';
import navigations from '../utils/navigation';




const { height } = Dimensions.get('window');
const Main = () => {

    const navigation = useNavigation();

    const goToLogin=()=>{
        navigation.navigate(navigations.LOGIN);
    }

    const goToSignup = ()=>{
        navigation.navigate(navigations.SIGNUP);
    }

    return (
        <View style={{ ...grobalStyles.main, height: height }}>
            <View style={{...grobalStyles.logoContainer,marginTop:height/4}}>
                <MI name='money-off' color={colors.WHITE} size={80} />
            </View>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                <Text style={{...grobalStyles.textXl,...grobalStyles.textBold,color:colors.WHITE}}>REPORTER</Text>
            </View>
            <View style={{...grobalStyles.container,bottom:50,position:'absolute'}} >

                <TouchableOpacity onPress={goToLogin} style={grobalStyles.button_border_white}>
                    <View style={{ display: 'flex', width: "100%", padding: 10, flexDirection: 'row', alignItems: "center", justifyContent: 'center' }}>
                        <Text style={{ ...grobalStyles.textLg, color: colors.WHITE, ...grobalStyles.textBold }}>LOGIN</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={goToSignup} style={grobalStyles.button_bg_white}>
                    <View style={{ display: 'flex', width: "100%", padding: 10, flexDirection: 'row', alignItems: "center", justifyContent: 'center' }}>
                        <Text style={{ ...grobalStyles.textLg, color: colors.PRIMARY, ...grobalStyles.textBold }}>REGISTER</Text>
                    </View>
                </TouchableOpacity>

            </View>
            

        </View>
    )
}

export default Main