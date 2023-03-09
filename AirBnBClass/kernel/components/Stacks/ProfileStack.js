import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../../../modules/profiles/adapters/screen/Profile'


const Stack = createNativeStackNavigator()

const ProfileStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='profileStack' component={Profile}/>
    </Stack.Navigator>
  )
}

export default ProfileStack