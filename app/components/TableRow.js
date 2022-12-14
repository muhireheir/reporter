import { View, Text } from 'react-native'
import React from 'react'
import colors from '../utils/colors';
import { grobalStyles } from '../utils/styles'
import MI from 'react-native-vector-icons/MaterialIcons';


const getStatusColor = (status)=>{
    switch(status){
        case 'Approved':
            return colors.PINK
        case 'Rejected':
            return colors.ORANGE
        case 'Review':
            return colors.BLUE
        default:
        return colors.PRIMARY
    }
}
const TableRow = ({state}) => {
    return (
        <View style={{...grobalStyles.container }}>
            <View style={grobalStyles.tableRow}>
                <Text style={{ ...grobalStyles.textBlack, ...grobalStyles.textBold }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.....
                </Text>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 5,justifyContent:'space-between' }}>
                    <View style={{ flex: 1, flexDirection: 'row'}}>
                        <MI name='access-time' color={colors.PRIMARY} size={17} />
                        <Text style={{ ...grobalStyles.textBlack, ...grobalStyles.textSm, marginLeft: 5, marginTop: 1,...grobalStyles.textBold }}>222/06/2022</Text>
                    </View>
                    <View>
                        <Text style={{color:getStatusColor(state),...grobalStyles.textBold}}>Approved</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default TableRow