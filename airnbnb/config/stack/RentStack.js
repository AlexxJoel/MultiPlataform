import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Rent from '../../modules/rent/adapters/screen/Rent';

const Stack = createNativeStackNavigator(); 
const RentStack = () => {
  return (
    <Stack.Navigator initialRouteName='rentStack'
    screenOptions={{
        headerMode: 'screen', 
        headerTintColor: '#FFF',
        headerStyle:{ backgroundColor: "#726EB7"}
    }}>
        <Stack.Screen name='rentStack'
        component={Rent} options={{title: 'Rent'}}/>
    </Stack.Navigator>
  )
}

export default RentStack

const styles = StyleSheet.create({})