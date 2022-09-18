import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationType } from './navigationType';
import { HomeScreen, LoginScreen, SplashScreen } from '../screens';
import BottomTabs from './tabs';
import Drawer from './drawer';


const Stack: any = createNativeStackNavigator();

export default function Navigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: true,
                }} initialRouteName={NavigationType.Splash}>
                <Stack.Screen name={NavigationType.Splash} component={SplashScreen} />
                <Stack.Screen name={NavigationType.Login} component={LoginScreen} />
                <Stack.Screen name={NavigationType.Drawer} component={Drawer} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}