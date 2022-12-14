import { View, Text } from 'react-native'
import React from 'react'
import { grobalStyles } from '../utils/styles'
import MI from 'react-native-vector-icons/MaterialIcons';



const DashbaordStatistics = () => {
    return (
        <View style={grobalStyles.dashboardCard}>

            <View style={{ ...grobalStyles.card, ...grobalStyles.underReview }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <MI name='hourglass-top' size={37} style={{ marginLeft: 15, marginTop: 7 }} />
                    <Text style={{ fontSize: 28, marginLeft: 10, fontWeight: 'bold', marginTop: 7 }}>10</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 18, textAlign: 'center', width: '100%' }}>Under review</Text>
                </View>
            </View>

            <View style={{ ...grobalStyles.card, ...grobalStyles.totalReports }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <MI name='list-alt' size={37} style={{ marginLeft: 15, marginTop: 7 }} />
                    <Text style={{ fontSize: 28, marginLeft: 10, fontWeight: 'bold', marginTop: 7 }}>30</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 18, textAlign: 'center', width: '100%' }}>Reported Issues</Text>
                </View>
            </View>

            <View style={{ ...grobalStyles.card, ...grobalStyles.confirmed }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <MI name='bug-report' size={37} style={{ marginLeft: 15, marginTop: 7 }} />
                    <Text style={{ fontSize: 28, marginLeft: 10, fontWeight: 'bold', marginTop: 7 }}>30</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 18, textAlign: 'center', width: '100%' }}>Confirmed</Text>
                </View>
            </View>
            <View style={{ ...grobalStyles.card, ...grobalStyles.rejected }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <MI name='bug-report' size={37} style={{ marginLeft: 15, marginTop: 7 }} />
                    <Text style={{ fontSize: 28, marginLeft: 10, fontWeight: 'bold', marginTop: 7 }}>30</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 18, textAlign: 'center', width: '100%' }}>Rejected</Text>
                </View>
            </View>
        </View>
    )
}

export default DashbaordStatistics