import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './Login'
import TableRow from '../components/TableRow'
import FloatingAction from '../components/FloatingAction'









const Test = () => {
 
  return (
    <>
    <FloatingAction />
    <ScrollView style={styles.main}>
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
    </ScrollView>
    </>
  )
}

export default Test