import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from '@rneui/base'
import ProfileStack from '../stack/ProfileStack'
import FeedStack from '../stack/FeedStack'
import SearchStack from '../stack/SearchStack'
import CreateUser from '../../modules/user/CreateUser'

const Tab = createBottomTabNavigator()
export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='profile'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color),
                    tabBarActiveTintColor: '#3897f0',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false
                })}>
                <Tab.Screen
                    name='profile'
                    options={{ title: 'Perfil' }}
                    component={ProfileStack} //que vista esperamos que se renderice cuando el usuario le de click a una opción
                />
                <Tab.Screen
                    name='feed'
                    options={{ title: 'Inicio' }}
                    component={FeedStack} //que vista esperamos que se renderice cuando el usuario le de click a una opción
                />


                <Tab.Screen
                    name='search'
                    options={{ title: 'Buscar' }}
                    component={SearchStack} //que vista esperamos que se renderice cuando el usuario le de click a una opción
                />



                {/* <Tab.Screen
                    name='create'
                    options={{ title: 'Buscar' }}
                    component={CreateUser } //que vista esperamos que se renderice cuando el usuario le de click a una opción
                /> */}
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const screenOptions = (route, color) => {
    let iconName;
    switch (route.name) {
        case 'profile':
            iconName = 'account-circle-outline'
            break;
        case 'feed':
            iconName = 'home-circle'
            break
        case 'search':
            iconName = 'magnify'
            break
        default:
            break;
    }
    return (<Icon type='material-community'
        name={iconName}
        size={22}
        color={color}></Icon>)
}
