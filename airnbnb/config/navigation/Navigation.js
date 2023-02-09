import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Profile from '../../modules/profile/adapters/screen/Profile'
import { Icon } from '@rneui/base'
import RentStack from '../stack/RentStack'
import ProfileStack from '../stack/ProfileStack'


const Tab = createBottomTabNavigator()
const Navigation = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator initialRouteName='profile'
        screenOptions={({route}) => ({
            tabBarIcon: ({color}) => screenOptions(route,color),
            tabBarActiveTintColor: '#726EB7',
            tabBarInactiveTintColor: '#A86BBA55',
            headerShown: false,
        })}>

        <Tab.Screen name='profile' options={{title: 'Profile'}} component={ProfileStack}/>

        <Tab.Screen name='rent' component={RentStack} options={{title:'Rent'}}/>

        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const screenOptions = (route,color)=>{
    let iconName; 
    switch (route.name) {
        case 'profile':
            iconName = 'account-outline'            
            break;
        case 'rent':
            iconName = 'dolly'
        default:
            break;
    }
    return(
        <Icon type='material-community'
            name={iconName} size={22} color={color}>
        </Icon>
    )
}