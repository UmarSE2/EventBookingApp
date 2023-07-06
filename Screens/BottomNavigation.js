import React from 'react'
import { View, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const { width, height } = Dimensions.get("screen")

import Explore from './Explore';
import Events from './Events';
import Filter from './Filter';
import Map from './Map';
import Profile from './Profile';

import Explorei from '../Svgs/Explore';
import Eventi from '../Svgs/Event';
import BottomCircle from '../Svgs/BottomCircle';
import Mapi from '../Svgs/Map';
import Profilei from '../Svgs/Profile';
import { FontSize } from '../Assets/Theme';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <Tab.Navigator initialRouteName='Explore' screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: '#2C3550',
            tabBarLabelStyle: {
                fontSize: FontSize.SubTitle2,
            },
        }}>
            <Tab.Screen
                name="Explore"
                component={Explore}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Explorei color={focused ? 'blue' : '#2C3550'} />
                    ),
                }}
            />
            <Tab.Screen
                name="Events"
                component={Events}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Eventi color={focused ? 'blue' : '#2C3550'} />
                    ),
                }}
            />
            <Tab.Screen
                name="Filter"
                component={Filter}
                showLabel={false}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ shadowColor: 'red', elevation: 105, marginBottom: "32%" }}>
                            <BottomCircle color={focused ? 'blue' : '#2C3550'} width={width * 0.23} height={height * 0.23} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Map"
                component={Map}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Mapi color={focused ? 'blue' : '#2C3550'} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Profilei color={focused ? 'blue' : '#2C3550'} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomNavigation;
