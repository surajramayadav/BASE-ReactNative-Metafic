import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../../../utils';

const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }: any) {

    return (
        <View style={{
            height: 50, flexDirection: 'row', justifyContent: 'space-around',
            elevation: 2,
            alignItems: 'center', overflow: 'hidden', borderWidth: 0.2,
            borderTopColor: Colors.grey,

        }}>

            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                // console.log("options=>", options.tabBarTestID, index, route)
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    }); s
                };

                return (
                    <TouchableOpacity key={index + 1}
                        activeOpacity={1}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ alignItems: 'center' }}
                    >
                        <Icon name={index == 0 ? "home" : index == 1 ? "sync" : index == 2 ? "fork" : index == 3 ? "wechat" : "bells"}
                            color={isFocused ? Colors.blue : Colors.black} size={25} />
                        {/* <Text style={{ color: isFocused ? Colors.blue : '#121724' }}>
                            {label}
                        </Text> */}
                    </TouchableOpacity>
                );
            })}

        </View>
    )
}

export default MyTabBar