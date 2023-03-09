import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../modules/Home/adapters/screen/Home'
import RentsStack from '../../kernel/components/Stacks/RentsStack'
import ProfileStack from '../../kernel/components/Stacks/ProfileStack'
import { Icon } from '@rneui/base'

const Tab = createBottomTabNavigator()



const NavigationSession = () => (
    <NavigationContainer >
        <Tab.Navigator screenOptions={
            ({ route }) => ({
                tabBarIcon: ({ color }) => screenOptions(route, color),
                headerShown: false
            })
        }>
            <Tab.Screen name='home' component={Home} />
            <Tab.Screen name='rent' component={RentsStack} />
            <Tab.Screen name='profile' component={ProfileStack} />
        </Tab.Navigator>
    </NavigationContainer>
)

const screenOptions = (route, color) => {
    let iconName;
    switch (route.name) {
        case 'home':
            iconName = 'home'
            break;
        case 'rent':
            iconName = 'credit-card'
            break
        case 'profile':
            iconName = 'account-circle-outline'
            break
        default:
            break;
    }
    return (<Icon type='material-community'
        name={iconName}
        size={22}
        color={color}></Icon>)
}



export default NavigationSession