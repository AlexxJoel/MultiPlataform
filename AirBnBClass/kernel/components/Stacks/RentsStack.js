import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Rent from '../../../modules/Rents/adapters/screen/Rent'
import Sent from '../../../modules/Sent/adapters/screen/Sent'


const Stack = createNativeStackNavigator()

const RentsStack = () => {
  return (
    <Stack.Navigator >
        <Stack.Screen name='rentStack' component={Rent} options={{title:"Rentar"}}/>
        <Stack.Screen name='soldStack' component={Sent} options={{title:"Subiendo depa"}}/>
        
    </Stack.Navigator>
  )
}

export default RentsStack