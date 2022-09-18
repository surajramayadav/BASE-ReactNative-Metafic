import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from '../../components/routes/drawerComponent';
import BottomTabs from '../tabs';
import { NavigationDrawer, NavigationType } from '../navigationType';
import { ProfileScreen } from '../../screens';
const DrawerApp = createDrawerNavigator();
export default function Drawer() {
    return (
        // <Drawer.Navigator
        //     initialRouteName="BottomTabs"
        //     screenOptions={{ headerShown: false }}
        //     drawerContent={props => <CustomDrawerContent {...props} />}>
        //     <Drawer.Screen name="BottomTabs" component={BottomTabs} />
        //     {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
        // </Drawer.Navigator>
        <DrawerApp.Navigator initialRouteName={NavigationDrawer.Home} >
            <DrawerApp.Screen name={NavigationDrawer.Home} component={BottomTabs} />
            <DrawerApp.Screen name={NavigationDrawer.Profile} component={ProfileScreen} />
        </DrawerApp.Navigator>
    );
}