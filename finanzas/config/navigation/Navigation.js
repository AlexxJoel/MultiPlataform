import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from '@rneui/base'

//stack
import AboutStack from '../stack/AboutStack'
import ProfileStack from '../stack/ProfileStack'

const Tab = createBottomTabNavigator()
export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='profile'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color),
                    tabBarActiveTintColor: 'tomato', //color que toma la posicion actual
                    tabBarInactiveTintColor: 'gray', //color de los que no estan activos
                    headerShown: false
                })}
            >
                <Tab.Screen
                name='profile'
                options={{title: 'Profile'}}
                component={ProfileStack} //es la vista que queremos mostrar
                />
                 <Tab.Screen
                name='about'
                options={{title: 'About Us'}}
                component={AboutStack} //es la vista que queremos mostrar
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}   

const screenOptions = (route, color) => {
    let iconName;
    switch (route.name) {
        case 'profile':
            iconName = 'account-outline';
            break;
        case 'about':
            iconName = 'information-outline';
            break;

        default:
            break;
    }
    return (
    <Icon
    type='material-community'
    name={iconName}
    size={22}
    color={color}
    ></Icon>)
}
