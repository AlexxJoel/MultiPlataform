import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../../modules/profile/adapters/screen/Profile';

const Stack = createNativeStackNavigator(); 
const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName='profileStack'
    screenOptions={{
        headerMode: 'screen',
        headerTintColor: "#fff", 
        headerStyle:{backgroundColor:"#726EB7"}
    }}>

    <Stack.Screen  name='profileStack'
    component={Profile} options={{title:'Profile'}}/>
    </Stack.Navigator>
  )
}

export default ProfileStack

const styles = StyleSheet.create({})