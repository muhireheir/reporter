import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { grobalStyles } from '../utils/styles'
import MI from 'react-native-vector-icons/MaterialIcons';
import DashbaordStatistics from '../components/DashbaordStatistics';
import colors from '../utils/colors';
import TableRow from '../components/TableRow';

    

const Dashboard = () => {
    return (
        <ScrollView style={grobalStyles.main}>
            <DashbaordStatistics />
            <View >
                <Text style={{...grobalStyles.textBlack,...grobalStyles.textBold,...grobalStyles.textXl,...grobalStyles.container,marginTop:25}}>Recent  issues</Text>
                <TableRow state="Approved" />
                <TableRow state="Review"  />
                <TableRow state="Rejected"  />
                <TableRow state="Rejected" />
                <TableRow  state="Approved" />
            </View>
        </ScrollView>
    )
}

export default Dashboard;