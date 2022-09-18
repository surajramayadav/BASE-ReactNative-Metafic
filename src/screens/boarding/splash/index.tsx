import { View, Text } from 'react-native'
import React from 'react'
import { NavigationType } from '../../../routes/navigationType';

export default function SplashScreen({ navigation }: any) {
    React.useEffect(() => {
        setTimeout(() => {
            navigation.replace(NavigationType.Drawer)
        }, 3000);
    }, [])

    return (
        <View>
            <Text>SplashScreen</Text>
        </View>
    )
}