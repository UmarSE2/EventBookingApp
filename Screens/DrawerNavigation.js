import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator initialRouteName="Profile">
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigation;