import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from '@rneui/base'
import Login from '../../modules/auth/adapters/sceen/Login'
import CreateAccount from '../../modules/users/adapters/screens/CreateAccount'
import Profile from '../../modules/profiles/adapters/screen/Profile'

const Tab = createBottomTabNavigator()


export default function Navigation() {
  return (
    <NavigationContainer>
         <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color),
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}>

                <Tab.Screen
                    name= 'login'
                    component={Login}
                    options = {{title: 'Incio de sesión'}}
                />

               <Tab.Screen
                    name= 'createAccount'
                    component={CreateAccount}
                    options = {{title: 'Crear cuenta'}}
                />


              {/* <Tab.Screen
                    name= 'profile'
                    component={Profile}
                    options = {{title: 'Perfil'}}
                /> */}

            
            </Tab.Navigator>
    </NavigationContainer>
  )
}


const screenOptions = (route, color) => {
    let iconName;
    switch (route.name) {
        case 'login':
            iconName = 'login'
            break;
        case 'createAccount':
            iconName = 'account-plus'
            break
        default:
            break;
    }
    return (<Icon type='material-community'
        name={iconName}
        size={22}
        color={color}></Icon>)
}