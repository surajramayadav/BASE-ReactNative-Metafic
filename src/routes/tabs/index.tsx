import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MyTabBar from '../../components/routes/tabComponent';
import { ChatScreen, HomeScreen, ProfileScreen, SearchScreen } from '../../screens';
import { NavigationTab } from '../navigationType';


const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />} initialRouteName={NavigationTab.Home} screenOptions={{
            headerShown: false, keyboardHidesTabBar: true,
            activeTintColor: '#a8d674',
        }} >
            <Tab.Screen name={NavigationTab.Home} component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),

                }} />
            <Tab.Screen name={NavigationTab.Search} component={SearchScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="adduser" color={color} size={size} />
                    ),

                }} />

            <Tab.Screen name={NavigationTab.Chat} component={ChatScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="hearto" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen name={NavigationTab.Profile} component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user" color={color} size={size} />
                    ),
                }} />
        </Tab.Navigator>

    )
}